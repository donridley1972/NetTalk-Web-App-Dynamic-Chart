

   MEMBER('web46.clw')                                     ! This is a MEMBER module

                     MAP
                       INCLUDE('WEB46007.INC'),ONCE        !Local module procedure declarations
                     END


MailboxesFormControl PROCEDURE  (NetWebServerWorker p_web,long p_stage=0)
! the 'pre' routines are called when the form _opens_
! the 'post' routines are called when the 'save' or 'cancel' or 'delete' button is pressed
! remember this will happen on 2 separate threads. So use the SessionQueue here
! if you want to carry information from the pre, to the post, stage.

! there are many stages in the form
!   NET:WEB:StagePre which is called when the form _opens_
!   NET:WEB:StageValidate which is called when the form _closes_, before the record is written
!   NET:WEB:StagePost which is called _after_ the record is written
Ans                  LONG                                  !
FilesOpened       Long
FilesErrorOnOpen  StringTheory
MailBoxes::State  USHORT
MAI:MailBoxName:IsInvalid  Long
MAI:Password:IsInvalid  Long
MAI:CollectFrom:IsInvalid  Long
MAI:CollectTo:IsInvalid  Long
TimeClock:IsInvalid  Long
DynamicChart:IsInvalid  Long
loc:TabStyle               Long
loc:WebStyle               Long,over(loc:TabStyle)   ! backward compatibility with old embed code
loc:TabTo                  Long
loc:viewonly               Long
loc:silent                 Long
loc:LayoutMethod           Long
loc:formname               string(252)
loc:procedure              string(252)
loc:formaction             string(252)
loc:formactioncancel       string(252)
loc:formactioncanceltarget string(252)
loc:formactiontarget       string(252)
loc:extra                  string(ExtraStringSize)
loc:capture                long
loc:AcceptTypes            String(252)
loc:autocomplete           String(30)
loc:enctype                string(252)
loc:javascript             string(JavascriptStringLen)
loc:tabs                   string(252)
loc:readonly               String(32)
loc:lookuponly             String(32)
loc:invalid                String(100)
loc:alert                  String(1024)
loc:comment                String(1024)
loc:prompt                 String(1024)
loc:invalidtab             Long
loc:tabnumber              Long
loc:retrying               Long
loc:lookupdone             Long
loc:tabheight              Long
loc:action                 string(40)
loc:act                    Long
loc:width                  String(40)
loc:rowstyle               String(252)
loc:buttonset              String(64)
loc:even                   Long
loc:columncounter          Long
loc:maxcolumns             Long
loc:rowstarted             Long
loc:cellstarted            Long
loc:FirstInCell            Long
loc:options                StringTheory ! options for jQuery calls
loc:Random               StringTheory ! for generating Random strings.
loc:popup                  long
loc:inNetWebPopup          long
loc:poppedup               long
loc:ok                     long
loc:parent                 string(252)   ! should always be a lower-case string
loc:Heading                string(1024)
loc:fieldclass             string(StyleStringSize)
loc:frontloading           long
loc:noFocus                long
loc:FormOnSave             long
packet                       StringTheory
  CODE
  loc:procedure = lower('MailboxesFormControl')
  GlobalErrors.SetProcedureName('MailboxesFormControl')
  if p_stage = 0 and p_web.GetValue('_CallPopups') <> 0
    p_stage = Net:Web:Popup ! required for forms in DLL's, where PreCall doesn't know it's a form.
  elsif p_stage = 0 and p_Web.Ajax = 1
    case lower(p_web.Event)
    of 'gainfocus'
      p_stage = Net:Web:FocusBack
    of 'parentupdated'
      loc:noFocus = true ! the form regenerates, but nothing gets focus.
    of 'populatetree'
      p_stage = Net:Web:Populate
    end
  end
  loc:formname = lower('MailboxesFormControl_frm')
  loc:parent = p_web.PlainText(lower(p_web.GetValue('_parentProc_')))
  loc:popup = p_web.GetValue('_popup_')
  loc:FormOnSave = Net:CloseForm
  loc:silent = p_web.GetValue('_silent_')

  loc:LayoutMethod =  p_web.site.FormLayoutMethod

  loc:TabStyle = p_web.site.WebFormStyle
  do SetAction
  ans = band(p_stage,255)
  case p_stage
  of net:web:Generate
    do OpenFiles
    if loc:silent = false
      if p_web.Event = 'parentnewselection' or  p_web.GetValue('MailboxesFormControl:parentIs') = 'Browse' ! allow for form used as a child of a browse, default to change mode.
        p_web.FormReady('MailboxesFormControl','Change','MAI:MailBoxNumber',p_web.GetSessionValue('MAI:MailBoxNumber'))
      Else
        p_web.FormReady('MailboxesFormControl','')
      End
    End
    if p_web.site.frontloaded and p_web.Ajax and loc:popup = 1
      loc:FrontLoading = net:GeneratingData
    else
      If p_web.site.ContentBody <> '' and lower(p_web.GetValue('_cb_')) = lower('MailboxesFormControl')
        p_web.DivHeader(p_web.site.ContentBody,p_web.site.contentbodydivclass)
      End
      p_web.DivHeader('MailboxesFormControl',p_web.combine(p_web.site.style.formdiv,'fdiv'))
      p_web.DivHeader('MailboxesFormControl_alert',p_web.combine(p_web.site.MessageClass,' nt-hidden'))
      p_web.DivFooter()
    End
    do SetPics
    if loc:FrontLoading = net:GeneratingData
      do GenerateData
    else
      do GenerateForm
      p_web.DivFooter()
      If p_web.site.ContentBody <> '' and lower(p_web.GetValue('_cb_')) = lower('MailboxesFormControl')
        p_web.DivFooter()
      End
    End
  of Net:Web:SetPics
    do StoreMem
    do SetPics
  of Net:Web:SetPics + NET:WEB:StageValidate
    do SetPics

  of Net:Web:MakeReady

  of Net:Web:Init
  orof Net:Web:Init + Net:InsertRecord
  orof Net:Web:Init + Net:ChangeRecord
  orof Net:Web:Init + Net:CopyRecord
  orof Net:Web:Init + Net:ViewRecord
  orof Net:Web:Init + Net:DeleteRecord
    do StoreMem
    do InitForm

  of Net:Web:FocusBack
    do GotFocusBack

  of net:web:popup
    loc:inNetWebPopup = 1
    loc:poppedup = p_web.GetValue('_MailboxesFormControl:_poppedup_')
    if p_web.site.FrontLoaded then loc:popup = 1.
    if loc:poppedup = 0 and p_Web.Ajax = 0
      If p_web.GetPreCall('MailboxesFormControl') = 0 and (p_web.GetValue('_CallPopups') = 0 or p_web.GetValue('_CallPopups') = 1)
        p_web.AddPreCall('MailboxesFormControl')
        p_web.DivHeader('popup_MailboxesFormControl','nt-hidden',,,,1,,,'popup_MailboxesFormControl')
        p_web.DivHeader('MailboxesFormControl',p_web.combine(p_web.site.style.formdiv,'fdiv'),,,,1)
        If p_web.site.FrontLoaded
          loc:frontloading = net:GeneratingPage
          do GenerateForm
        End
        p_web.DivFooter()
        p_web.DivFooter(,lower('popup_MailboxesFormControl End'))
        do Heading
        loc:options.Free(True)
        p_web.SetOption(loc:options,'close','function(event, ui) {{ ntd.pop(); }')
        p_web.SetOption(loc:options,'autoOpen','false')
        p_web.SetOption(loc:options,'width',600)
        p_web.SetOption(loc:options,'modal','true')
        p_web.SetOption(loc:options,'title',loc:Heading)
        p_web.SetOption(loc:options,'position','{{ my: "top", at: "top+' & clip(15) & '", of: window }')
        If p_web.CanCallAddSec() = net:ok
          p_web.SetOption(loc:options,'addsec','MailboxesFormControl')
        Else
          p_web.SetOption(loc:options,'addsec','')
        End
        If p_web.site.DefaultFormOpenAnimation
          p_web.SetOption(loc:options,'show','{{' & clip(p_web.site.DefaultFormOpenAnimation) & '}')
        End
        If p_web.site.DefaultFormCloseAnimation
          p_web.SetOption(loc:options,'hide','{{' & clip(p_web.site.DefaultFormCloseAnimation) & '}')
        End
        p_web.SetOption(loc:options,'closeText',p_web.translate(p_web.site.CloseButton.TextValue))
        p_web.jQuery('#' & lower('popup_MailboxesFormControl_div'),'dialog',loc:options,'.removeClass("nt-hidden")')
      End
      do popups ! includes all the other popups dependant on this procedure
      loc:poppedup = 1
      p_web.SetValue('_MailboxesFormControl:_poppedup_',1)
    end

  of Net:Web:AfterLookup + Net:Web:Cancel
    loc:LookupDone = 0
    do AfterLookup
    if p_web.Ajax = 1 and loc:popup
      p_web.script('$(''#popup_'&lower('MailboxesFormControl')&'_div'').dialog(''close'');')
    end

  of Net:Web:AfterLookup
    loc:LookupDone = 1
    do AfterLookup

  of Net:Web:Cancel
    do CancelForm
    if p_web.Ajax = 1 and loc:popup
      p_web.script('$(''#popup_'&lower('MailboxesFormControl')&'_div'').dialog(''close'');')
    end

  of Net:InsertRecord + NET:WEB:StagePre
    if p_web._InsertAfterSave = 0
      p_web.setsessionvalue('SaveReferMailboxesFormControl',p_web.getPageName(p_web.RequestReferer))
    end
    do PreInsert
  of Net:InsertRecord + NET:WEB:StageValidate
    do RestoreMem
    do ValidateInsert
  of Net:InsertRecord + NET:WEB:StagePost
    do RestoreMem
    do PostWrite
    do PostInsert
  of Net:InsertRecord + NET:WEB:Populate
    do OpenFiles
    do InitForm
    do PreInsert
  of Net:CopyRecord + NET:WEB:StagePre
    p_web.setsessionvalue('SaveReferMailboxesFormControl',p_web.getPageName(p_web.RequestReferer))
    do PreCopy
  of Net:CopyRecord + NET:WEB:StageValidate
    do RestoreMem
    do ValidateCopy
  of Net:CopyRecord + NET:WEB:StagePost
    do RestoreMem
    do PostWrite
    do PostCopy
  of Net:CopyRecord + NET:WEB:Populate
    If p_web.IfExistsValue('MAI:MailBoxNumber') = 0 then p_web.SetValue('MAI:MailBoxNumber',p_web.GetSessionValue('MAI:MailBoxNumber')).
    do PreCopy
  of Net:ChangeRecord + NET:WEB:StagePre
    p_web.setsessionvalue('SaveReferMailboxesFormControl',p_web.getPageName(p_web.RequestReferer))
    do PreUpdate
    p_web.setsessionvalue('showtab_MailboxesFormControl',0)
  of Net:ChangeRecord + NET:WEB:StageValidate
    do RestoreMem
    If false
    ElsIf loc:act = Net:InsertRecord
      do ValidateInsert
    ElsIf loc:act = Net:CopyRecord
      do ValidateCopy
    Else
      do ValidateUpdate
    End
  of Net:ChangeRecord + NET:WEB:StagePost
    do RestoreMem
    If false
    ElsIf loc:act = Net:InsertRecord
      do PostWrite
      do PostInsert
    ElsIf loc:act = Net:CopyRecord
      do ValidateCopy
    Else
      do PostWrite
      do PostUpdate
    End
  of Net:ChangeRecord + NET:WEB:Populate
    If p_web.IfExistsValue('MAI:MailBoxNumber') = 0 then p_web.SetValue('MAI:MailBoxNumber',p_web.GetSessionValue('MAI:MailBoxNumber')).
    do OpenFiles
    do InitForm
    do PreUpdate
    p_web.setsessionvalue('showtab_MailboxesFormControl',0)
  of Net:DeleteRecord + NET:WEB:StagePre
    p_web.setsessionvalue('SaveReferMailboxesFormControl',p_web.getPageName(p_web.RequestReferer))
    do PreDelete
  of Net:DeleteRecord + NET:WEB:StageValidate
    do RestoreMem
    do ValidateDelete
  of Net:DeleteRecord + NET:WEB:StagePost
    do RestoreMem
    do PostDelete
  of Net:ViewRecord + NET:WEB:Populate
    If p_web.IfExistsValue('MAI:MailBoxNumber') = 0 then p_web.SetValue('MAI:MailBoxNumber',p_web.GetSessionValue('MAI:MailBoxNumber')).
    do OpenFiles
    do InitForm
    do PreUpdate
    p_web.setsessionvalue('showtab_MailboxesFormControl',0)

  of Net:ViewRecord + NET:WEB:StagePre
    p_web.setsessionvalue('SaveReferMailboxesFormControl',p_web.getPageName(p_web.RequestReferer))
    do PreUpdate
    p_web.setsessionvalue('showtab_MailboxesFormControl',0)
  of Net:Web:NextTab
    do NextTab
  of Net:Web:Div
    If p_web.site.FrontLoaded
      loc:frontloading = net:GeneratingData
    End
    do CallDiv
  Of Net:Web:Populate
    do PopulateData

  Else
    ans = 0
  End ! Case
  If Loc:Invalid
    Ans = Net:Web:InvalidRecord
      p_web.requestfilename = p_web.formsettings.parentpage
      if p_web.GetValue('_parentPage') = ''
        p_web.SetValue('_parentPage',p_web.requestfilename)
      End
    p_web.SetValue('retryfield',Loc:Invalid)
    p_web.setsessionvalue('showtab_MailboxesFormControl',Loc:InvalidTab)
  ElsIf band(p_stage,NET:WEB:StageValidate) > 0 and band(p_stage,Net:DeleteRecord) <> Net:DeleteRecord and band(p_stage,Net:WriteMask) > 0 and p_web.Ajax = 1 and loc:popup
    If p_web.IfExistsValue('_stayopen_')
    ! only a partial save, so don't complete the form.
    ElsIf loc:FormOnSave = Net:InsertAgain
      If band(loc:act,Net:InsertRecord) <> Net:InsertRecord
        p_web.script('$(''#popup_'&lower('MailboxesFormControl')&'_div'').dialog(''close'');')
      End
    Else
      p_web.script('$(''#popup_'&lower('MailboxesFormControl')&'_div'').dialog(''close'');')
    End
  End
  if loc:alert <> ''
    p_web.SetAlert(loc:alert, net:Alert + Net:Message,'MailboxesFormControl',1)
  end
  do CloseFiles
  GlobalErrors.SetProcedureName()
  return Ans

