   PROGRAM


NetTalk:TemplateVersion equate('12.20')
ActivateNetTalk   EQUATE(1)
  include('NetCrit.inc'),once
  include('NetAll.inc'),once
  include('NetMap.inc'),once
  include('NetTalk.inc'),once
  include('NetSimp.inc'),once
  include('NetFtp.inc'),once
  include('NetHttp.inc'),once
  include('NetWww.inc'),once
  include('NetSync.inc'),once
  include('NetWeb.inc'),once
  include('NetWebSessions.inc'),once
  include('NetWebSocketClient.inc'),once
  include('NetWebSocketServer.inc'),once
  include('NetWebM.inc'),once
  include('NetWSDL.inc'),once
  include('NetEmail.inc'),once
  include('NetFile.inc'),once
  include('NetWebSms.inc'),once
  Include('NetOauth.inc'),once
  Include('NetLDAP.inc'),once
  Include('NetMaps.inc'),once
  Include('NetDrive.inc'),once
  Include('NetSms.inc'),once
StringTheory:TemplateVersion equate('3.38')
jFiles:TemplateVersion equate('2.22')

   INCLUDE('ABERROR.INC'),ONCE
   INCLUDE('ABFILE.INC'),ONCE
   INCLUDE('ABUTIL.INC'),ONCE
   INCLUDE('ERRORS.CLW'),ONCE
   INCLUDE('KEYCODES.CLW'),ONCE
   INCLUDE('ABFUZZY.INC'),ONCE
  include('cwsynchc.inc'),once  ! added by NetTalk
  include('StringTheory.Inc'),ONCE
   include('jFiles.inc'),ONCE

   MAP
     MODULE('WEB46_BC.CLW')
DctInit     PROCEDURE                                      ! Initializes the dictionary definition module
DctKill     PROCEDURE                                      ! Kills the dictionary definition module
     END
!--- Application Global and Exported Procedure Definitions --------------------------------------------
     MODULE('WEB46003.CLW')
WebServer              PROCEDURE   !
     END
     MODULE('WEB46006.CLW')
MailboxesBrowseControl PROCEDURE(NetWebServerWorker p_web)   !
     END
     MODULE('WEB46007.CLW')
MailboxesFormControl   FUNCTION(NetWebServerWorker p_web,long p_action=0),long,proc   !
     END
     MODULE('WEB46008.CLW')
PageHeaderTag          PROCEDURE(NetWebServerWorker p_web)   !
     END
     MODULE('WEB46009.CLW')
PageFooterTag          PROCEDURE(NetWebServerWorker p_web)   !
     END
     MODULE('WEB46010.CLW')
TimeClock              PROCEDURE(NetWebServerWorker p_web)   !
     END
     MODULE('WEB46012.CLW')
ProgressSoFar          PROCEDURE(NetWebServerWorker p_web)   !
     END
       Module('web46_nw.clw')
          NetWebRelationManager (FILE p_file),*RelationManager
          NetWebFileNamed (string p_file),*File
          NetWebDLL_web46_SendFile (NetWebServerWorker p_web, string p_Filename, String p_Parent),Long,Proc
       End
   END

  include('StringTheory.Inc'),ONCE
GLO:WebLogName       STRING(256)
SilentRunning        BYTE(0)                               ! Set true when application is running in 'silent mode'

!region File Declaration
MailBoxes            FILE,DRIVER('TOPSPEED'),PRE(MAI),CREATE,BINDABLE,THREAD !                    
NameKey                  KEY(MAI:MailBoxName),DUP,NOCASE,OPT !                    
PrimaryKey               KEY(MAI:MailBoxNumber),NOCASE,OPT,PRIMARY !                    
Record                   RECORD,PRE()
MailBoxNumber               LONG                           !                    
MailBoxName                 STRING(80)                     !                    
StartDate                   LONG                           !                    
Password                    STRING(80)                     !                    
ForwardOnly                 LONG                           !                    
ForwardAddress              STRING(80)                     !                    
AutoResponse                LONG                           !                    
AutoResponseFrom            STRING(80)                     !                    
AutoReponseSubject          STRING(80)                     !                    
AutoResponseText            STRING(256)                    !                    
SizeLimit                   LONG                           !                    
MailBoxPicture              STRING(256)                    !                    
CollectFrom                 LONG                           !pic set in dict     
CollectTo                   LONG                           !pic not set in dict 
                         END
                     END                       

