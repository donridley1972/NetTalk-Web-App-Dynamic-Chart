  MEMBER('web46.clw')
    MAP
! WebServer : ActiveTemplate = CloseButton(ABC)
! WebServer : ActiveTemplate = IncludeNetTalkObject(NetTalk)
! WebServer : ActiveTemplate = NetWebServerLogging(NetTalk)
! WebServer : ActiveTemplate = NetWebServerPerformance(NetTalk)
! WebServer : ActiveTemplate = NetWebServerSettings(NetTalk)
! WebHandler : ActiveTemplate = IncludeNetTalkObject(NetTalk)
      INCLUDE('web46005.Inc'),ONCE ! In WebHandler so make all procedures in scope
      INCLUDE('web46006.Inc'),ONCE ! In WebHandler so make all procedures in scope
      INCLUDE('web46007.Inc'),ONCE ! In WebHandler so make all procedures in scope
      INCLUDE('web46008.Inc'),ONCE ! In WebHandler so make all procedures in scope
      INCLUDE('web46009.Inc'),ONCE ! In WebHandler so make all procedures in scope
      INCLUDE('web46010.Inc'),ONCE ! In WebHandler so make all procedures in scope
      INCLUDE('web46011.Inc'),ONCE ! In WebHandler so make all procedures in scope
      INCLUDE('web46012.Inc'),ONCE ! In WebHandler so make all procedures in scope
      INCLUDE('web46013.Inc'),ONCE ! In WebHandler so make all procedures in scope
    END
        ! MailBoxes / mailboxes - FileType FILE
        ! NetWebLog / netweblog - FileType FILE
  ! ----------------------------------------------------------------------------------------
! ----------------------------------------------------------------------------------------
! These procedures support the NetTalk Web Server templates. They are sufficiently generic
! that there is no need to put them in the application true, however are dependant on the
! dictionary and/or application such that they need to be generated, and cannot be inserted
! as methods in the class.
! ----------------------------------------------------------------------------------------
NetWebRelationManager PROCEDURE  (FILE p_file)
RM       &RelationManager
  CODE
  RM &= NULL
  If p_FILE &= NULL then Return RM.
  If p_File &= Relate:alias.Me.File then RM &= Relate:alias.
  If p_File &= Relate:mailboxes.Me.File then RM &= Relate:mailboxes.
  If p_File &= Relate:netweblog.Me.File then RM &= Relate:netweblog.
  Return RM
! ----------------------------------------------------------------------------------------
NetWebFileNamed PROCEDURE  (string p_file)
F        &File
  CODE
  F &= NULL
  Case Lower(p_file)
  Of 'alias'
    F &= alias
  Of 'mailboxes'
    F &= mailboxes
  Of 'netweblog'
    F &= netweblog
  End
  Return F
! ----------------------------------------------------------------------------------------
! ----------------------------------------------------------------------------------------
! ----------------------------------------------------------------------------------------
NetWebDLL_web46_SendFile PROCEDURE  (NetWebServerWorker p_web, string p_Filename, String p_Parent)
loc:parent      string(252)   ! should always be a lower-case string
loc:done        Long
loc:filename    string(252)
  CODE
  loc:parent = p_parent
  loc:filename = p_filename
  do CaseStart:web46
  Return Loc:Done

! ----------------------------------------------------------------
SendFile:web46:R1  Routine
  Case lower(loc:filename)
  of 'pageheadertag'
  orof 'pageheadertag' & '_' & loc:parent
      p_web.Ajax = 1
      PageHeaderTag(p_web)
      p_web.Sendfooter(12)
      loc:Done = 1
  of 'mailboxesbrowsecontrol'
  orof 'mailboxesbrowsecontrol' & '_' & loc:parent
    p_web.MakePage('MailboxesBrowseControl',Net:Web:Browse,0,'Mailboxes',,,) !sf1
    loc:Done = 1
  of 'progresssofar'
  orof 'progresssofar' & '_' & loc:parent
      p_web.Ajax = 1
      ProgressSoFar(p_web)
      p_web.Sendfooter(12)
      loc:Done = 1
  of 'pagefootertag'
  orof 'pagefootertag' & '_' & loc:parent
      p_web.Ajax = 1
      PageFooterTag(p_web)
      p_web.Sendfooter(12)
      loc:Done = 1
  of 'indexpage'
  orof 'index.htm'
    IndexPage(p_web)
    loc:Done = 1 ; Exit
  of 'timeclock'
  orof 'timeclock' & '_' & loc:parent
      p_web.Ajax = 1
      TimeClock(p_web)
      p_web.Sendfooter(12)
      loc:Done = 1
  of 'someresult'
    SomeResult(p_web)
    loc:Done = 1 ; Exit
  of 'somepage'
    SomePage(p_web)
    loc:Done = 1 ; Exit
  End ! Case Loc:filename
! ----------------------------------------------------------------------
ServicesAndMethods:web46  routine
!------------------------------------------------------------------------
Case:MailboxesFormControl  Routine
  Case lower(loc:filename)
  of 'mailboxesformcontrol'
    p_web.MakePage('MailboxesFormControl',Net:Web:Form,0,'Mailbox Setup',,,)
    loc:Done = 1 ; Exit
  of p_web.nocolon('mailboxesformcontrol_tabchanged')
    MailboxesFormControl(p_web,Net:Web:Div)
    loc:Done = 1 ; Exit
  of p_web.nocolon('mailboxesformcontrol_nexttab_0')
    MailboxesFormControl(p_web,Net:Web:NextTab)
    p_web.Sendfooter(5)
    loc:Done = 1 ; Exit
  of p_web.nocolon('mailboxesformcontrol_tab_0')
  orof p_web.nocolon('mailboxesformcontrol_mai:mailboxname_value')
  orof p_web.nocolon('mailboxesformcontrol_mai:mailboxname_value')
  orof p_web.nocolon('mailboxesformcontrol_mai:password_value')
  orof p_web.nocolon('mailboxesformcontrol_mai:password_value')
  orof p_web.nocolon('mailboxesformcontrol_mai:collectfrom_value')
  orof p_web.nocolon('mailboxesformcontrol_mai:collectfrom_value')
  orof p_web.nocolon('mailboxesformcontrol_mai:collectto_value')
  orof p_web.nocolon('mailboxesformcontrol_mai:collectto_value')
  orof p_web.nocolon('mailboxesformcontrol_timeclock_value')
  orof p_web.nocolon('mailboxesformcontrol_dynamicchart_value')
    MailboxesFormControl(p_web,Net:Web:Div)
    p_web.Sendfooter(11)
    loc:Done = 1 ; exit
  End ! Case

!------------------------------------------------------------------------
CaseStart:web46  routine
  do ServicesAndMethods:web46
  if loc:done then exit.
  do SendFile:web46:R1
  if loc:done then exit.
  do Case:MailboxesFormControl
  if loc:done then exit.