OpenFiles  ROUTINE
  FilesErrorOnOpen.SetValue('')
  If p_web.OpenFile(MailBoxes) <> 0
    FilesErrorOnOpen.Append('MailBoxes',st:clip,',')
  End
  FilesOpened = True
!--------------------------------------
CloseFiles ROUTINE
  IF FilesOpened
  p_Web.CloseFile(MailBoxes)
     FilesOpened = False
  END

AlertParent  routine
  DATA
parent_       string(100)
parentrid_    string(100)
  CODE
  p_web.pushEvent('childupdated')
  parent_ = p_web.GetValue('_ParentProc_')
  If loc:Parent
    p_web.SetValue('_ParentProc_','')
    p_web.PageName = clip(loc:parent) & '_' & lower('MailboxesFormControl') & '_value'
    p_web._SendFile(p_web.PageName)
  Elsif p_web.formsettings.parentpage
    parentrid_ = p_web.GetValue('_parentrid_')
    p_web.SetValue('_ParentProc_','')
    p_web.SetValue('_parentrid_')
    p_web.PageName = clip(p_web.formsettings.parentpage) & '_' & lower('MailboxesFormControl') & '_value'
    p_web._SendFile(p_web.PageName)
    p_web.SetValue('_parentrid_',parentrid_)
  End
  p_web.SetValue('_ParentProc_',parent_)
  p_web.popEvent()

GotFocusBack  routine
  DATA
loc:Equate  string(252)
loc:Done    long
  CODE

! ---------------------------------------------------------------------------------------------------
! This code runs before the record is loaded. For code after the record is loaded see the PreInsert, PreCopy, PreUpdate and so on
InitForm       Routine
  DATA
LF  &FILE
  CODE
  p_web.SetValue('MailboxesFormControl_form:inited_',1)
  p_web.formsettings.file = 'MailBoxes'
  p_web.formsettings.key = 'MAI:PrimaryKey'
  do RestoreMem

SetFormSettings  routine
  data
  code
  If p_web.Formstate = ''
    p_web.formsettings.file = 'MailBoxes'
    p_web.formsettings.key = 'MAI:PrimaryKey'
      clear(p_web.formsettings.FieldName)
    p_web.formsettings.recordid[1] = MAI:MailBoxNumber
    p_web.formsettings.FieldName[1] = 'MAI:MailBoxNumber'
    do SetAction
    if p_web.GetSessionValue('MailboxesFormControl:Primed') = 1 or Ans = 2
      p_web.formsettings.action = Net:ChangeRecord
    Else
      p_web.formsettings.action = Loc:Act
    End
    p_web.formsettings.OriginalAction = Loc:Act
    If p_web.GetValue('_parentPage') <> ''
      p_web.formsettings.parentpage = p_web.GetValue('_parentPage')
    else
      p_web.formsettings.parentpage = 'MailboxesFormControl'
    end
    p_web.formsettings.proc = 'MailboxesFormControl'
    clear(p_web.formsettings.target)
    p_web.FormState = p_web.AddSettings()
  end

CancelForm  Routine
  IF p_web.GetSessionValue('MailboxesFormControl:Primed') = 1
    p_web.DeleteFile(MailBoxes)
    p_web.SetSessionValue('MailboxesFormControl:Primed',0)
  End
  p_web.SetSessionValue('MailboxesFormControl:Active',0)

SendMessage Routine
  p_web.Message('Alert',loc:alert,p_web.site.MessageClass,Net:Send,1)

SetPics        Routine
  p_web.SetValue('UpdateFile','MailBoxes')
  p_web.SetValue('UpdateKey','MAI:PrimaryKey')
  If p_web.IfExistsValue('MAI:MailBoxName')
    p_web.SetPicture('MAI:MailBoxName','@s80')
  End
  p_web.SetSessionPicture('MAI:MailBoxName','@s80')
  If p_web.IfExistsValue('MAI:Password')
    p_web.SetPicture('MAI:Password','@s80')
  End
  p_web.SetSessionPicture('MAI:Password','@s80')
  If p_web.IfExistsValue('MAI:CollectFrom')
    p_web.SetPicture('MAI:CollectFrom','@t1')
  End
  p_web.SetSessionPicture('MAI:CollectFrom','@t1')
  If p_web.IfExistsValue('MAI:CollectTo')
    p_web.SetPicture('MAI:CollectTo','@t4')
  End
  p_web.SetSessionPicture('MAI:CollectTo','@t4')

AfterLookup Routine
  loc:TabNumber = -1
    loc:TabNumber += 1
  p_web.DeleteValue('LookupField')

StoreMem  Routine

! RestoreMem primes all the non-file fields with their session value. Useful in Validate and PostAction routines
RestoreMem  Routine
  !FormSource=File

SetAction  routine
  data
  code
  If Band(p_Stage,Net:ViewRecord) = Net:ViewRecord
    Loc:ViewOnly = true
    loc:action = p_web.site.ViewPromptText
    loc:act = Net:ViewRecord
    p_web.SetValue('_viewonly_',1) ! cascade ViewOnly mode to child procedures
    p_web.SetSessionValue('MailboxesFormControl_CurrentAction',Net:ViewRecord)
  Else
    Case p_web.GetSessionValue('MailboxesFormControl_CurrentAction')
    of Net:InsertRecord
      loc:action = p_web.site.InsertPromptText
      loc:act = Net:InsertRecord
    of Net:CopyRecord
      loc:action = p_web.site.CopyPromptText
      loc:act = Net:CopyRecord
    of Net:ChangeRecord
      loc:action = p_web.site.ChangePromptText
      loc:act = Net:ChangeRecord
    of Net:DeleteRecord
      loc:action = p_web.site.DeletePromptText
      loc:act = Net:DeleteRecord
    of Net:ViewRecord
      Loc:ViewOnly = true
      loc:action = p_web.site.ViewPromptText
      loc:act = Net:ViewRecord
    Else
      loc:action = ''
      loc:act = 0
    End
  End

SetFormAction  routine
  data
  code
  loc:FormAction = p_web.GetValue('onsave')
  If loc:formaction = 'stay'
    loc:FormAction = p_web.Requestfilename
  Else
    loc:formaction = p_web.getsessionvalue('SaveReferMailboxesFormControl')
  End
  if p_web.GetValue('_ChainToPage_') <> ''
    loc:formaction = p_web.GetValue('_ChainToPage_')
    p_web.SetSessionValue('MailboxesFormControl_ChainTo',loc:FormAction)
    loc:formactiontarget = '_self'
  ElsIf p_web.IfExistsSessionValue('MailboxesFormControl_ChainTo')
    loc:formaction = p_web.GetSessionValue('MailboxesFormControl_ChainTo')
    loc:formactiontarget = '_self'
  End
  If loc:FormActionTarget = ''
    loc:FormActionTarget = '_self'
  End
  If loc:formaction = ''
    loc:formaction = lower(p_web.getPageName(p_web.RequestReferer))
  End
  loc:FormActionCancel = loc:FormAction
  If loc:FormActionCancelTarget = ''
    loc:FormActionCancelTarget = '_self'
  End

! front-loaded forms only need the fields updated - not the structure generated.
! this routine is called when loc:frontloaded = net:GeneratingData
GenerateData  routine
  data