NetWebLog            FILE,DRIVER('DOS'),NAME(glo:WebLogName),PRE(WEBLOG),CREATE,BINDABLE,THREAD !Log File for Web Server Functionality
Record                   RECORD,PRE()
DataLine                    STRING(1024)                   !                    
                         END
                     END                       

Alias                FILE,DRIVER('TOPSPEED'),PRE(ALI),CREATE,BINDABLE,THREAD !                    
NameKey                  KEY(ALI:Name),DUP,NOCASE,OPT      !                    
MailBoxKey               KEY(ALI:MailBoxNumber),DUP,NOCASE,OPT !                    
key                      KEY(ALI:Number),NOCASE,OPT,PRIMARY !                    
Record                   RECORD,PRE()
Number                      LONG                           !                    
Name                        STRING(50)                     !                    
MailBoxNumber               LONG                           !                    
                         END
                     END                       

!endregion

  include('StringTheory.Inc'),ONCE
Access:MailBoxes     &FileManager,THREAD                   ! FileManager for MailBoxes
Relate:MailBoxes     &RelationManager,THREAD               ! RelationManager for MailBoxes
Access:NetWebLog     &FileManager,THREAD                   ! FileManager for NetWebLog
Relate:NetWebLog     &RelationManager,THREAD               ! RelationManager for NetWebLog
Access:Alias         &FileManager,THREAD                   ! FileManager for Alias
Relate:Alias         &RelationManager,THREAD               ! RelationManager for Alias

FuzzyMatcher         FuzzyClass                            ! Global fuzzy matcher
GlobalErrorStatus    ErrorStatusClass,THREAD
GlobalErrors         ErrorClass                            ! Global error manager
INIMgr               INIClass                              ! Global non-volatile storage manager
GlobalRequest        BYTE(0),THREAD                        ! Set when a browse calls a form, to let it know action to perform
GlobalResponse       BYTE(0),THREAD                        ! Set to the response from the form
VCRRequest           LONG(0),THREAD                        ! Set to the request from the VCR buttons

Dictionary           CLASS,THREAD
Construct              PROCEDURE
Destruct               PROCEDURE
                     END


  CODE
  GlobalErrors.Init(GlobalErrorStatus)
  FuzzyMatcher.Init                                        ! Initilaize the browse 'fuzzy matcher'
  FuzzyMatcher.SetOption(MatchOption:NoCase, 1)            ! Configure case matching
  FuzzyMatcher.SetOption(MatchOption:WordOnly, 0)          ! Configure 'word only' matching
  INIMgr.Init('.\web46.INI', NVD_INI)                      ! Configure INIManager to use INI file
  DctInit
                             ! Begin Generated by NetTalk Extension Template
  
    if ~command ('/netnolog') and (command ('/nettalklog') or command ('/nettalklogerrors') or command ('/neterrors') or command ('/netall'))
      NetDebugTrace ('[Nettalk Template] NetTalk Template version 12.20')
      NetDebugTrace ('[Nettalk Template] NetTalk Template using Clarion ' & 8000)
      NetDebugTrace ('[Nettalk Template] NetTalk Object version ' & NETTALK:VERSION )
      NetDebugTrace ('[Nettalk Template] ABC Template Chain')
    end
                             ! End Generated by Extension Template
  WebServer
  INIMgr.Update
                             ! Begin Generated by NetTalk Extension Template
    NetCloseCallBackWindow() ! Tell NetTalk DLL to shutdown it's WinSock Call Back Window
  
    if ~command ('/netnolog') and (command ('/nettalklog') or command ('/nettalklogerrors') or command ('/neterrors') or command ('/netall'))
      NetDebugTrace ('[Nettalk Template] NetTalk Template version 12.20')
      NetDebugTrace ('[Nettalk Template] NetTalk Template using Clarion ' & 8000)
      NetDebugTrace ('[Nettalk Template] Closing Down NetTalk (Object) version ' & NETTALK:VERSION)
    end
                             ! End Generated by Extension Template
  INIMgr.Kill                                              ! Destroy INI manager
  FuzzyMatcher.Kill                                        ! Destroy fuzzy matcher


Dictionary.Construct PROCEDURE

  CODE
  IF THREAD()<>1
     DctInit()
  END


Dictionary.Destruct PROCEDURE

  CODE
  DctKill()