loc:send     StringTheory
loc:checked  String(50)
  code
  do Refresh::MAI:MailBoxName
  do Refresh::MAI:Password
  do Refresh::MAI:CollectFrom
  do Refresh::MAI:CollectTo
  do Refresh::TimeClock
  do Refresh::DynamicChart
  p_web.Script('$(''#'&clip(loc:formname)&''').find(''#FormState'').val('''&clip(p_web.FormState)&''');' & p_web.CRLF)
  p_web.ntForm(loc:formname,'show')

PopulateData  Routine

GenerateForm  Routine
  data
loc:disabled  Long
loc:pos       Long
  code
  p_web.ClearBrowse('MailboxesFormControl')
  do LoadRelatedRecords
  do SetFormAction
  do ntForm
  If p_web.IfExistsValue('retryField')
    loc:retrying = 1
  End
  loc:viewonly = Choose(p_web.IfExistsValue('View_btn'),1,loc:viewonly)
  p_web.SetValue('_viewonly_',loc:viewonly)
  packet.append('<form action="'&clip(loc:formaction)&'" '&clip(loc:enctype)&' method="post" name="'&clip(loc:formname)&'" id="'&clip(loc:formname)&'" target="'&clip(loc:FormActionTarget)&'" onsubmit="osf(this);">' & p_web.CRLF)
  if loc:viewonly and p_web.IfExistsValue('LookupField')
    packet.append(p_web.CreateInput('hidden','LookupField',p_web.GetValue('LookupField'))  & p_web.CRLF)
  end
  packet.append(p_web.CreateInput('hidden','FormState',p_web.FormState, , , , , , , , 'FormState' & p_web.RandomId())  & p_web.CRLF)
  do SendPacket
  do Heading
    Case loc:TabStyle
    of Net:Web:Carousel
      packet.append('<div id="'&  lower('Tab_MailboxesFormControl') & '_div" class="' & p_web.combine(p_web.site.style.FormTabOuter,,' nt-tab-carousel') & '">')
    of Net:Web:TaskPanel
    of Net:Web:Wizard
      packet.append(p_web.DivHeader('Tab_MailboxesFormControl',p_web.combine(p_web.site.style.FormTabOuter,),Net:NoSend))
    Else
      packet.append(p_web.DivHeader('Tab_MailboxesFormControl',p_web.combine(p_web.site.style.FormTabOuter,),Net:NoSend))
    End
    Case loc:TabStyle
    of Net:Web:Tab
      packet.append('<ul class="'&p_web.combine(p_web.site.style.FormTabTitle,)&'">'& p_web.CRLF)
      packet.append('<li><a href="#' & lower('tab_MailboxesFormControl0_div') & '">' & '<div>' & p_web.Translate('General',true)&'</div></a></li>'& p_web.CRLF) !a
      packet.append('</ul>'& p_web.CRLF)
    end
    do SendPacket
  if p_web.event = 'callpopups'
    p_web.PushEvent('callpopups')
  else
    p_web.PushEvent('generate')
  end
  do GenerateTab0
    Case loc:TabStyle
    Of Net:Web:TaskPanel
    Of Net:Web:Carousel
      packet.append('</div><13,10>')
    Else
      packet.append(p_web.DivFooter(Net:NoSend))
    End
  do SendPacket
  p_web.PopEvent()
    loc:disabled = false
      if loc:ViewOnly = 0
        If loc:TabStyle = Net:Web:Wizard
          packet.append('<div id="MailboxesFormControl_saveset" class="'&p_web.combine(p_web.site.style.FormSaveButtonSet,' nt-wizard-buttonset',)&'">')
        Else
          packet.append('<div id="MailboxesFormControl_saveset" class="'&p_web.combine(p_web.site.style.FormSaveButtonSet,)&'">')
        END
        If loc:TabStyle = Net:Web:Wizard
          loc:javascript = ''
          packet.append(p_web.CreateStdButton('button',NET:WEB:WizPreviousButton,loc:formname,,,loc:javascript,,,,'MailboxesFormControl')) !f1
          packet.append(p_web.CreateStdButton('button',NET:WEB:WizNextButton,loc:formname,,,loc:javascript,,,,'MailboxesFormControl')) !f2
        End
        loc:javascript = ''
        p_web.site.ButtonSettings = p_web.site.SaveButton  ! save the default settings
        p_web.site.SaveButton.TextValue = 'Save'
        packet.append(p_web.CreateStdButton('button',Net:Web:SaveButton,loc:formname,,,loc:javascript,,loc:disabled,,'MailboxesFormControl',1)) !f3
        p_web.site.SaveButton = p_web.site.ButtonSettings   ! restore the default settings
        loc:javascript = ''
        p_web.site.ButtonSettings = p_web.site.CancelButton  ! save the default settings
        p_web.site.CancelButton.TextValue = 'Cancel'
        if loc:popup
          packet.append(p_web.CreateStdButton('button',Net:Web:CancelButton,loc:formname,,,loc:javascript,,loc:disabled,,'MailboxesFormControl')) !f5
        else
          packet.append(p_web.CreateStdButton('button',Net:Web:CancelButton,loc:formname,,,loc:javascript,,loc:disabled,,'MailboxesFormControl')) !f6
        end
        p_web.site.CancelButton = p_web.site.ButtonSettings   ! restore the default settings
        packet.append('</div>'  & p_web.CRLF) ! end id="MailboxesFormControl_saveset"
        If p_web.site.UseSaveButtonSet
          loc:options.Free(True)
          p_web.jQuery('#' & 'MailboxesFormControl_saveset','controlgroup',loc:options)
        End
      Else
        If loc:TabStyle = Net:Web:Wizard
          packet.append('<div id="MailboxesFormControl_saveset" class="'&p_web.combine(p_web.site.style.FormSaveButtonSet,' nt-wizard-buttonset',)&'">')
        Else
          packet.append('<div id="MailboxesFormControl_saveset" class="'&p_web.combine(p_web.site.style.FormSaveButtonSet,)&'">')
        END
        If loc:TabStyle = Net:Web:Wizard
          loc:javascript = ''
          packet.append(p_web.CreateStdButton('button',NET:WEB:WizPreviousButton,loc:formname,,,loc:javascript,,,,'MailboxesFormControl')) !f8
          packet.append(p_web.CreateStdButton('button',NET:WEB:WizNextButton,loc:formname,,,loc:javascript,,,,'MailboxesFormControl')) !f9
        End
        loc:javascript = ''
        if loc:popup
          loc:javascript = clip(loc:javascript) & 'ntd.close();'
          packet.append(p_web.CreateStdButton('button',Net:Web:CloseButton,loc:formname,,,loc:javascript,,,,'MailboxesFormControl')) !f10
        else
          packet.append(p_web.CreateStdButton('submit',Net:Web:CloseButton,loc:formname,loc:formactioncancel,loc:formactioncanceltarget,,,,,'MailboxesFormControl')) !f11
        end
        packet.append('</div>' & p_web.CRLF)
        If p_web.site.UseSaveButtonSet
          loc:options.Free(True)
          p_web.jQuery('#' & 'MailboxesFormControl_saveset','controlgroup',loc:options)
        End
      End
  if loc:retrying
    p_web.SetValue('SelectField',clip(loc:formname) & '.' & p_web.GetValue('retryfield'))
  Elsif p_web.IfExistsValue('Select_btn')
  Else
    If False
    Else ! If False
    End ! If False
  End
    loc:options.Free(True)
    Case loc:TabStyle
    of Net:Web:Accordion
      p_web.SetOption(loc:options,'heightStyle','content')
      p_web.SetOption(loc:options,'active', choose(p_web.GetSessionValue('showtab_MailboxesFormControl')>0,p_web.GetSessionValue('showtab_MailboxesFormControl'),'0'))
      p_web.SetOption(loc:options,'activate', 'function(event, ui) {{ TabChanged(''MailboxesFormControl_tabchanged'',$(this).accordion("option","active")); }')
      p_web.jQuery('#' & lower('Tab_MailboxesFormControl') & '_div','accordion',loc:options)
    of Net:Web:TaskPanel
    of Net:Web:Tab
      p_web.SetOption(loc:options,'activate','function(event,ui){{TabChanged(''MailboxesFormControl_tabchanged'',$(this).tabs("option","active"));}')
      p_web.SetOption(loc:options,'active',choose(p_web.GetSessionValue('showtab_MailboxesFormControl')>0,p_web.GetSessionValue('showtab_MailboxesFormControl'),'0'))
      p_web.jQuery('#' & lower('Tab_MailboxesFormControl') & '_div','tabs',loc:options)
    of Net:Web:Wizard
       p_web.SetOption(loc:options,'procedure',lower('MailboxesFormControl'))
       p_web.SetOption(loc:options,'popup',loc:popup)
  
       p_web.SetOption(loc:options,'active',choose(p_web.GetSessionValue('showtab_MailboxesFormControl')>0,p_web.GetSessionValue('showtab_MailboxesFormControl'),0))
       p_web.SetOption(loc:options,'ntform', '#' & clip(loc:formname))
       p_web.ntWiz('MailboxesFormControl',loc:options)
    of Net:Web:Carousel
       p_web.SetOption(loc:options,'id',lower('tab_MailboxesFormControl_div'))
       p_web.SetOption(loc:options,'dots','^true')
       p_web.SetOption(loc:options,'autoplay','^false')
       p_web.jQuery('#' & lower('tab_MailboxesFormControl_div'),'slick',loc:options)
    end
    do SendPacket
  packet.append('</form>'&p_web.CRLF)
  do SendPacket
  loc:options.Free(True)
  If p_web.CanCallAddSec() = net:ok
    p_web.SetOption(loc:options,'addsec','MailboxesFormControl')
  End
  do SendPacket
  If not (p_web.site.FrontLoaded and loc:frontloading = net:GeneratingPage) ! don't want to do popups here if generating in front-loaded mode from net:web:popup stage
    do Popups
  end
  if p_web.Ajax then do AutoLookups.

  do SendPacket

Popups  Routine
  If p_web.Ajax = 0
    p_web.PushEvent('callpopups')
    do AutoLookups
    p_web.AddPreCall('MailboxesFormControl')
    p_web.SetValue('_popup_',0)
    p_web.PopEvent()
  End

ntForm Routine
  data
loc:BuildOptions                stringTheory
  code
  p_web.SetOption(loc:options,'id',clip(loc:formname))
  p_web.SetOption(loc:options,'procedure', lower('MailboxesFormControl'))
  p_web.SetOption(loc:options,'parent', lower(clip(loc:parent)))
  p_web.SetOption(loc:options,'title',loc:Heading)
  p_web.SetOption(loc:options,'tabType', loc:TabStyle)
  p_web.SetOption(loc:options,'action', loc:formaction)
  p_web.SetOption(loc:options,'actionCancel', loc:formactioncancel)
  p_web.SetOption(loc:options,'actionCancelTarget',loc:formactioncanceltarget)
  p_web.SetOption(loc:options,'actionTarget', loc:formactiontarget)
  p_web.SetOption(loc:options,'confirmText',p_web.translate('Confirm'))
  p_web.SetOption(loc:options,'confirmDeleteMessage',p_web.translate('Are you sure you want to delete this record?'))
  p_web.SetOption(loc:options,'yesDeleteText',p_web.translate('Delete'))
  p_web.SetOption(loc:options,'noDeleteText',p_web.translate('No'))
  p_web.SetOption(loc:options,'confirmDelete',1)
  p_web.SetOption(loc:options,'confirmCancelMessage',p_web.translate('Are you sure you want to cancel the changes?'))
  p_web.SetOption(loc:options,'yesCancelText',p_web.translate('Cancel'))
  p_web.SetOption(loc:options,'noCancelText',p_web.translate('No'))
  p_web.SetOption(loc:options,'confirmCancel',p_web.site.DefaultCancelPrompt)
  p_web.SetOption(loc:options,'popup', loc:popup)
  p_web.SetOption(loc:options,'focus', p_web.focus)
  p_web.ntForm(loc:formname,loc:options)
  If loc:silent
    p_web.ntForm(loc:formname,'hide')
    ans = 0
  End

AutoLookups  Routine
GenerateTab0  Routine
      Case loc:TabStyle
      of Net:Web:Accordion
        packet.append('<h3 class="'&p_web.combine(p_web.site.style.FormTabTitle,' ui-accordion-tab-header',)&'"><div class="nt-flex">' & |
        '<div>' & p_web.Translate('General')&'</div>' &|
        '</div></h3>' & p_web.CRLF & p_web.DivHeader('tab_MailboxesFormControl0',p_web.combine(p_web.site.style.FormTabInner,' ui-accordion-tab-content',,),Net:NoSend,,,1))
      of Net:Web:TaskPanel
        packet.append(p_web.DivHeader('tab_MailboxesFormControl0_taskpanel',p_web.combine(p_web.site.style.FormTabOuter,),Net:NoSend))
        packet.append('<h3 class="'&p_web.combine(p_web.site.style.FormTabTitle,' ui-taskpanel-tab-header',,)&'"><div class="nt-flex">' & |
          '<div>'&p_web.Translate('General')&'</div>' & |
          '</div></h3>' & p_web.CRLF & p_web.DivHeader('tab_MailboxesFormControl0',p_web.combine(p_web.site.style.FormTabInner,' ui-taskpanel-tab-content',,),Net:NoSend,,,1))
      of Net:Web:Tab
        packet.append(p_web.DivHeader('tab_MailboxesFormControl0',p_web.combine(p_web.site.style.FormTabInner,' ui-tabs-content',,),Net:NoSend,,,1))
      of Net:Web:Wizard
        packet.append(p_web.DivHeader('tab_MailboxesFormControl0',p_web.combine(clip(p_web.site.style.FormTabInner) & ' nt-wizard',,),Net:NoSend,,'data-tabid="0"',1))
      of Net:Web:Carousel
        packet.append('<div id="tab_MailboxesFormControl0_div" class="' & p_web.combine(clip(p_web.site.style.FormTabInner) & ' nt-carousel',,) & '">')
        packet.append('<h3 class="'&p_web.combine(p_web.site.style.FormTabTitle,' nt-tab-carousel-header',)&'">'&|
          '<div>' & p_web.Translate('General')&'</div></h3>' & p_web.CRLF)
      of Net:Web:Rounded
        packet.append(p_web.DivHeader('tab_MailboxesFormControl0',p_web.combine(clip(p_web.site.style.FormTabInner) & ' nt-rounded',,),Net:NoSend,,,1))
        packet.append('<h3 class="'&p_web.combine(p_web.site.style.FormTabTitle,' nt-rounded-header ui-corner-all',)&'">' & |
          '<div>' & p_web.Translate('General')&'</div></h3>' & p_web.CRLF)
      of Net:Web:Plain
        packet.append(p_web.DivHeader('tab_MailboxesFormControl0',p_web.combine(clip(p_web.site.style.FormTabInner) & ' nt-plain',,),Net:NoSend,,,1) & '<fieldset class="ui-tabs ui-widget ui-widget-content ui-corner-all plain nt-plain-fieldset"><legend class="'&p_web.combine(' nt-plain-legend',)&'">' & |
          '<div>' & p_web.Translate('General')&'</div></legend>' & p_web.CRLF)
      of Net:Web:None
        packet.append(p_web.DivHeader('tab_MailboxesFormControl0',p_web.combine(p_web.site.style.FormTabInner,,),Net:NoSend,,,1))
      end
      do SendPacket
      packet.append(p_web.FormTableStart('MailboxesFormControl_container',p_web.combine('FormTable',),,loc:LayoutMethod))
      do SendPacket
        if loc:rowstarted = 0
          packet.append(p_web.FormTableRowStart( p_web.NoColon(lower('MAI:MailBoxName_row')) ,p_web.Combine(lower(' MailboxesFormControl-MAI:MailBoxName-row'),,), , , ,, loc:LayoutMethod))
          if loc:columncounter > loc:maxcolumns then loc:maxcolumns = loc:columncounter.
          loc:columncounter = 0
          loc:rowstarted = 1
        end
        do SendPacket
        loc:width = ''
        If loc:cellstarted = 0
          packet.append(p_web.FormTableCellStart( ,p_web.Combine(' nt-prompt-align-middle',), ,  ,, , clip(loc:width) , loc:LayoutMethod, net:CellTypePrompt))
          loc:columncounter += 1
          do SendPacket
          loc:cellstarted = 1
          loc:FirstInCell = 1
        Else
          loc:FirstInCell = 0
        End
        do Prompt::MAI:MailBoxName
        If loc:FirstInCell = 1
          packet.append(p_web.FormTableCellEnd( ,loc:LayoutMethod))
          loc:cellstarted = 0
          do SendPacket
        End
        if loc:cellstarted = 0
          loc:width = ''
          packet.append(p_web.FormTableCellStart( , p_web.Combine(,), ,  ,, , clip(loc:width) , loc:LayoutMethod, net:CellTypeValue))
          loc:columncounter += 1
          do SendPacket
          loc:cellstarted = 1
        end
        do Value::MAI:MailBoxName
        packet.append(p_web.FormTableCellEnd( ,loc:LayoutMethod))
        loc:cellstarted = 0
          loc:width = ''
          packet.append(p_web.FormTableCellStart( , , , ,, , clip(loc:width) , loc:LayoutMethod, net:CellTypeComment))
          loc:columncounter += 1
          do SendPacket
          do Comment::MAI:MailBoxName
          packet.append(p_web.FormTableCellEnd( ,loc:LayoutMethod))
          loc:cellstarted = 0
          do SendPacket
        if loc:cellstarted
          packet.append(p_web.FormTableCellEnd( ,loc:LayoutMethod))
          packet.append(p_web.FormTableRowEnd( ,loc:LayoutMethod))
          loc:cellstarted = 0
        Else
          packet.append(p_web.FormTableRowEnd( ,loc:LayoutMethod))
        End
        loc:rowstarted = 0
        loc:cellstarted = 0
      do SendPacket
        if loc:rowstarted = 0
          packet.append(p_web.FormTableRowStart( p_web.NoColon(lower('MAI:Password_row')) ,p_web.Combine(lower(' MailboxesFormControl-MAI:Password-row'),,), , , ,, loc:LayoutMethod))
          if loc:columncounter > loc:maxcolumns then loc:maxcolumns = loc:columncounter.
          loc:columncounter = 0
          loc:rowstarted = 1
        end
        do SendPacket
        loc:width = ''
        If loc:cellstarted = 0
          packet.append(p_web.FormTableCellStart( ,p_web.Combine(' nt-prompt-align-middle',), ,  ,, , clip(loc:width) , loc:LayoutMethod, net:CellTypePrompt))
          loc:columncounter += 1
          do SendPacket
          loc:cellstarted = 1
          loc:FirstInCell = 1
        Else
          loc:FirstInCell = 0
        End
        do Prompt::MAI:Password
        If loc:FirstInCell = 1
          packet.append(p_web.FormTableCellEnd( ,loc:LayoutMethod))
          loc:cellstarted = 0
          do SendPacket
        End
        if loc:cellstarted = 0
          loc:width = ''
          packet.append(p_web.FormTableCellStart( , p_web.Combine(,), ,  ,, , clip(loc:width) , loc:LayoutMethod, net:CellTypeValue))
          loc:columncounter += 1
          do SendPacket
          loc:cellstarted = 1
        end
        do Value::MAI:Password
        packet.append(p_web.FormTableCellEnd( ,loc:LayoutMethod))
        loc:cellstarted = 0
          loc:width = ''
          packet.append(p_web.FormTableCellStart( , , , ,, , clip(loc:width) , loc:LayoutMethod, net:CellTypeComment))
          loc:columncounter += 1
          do SendPacket
          do Comment::MAI:Password
          packet.append(p_web.FormTableCellEnd( ,loc:LayoutMethod))
          loc:cellstarted = 0
          do SendPacket
        if loc:cellstarted
          packet.append(p_web.FormTableCellEnd( ,loc:LayoutMethod))
          packet.append(p_web.FormTableRowEnd( ,loc:LayoutMethod))
          loc:cellstarted = 0
        Else
          packet.append(p_web.FormTableRowEnd( ,loc:LayoutMethod))
        End
        loc:rowstarted = 0
        loc:cellstarted = 0
      do SendPacket
        if loc:rowstarted = 0
          packet.append(p_web.FormTableRowStart( p_web.NoColon(lower('MAI:CollectFrom_row')) ,p_web.Combine(lower(' MailboxesFormControl-MAI:CollectFrom-row'),,), , , ,, loc:LayoutMethod))
          if loc:columncounter > loc:maxcolumns then loc:maxcolumns = loc:columncounter.
          loc:columncounter = 0
          loc:rowstarted = 1
        end
        do SendPacket
        loc:width = ''
        If loc:cellstarted = 0
          packet.append(p_web.FormTableCellStart( ,p_web.Combine(' nt-prompt-align-middle',), ,  ,, , clip(loc:width) , loc:LayoutMethod, net:CellTypePrompt))
          loc:columncounter += 1
          do SendPacket
          loc:cellstarted = 1
          loc:FirstInCell = 1
        Else
          loc:FirstInCell = 0
        End
        do Prompt::MAI:CollectFrom
        If loc:FirstInCell = 1
          packet.append(p_web.FormTableCellEnd( ,loc:LayoutMethod))
          loc:cellstarted = 0
          do SendPacket
        End
        if loc:cellstarted = 0
          loc:width = ''
          packet.append(p_web.FormTableCellStart( , p_web.Combine(,), ,  ,, , clip(loc:width) , loc:LayoutMethod, net:CellTypeValue))
          loc:columncounter += 1
          do SendPacket
          loc:cellstarted = 1
        end
        do Value::MAI:CollectFrom
        packet.append(p_web.FormTableCellEnd( ,loc:LayoutMethod))
        loc:cellstarted = 0
          loc:width = ''
          packet.append(p_web.FormTableCellStart( , , , ,, , clip(loc:width) , loc:LayoutMethod, net:CellTypeComment))
          loc:columncounter += 1
          do SendPacket
          do Comment::MAI:CollectFrom
          packet.append(p_web.FormTableCellEnd( ,loc:LayoutMethod))
          loc:cellstarted = 0
          do SendPacket
        if loc:cellstarted
          packet.append(p_web.FormTableCellEnd( ,loc:LayoutMethod))
          packet.append(p_web.FormTableRowEnd( ,loc:LayoutMethod))
          loc:cellstarted = 0
        Else
          packet.append(p_web.FormTableRowEnd( ,loc:LayoutMethod))
        End
        loc:rowstarted = 0
        loc:cellstarted = 0
      do SendPacket
        if loc:rowstarted = 0
          packet.append(p_web.FormTableRowStart( p_web.NoColon(lower('MAI:CollectTo_row')) ,p_web.Combine(lower(' MailboxesFormControl-MAI:CollectTo-row'),,), , , ,, loc:LayoutMethod))
          if loc:columncounter > loc:maxcolumns then loc:maxcolumns = loc:columncounter.
          loc:columncounter = 0
          loc:rowstarted = 1
        end
        do SendPacket
        loc:width = ''
        If loc:cellstarted = 0
          packet.append(p_web.FormTableCellStart( ,p_web.Combine(' nt-prompt-align-middle',), ,  ,, , clip(loc:width) , loc:LayoutMethod, net:CellTypePrompt))
          loc:columncounter += 1
          do SendPacket
          loc:cellstarted = 1
          loc:FirstInCell = 1
        Else
          loc:FirstInCell = 0
        End
        do Prompt::MAI:CollectTo
        If loc:FirstInCell = 1
          packet.append(p_web.FormTableCellEnd( ,loc:LayoutMethod))
          loc:cellstarted = 0
          do SendPacket
        End
        if loc:cellstarted = 0
          loc:width = ''
          packet.append(p_web.FormTableCellStart( , p_web.Combine(,), ,  ,, , clip(loc:width) , loc:LayoutMethod, net:CellTypeValue))
          loc:columncounter += 1
          do SendPacket
          loc:cellstarted = 1
        end
        do Value::MAI:CollectTo
        packet.append(p_web.FormTableCellEnd( ,loc:LayoutMethod))
        loc:cellstarted = 0
          loc:width = ''
          packet.append(p_web.FormTableCellStart( , , , ,, , clip(loc:width) , loc:LayoutMethod, net:CellTypeComment))
          loc:columncounter += 1
          do SendPacket
          do Comment::MAI:CollectTo
          packet.append(p_web.FormTableCellEnd( ,loc:LayoutMethod))
          loc:cellstarted = 0
          do SendPacket
        if loc:cellstarted
          packet.append(p_web.FormTableCellEnd( ,loc:LayoutMethod))
          packet.append(p_web.FormTableRowEnd( ,loc:LayoutMethod))
          loc:cellstarted = 0
        Else
          packet.append(p_web.FormTableRowEnd( ,loc:LayoutMethod))
        End
        loc:rowstarted = 0
        loc:cellstarted = 0
      do SendPacket
        if loc:rowstarted = 0
          packet.append(p_web.FormTableRowStart( p_web.NoColon(lower('TimeClock_row')) ,p_web.Combine(lower(' MailboxesFormControl-TimeClock-row'),,), , , ,, loc:LayoutMethod))
          if loc:columncounter > loc:maxcolumns then loc:maxcolumns = loc:columncounter.
          loc:columncounter = 0
          loc:rowstarted = 1
        end
        do SendPacket
        loc:width = ''
        If loc:cellstarted = 0
          packet.append(p_web.FormTableCellStart( ,p_web.Combine(' nt-prompt-align-middle',), ,  ,, , clip(loc:width) , loc:LayoutMethod, net:CellTypePrompt))
          loc:columncounter += 1
          do SendPacket
          loc:cellstarted = 1
          loc:FirstInCell = 1
        Else
          loc:FirstInCell = 0
        End
        If loc:FirstInCell = 1
          packet.append(p_web.FormTableCellEnd( ,loc:LayoutMethod))
          loc:cellstarted = 0
          do SendPacket
        End
        if loc:cellstarted = 0
          loc:width = ''
          packet.append(p_web.FormTableCellStart( , p_web.Combine(,), ,  ,, , clip(loc:width) , loc:LayoutMethod, net:CellTypeValue))
          loc:columncounter += 1
          do SendPacket
          loc:cellstarted = 1
        end
        do Value::TimeClock
        packet.append(p_web.FormTableCellEnd( ,loc:LayoutMethod))
        loc:cellstarted = 0
          loc:width = ''
          packet.append(p_web.FormTableCellStart( , , , ,, , clip(loc:width) , loc:LayoutMethod, net:CellTypeComment))
          loc:columncounter += 1
          do SendPacket
          do Comment::TimeClock
          packet.append(p_web.FormTableCellEnd( ,loc:LayoutMethod))
          loc:cellstarted = 0
          do SendPacket
        if loc:cellstarted
          packet.append(p_web.FormTableCellEnd( ,loc:LayoutMethod))
          packet.append(p_web.FormTableRowEnd( ,loc:LayoutMethod))
          loc:cellstarted = 0
        Else
          packet.append(p_web.FormTableRowEnd( ,loc:LayoutMethod))
        End
        loc:rowstarted = 0
        loc:cellstarted = 0
      do SendPacket
        if loc:rowstarted = 0
          packet.append(p_web.FormTableRowStart( p_web.NoColon(lower('DynamicChart_row')) ,p_web.Combine(lower(' MailboxesFormControl-DynamicChart-row'),,), , , ,, loc:LayoutMethod))
          if loc:columncounter > loc:maxcolumns then loc:maxcolumns = loc:columncounter.
          loc:columncounter = 0
          loc:rowstarted = 1
        end
        do SendPacket
        loc:width = ''
        If loc:cellstarted = 0
          packet.append(p_web.FormTableCellStart( ,p_web.Combine(' nt-prompt-align-middle',), ,  ,, , clip(loc:width) , loc:LayoutMethod, net:CellTypePrompt))
          loc:columncounter += 1
          do SendPacket
          loc:cellstarted = 1
          loc:FirstInCell = 1
        Else
          loc:FirstInCell = 0
        End
        If loc:FirstInCell = 1
          packet.append(p_web.FormTableCellEnd( ,loc:LayoutMethod))
          loc:cellstarted = 0
          do SendPacket
        End
        if loc:cellstarted = 0
          loc:width = ''
          packet.append(p_web.FormTableCellStart( , p_web.Combine(,), ,  ,, , clip(loc:width) , loc:LayoutMethod, net:CellTypeValue))
          loc:columncounter += 1
          do SendPacket
          loc:cellstarted = 1
        end
        do Value::DynamicChart
        packet.append(p_web.FormTableCellEnd( ,loc:LayoutMethod))
        loc:cellstarted = 0
          loc:width = ''
          packet.append(p_web.FormTableCellStart( , , , ,, , clip(loc:width) , loc:LayoutMethod, net:CellTypeComment))
          loc:columncounter += 1
          do SendPacket
          do Comment::DynamicChart
          packet.append(p_web.FormTableCellEnd( ,loc:LayoutMethod))
          loc:cellstarted = 0
          do SendPacket
        if loc:cellstarted
          packet.append(p_web.FormTableCellEnd( ,loc:LayoutMethod))
          packet.append(p_web.FormTableRowEnd( ,loc:LayoutMethod))
          loc:cellstarted = 0
        Else
          packet.append(p_web.FormTableRowEnd( ,loc:LayoutMethod))
        End
        loc:rowstarted = 0
        loc:cellstarted = 0
      do SendPacket
      if loc:rowstarted and loc:cellstarted
        packet.append(p_web.FormTableCellEnd( ,loc:LayoutMethod))
        packet.append(p_web.FormTableRowEnd( ,loc:LayoutMethod))
        packet.append(p_web.FormTableEnd('MailboxesFormControl_container',loc:LayoutMethod))
        loc:cellstarted = 0
        loc:rowstarted = 0
      elsif loc:rowstarted
        packet.append(p_web.FormTableRowEnd( ,loc:LayoutMethod))
        packet.append(p_web.FormTableEnd('MailboxesFormControl_container',loc:LayoutMethod))
        loc:rowstarted = 0
      else
        packet.append(p_web.FormTableEnd('MailboxesFormControl_container',loc:LayoutMethod))
      end
      do SendPacket
      Case loc:TabStyle
      of Net:Web:Plain
        packet.append('</fieldset>' & p_web.DivFooter(Net:NoSend,'tab_MailboxesFormControl0'))
      of Net:Web:Carousel
        packet.append('</div><13,10>')
      of Net:Web:TaskPanel
        packet.append(p_web.DivFooter(Net:NoSend))
        loc:options.Free(True)
        p_web.SetOption(loc:options,'collapsible','^true')
        p_web.SetOption(loc:options,'heightStyle','content')
        p_web.SetOption(loc:options,'active', choose(p_web.GetSessionValue('showtab_MailboxesFormControl')>0,p_web.GetSessionValue('showtab_MailboxesFormControl'),'0'))
        p_web.SetOption(loc:options,'activate', 'function(event, ui) {{ TabChanged(''MailboxesFormControl_tabchanged'',$(this).accordion("option","active")); }')
        p_web.jQuery('#' & lower('tab_MailboxesFormControl0_taskpanel') & '_div','accordion',loc:options)
        packet.append(p_web.DivFooter(Net:NoSend,'tab_MailboxesFormControl0'))
      else
        packet.append(p_web.DivFooter(Net:NoSend,'tab_MailboxesFormControl0'))
      end
      do SendPacket
Heading  Routine
  data
loc:disabled  long
  code
  If p_web.GetValue('_title_') <> ''
    loc:Heading = p_web.Translate(p_web.GetValue('_title_'),(Net:HtmlOk*0)+(Net:UnsafeHtmlOk*0))
  Else
    loc:Heading = p_web.Translate('Mailbox Setup',(Net:HtmlOk*0)+(Net:UnsafeHtmlOk*0))
  End
  If p_web.site.HeaderBackButton and (loc:inNetWebPopup or loc:popup)
    loc:Heading = p_web.AddHeaderBackButton(loc:Heading,,)
  End
  If loc:inNetWebPopup = 1
    exit
  end
  If loc:Heading
    If loc:popup
      p_web.SetPopupDialogHeading('MailboxesFormControl',clip(loc:Heading),(Net:HtmlOk*0)+(Net:UnsafeHtmlOk*0))
    Else
      packet.append(lower('<div id="form-access-MailboxesFormControl"></div>'))
        p_web.DivHeader('MailboxesFormControl_header',p_web.combine(p_web.site.style.formheading,'MainHeading'))
        If p_web.CanCallAddSec() = net:ok
          packet.Append(clip(loc:Heading) & '<div data-do="swa" class="nt-sec-key-form-heading">' & p_web.CreateIcon('key',,,net:ui))
        Else
          packet.Append(clip(loc:Heading))
        End
        do SendPacket
        p_web.DivFooter()
    End
  End

Refresh::MAI:MailBoxName  Routine
  do Prompt::MAI:MailBoxName
  do Value::MAI:MailBoxName
  do Comment::MAI:MailBoxName

Prompt::MAI:MailBoxName  Routine
  loc:fieldclass = Choose(not(1=0),p_web.combine(p_web.site.style.formprompt,,),'nt-hidden')
  If p_web.site.FrontLoaded and loc:frontloading = net:GeneratingData
  Else
    packet.append(p_web.DivHeader('MailboxesFormControl_' & p_web.nocolon('MAI:MailBoxName') & '_prompt',loc:fieldClass,Net:NoSend))
  End
  loc:prompt = Choose(1=0,'',p_web.Translate('Name:'))
  If p_web.site.FrontLoaded and loc:frontloading = net:GeneratingData
    p_web.Script('$(''[for="'&p_web.nocolon('MAI:MailBoxName')&'"]'').html("'&clip(loc:prompt)&'");')
  Else ! not front loaded
    packet.append('<label for="'&p_web.nocolon('MAI:MailBoxName')&'">' & clip(loc:prompt) & '</label>')
    packet.append(p_web.DivFooter(Net:NoSend,,,0))
    do SendPacket
  End  ! front loaded


Validate::MAI:MailBoxName Routine
  If p_web.Ajax = 1 and p_web.ifExistsValue('NewValue')
    MAI:MailBoxName = p_web.GetValue('NewValue')
  ElsIf p_web.IfExistsValue('Value') !FormFieldPicture =   !FieldPicture = @s80
    MAI:MailBoxName = p_web.DeformatValue(p_web.GetValue('Value'),'@s80')
  End
  do ValidateValue::MAI:MailBoxName  ! copies value to session value if valid.

  p_web.PushEvent('parentupdated')
  do Refresh::MAI:MailBoxName   ! Field is auto-validated
  do SendMessage
  p_web.ntForm(loc:formname,'ready')
  p_web.PopEvent()

ValidateValue::MAI:MailBoxName  Routine
        If loc:invalid = '' then p_web.SetSessionValue('MAI:MailBoxName',MAI:MailBoxName).

Value::MAI:MailBoxName  Routine
  data
loc:fieldclass     string(StyleStringSize)
loc:extra          string(ExtraStringSize)
loc:disabled       long
loc:saveCallPopups long
loc:counter        long
loc:Filter       StringTheory
  code
  loc:fieldclass = p_web.Combine(p_web.site.style.formentrydiv,,)
  loc:fieldclass = choose(not(1=0),loc:fieldclass,'nt-hidden ' & loc:fieldclass)
  If p_web.site.FrontLoaded = 0 or loc:frontloading = net:GeneratingPage
    loc:fieldclass = 'nt-form-last-in-cell ' & loc:fieldclass
    p_web.DivHeader('MailboxesFormControl_' & p_web.nocolon('MAI:MailBoxName') & '_value',loc:fieldclass)
  End
  loc:fieldclass = ''
  loc:fieldclass = p_web.combine(p_web.site.style.formentry,'FormEntry',) !t2 String
  If loc:viewonly
    loc:fieldclass = clip(loc:fieldclass) & ' ' & p_web.combine(p_web.site.style.formEntryReadOnly,'formreadonly')
  End
  If loc:retrying
    MAI:MailBoxName = p_web.RestoreValue('MAI:MailBoxName')
    do ValidateValue::MAI:MailBoxName
    If MAI:MailBoxName:IsInvalid then loc:fieldclass = clip(loc:fieldclass) & ' ' & p_web.combine(p_web.site.style.formEntryError,'formerror').
  End
  loc:extra = ''
  If Not (1=0)  ! SecFieldHideStateRtn
    p_web.site.HTMLEditor = net:HTMLTinyMCE
    ! --- STRING --- MAI:MailBoxName
    loc:AutoComplete = 'autocomplete="' & loc:Random.random(4,st:lower) & '"'
    loc:readonly = Choose(loc:viewonly,'readonly','')
      loc:extra = clip(loc:extra) & p_web.SetEntryWidth(,Net:Form)
    loc:javascript = ''  ! MakeFormJavaScript
    if p_web.site.FrontLoaded and loc:frontloading = net:GeneratingData
      p_web.Script('$(''#'&p_web.nocolon('MAI:MailBoxName')&''').val('''&p_web._jsok(p_web.GetSessionValueFormat('MAI:MailBoxName'))&''');')
    Else
      packet.append(p_web.CreateInput('text','MAI:MailBoxName',p_web.GetSessionValueFormat('MAI:MailBoxName'),loc:fieldclass,loc:readonly,clip(loc:extra) & ' ' & clip(loc:autocomplete),,loc:javascript,p_web.PicLength('@s80'),,'MAI:MailBoxName',,'imm',,,,'MailboxesFormControl')  & p_web.CRLF) !b
    End
    do SendPacket
  End
  if p_web.site.FrontLoaded = 0 or loc:frontloading = net:GeneratingPage
    p_web.DivFooter(,,,0)
  end

Comment::MAI:MailBoxName  Routine
  data
loc:fieldclass string(StyleStringSize)
  code
  loc:fieldclass = p_web.Combine(p_web.site.style.formcomment,'FormComments',)
  if MAI:MailBoxName:IsInvalid
    loc:fieldclass = clip(loc:fieldclass) & ' ' & p_web.site.style.FormCommentError
  end
  loc:comment = ''
  loc:fieldclass = Choose(not(1=0),loc:fieldclass,'nt-hidden ' & loc:fieldclass)
  If p_web.site.FrontLoaded and loc:frontloading = net:GeneratingData
  else
    packet.append(p_web.DivHeader('MailboxesFormControl_' & p_web.nocolon('MAI:MailBoxName') & '_comment',loc:fieldclass,Net:NoSend))
  End
  If 1=0
    loc:comment = ''
  End
  If p_web.site.FrontLoaded and loc:frontloading = net:GeneratingData
    p_web.script('$("#MailboxesFormControl_' & p_web.nocolon('MAI:MailBoxName') & '_comment_div").html("'&clip(loc:comment)&'");')
  Else
    packet.append(clip(loc:comment) & p_web.DivFooter(net:nosend,,,0))
  End
  do SendPacket

Refresh::MAI:Password  Routine
  do Prompt::MAI:Password
  do Value::MAI:Password
  do Comment::MAI:Password

Prompt::MAI:Password  Routine
  loc:fieldclass = Choose(not(1=0),p_web.combine(p_web.site.style.formprompt,,),'nt-hidden')
  If p_web.site.FrontLoaded and loc:frontloading = net:GeneratingData
  Else
    packet.append(p_web.DivHeader('MailboxesFormControl_' & p_web.nocolon('MAI:Password') & '_prompt',loc:fieldClass,Net:NoSend))
  End
  loc:prompt = Choose(1=0,'',p_web.Translate('Password:'))
  If p_web.site.FrontLoaded and loc:frontloading = net:GeneratingData
    p_web.Script('$(''[for="'&p_web.nocolon('MAI:Password')&'"]'').html("'&clip(loc:prompt)&'");')
  Else ! not front loaded
    packet.append('<label for="'&p_web.nocolon('MAI:Password')&'">' & clip(loc:prompt) & '</label>')
    packet.append(p_web.DivFooter(Net:NoSend,,,0))
    do SendPacket
  End  ! front loaded


Validate::MAI:Password Routine
  If p_web.Ajax = 1 and p_web.ifExistsValue('NewValue')
    MAI:Password = p_web.GetValue('NewValue')
  ElsIf p_web.IfExistsValue('Value') !FormFieldPicture =   !FieldPicture = @s80
    MAI:Password = p_web.DeformatValue(p_web.GetValue('Value'),'@s80')
  End
  do ValidateValue::MAI:Password  ! copies value to session value if valid.

  p_web.PushEvent('parentupdated')
  do Refresh::MAI:Password   ! Field is auto-validated
  do SendMessage
  p_web.ntForm(loc:formname,'ready')
  p_web.PopEvent()

ValidateValue::MAI:Password  Routine
        If loc:invalid = '' then p_web.SetSessionValue('MAI:Password',MAI:Password).

Value::MAI:Password  Routine
  data
loc:fieldclass     string(StyleStringSize)
loc:extra          string(ExtraStringSize)
loc:disabled       long
loc:saveCallPopups long
loc:counter        long
loc:Filter       StringTheory
  code
  loc:fieldclass = p_web.Combine(p_web.site.style.formentrydiv,,)
  loc:fieldclass = choose(not(1=0),loc:fieldclass,'nt-hidden ' & loc:fieldclass)
  If p_web.site.FrontLoaded = 0 or loc:frontloading = net:GeneratingPage
    loc:fieldclass = 'nt-form-last-in-cell ' & loc:fieldclass
    p_web.DivHeader('MailboxesFormControl_' & p_web.nocolon('MAI:Password') & '_value',loc:fieldclass)
  End
  loc:fieldclass = ''
  loc:fieldclass = p_web.combine(p_web.site.style.formentry,'FormEntry',) !t2 String
  If loc:viewonly
    loc:fieldclass = clip(loc:fieldclass) & ' ' & p_web.combine(p_web.site.style.formEntryReadOnly,'formreadonly')
  End
  If loc:retrying
    MAI:Password = p_web.RestoreValue('MAI:Password')
    do ValidateValue::MAI:Password
    If MAI:Password:IsInvalid then loc:fieldclass = clip(loc:fieldclass) & ' ' & p_web.combine(p_web.site.style.formEntryError,'formerror').
  End
  loc:extra = ''
  If Not (1=0)  ! SecFieldHideStateRtn
    p_web.site.HTMLEditor = net:HTMLTinyMCE
    ! --- STRING --- MAI:Password
    loc:AutoComplete = 'autocomplete="' & loc:Random.random(4,st:lower) & '"'
    loc:readonly = Choose(loc:viewonly,'readonly','')
      loc:extra = clip(loc:extra) & p_web.SetEntryWidth(,Net:Form)
    loc:javascript = ''  ! MakeFormJavaScript
    if p_web.site.FrontLoaded and loc:frontloading = net:GeneratingData
      p_web.Script('$(''#'&p_web.nocolon('MAI:Password')&''').val('''&p_web._jsok(p_web.GetSessionValue('MAI:Password'))&''');')
    Else
      packet.Append(p_web.CreateInput('password','MAI:Password',p_web.GetSessionValue('MAI:Password'),loc:fieldclass,loc:readonly,clip(loc:extra) & ' ' & clip(loc:autocomplete),,loc:javascript,p_web.PicLength('@s80'),,'MAI:Password',,'imm',,,,'MailboxesFormControl')  & p_web.CRLF)
    End
    do SendPacket
  End
  if p_web.site.FrontLoaded = 0 or loc:frontloading = net:GeneratingPage
    p_web.DivFooter(,,,0)
  end

Comment::MAI:Password  Routine
  data
loc:fieldclass string(StyleStringSize)
  code
  loc:fieldclass = p_web.Combine(p_web.site.style.formcomment,'FormComments',)
  if MAI:Password:IsInvalid
    loc:fieldclass = clip(loc:fieldclass) & ' ' & p_web.site.style.FormCommentError
  end
  loc:comment = ''
  loc:fieldclass = Choose(not(1=0),loc:fieldclass,'nt-hidden ' & loc:fieldclass)
  If p_web.site.FrontLoaded and loc:frontloading = net:GeneratingData
  else
    packet.append(p_web.DivHeader('MailboxesFormControl_' & p_web.nocolon('MAI:Password') & '_comment',loc:fieldclass,Net:NoSend))
  End
  If 1=0
    loc:comment = ''
  End
  If p_web.site.FrontLoaded and loc:frontloading = net:GeneratingData
    p_web.script('$("#MailboxesFormControl_' & p_web.nocolon('MAI:Password') & '_comment_div").html("'&clip(loc:comment)&'");')
  Else
    packet.append(clip(loc:comment) & p_web.DivFooter(net:nosend,,,0))
  End
  do SendPacket

Refresh::MAI:CollectFrom  Routine
  do Prompt::MAI:CollectFrom
  do Value::MAI:CollectFrom
  do Comment::MAI:CollectFrom

Prompt::MAI:CollectFrom  Routine
  loc:fieldclass = Choose(not(1=0),p_web.combine(p_web.site.style.formprompt,,),'nt-hidden')
  If p_web.site.FrontLoaded and loc:frontloading = net:GeneratingData
  Else
    packet.append(p_web.DivHeader('MailboxesFormControl_' & p_web.nocolon('MAI:CollectFrom') & '_prompt',loc:fieldClass,Net:NoSend))
  End
  loc:prompt = Choose(1=0,'',p_web.Translate('Collect From:'))
  If p_web.site.FrontLoaded and loc:frontloading = net:GeneratingData
    p_web.Script('$(''[for="'&p_web.nocolon('MAI:CollectFrom')&'"]'').html("'&clip(loc:prompt)&'");')
  Else ! not front loaded
    packet.append('<label for="'&p_web.nocolon('MAI:CollectFrom')&'">' & clip(loc:prompt) & '</label>')
    packet.append(p_web.DivFooter(Net:NoSend,,,0))
    do SendPacket
  End  ! front loaded


Validate::MAI:CollectFrom Routine
  If p_web.Ajax = 1 and p_web.ifExistsValue('NewValue')
    MAI:CollectFrom = p_web.GetValue('NewValue')
  ElsIf p_web.IfExistsValue('Value') !FormFieldPicture =   !FieldPicture = @t1
    MAI:CollectFrom = p_web.DeformatValue(p_web.GetValue('Value'),'@t1')
  End
  do ValidateValue::MAI:CollectFrom  ! copies value to session value if valid.

  p_web.PushEvent('parentupdated')
  do Refresh::MAI:CollectFrom   ! Field is auto-validated
  do SendMessage
  p_web.ntForm(loc:formname,'ready')
  p_web.PopEvent()

ValidateValue::MAI:CollectFrom  Routine
        If loc:invalid = '' then p_web.SetSessionValue('MAI:CollectFrom',MAI:CollectFrom).

Value::MAI:CollectFrom  Routine
  data
loc:fieldclass     string(StyleStringSize)
loc:extra          string(ExtraStringSize)
loc:disabled       long
loc:saveCallPopups long
loc:counter        long
loc:Filter       StringTheory
  code
  loc:fieldclass = p_web.Combine(p_web.site.style.formentrydiv,,)
  loc:fieldclass = choose(not(1=0),loc:fieldclass,'nt-hidden ' & loc:fieldclass)
  If p_web.site.FrontLoaded = 0 or loc:frontloading = net:GeneratingPage
    loc:fieldclass = 'nt-form-last-in-cell ' & loc:fieldclass
    p_web.DivHeader('MailboxesFormControl_' & p_web.nocolon('MAI:CollectFrom') & '_value',loc:fieldclass)
  End
  loc:fieldclass = ''
  loc:fieldclass = p_web.combine(p_web.site.style.formentry,'FormEntry',) !t2 String
  If loc:viewonly
    loc:fieldclass = clip(loc:fieldclass) & ' ' & p_web.combine(p_web.site.style.formEntryReadOnly,'formreadonly')
  End
  If loc:retrying
    MAI:CollectFrom = p_web.RestoreValue('MAI:CollectFrom')
    do ValidateValue::MAI:CollectFrom
    If MAI:CollectFrom:IsInvalid then loc:fieldclass = clip(loc:fieldclass) & ' ' & p_web.combine(p_web.site.style.formEntryError,'formerror').
  End
  loc:extra = ''
  If Not (1=0)  ! SecFieldHideStateRtn
    p_web.site.HTMLEditor = net:HTMLTinyMCE
    ! --- STRING --- MAI:CollectFrom
    loc:AutoComplete = 'autocomplete="' & loc:Random.random(4,st:lower) & '"'
    loc:readonly = Choose(loc:viewonly,'readonly','')
      loc:extra = clip(loc:extra) & p_web.SetEntryWidth(,Net:Form)
    loc:javascript = ''  ! MakeFormJavaScript
    if p_web.site.FrontLoaded and loc:frontloading = net:GeneratingData
      p_web.Script('$(''#'&p_web.nocolon('MAI:CollectFrom')&''').val('''&p_web._jsok(p_web.GetSessionValueFormat('MAI:CollectFrom'))&''');')
    Else
      packet.append(p_web.CreateInput('text','MAI:CollectFrom',p_web.GetSessionValueFormat('MAI:CollectFrom'),loc:fieldclass,loc:readonly,clip(loc:extra) & ' ' & clip(loc:autocomplete),,loc:javascript,p_web.PicLength('@t1'),'pic set in dict','MAI:CollectFrom',,'imm',,,,'MailboxesFormControl')  & p_web.CRLF) !b
    End
    do SendPacket
  End
  if p_web.site.FrontLoaded = 0 or loc:frontloading = net:GeneratingPage
    p_web.DivFooter(,,,0)
  end

Comment::MAI:CollectFrom  Routine
  data
loc:fieldclass string(StyleStringSize)
  code
  loc:fieldclass = p_web.Combine(p_web.site.style.formcomment,'FormComments',)
  if MAI:CollectFrom:IsInvalid
    loc:fieldclass = clip(loc:fieldclass) & ' ' & p_web.site.style.FormCommentError
  end
  loc:comment = ''
  loc:fieldclass = Choose(not(1=0),loc:fieldclass,'nt-hidden ' & loc:fieldclass)
  If p_web.site.FrontLoaded and loc:frontloading = net:GeneratingData
  else
    packet.append(p_web.DivHeader('MailboxesFormControl_' & p_web.nocolon('MAI:CollectFrom') & '_comment',loc:fieldclass,Net:NoSend))
  End
  If 1=0
    loc:comment = ''
  End
  If p_web.site.FrontLoaded and loc:frontloading = net:GeneratingData
    p_web.script('$("#MailboxesFormControl_' & p_web.nocolon('MAI:CollectFrom') & '_comment_div").html("'&clip(loc:comment)&'");')
  Else
    packet.append(clip(loc:comment) & p_web.DivFooter(net:nosend,,,0))
  End
  do SendPacket

Refresh::MAI:CollectTo  Routine
  do Prompt::MAI:CollectTo
  do Value::MAI:CollectTo
  do Comment::MAI:CollectTo

Prompt::MAI:CollectTo  Routine
  loc:fieldclass = Choose(not(1=0),p_web.combine(p_web.site.style.formprompt,,),'nt-hidden')
  If p_web.site.FrontLoaded and loc:frontloading = net:GeneratingData
  Else
    packet.append(p_web.DivHeader('MailboxesFormControl_' & p_web.nocolon('MAI:CollectTo') & '_prompt',loc:fieldClass,Net:NoSend))
  End
  loc:prompt = Choose(1=0,'',p_web.Translate('Collect To:'))
  If p_web.site.FrontLoaded and loc:frontloading = net:GeneratingData
    p_web.Script('$(''[for="'&p_web.nocolon('MAI:CollectTo')&'"]'').html("'&clip(loc:prompt)&'");')
  Else ! not front loaded
    packet.append('<label for="'&p_web.nocolon('MAI:CollectTo')&'">' & clip(loc:prompt) & '</label>')
    packet.append(p_web.DivFooter(Net:NoSend,,,0))
    do SendPacket
  End  ! front loaded


Validate::MAI:CollectTo Routine
  If p_web.Ajax = 1 and p_web.ifExistsValue('NewValue')
    MAI:CollectTo = p_web.GetValue('NewValue')
  ElsIf p_web.IfExistsValue('Value') !FormFieldPicture = '@t4'  !FieldPicture = @n10
    MAI:CollectTo = p_web.DeformatValue(p_web.GetValue('Value'),'@t4')
  End
  do ValidateValue::MAI:CollectTo  ! copies value to session value if valid.

  p_web.PushEvent('parentupdated')
  do Refresh::MAI:CollectTo   ! Field is auto-validated
  do SendMessage
  p_web.ntForm(loc:formname,'ready')
  p_web.PopEvent()

ValidateValue::MAI:CollectTo  Routine
        If loc:invalid = '' then p_web.SetSessionValue('MAI:CollectTo',MAI:CollectTo).

Value::MAI:CollectTo  Routine
  data
loc:fieldclass     string(StyleStringSize)
loc:extra          string(ExtraStringSize)
loc:disabled       long
loc:saveCallPopups long
loc:counter        long
loc:Filter       StringTheory
  code
  loc:fieldclass = p_web.Combine(p_web.site.style.formentrydiv,,)
  loc:fieldclass = choose(not(1=0),loc:fieldclass,'nt-hidden ' & loc:fieldclass)
  If p_web.site.FrontLoaded = 0 or loc:frontloading = net:GeneratingPage
    loc:fieldclass = 'nt-form-last-in-cell ' & loc:fieldclass
    p_web.DivHeader('MailboxesFormControl_' & p_web.nocolon('MAI:CollectTo') & '_value',loc:fieldclass)
  End
  loc:fieldclass = ''
  loc:fieldclass = p_web.combine(p_web.site.style.formentry,'FormEntry',) !t2 String
  If loc:viewonly
    loc:fieldclass = clip(loc:fieldclass) & ' ' & p_web.combine(p_web.site.style.formEntryReadOnly,'formreadonly')
  End
  If loc:retrying
    MAI:CollectTo = p_web.RestoreValue('MAI:CollectTo')
    do ValidateValue::MAI:CollectTo
    If MAI:CollectTo:IsInvalid then loc:fieldclass = clip(loc:fieldclass) & ' ' & p_web.combine(p_web.site.style.formEntryError,'formerror').
  End
  loc:extra = ''
  If Not (1=0)  ! SecFieldHideStateRtn
    p_web.site.HTMLEditor = net:HTMLTinyMCE
    ! --- STRING --- MAI:CollectTo
    loc:AutoComplete = 'autocomplete="' & loc:Random.random(4,st:lower) & '"'
    loc:readonly = Choose(loc:viewonly,'readonly','')
      loc:extra = clip(loc:extra) & p_web.SetEntryWidth(,Net:Form)
    loc:javascript = ''  ! MakeFormJavaScript
    if p_web.site.FrontLoaded and loc:frontloading = net:GeneratingData
      p_web.Script('$(''#'&p_web.nocolon('MAI:CollectTo')&''').val('''&p_web._jsok(p_web.FormatValue(p_web.GetSessionValue('MAI:CollectTo'),'@t4'))&''');')
    Else
      packet.append(p_web.CreateInput('text','MAI:CollectTo',p_web.GetSessionValue('MAI:CollectTo'),loc:fieldclass,loc:readonly,clip(loc:extra) & ' ' & clip(loc:autocomplete),'@t4',loc:javascript,,'pic not set in dict','MAI:CollectTo',,'imm',,,,'MailboxesFormControl')  & p_web.CRLF) !a
    End
    do SendPacket
  End
  if p_web.site.FrontLoaded = 0 or loc:frontloading = net:GeneratingPage
    p_web.DivFooter(,,,0)
  end

Comment::MAI:CollectTo  Routine
  data
loc:fieldclass string(StyleStringSize)
  code
  loc:fieldclass = p_web.Combine(p_web.site.style.formcomment,'FormComments',)
  if MAI:CollectTo:IsInvalid
    loc:fieldclass = clip(loc:fieldclass) & ' ' & p_web.site.style.FormCommentError
  end
  loc:comment = ''
  loc:fieldclass = Choose(not(1=0),loc:fieldclass,'nt-hidden ' & loc:fieldclass)
  If p_web.site.FrontLoaded and loc:frontloading = net:GeneratingData
  else
    packet.append(p_web.DivHeader('MailboxesFormControl_' & p_web.nocolon('MAI:CollectTo') & '_comment',loc:fieldclass,Net:NoSend))
  End
  If 1=0
    loc:comment = ''
  End
  If p_web.site.FrontLoaded and loc:frontloading = net:GeneratingData
    p_web.script('$("#MailboxesFormControl_' & p_web.nocolon('MAI:CollectTo') & '_comment_div").html("'&clip(loc:comment)&'");')
  Else
    packet.append(clip(loc:comment) & p_web.DivFooter(net:nosend,,,0))
  End
  do SendPacket

Refresh::TimeClock  Routine
  do Value::TimeClock
  do Comment::TimeClock



Validate::TimeClock Routine
  If p_web.Ajax = 1 and p_web.ifExistsValue('NewValue')
  ElsIf p_web.IfExistsValue('Value') !FormFieldPicture =   !FieldPicture = 
  End
  do ValidateValue::TimeClock  ! copies value to session value if valid.

  p_web.PushEvent('parentupdated')
  p_web.ntForm(loc:formname,'ready')
  p_web.PopEvent()

ValidateValue::TimeClock  Routine

Value::TimeClock  Routine
  data
loc:fieldclass     string(StyleStringSize)
loc:extra          string(ExtraStringSize)
loc:disabled       long
loc:saveCallPopups long
loc:counter        long
  code
  loc:fieldclass = p_web.Combine(p_web.site.style.formentrydiv,,)
  loc:fieldclass = choose(not(1=0),loc:fieldclass,'nt-hidden ' & loc:fieldclass)
  If p_web.site.FrontLoaded = 0 or loc:frontloading = net:GeneratingPage
    loc:fieldclass = 'nt-form-last-in-cell ' & loc:fieldclass
    p_web.DivHeader('MailboxesFormControl_' & p_web.nocolon('TimeClock') & '_value',loc:fieldclass)
  End
  loc:fieldclass = ''
  loc:fieldclass = p_web.combine(p_web.site.style.formentry,'FormEntry',) !t2 Display
  loc:extra = ''
  If Not (1=0)  ! SecFieldHideStateRtn
    p_web.site.HTMLEditor = net:HTMLTinyMCE
    ! --- DISPLAY --- or ---- BUTTON --- or --- PROGRESS ----- or --- IMAGE  -- Display
    if p_web.site.FrontLoaded and loc:frontloading = net:GeneratingData
      exit
    end
    loc:disabled = false
    loc:javascript = ''  ! MakeFormJavaScript
      packet.append( |
        '<div id="TimeClock" ' & clip(loc:javascript) & '>' & p_web.Translate('<!-- Net:TimeClock -->',(Net:HtmlOk*1)+(Net:UnsafeHtmlOk*1)) & '</div>' &|  !d4
        p_web.CRLF)
    do SendPacket
  End
  if p_web.site.FrontLoaded = 0 or loc:frontloading = net:GeneratingPage
    p_web.DivFooter(,,,0)
  end

Comment::TimeClock  Routine
  data
loc:fieldclass string(StyleStringSize)
  code
  loc:fieldclass = p_web.Combine(p_web.site.style.formcomment,'FormComments',)
  if TimeClock:IsInvalid
    loc:fieldclass = clip(loc:fieldclass) & ' ' & p_web.site.style.FormCommentError
  end
  loc:comment = ''
  loc:fieldclass = Choose(not(1=0),loc:fieldclass,'nt-hidden ' & loc:fieldclass)
  If p_web.site.FrontLoaded and loc:frontloading = net:GeneratingData
  else
    packet.append(p_web.DivHeader('MailboxesFormControl_' & p_web.nocolon('TimeClock') & '_comment',loc:fieldclass,Net:NoSend))
  End
  If 1=0
    loc:comment = ''
  End
  If p_web.site.FrontLoaded and loc:frontloading = net:GeneratingData
    p_web.script('$("#MailboxesFormControl_' & p_web.nocolon('TimeClock') & '_comment_div").html("'&clip(loc:comment)&'");')
  Else
    packet.append(clip(loc:comment) & p_web.DivFooter(net:nosend,,,0))
  End
  do SendPacket

Refresh::DynamicChart  Routine
  do Value::DynamicChart
  do Comment::DynamicChart



Validate::DynamicChart Routine
  If p_web.Ajax = 1 and p_web.ifExistsValue('NewValue')
  ElsIf p_web.IfExistsValue('Value') !FormFieldPicture =   !FieldPicture = 
  End
  do ValidateValue::DynamicChart  ! copies value to session value if valid.

  p_web.PushEvent('parentupdated')
  p_web.ntForm(loc:formname,'ready')
  p_web.PopEvent()

ValidateValue::DynamicChart  Routine

Value::DynamicChart  Routine
  data
loc:fieldclass     string(StyleStringSize)
loc:extra          string(ExtraStringSize)
loc:disabled       long
loc:saveCallPopups long
loc:counter        long
st		StringTheory
  code
    st.SetValue(|
    '<div class="ct-chart ct-double-octave"></div><13,10>' & |
    '<script> <13,10>' & |
    ' <13,10>' & |
    'var data = {{ <13,10>' & |
    '    series: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]] <13,10>' & |
    '}; <13,10>' & |
    ' <13,10>' & |
    'function getRandomInt(max) {{ <13,10>' & |
    '  return Math.floor(Math.random() * Math.floor(max)); <13,10>' & |
    '} <13,10>' & |
    ' <13,10>' & |
    'function updateChart(chart,data,point,length) {{ <13,10>' & |
    ' if(data.series[0].length >= length) {{ <13,10>' & |
    '    data.series[0].shift(); <13,10>' & |
    '  } <13,10>' & |
    '  data.series[0].push(point); <13,10>' & |
    '  chart.update(data); <13,10>' & |
    '  setTimeout(() => {{ updateChart(chart,data,getCurrentRam(),length) }, 1000); <13,10>' & |
    '} <13,10>' & |
    ' <13,10>' & |
    '// We are setting a few options for our chart and override the defaults <13,10>' & |
    'var options = {{ <13,10>' & |
    '  // Don<39>t draw the line chart points <13,10>' & |
    '  showPoint: false, <13,10>' & |
    '  // Disable line smoothing <13,10>' & |
    '  lineSmooth: false, <13,10>' & |
    '  // X-Axis specific configuration <13,10>' & |
    '  axisX: {{ <13,10>' & |
    '    // We can disable the grid for this axis <13,10>' & |
    '    showGrid: true, <13,10>' & |
    '    // and also don<39>t show the label <13,10>' & |
    '    showLabel: true <13,10>' & |
    '  }, <13,10>' & |
    '  // Y-Axis specific configuration <13,10>' & |
    '  axisY: {{ <13,10>' & |
    '    // Lets offset the chart a bit from the labels <13,10>' & |
    '    offset: 60, <13,10>' & |
    '    // The label interpolation function enables you to modify the values <13,10>' & |
    '    // used for the labels on each axis. Here we are converting the <13,10>' & |
    '    // values into million pound. <13,10>' & |
    '    labelInterpolationFnc: function(value) {{ <13,10>' & |
    '      //return <39>$<39> + value + <39>m<39>; <13,10>' & |
    '      return value; <13,10>' & |
    '    } <13,10>' & |
    '  } <13,10>' & |
    '}; <13,10>' & |
    ' <13,10>' & |
    '// All you need to do is pass your configuration as third parameter to the chart function <13,10>' & |
    ' <13,10>' & |
    'var cid = new Chartist.Line(<39>.ct-chart<39>, data, options); <13,10>' & |
    ' <13,10>' & |
    ' <13,10>' & |
    'setTimeout(() => {{ updateChart(cid, data, getCurrentRam(), 20) }, 1000); <13,10>' & |
    ' <13,10>' & |
    '</script><13,10>')  
  loc:fieldclass = p_web.Combine(p_web.site.style.formentrydiv,,)
  loc:fieldclass = choose(not(1=0),loc:fieldclass,'nt-hidden ' & loc:fieldclass)
  If p_web.site.FrontLoaded = 0 or loc:frontloading = net:GeneratingPage
    loc:fieldclass = 'nt-form-last-in-cell ' & loc:fieldclass
    p_web.DivHeader('MailboxesFormControl_' & p_web.nocolon('DynamicChart') & '_value',loc:fieldclass)
  End
  loc:fieldclass = ''
  loc:fieldclass = p_web.combine(p_web.site.style.formentry,'FormEntry',) !t2 Display
  loc:extra = ''
  If Not (1=0)  ! SecFieldHideStateRtn
    p_web.site.HTMLEditor = p_web.site.DefaultHTMLEditor
    ! --- DISPLAY --- or ---- BUTTON --- or --- PROGRESS ----- or --- IMAGE  -- Display
    if p_web.site.FrontLoaded and loc:frontloading = net:GeneratingData
      exit
    end
    loc:disabled = false
    loc:javascript = ''  ! MakeFormJavaScript
      packet.append( |
        '<div id="DynamicChart" ' & clip(loc:javascript) & '>' & p_web.Translate(st.GetValue(),(Net:HtmlOk*1)+(Net:UnsafeHtmlOk*1)) & '</div>' &|  !d4
        p_web.CRLF)
    do SendPacket
  End
  if p_web.site.FrontLoaded = 0 or loc:frontloading = net:GeneratingPage
    p_web.DivFooter(,,,0)
  end

Comment::DynamicChart  Routine
  data
loc:fieldclass string(StyleStringSize)
  code
  loc:fieldclass = p_web.Combine(p_web.site.style.formcomment,'FormComments',)
  if DynamicChart:IsInvalid
    loc:fieldclass = clip(loc:fieldclass) & ' ' & p_web.site.style.FormCommentError
  end
  loc:comment = ''
  loc:fieldclass = Choose(not(1=0),loc:fieldclass,'nt-hidden ' & loc:fieldclass)
  If p_web.site.FrontLoaded and loc:frontloading = net:GeneratingData
  else
    packet.append(p_web.DivHeader('MailboxesFormControl_' & p_web.nocolon('DynamicChart') & '_comment',loc:fieldclass,Net:NoSend))
  End
  If 1=0
    loc:comment = ''
  End
  If p_web.site.FrontLoaded and loc:frontloading = net:GeneratingData
    p_web.script('$("#MailboxesFormControl_' & p_web.nocolon('DynamicChart') & '_comment_div").html("'&clip(loc:comment)&'");')
  Else
    packet.append(clip(loc:comment) & p_web.DivFooter(net:nosend,,,0))
  End
  do SendPacket

NextTab  routine
  data
  code
  p_web.Ajax = 1
  p_web.PageName = p_web._unEscape(p_web.PageName)

  case lower(p_web.PageName)
  of lower('MailboxesFormControl_nexttab_' & 0)
    MAI:MailBoxName = p_web.GetSessionValue('MAI:MailBoxName')
    do ValidateValue::MAI:MailBoxName
    If loc:Invalid
      loc:retrying = 1
      do Value::MAI:MailBoxName
      do Comment::MAI:MailBoxName ! allows comment style to be updated.
    End
    MAI:Password = p_web.GetSessionValue('MAI:Password')
    do ValidateValue::MAI:Password
    If loc:Invalid
      loc:retrying = 1
      do Value::MAI:Password
      do Comment::MAI:Password ! allows comment style to be updated.
    End
    MAI:CollectFrom = p_web.GetSessionValue('MAI:CollectFrom')
    do ValidateValue::MAI:CollectFrom
    If loc:Invalid
      loc:retrying = 1
      do Value::MAI:CollectFrom
      do Comment::MAI:CollectFrom ! allows comment style to be updated.
    End
    MAI:CollectTo = p_web.GetSessionValue('MAI:CollectTo')
    do ValidateValue::MAI:CollectTo
    If loc:Invalid
      loc:retrying = 1
      do Value::MAI:CollectTo
      do Comment::MAI:CollectTo ! allows comment style to be updated.
    End
    If loc:Invalid then exit.
  End
  p_web.ntWiz('MailboxesFormControl','next')

ChangeTab  routine
  p_web.ChangeTab(loc:TabStyle,'MailboxesFormControl',loc:TabTo)

TabChanged  routine
  data
TabNumber   Long   !! remember that tabs are numbered from 0
TabHeading  String(252),dim(1)
  code
  tabnumber = p_web.GetValue('_tab_')
  tabheading[1]  = p_web.Translate('General')
  p_web.SetSessionValue('showtab_MailboxesFormControl',tabnumber) !! remember that tabs are numbered from 0

CallDiv    routine
  data
  code
  p_web.Ajax = 1
  p_web.PageName = p_web._unEscape(p_web.PageName)
  case lower(p_web.PageName)
  of lower('MailboxesFormControl') & '_tabchanged'
     do TabChanged
  of lower('MailboxesFormControl_tab_' & 0)
    do GenerateTab0
  of lower('MailboxesFormControl_MAI:MailBoxName_value')
      case p_web.Event ! String
      of 'selected' !event:selected !257
      of 'accepted' !event:accepted !1
      orof 'childupdated'
        do Validate::MAI:MailBoxName
        do AlertParent
      of 'timer'
        do refresh::MAI:MailBoxName
        do AlertParent
      else
        do Value::MAI:MailBoxName
      end
  of lower('MailboxesFormControl_MAI:Password_value')
      case p_web.Event ! String
      of 'selected' !event:selected !257
      of 'accepted' !event:accepted !1
      orof 'childupdated'
        do Validate::MAI:Password
        do AlertParent
      of 'timer'
        do refresh::MAI:Password
        do AlertParent
      else
        do Value::MAI:Password
      end
  of lower('MailboxesFormControl_MAI:CollectFrom_value')
      case p_web.Event ! String
      of 'selected' !event:selected !257
      of 'accepted' !event:accepted !1
      orof 'childupdated'
        do Validate::MAI:CollectFrom
        do AlertParent
      of 'timer'
        do refresh::MAI:CollectFrom
        do AlertParent
      else
        do Value::MAI:CollectFrom
      end
  of lower('MailboxesFormControl_MAI:CollectTo_value')
      case p_web.Event ! String
      of 'selected' !event:selected !257
      of 'accepted' !event:accepted !1
      orof 'childupdated'
        do Validate::MAI:CollectTo
        do AlertParent
      of 'timer'
        do refresh::MAI:CollectTo
        do AlertParent
      else
        do Value::MAI:CollectTo
      end
  of lower('MailboxesFormControl_TimeClock_value')
      case p_web.Event ! Display
      of 'selected' !event:selected !257
      of 'accepted' !event:accepted !1
      orof 'childupdated'
        do Validate::TimeClock
        do AlertParent
      of 'timer'
        do refresh::TimeClock
        do AlertParent
      else
        do Value::TimeClock
      end
  of lower('MailboxesFormControl_DynamicChart_value')
      case p_web.Event ! Display
      of 'selected' !event:selected !257
      of 'accepted' !event:accepted !1
      orof 'childupdated'
        do Validate::DynamicChart
        do AlertParent
      of 'timer'
        do refresh::DynamicChart
        do AlertParent
      else
        do Value::DynamicChart
      end
  End

SendPacket  routine
  p_web.ParseHTML(packet, 1, 0, NET:NoHeader)
  packet.setvalue('')
! NET:WEB:StagePRE

! ---------------------------------------------------------------------------------------------------------
PreInsert  Routine
  data
  code
  p_web.SetValue('MailboxesFormControl_form:ready_',1)
  p_web.SetSessionValue('MailboxesFormControl:Active',1)
  p_web.SetSessionValue('MailboxesFormControl_CurrentAction',Net:InsertRecord)
  p_web.setsessionvalue('showtab_MailboxesFormControl',0)
  Clear(MAI:record) ! Primes moved before auto-increment (PrimeRecord) call.
  do SetFormSettings

! ---------------------------------------------------------------------------------------------------------
PreCopy  Routine
  data
  code
  p_web.SetValue('MailboxesFormControl_form:ready_',1)
  p_web.SetSessionValue('MailboxesFormControl:Active',1)
  p_web.SetSessionValue('MailboxesFormControl_CurrentAction',Net:CopyRecord)
  p_web.setsessionvalue('showtab_MailboxesFormControl',0)
  p_web._PreCopyRecord(MailBoxes,MAI:PrimaryKey)
  ! here we need to copy the non-unique fields across
  do SetFormSettings

! ---------------------------------------------------------------------------------------------------------
! this code runs After the record is loaded. To run code before, see InitForm Routine
PreUpdate  Routine
  data
loc:offset      Long
  code
  p_web.SetValue('MailboxesFormControl_form:ready_',1)
  p_web.SetSessionValue('MailboxesFormControl:Active',1)
  p_web.SetSessionValue('MailboxesFormControl_CurrentAction',Net:ChangeRecord)
  p_web.SetSessionValue('MailboxesFormControl:Primed',0)
  do SetFormSettings

! ---------------------------------------------------------------------------------------------------------
PreDelete       Routine
  data
  code
  p_web.SetValue('MailboxesFormControl_form:ready_',1)
  p_web.SetSessionValue('MailboxesFormControl_CurrentAction',Net:DeleteRecord)
  p_web.SetSessionValue('MailboxesFormControl:Primed',0)
  p_web.setsessionvalue('showtab_MailboxesFormControl',0)
  do SetFormSettings

! ---------------------------------------------------------------------------------------------------------
LoadRelatedRecords  Routine
  loc:ok = 0
  loc:ok = 0
  loc:ok = 0
  loc:ok = 0

! ---------------------------------------------------------------------------------------------------------
! copies fields from the Value queue to the File Field.
CompleteForm  Routine
  data
loc:pic   string(40)
  code
  do SetPics
          If p_web.IfExistsValue('MAI:MailBoxName')
            MAI:MailBoxName = p_web.GetValue('MAI:MailBoxName')
          End
          If p_web.IfExistsValue('MAI:Password')
            MAI:Password = p_web.GetValue('MAI:Password')
          End
          If p_web.IfExistsValue('MAI:CollectFrom')
            MAI:CollectFrom = p_web.GetValue('MAI:CollectFrom')
          End
          If p_web.IfExistsValue('MAI:CollectTo')
            MAI:CollectTo = p_web.GetValue('MAI:CollectTo')
          End

! NET:WEB:StageVALIDATE
ValidateInsert  Routine
  do CompleteForm
  do ValidateRecord

ValidateCopy  Routine
  do CompleteForm
  do ValidateRecord

ValidateUpdate  Routine
  do CompleteForm
  do ValidateRecord

ValidateDelete  Routine
  p_web.DeleteSessionValue('MailboxesFormControl_ChainTo')
  ! Check for restricted child records

ValidateRecord  Routine
  p_web.DeleteSessionValue('MailboxesFormControl_ChainTo')

  ! Then add additional constraints set on the template
  loc:InvalidTab = -1
  ! tab = 1
        loc:InvalidTab += 1
        do ValidateValue::MAI:MailBoxName
        If loc:Invalid then exit.
        do ValidateValue::MAI:Password
        If loc:Invalid then exit.
        do ValidateValue::MAI:CollectFrom
        If loc:Invalid then exit.
        do ValidateValue::MAI:CollectTo
        If loc:Invalid then exit.
        do ValidateValue::TimeClock
        If loc:Invalid then exit.
        do ValidateValue::DynamicChart
        If loc:Invalid then exit.
  ! The following fields are not on the form, but need to be checked anyway.
  ! Automatic Dictionary Validation
    If MAI:AutoResponse <> 1 and MAI:AutoResponse <> 0
      loc:Invalid = 'MAI:AutoResponse'
      if not loc:alert then loc:Alert = p_web.translate('MAI:AutoResponse') & ' ' & clip(p_web.site.OneOfText) & ' ' & 1 & ' / ' & 0.
    End
  If Loc:Invalid <> '' then exit.
  ! Automatic Dictionary Validation
    If MAI:ForwardOnly <> 1 and MAI:ForwardOnly <> 0
      loc:Invalid = 'MAI:ForwardOnly'
      if not loc:alert then loc:Alert = p_web.translate('MAI:ForwardOnly') & ' ' & clip(p_web.site.OneOfText) & ' ' & 1 & ' / ' & 0.
    End
  If Loc:Invalid <> '' then exit.
! NET:WEB:StagePOST
PostWrite  Routine
  Data
  Code

PostInsert      Routine
  Data
  Code
  If loc:FormOnSave = Net:InsertAgain
    p_web.InsertAgain('MailboxesFormControl')
    Clear(MAI:Record)
  Else
    p_web.SetSessionValue('MailboxesFormControl:Active',0)
  End
PostCopy        Routine
  Data
  Code
  p_web.SetSessionValue('MailboxesFormControl:Primed',0)
  p_web.SetSessionValue('MailboxesFormControl:Active',0)

PostUpdate      Routine
  Data
  Code
  p_web.SetSessionValue('MailboxesFormControl:Primed',0)
  p_web.SetSessionValue('MailboxesFormControl:Active',0)

PostDelete      Routine
