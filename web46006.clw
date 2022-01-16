

   MEMBER('web46.clw')                                     ! This is a MEMBER module

                     MAP
                       INCLUDE('WEB46006.INC'),ONCE        !Local module procedure declarations
                     END


MailboxesBrowseControl PROCEDURE  (NetWebServerWorker p_web)
Randum               LONG                                  !
loc:timer            LONG(5000)                            !
packet  StringTheory
TableQueue               Queue,pre(TableQueue)
kind                       Long
row                        String(100000)
id                         String(252),dim(Net:MaxKeyFields)
idx                        String(Net:HashSize)
sub                        Long
                         End
MAI:MailBoxName:IsInvalid  Long
MAI:CollectFrom:IsInvalid  Long
MAI:CollectTo:IsInvalid  Long
Randum:IsInvalid  Long
loc:total                decimal(31,15),dim(200)  ! accumulated value
loc:totalCount           long,dim(200)            ! over this many rows
loc:RowNumber            Long
loc:ColumnNumber         Long
loc:section              Long
loc:found                Long
loc:DefaultSelection     String(Net:HashSize)
loc:ActualSelection      String(Net:HashSize)
loc:RowsHigh             Long(1)
loc:RowsIn               Long
loc:vordernumber         Long
loc:vorder               String(252)
loc:NavButtonPosition    Long
loc:UpdateButtonPosition Long
loc:FileLoading          Long
loc:Sorting              Long
loc:LayoutMethod         Long
loc:ChildLayoutMethod    Long
loc:LocatorPosition      Long
loc:LocatorBlank         Long
loc:LocatorType          Long
loc:LocatorCase          Long
loc:LocatorSearchButton  Long
loc:LocatorClearButton   Long
loc:LocatorImmediate     Long
loc:LocatorSuggestions   Long
loc:LocatorAutoCompleteOptions StringTheory ! options for jQuery calls
loc:LocatorValue         String(252)
Loc:FormName             String(252)
Loc:Class                String(252)
Loc:Skip                 Long
loc:ViewOnly             Long
loc:invalid              String(100)
loc:ViewPosWorkaround    String(252)
loc:lookupdone           Long
loc:FormPopup            Long
loc:options              StringTheory ! options for jQuery calls
tempjson                 StringTheory
loc:RandomBrowseId       string(net:RandomIdSize)
loc:FrontLoading         long
loc:Heading              string(1024)
loc:InsertButtonDone     long
loc:ChildRowCounter      long
ThisView            &View
View:MailBoxes       View(MailBoxes)
                      Project(MAI:MailBoxNumber)
                      Project(MAI:MailBoxName)
                      Project(MAI:CollectFrom)
                      Project(MAI:CollectTo)
                    END ! of ThisView
!-- drop

loc:formaction        String(252)
loc:formactiontarget  String(252)
loc:SelectAction      String(252)
loc:CancelAction      String(252)
loc:CloseAction       String(252)
loc:extra             String(ExtraStringSize)
loc:LiveClick         String(252)
loc:Selecting         Long
loc:rowCount          Long ! counts the total rows printed to screen
loc:recordsCount      Long ! counts the number of records read in the view
loc:pageRows          Long ! the number of records per page
loc:ReadData          Long(1) ! if set to false, then it won't actually read data from the table. Used for front-loading.
loc:columns           Long
loc:checked           String(10)
loc:direction         Long(2) ! + = forwards, - = backwards
loc:FillBack          Long(1)
loc:field             string(Net:HashSize)
loc:first             Long
loc:FirstValue        String(1024)
loc:LastValue         String(1024)
Loc:LocateField       String(252)
Loc:LocateOnFields    String(252)
Loc:SortHeader        String(252) ! contains the heading text for the sorting column. passed to CreateLocator
Loc:SortDirection     Long(1)
loc:disabled          Long
loc:RowStyle          String(252)
loc:RecordExtra       StringTheory
loc:RecordClicked     StringTheory
loc:MultiRowStyle     String(252)
loc:SelectColumnClass String(252)
loc:x                 Long
loc:y                 Long
loc:InView            Long
loc:RowStarted        Long
loc:nextdisabled      Long
loc:previousdisabled  Long
loc:divname           String(252)
loc:tablename         String(252)
loc:FilterWas         String(4096)
loc:selected          String(252)
loc:parent            String(252)
loc:parentRow         String(252)
loc:IsChange          Long
loc:Silent            Long ! children of this browse should go into Silent mode
loc:ParentSilent      Long ! this browse should go into silent mode (reads value of _silent_ on start).
loc:eip               Long
loc:alert             String(252)
loc:SkipHeader        Long
loc:ViewState         String(1024)
Loc:NoBuffer          Long(1)         ! buffer is causing a problem with sql engines, and resetting the position in the view, so default to off.
Loc:popup             Long
loc:ContentBody       Long
loc:inCallPopups      Long
Loc:Stage             Long
loc:TableRefresh      Long
loc:rowclick          string(1024)
loc:CellsCounter      long
loc:CellStarted       long
FilesOpened       Long
FilesErrorOnOpen  StringTheory
  CODE
  GlobalErrors.SetProcedureName('MailboxesBrowseControl')
  ! loc:parent is the container (form etc) on which this procedure is embedded.
  loc:parent = p_web.PlainText(lower(p_web.GetValue('_parentProc_')))
  loc:RandomBrowseId = p_web.GetValue('_rid_')
  p_web.DeleteValue('_rid_')
  If p_web.site.ContentBody <> '' and lower(p_web.GetValue('_cb_')) = lower('MailboxesBrowseControl') then loc:ContentBody=1.
  if loc:RandomBrowseId = '' then loc:RandomBrowseId = p_web.Crc32(clip(loc:parent) & ' MailboxesBrowseControl' & p_web.GetValue('_parentRow_')).
  ! loc:ParentRow contains the parent row id for browses that are embedded in other browses
  loc:ParentRow = lower(p_web.GetValue('_parentRow_'))
  ! loc:divname contains the div for this browse.
  If loc:parent <> '' and loc:ParentRow <> ''
    loc:divname = lower(clip(loc:parent) & net:PARENTSEPARATOR & 'MailboxesBrowseControl' & net:PARENTSEPARATOR & lower(loc:parentRow))
    p_web.GetBrowseValue(p_web.GetValue('_parentRow_')) ! need to reget, so it's not lowered
  elsif loc:parent <> ''
    loc:divname = lower(clip(loc:parent) & net:PARENTSEPARATOR & 'MailboxesBrowseControl')
  else
    loc:divname = lower('MailboxesBrowseControl')
  end
  ! loc:tablename contains the table id for this browse.
  loc:tablename = clip(loc:divname) & '_tbl'

  case p_web.site.formpopups
  of -1 ; loc:FormPopup = Net:Page
  of 0 ; loc:FormPopup = Net:Page
  of 1 ; loc:FormPopup = Net:Popup
  End
  loc:ParentSilent = p_web.GetValue('_silent_')
  loc:popup = p_web.GetValue('_popup_')
  if p_web.site.frontloaded and p_web.Ajax and loc:popup = 1
    loc:FrontLoading = true
  end
  do TakeEvent
  GlobalErrors.SetProcedureName()
  Return ! End of Browse

TakeEvent  Routine
  case p_web.Event
  of 'export'
    do ExportTo
  of 'timer'
    do ExportTimer

  of 'clearbrowse'
    loc:stage = Net:Web:ClearBrowse
    do ClearBrowse

  of 'expcon' ! row expanded or contracted
    do ExpCon

  of 'rowclicked'
    loc:stage = Net:Web:RowClicked
    do CallClicked
    loc:found = 1 !! if not set then can result in this browse being declared "silent" when refreshing children in AjaxChildren.
    p_web.PushEvent('parentnewselection')
    do AlertChildren ! propogate event down
    p_web.PopEvent()
    p_web.PushEvent('childnewselection')
    do AlertParent   ! propogate event up
    p_web.PopEvent()

  of 'parentnewselection'
    loc:stage = net:web:GenerateTable + net:web:UpdateNav + net:web:UpdateUpdates + net:web:UpdateHeadings + net:web:GenerateUpdates
    do GenerateBrowse
    p_web.PushEvent('parentnewselection')
    do AlertChildren ! propogate event down
    p_web.PopEvent()

  of 'childupdated'
    p_web.SetValue('_eipclm_','')
    do AlertParent

  of 'eipaccepted'
    if p_web.IfExistsValue('_eipclm_')
      loc:stage = Net:Web:EIPColumn
      loc:found = 1 !! if not set then can result in this browse being declared "silent" when refreshing children in AjaxChildren.
      do CallEIP
      p_web.PushEvent('parentupdated')
      do AlertChildren ! propogate event down
      p_web.PopEvent()
      p_web.PushEvent('childupdated')
      do AlertParent   ! propogate event up
      p_web.PopEvent()
    End

  of 'sortchanged'
    loc:stage = net:web:GenerateTable + net:web:GenerateLocator
    do GenerateBrowse
    p_web.PushEvent('parentnewselection')
    do AlertChildren ! propogate event down
    p_web.PopEvent()
    p_web.PushEvent('childnewselection')
    do AlertParent   ! propogate event up
    p_web.PopEvent()
    p_web.ntBrowse(loc:divname,'locatorFocus')

  of 'locatorchanged'
    loc:stage = net:web:GenerateTable + net:web:UpdateNav
    do GenerateBrowse
    p_web.PushEvent('parentnewselection')
    do AlertChildren ! propogate event down
    p_web.PopEvent()
    p_web.PushEvent('childnewselection')
    do AlertParent   ! propogate event up
    p_web.PopEvent()
    If loc:LocatorType = Net:Position or loc:LocatorType = Net:Date or loc:LocatorType = Net:NoLocator
      p_web.ntBrowse(loc:divname,'serverClearLocator')
    End
    p_web.ntBrowse(loc:divname,'locatorFocus')

  of 'nav'
    loc:stage = net:web:GenerateTable + net:web:UpdateNav
    do GenerateBrowse
    p_web.PushEvent('parentnewselection')
    do AlertChildren ! propogate event down
    p_web.PopEvent()
    p_web.PushEvent('childnewselection')
    do AlertParent   ! propogate event up
    p_web.PopEvent()

  of 'childnewselection'
    do ChildNewSelection
    do AlertParent

  of 'gainfocus'
    if p_web.GetValue('_refresh_') = 'saved'
      loc:found = 1 !! if not set then can result in this browse being declared "silent" when refreshing children in AjaxChildren.
      do CallEip
      p_web.PushEvent('parentupdated')
      do AlertChildren ! propogate event down
      p_web.PopEvent()
      p_web.PushEvent('childupdated')
      do AlertParent   ! propogate event up
      p_web.PopEvent()
    else
      p_web.ntBrowse(loc:divname,'enable')
      do GotFocusBack
    end

  of 'parentupdated'
    loc:stage = net:web:GenerateTable + net:web:UpdateNav + net:web:UpdateUpdates + net:web:UpdateHeadings + net:web:UpdateLocator + net:web:GenerateUpdates
    do CallBrowse
    do AlertChildren ! propogate event down

  of 'deleteb'
    do CallEip
    p_web.PushEvent('parentupdated')
    do AlertChildren ! propogate event down
    p_web.PopEvent()
    p_web.PushEvent('childupdated')
    do AlertParent   ! propogate event up
    p_web.PopEvent()

  of 'generate'
  orof ''
    p_web.PushEvent('generate')
    loc:stage = net:web:GenerateWholeBrowse
    do CallBrowse
    do Popups
    p_web.PopEvent()

  of 'callpopups'
    loc:stage = net:web:GenerateWholeBrowse
    do CallPopups

  of 'getsecwinsettings'
    loc:stage = Net:Web:GetSecwinSettings

  else
  end

ExportTo  Routine
  data
  code
  case lower(p_web.GetValue('_exportto_'))
  of 'excel'
    do ExportToExcel
  end

ExportTimer  ROUTINE
  data
loc:percentage  long
  code
  loc:percentage = p_web.GSV('Export_MailboxesBrowseControl_PercentageComplete')
  if loc:percentage < 1 then loc:percentage = 1.
  p_web.ntBrowse(loc:divname,'exportProgress',loc:percentage)

ExportToExcel Routine

ExpCon  Routine
  p_web.SetBrowseValueStatus(p_web.getvalue('_bidv_'),choose(p_web.GetValue('_status_')='true',1,-1))

ChildNewSelection  Routine
  data
  code

! Propogates events up to "parent" controls
AlertParent  Routine
  data
parent_       string(100)
  code
  If loc:parent
    p_web.AlertParent('MailboxesBrowseControl')
  End

! propogates events down to "child" controls.
AlertChildren  Routine
  if loc:selecting = 0
    do AjaxChildren
  End





CallPopups  Routine
  data
loc:options             StringTheory ! options for jQuery calls
loc:CallPopups   Long
loc:name         String(252)
loc:PopupName    String(252)
  code
    loc:inCallPopups = 1
    loc:CallPopups = p_web.GetValue('_CallPopups')
    if loc:CallPopups = 1 or loc:CallPopups = 6 ! browse not embedded on form so include popup divs and scripts for this browse
      if loc:CallPopups = 1 then loc:PopupName = 'MailboxesBrowseControl' else loc:PopupName = clip(loc:parent) & net:PARENTSEPARATOR & 'MailboxesBrowseControl' .
      if p_web.GetPreCall('popup_' & clip(loc:PopupName)) = 0
        p_web.AddPreCall('popup_' & clip(loc:PopupName))
        p_web.DivHeader('popup_' & clip(loc:PopupName),'nt-hidden',,,,1,,,clip(loc:PopupName))
        p_web.DivHeader(clip(loc:PopupName),p_web.combine(p_web.site.style.browsediv,'adiv'),,'MailboxesBrowseControl',,1)
        if p_web.site.FrontLoaded
          loc:popup = 1
          loc:ReadData = false
          do GenerateBrowse
        End
        p_web.DivFooter()
        p_web.DivFooter(,'popup_' & clip(loc:PopupName) & ' End')
        do Heading
        loc:options.Free(True)
        p_web.SetOption(loc:options,'close','function(event, ui) {{ ntd.pop(); }')
        p_web.SetOption(loc:options,'autoOpen','false')
        p_web.SetOption(loc:options,'title',loc:Heading)
        p_web.SetOption(loc:options,'width',400)
        p_web.SetOption(loc:options,'modal', 'true')
        p_web.SetOption(loc:options,'position','{{ my: "top", at: "top+' & clip(15) & '", of: window }')

        If p_web.site.DefaultBrowseOpenAnimation
          p_web.SetOption(loc:options,'show','{{' & clip(p_web.site.DefaultBrowseOpenAnimation) & '}')
        End
        If p_web.site.DefaultBrowseCloseAnimation
          p_web.SetOption(loc:options,'hide','{{' & clip(p_web.site.DefaultBrowseCloseAnimation) & '}')
        End
        p_web.jQuery('#' & lower('popup_MailboxesBrowseControl_div'),'dialog',loc:options,'.removeClass("nt-hidden")') !& |
        if p_web.site.FrontLoaded then do ClosingScripts.
        p_web.SetValue('_CallPopups',1)
        do Popups
        p_web.SetValue('_CallPopups',loc:CallPopups)
      End

    Elsif loc:CallPopups = 2 ! generate browse and dependants. not front loaded. popup browse has just opened.
      do GenerateBrowse
      p_web.SetValue('_CallPopups',1)
      do Popups
      p_web.SetValue('_CallPopups',loc:CallPopups)

    Elsif loc:CallPopups = 3 ! generate just browse dependants. outside </form> of parent.
        p_web.SetValue('_CallPopups',1)
        do Popups
        p_web.SetValue('_CallPopups',loc:CallPopups)

    Elsif loc:CallPopups = 4  ! generate the browse table only and enable the browse (frontloaded. browse refreshing)
      do GenerateBrowse
      p_web.ntBrowse(loc:divname,'enable')
    Elsif loc:CallPopups = 5 ! generate the browse but no dependants. frontloaded. ajax=0.  no data needed here.
      loc:popup = 1
      loc:ReadData = false
      do CallBrowse
    End
    loc:popup = 1
    do SendPacket

ClearBrowse  Routine
  p_web.ClearBrowse('MailboxesBrowseControl_' & loc:randomBrowseId)

CallBrowse  Routine
  loc:stage = net:web:GenerateWholeBrowse
  If p_web.Ajax = 0
    p_web.Message('alert',,,Net:Send,true)   ! these 2 should have been done by here, but this handles cases
    p_web.Busy(Net:Send)                ! where they are not done.
  End
  If loc:FrontLoading = 0
    if Loc:ContentBody
      p_web.DivHeader(p_web.site.ContentBody,p_web.site.contentbodydivclass)
    End
    p_web.DivHeader(loc:divname,p_web.combine(p_web.site.style.browsediv,'adiv'),,,,1)
  End
  do GenerateBrowse
  If loc:FrontLoading = 0
    p_web.DivFooter(,loc:divname)
    do Children
    If p_web.site.ContentBody <> '' and lower(p_web.GetValue('_cb_')) = lower('MailboxesBrowseControl')
      p_web.Divfooter()
    End
    do ClosingScripts
    do SendPacket
  End

LookupAbility  Routine
  If p_web.IfExistsValue('Lookup_Btn')
    loc:vorder = upper(p_web.GetValue('_sort_'))
    p_web.PrimeForLookup(MailBoxes,MAI:PrimaryKey,loc:vorder)
    If False
    ElsIf (loc:vorder = 'MAI:MAILBOXNAME') then p_web.SetValue('MailboxesBrowseControl_sort','2')
    ElsIf (loc:vorder = 'MAI:COLLECTFROM') then p_web.SetValue('MailboxesBrowseControl_sort','3')
    ElsIf (loc:vorder = 'MAI:COLLECTTO') then p_web.SetValue('MailboxesBrowseControl_sort','4')
    ElsIf (loc:vorder = 'RANDUM') then p_web.SetValue('MailboxesBrowseControl_sort','5')
    End
  End
  If p_web.IfExistsValue('LookupField') and p_web.GetValue('MailboxesBrowseControl:parentIs') <> 'Browse'
    loc:selecting = true
    p_web.StoreValue('MailboxesBrowseControl:LookupField','LookupField')
  elsif p_web.Ajax > 0 and p_web.IfExistsSessionValue('MailboxesBrowseControl:LookupField') > 0
    loc:selecting = true
  else
    p_web.DeleteSessionValue('MailboxesBrowseControl:LookupField')
    loc:selecting = false
  End

Popups  Routine
  data
loc:options             StringTheory ! options for jQuery calls
  code
  If (loc:popup = 0 or p_web.site.FrontLoaded = 1)
    p_web.PushEvent('callpopups')
    p_web.SetValue('_CallPopups',0)
    p_web.PopEvent()
  End

SetFormAction  Routine
  loc:formaction = 'MailboxesFormControl'
  loc:formactiontarget = '_self'

GotFocusBack  Routine

Heading  Routine
  If band(loc:stage,net:web:GenerateHeadings + net:web:UpdateHeadings)
    If p_web.GetValue('_title_') <> ''
      loc:Heading = p_web.Translate(p_web.GetValue('_title_'),(Net:HtmlOk*0)+(Net:UnsafeHtmlOk*0))
    Else
      loc:Heading = p_web.Translate('Mailboxes',(Net:HtmlOk*0)+(Net:UnsafeHtmlOk*0))
    End
    do SendPacket
    If p_web.site.HeaderBackButton and (loc:inCallPopups or loc:popup)
      loc:Heading = p_web.AddHeaderBackButton(loc:Heading,,)
    End
    If loc:inCallPopups
      Exit
    End
    If loc:Heading
      If loc:popup
        ! Do nothing here, loc:Heading is passed in the dialog options.
      Else
        packet.append(p_web.DivHeader(clip(loc:divname) & '_header',p_web.Combine(p_web.site.style.browseHeading,'MainHeading'),Net:NoSend))
        If loc:ParentSilent = 0
          packet.append(clip(loc:Heading))
        End
        packet.append(p_web.DivFooter(Net:NoSend))
        Do SendPacket
      End
    End
  End ! If band(loc:stage,net:web:GenerateHeadings + net:web:UpdateHeadings)

BrowseFooter  Routine

FindAnchor  Routine
  data
  code


SetSortHeader  Routine
  Case Left(Upper(Loc:LocateField))
  Of upper('MAI:MailBoxName')
    loc:SortHeader = p_web.Translate('Mail Box',(Net:HtmlOk*0)+(Net:UnsafeHtmlOk*0))
    p_web.SetSessionValue('MailboxesBrowseControl_LocatorPic_' & clip(loc:RandomBrowseId),'@s80')
    loc:LocatorType = Net:Position   ! default locator type for this browse
  Of upper('MAI:CollectFrom')
    loc:SortHeader = p_web.Translate('Collect From',(Net:HtmlOk*0)+(Net:UnsafeHtmlOk*0))
    p_web.SetSessionValue('MailboxesBrowseControl_LocatorPic_' & clip(loc:RandomBrowseId),'@t1')
    loc:LocatorType = Net:Position !Net:Time      ! default locator type set at column level, time column detected
  Of upper('MAI:CollectTo')
    loc:SortHeader = p_web.Translate('Collect To',(Net:HtmlOk*0)+(Net:UnsafeHtmlOk*0))
    p_web.SetSessionValue('MailboxesBrowseControl_LocatorPic_' & clip(loc:RandomBrowseId),'@t4')
    loc:LocatorType = Net:Position !Net:Time      ! default locator type set at column level, time column detected
  Of upper('Randum')
    loc:SortHeader = p_web.Translate('Random',(Net:HtmlOk*0)+(Net:UnsafeHtmlOk*0))
    p_web.SetSessionValue('MailboxesBrowseControl_LocatorPic_' & clip(loc:RandomBrowseId),'@t4')
    loc:LocatorType = Net:Position !Net:Time      ! default locator type set at column level, time column detected
  End

SetVorder  Routine
  ThisView &= View:MailBoxes
  p_web.SetSessionValue('MailboxesBrowseControl_sort_' & loc:RandomBrowseId ,loc:vordernumber)
  Loc:SortDirection = choose(loc:vordernumber < 0,-1,1)
  case abs(loc:vordernumber)
  of 2
    loc:vorder = Choose(Loc:SortDirection=1,'UPPER(MAI:MailBoxName)','-UPPER(MAI:MailBoxName)')
    Loc:LocateOnFields = 'MAI:MailBoxName'
    Loc:LocateField = 'MAI:MailBoxName'
    Loc:LocatorCase = 0
  of 3
    loc:vorder = Choose(Loc:SortDirection=1,'MAI:CollectFrom','-MAI:CollectFrom')
    Loc:LocateOnFields = 'MAI:CollectFrom'
    Loc:LocateField = 'MAI:CollectFrom'
    Loc:LocatorCase = 0
  of 4
    loc:vorder = Choose(Loc:SortDirection=1,'MAI:CollectTo','-MAI:CollectTo')
    Loc:LocateOnFields = 'MAI:CollectTo'
    Loc:LocateField = 'MAI:CollectTo'
    Loc:LocatorCase = 0
  of 5
    loc:vorder = Choose(Loc:SortDirection=1,'Randum','-Randum')
    Loc:LocateOnFields = 'Randum'
    Loc:LocateField = 'Randum'
    Loc:LocatorCase = 0
  end


SetLocatorOptions  Routine
  loc:LocatorPosition  = Net:Below
  loc:LocatorBlank = 0
  loc:LocatorSearchButton = false
  loc:LocatorClearButton = false
  loc:LocatorImmediate = 0

GenerateLocatorAbove  Routine
  If band(loc:stage,net:web:GenerateLocator) and loc:FileLoading = Net:PageLoad
    p_web.DivHeader(clip(loc:divname) & '_locator_b','')
    loc:options.Free(True)
    Loc:LocatorValue = p_web.GetLocatorValue(Loc:LocatorType,loc:divname,Net:Above,Loc:LocateOnFields)
    packet.append(p_web.CreateLocator('MailboxesBrowseControl',loc:divname,loc:LocatorType,loc:locatorValue,loc:options,loc:SortHeader,loc:divname,loc:RandomBrowseId,'Locator',,,30,0,Net:Above,loc:LocatorSearchButton,loc:LocatorClearButton,loc:LocatorSuggestions,loc:LocatorAutoCompleteoptions,loc:stage,loc:LocatorImmediate,loc:LayoutMethod))
    do SendPacket
    p_web.DivFooter()
  End

GenerateLocatorBelow  Routine
  if band(loc:stage,net:web:GenerateLocator) and loc:FileLoading=Net:PageLoad
    p_web.DivHeader(clip(loc:divname) & '_locator_a','')
    loc:options.Free(True)
    Loc:LocatorValue = p_web.GetLocatorValue(Loc:LocatorType,loc:divname,Net:Below,Loc:LocateOnFields)
    packet.append(p_web.CreateLocator('MailboxesBrowseControl',loc:divname,loc:LocatorType,loc:locatorValue,loc:options,loc:SortHeader,loc:divname,loc:RandomBrowseId,'Locator',,,30,0,Net:Below,loc:LocatorSearchButton,loc:LocatorClearButton,loc:LocatorSuggestions,loc:LocatorAutoCompleteoptions,loc:stage,loc:LocatorImmediate,loc:LayoutMethod))
    do SendPacket
    p_web.DivFooter()
  End

DisplayLocator  Routine
  if band(loc:stage,net:web:GenerateLocator + net:web:UpdateLocator)
    !! hide if browse not there
    If loc:ParentSilent or loc:LocatorPosition = Net:None or loc:LocatorType = Net:NoLocator
      p_web.ntBrowse(loc:divname,'hideLocator')
    !! hide if the browse is set not to sort and Default Locate Field is not set
    ElsIf loc:Sorting = Net:NoSort
      p_web.ntBrowse(loc:divname,'hideLocator')
    !! hide if no sort column specified
    ElsIf loc:sortheader = ''
      p_web.ntBrowse(loc:divname,'hideLocator')
    !! hide if no records found and not set as "Table blank until locator entered" and locator blank
    ElsIf Loc:Found = 0 and loc:LocatorBlank = 0 and Loc:LocatorValue = ''
      p_web.ntBrowse(loc:divname,'hideLocator')
    !! hide if all records are displayed, and locator is positional
    ElsIf loc:LocatorType = Net:Position and loc:previousdisabled and loc:nextdisabled
      p_web.ntBrowse(loc:divname,'hideLocator')
    !! else unhide
    Else
      p_web.ntBrowse(loc:divname,'unhideLocator',loc:LocatorPosition)
    End
  End

BrowseBeforeTable  Routine

SetBrowseOptions  Routine
  loc:NavButtonPosition   = Net:Below
  loc:UpdateButtonPosition   = Net:Below
  if p_web.IfExistsValue('_viewonly_')
    loc:viewonly = p_web.GetValue('_viewonly_')
    p_web.SetSessionValue(clip(loc:divname)&'_viewonly_' & loc:RandomBrowseId,loc:viewonly)
  else
    loc:viewonly = choose(p_web.GetSessionValue(clip(loc:divname)&'_viewonly_' & loc:RandomBrowseId)=1,1,loc:viewonly)
  end
  p_web.SetValue('_viewonly_',loc:viewonly)
  loc:FileLoading      = Net:PageLoad   ! Page
  loc:Sorting          = Net:NoSort
  loc:LayoutMethod =  p_web.site.BrowseLayoutMethod
  loc:ChildLayoutMethod =  p_web.site.ChildrenLayoutMethod


ResetBrowseOptions  Routine

GenerateBrowse  Routine
  data
loc:options             StringTheory ! options for jQuery calls
  code
  do SetBrowseOptions
  do SetLocatorOptions
  do ClearBrowse
  do OpenFilesB
  do LookupAbility ! browse lookup initialization
  If loc:FileLoading = Net:PageLoad then loc:pagerows = 10.
  loc:ActualSelection = ''
  ! Set Sort Order Options
  loc:vordernumber    = p_web.RestoreValue('MailboxesBrowseControl_sort_' & loc:RandomBrowseId,net:DontEvaluate)
  do SetVorder
  do SetSortHeader
  If loc:selecting = true
    p_web.GetSettings(p_web.GetSessionValue('Push1'))
    loc:selectaction = p_web.FormSettings.ParentPage !p_web.GetSessionValue('MailboxesBrowseControl:LookupFrom')
    p_web.GetSettings(p_web.GetSessionValue('Push1'))
    loc:CancelAction = p_web.FormSettings.ParentPage !p_web.GetSessionValue('MailboxesBrowseControl:LookupFrom')
  End !Else
  loc:CloseAction = p_web.site.DefaultPage
  do SendPacket
  do SetFormAction
  loc:rowCount = 0
  do Heading
  ! in this section packets are added to the Queue using AddPacket, not sent using SendPacket

  if band(loc:stage,net:web:Navigate)
    p_web.ntBrowse(loc:divname,'restoreFocus')
  end

  do GenerateLocatorAbove
  do GenerateNavButtonsAbove
  do GenerateUpdateButtonsAbove
  do BrowseBeforeTable

  TableQueue.Kind = Net:RowTable
  loc:found = 0
  do BrowseTable
  do GenerateLocatorBelow
  do GenerateNavButtonsBelow
  do GenerateUpdateButtonsBelow
  do DisplayLocator
  do DisplayNavButtons
  do DisplayUpdatebuttons
  do SendPacket
  if band(loc:stage,net:web:GenerateWholeBrowse) <> net:web:GenerateWholeBrowse
    p_web.ntBrowse(loc:divname,'refresh','"' & clip(loc:actualselection) & '"')
  end
  if loc:ParentSilent
    p_web.ntBrowse(loc:divname,'hide')
  else
    p_web.ntBrowse(loc:divname,'show')
  end

BrowseTable  routine
  If p_web.RequestJson = false
    packet.append(p_web.DivHeader(clip(loc:divname) & '_table',p_web.Combine(p_web.site.style.BrowseTableDiv,),Net:NoSend,,,1)) ! Table Div
  else
    packet.append(p_web.DivHeader(clip(loc:divname) ,p_web.Combine(p_web.site.style.BrowseTableDiv,),Net:NoSend,,,,p_web.RequestJson)) ! Table Div
  end
  do SendPacket
  if loc:ParentSilent = false
    If p_web.RequestJson = false
      packet.append(p_web.BrowseTableStart(clip(loc:tablename), p_web.Combine(p_web.site.style.BrowseTable,'BrowseTable'), '' , loc:LayoutMethod  ))
    Else
      packet.append('"table":{{ "class":"'&p_web.Combine(p_web.site.style.BrowseTable,'BrowseTable')&'","id":"'&clip(loc:tablename)&'",' & p_web.HtmlToJsonAttributes(''))
    End
    do AddPacket
    loc:rownumber += 1
    TableQueue.Kind = Net:RowHeader
    If p_web.RequestJson = 0
      packet.append(p_web.BrowseTableRowStart('',' nt-browse-row-header mailboxesbrowsecontrol-row-header','browse-header-row','',loc:LayoutMethod))
    Else
      packet.append('"rows":[ {{"row":{{')
    End
    loc:SelectColumnClass = ' class="selectcolumn"'
    If p_web.RequestJson
      packet.append('"cells":[')
    End
            packet.append(p_web.CreateSortHeader(loc:vordernumber,'2','MailboxesBrowseControl',p_web.Translate('Mail Box',(Net:HtmlOk*0)+(Net:UnsafeHtmlOk*0)),'Click here to sort by Mail Box Name',,,p_web.Combine(,' Custom'),1, loc:columns+1 ,,,0,loc:Sorting,'String','nt-left',loc:LayoutMethod,' Title="'&p_web._jsok('Click here to sort by Mail Box Name')&'"',loc:CellStarted,0 + 1))
            loc:CellStarted = false
            do AddPacket
            loc:columns += 1
            If p_web.RequestJSON then packet.append(',').
            packet.append(p_web.CreateSortHeader(loc:vordernumber,'3','MailboxesBrowseControl',p_web.Translate('Collect From',(Net:HtmlOk*0)+(Net:UnsafeHtmlOk*0)),'Click here to sort by Collect From',,,p_web.Combine(,' Custom'),1, loc:columns+1 ,,,0,loc:Sorting,'String','nt-left',loc:LayoutMethod,' Title="'&p_web._jsok('Click here to sort by Collect From')&'"',loc:CellStarted,0 + 1))
            loc:CellStarted = false
            do AddPacket
            loc:columns += 1
            If p_web.RequestJSON then packet.append(',').
            packet.append(p_web.CreateSortHeader(loc:vordernumber,'4','MailboxesBrowseControl',p_web.Translate('Collect To',(Net:HtmlOk*0)+(Net:UnsafeHtmlOk*0)),'Click here to sort by Collect To',,,p_web.Combine(,' Custom'),1, loc:columns+1 ,,,0,loc:Sorting,'String','nt-left',loc:LayoutMethod,' Title="'&p_web._jsok('Click here to sort by Collect To')&'"',loc:CellStarted,0 + 1))
            loc:CellStarted = false
            do AddPacket
            loc:columns += 1
            If p_web.RequestJSON then packet.append(',').
            packet.append(p_web.CreateSortHeader(loc:vordernumber,'5','MailboxesBrowseControl',p_web.Translate('Random',(Net:HtmlOk*0)+(Net:UnsafeHtmlOk*0)),,,,p_web.Combine(,' Custom'),1, loc:columns+1 ,,,0,loc:Sorting,'String','nt-left',loc:LayoutMethod,'',loc:CellStarted,0 + 1))
            loc:CellStarted = false
            do AddPacket
            loc:columns += 1
      IF loc:CellStarted
        packet.append(p_web.BrowseTableCellEnd(,loc:LayoutMethod))
        p_web._tag = ''
      END
    If p_web.RequestJson = 0
      packet.append(p_web.BrowseTableRowEnd('endHeader',loc:LayoutMethod))
    Else
      packet.append(']}}]'&p_web.CRLF)  ! end of browse header
    End
    loc:rowstarted = 0
    do AddPacket
    if loc:ReadData
      do GenerateTableRows
    end
    if p_web.site.frontloaded
      loc:found = 1
      loc:previousdisabled = 0
      loc:nextdisabled = 0
    end
    p_web._thisrow = ''
    p_web._thisvalue = ''
    if loc:found = 0
      If p_web.RequestJson = 0
        packet.append(p_web.BrowseTableRowStart('','','browse-row','',loc:LayoutMethod))
        packet.append(p_web.BrowseTableCellStart('',p_web.combine(p_web.site.style.BrowseEmpty,),1,1,1,1,'browse-cell','',loc:LayoutMethod))
        packet.append(p_web.Translate('no mailboxes'))
        packet.append(p_web.BrowseTableCellEnd('',loc:LayoutMethod))
        packet.append(p_web.BrowseTableRowEnd('',loc:LayoutMethod))
      Else
        packet.append('"rows":[ {{"row":{{"cells":[{{"cell":{{"class":"'&p_web.combine(p_web.site.style.BrowseEmpty,)&'",content:"'&p_web.Translate('no mailboxes')&'"}}]}}]')
      End
      do AddPacket
      p_web.ntBrowse(loc:divname,'hideFormButtons','"0"')
      loc:firstvalue = ''
      loc:lastvalue = ''
    else
      p_web.ntBrowse(loc:divname,'unhideTable')
      p_web.ntBrowse(loc:divname,'unhideFormButtons')
    end
    loc:direction = 1
    do Totals

    p_web.SetSessionValue('MailboxesBrowseControl_prop:Order_' & loc:RandomBrowseId,ThisView{prop:order})
    p_web.SetSessionValue('MailboxesBrowseControl_prop:Filter_' & loc:RandomBrowseId,ThisView{prop:filter})
    Close(ThisView)
    If p_web.sqlsync then p_web.SqlRelease(p_web.SqlName).
    do SendQueue ! sends the thead, tfoot and tbody parts of the table.
    do SendPacket
    if p_web.RequestJson = 0
      packet.append(p_web.BrowseTableEnd(clip(loc:tablename),loc:LayoutMethod))
    else
      packet.append('}' & p_web.CRLF)
    end
    do SendPacket
    do SendPacket
  End
  packet.append(p_web.DivFooter(Net:NoSend,'MailboxesBrowseControl_table_div',p_web.RequestJson)) ! Table Div
  do SendPacket
  If loc:FrontLoading = 0
    do SendPacket
  End

  if(loc:FileLoading=Net:PageLoad)
    p_web.SetSessionValue('MailboxesBrowseControl_FirstValue_' & loc:RandomBrowseId,loc:firstvalue)
    p_web.SetSessionValue('MailboxesBrowseControl_LastValue_' & loc:RandomBrowseId,loc:lastvalue)
  End
  do CloseFilesB

GenerateTableRows  Routine
  data
loc:viewoptions  Long
  code
  TableQueue.Kind = Net:RowData
  If p_web.sqlsync then p_web.SqlWait(p_web.SqlName).
  Open(ThisView)
  If Loc:NoBuffer = 0
    Buffer(ThisView,loc:pagerows,0,0,0) ! causes sorting error in ODBC, when sorting by Decimal fields.
  End
  If Instring('mai:mailboxnumber',lower(loc:vorder),1,1) = 0 !and MailBoxes{prop:SQLDriver} = 1
    loc:vorder = Choose(loc:vorder='','MAI:MailBoxNumber',clip(loc:vorder) & ',' & 'MAI:MailBoxNumber')
  End
  Loc:Selected = Choose(p_web.IfExistsValue('MAI:MailBoxNumber'),p_web.GetValue('MAI:MailBoxNumber'),p_web.GetSessionValue('MAI:MailBoxNumber'))
  ThisView{prop:order} = p_web.CleanFilter(ThisView,clip(loc:vorder))
  
  ThisView{prop:Filter} = loc:FilterWas
  Loc:LocatorValue = p_web.GetLocatorValue(Loc:LocatorType,loc:divname,Net:Both,Loc:LocateOnFields)
  loc:FilterWas = ThisView{prop:filter}
  if loc:filterwas <> p_web.GetSessionValue('MailboxesBrowseControl_Filter_' & loc:RandomBrowseId)
    p_web.SetSessionValue('MailboxesBrowseControl_FirstValue_' & loc:RandomBrowseId,'')
    p_web.SetSessionValue('MailboxesBrowseControl_Filter_' & loc:RandomBrowseId,loc:filterwas)
  end
  do FindAnchor
  p_web.SetSessionValue('LocatorField:' & clip(loc:divname),lower(left(Loc:LocateField)))
  p_web.SetView(ThisView,MailBoxes,MAI:PrimaryKey,loc:PageRows,'MailboxesBrowseControl',left(Loc:LocateOnFields),left(Loc:LocateField),loc:FileLoading,loc:LocatorType,clip(loc:LocatorValue),Loc:SortDirection,loc:ViewOptions,Loc:FillBack,Loc:Direction,loc:NextDisabled,loc:PreviousDisabled,Loc:LocatorCase,loc:RandomBrowseId) ! loc:pagerows is not used in here.
  p_web.SetSessionValue('MailboxesBrowseControl_CurrentOrder_' & loc:RandomBrowseId,ThisView{prop:order})
  p_web.SetSessionValue('MailboxesBrowseControl_CurrentFilter_' & loc:RandomBrowseId,ThisView{prop:filter})
  If loc:LocatorBlank = 0 or Loc:LocatorValue <> '' or Loc:LocatorType = Net:Date or loc:LocatorType = Net:Position or loc:LocatorType = Net:NoLocator
    loc:InView = 1
    loc:recordsCount = 0
    Loop
      If loc:direction > 0 Then Next(ThisView) else Previous(ThisView).
      if errorcode() = 0                                         ! in some cases the first record in the
        if loc:ViewPosWorkaround = Position(ThisView)   ! view is fetched twice after the SET(view,file)
          Cycle                                                  ! 4.31 PR 18
        End
        loc:ViewPosWorkaround = Position(ThisView)
      End
      If ErrorCode()
        loc:ViewPosWorkaround = ''
        if loc:rowstarted
          If p_web.RequestJson = 0
            packet.append(p_web.BrowseTableRowEnd('',loc:LayoutMethod))
          Else
            packet.append('},'&p_web.CRLF)
          End
          do AddPacket
          loc:rowstarted = 0
        End
        If loc:direction = -1
          loc:previousdisabled = 1
          Break
        End
        If loc:direction = 1
          loc:nextdisabled = 1
          Break
        End
        If loc:fillback = 0
          loc:nextdisabled = 1
          Break
        end
        if loc:direction = 2
          If loc:LocatorType = Net:Position or loc:LocatorType = Net:Date
            ThisView{prop:Filter} = p_web.AssignFilter(loc:FilterWas)
          End
          If loc:first = 0
            Set(thisView)
          Else
            p_web._bounceView(ThisView)
            p_web.ResetPosition(ThisView,loc:firstvalue)
            Previous(ThisView)
          End
          loc:direction = -1
          loc:nextdisabled = 1
          Cycle
        End
        if loc:direction = -2
          p_web._bounceView(ThisView)
            p_web.ResetPosition(ThisView,loc:lastvalue)
          Next(ThisView)
          loc:direction = 1
          loc:previousdisabled = 1
          Cycle
        End
      End
      If(loc:FileLoading=Net:PageLoad)
        If loc:recordsCount >= loc:pagerows
          if loc:rowstarted
            If p_web.RequestJson = 0
              packet.append(p_web.BrowseTableRowEnd('',loc:LayoutMethod))
            Else
              packet.append('}'&p_web.CRLF)
            End
            do AddPacket
            loc:rowstarted = 0
          End
          Break ! out of the View Loop.
        End
      End
      loc:viewstate = p_web.escape(p_web.Base64Encode(clip(MAI:MailBoxNumber)))
      do BrowseRow
      loc:recordsCount += 1
    end ! loop
    loc:InView = 0
  else
    If p_web.RequestJson = 0
      packet.append(p_web.BrowseTableRowStart('',' nt-browse-locator-row mailboxesbrowsecontrol-locator-row','browse-locator-row','',loc:LayoutMethod))
      packet.append(p_web.BrowseTableCellStart('',' nt-browse-locator-cell mailboxesbrowsecontrol-locator-cell',1,1,1,1,'browse-locator-cell','',loc:LayoutMethod))
      packet.append(p_web.Translate('Enter a search term in the locator'))
      packet.append(p_web.BrowseTableCellEnd('',loc:LayoutMethod))
      packet.append(p_web.BrowseTableRowEnd('',loc:LayoutMethod))
    Else
      packet.append(p_web.BrowseTableRowStart('',' nt-browse-locator-row mailboxesbrowsecontrol-locator-row','browse-locator-row','',loc:LayoutMethod))
      packet.append(p_web.BrowseTableCellStart('',' nt-browse-locator-cell mailboxesbrowsecontrol-locator-cell',1,1,1,1,'browse-locator-cell','',loc:LayoutMethod))
      packet.append(p_web.Translate('Enter a search term in the locator'))
      packet.append(p_web.BrowseTableCellEnd('',loc:LayoutMethod))
      packet.append(p_web.BrowseTableRowEnd('',loc:LayoutMethod))
    End
    do AddPacket
  end

GenerateUpdateButtonsAbove  Routine
  If (loc:UpdateButtonPosition=Net:Above or loc:UpdateButtonPosition=Net:Both) and band(loc:stage,net:web:GenerateUpdates)
    packet.append(p_web.DivHeader(clip(loc:divname)&'_update_a',p_web.combine(p_web.site.style.BrowseUpdateButtonSet,),net:noSend))
    If (loc:selecting = 0 or loc:popup)
      If p_web.CanCall('MailboxesFormControl',0,,) = net:ok
        If loc:viewonly = 0
          packet.append(p_web.CreateStdBrowseButton(Net:Web:InsertButton,'MailboxesBrowseControl',,,loc:FormPopup,'MailboxesFormControl',))
          do SendPacket
        End
      End
    End
        Loc:IsChange = 0
        If loc:selecting = 0 or loc:popup
          If p_web.CanCall('MailboxesFormControl',0,,) = net:ok
            If loc:viewonly = 0
              packet.append(p_web.CreateStdBrowseButton(Net:Web:ChangeButton,'MailboxesBrowseControl',,,loc:FormPopup,'MailboxesFormControl',))
              loc:isChange = 1
            End
          End
        End
        If loc:selecting = 0 or loc:popup
          If p_web.CanCall('MailboxesFormControl',0,,) = net:ok
            If loc:viewonly = 0
              packet.append(p_web.CreateStdBrowseButton(Net:Web:DeletebButton,'MailboxesBrowseControl',,,loc:FormPopup,'MailboxesFormControl',) & p_web.CRLF)
            End
          End
        End
        If p_web.site.DefaultExport
          packet.append(p_web.CreateStdBrowseButton(Net:Web:ExportButton,'MailboxesBrowseControl',,,,,) & p_web.CRLF)  !b
        End
    packet.append(p_web.DivFooter(Net:NoSend,clip(loc:divname)&'_update_a',false,true))
    If p_web.site.UseUpdateButtonSet
      loc:options.Free(True)
      p_web.jQuery('#'&clip(loc:divname)&'_update_a','controlgroup',loc:options)
    End ! If p_web.site.UseUpdateButtonSet
    do SendPacket
      packet.append('<div id="MailboxesBrowseControl_select_a" class="'&p_web.combine(p_web.site.style.BrowseSelectButtonSet,)&'">')
    If loc:selecting = 1
      packet.append(p_web.CreateStdBrowseButton(Net:Web:SelectButton,'MailboxesBrowseControl',,,loc:popup,,))
      do SendPacket
    End
    packet.append('</div>' & p_web.CRLF)
    If p_web.site.UseSelectButtonSet
      loc:options.Free(True)
      p_web.jQuery('#' & 'MailboxesBrowseControl_select_a','controlgroup',loc:options)
    End ! If p_web.site.UseSelectButtonSet
    do SendPacket
    do SendPacket
  End

GenerateUpdateButtonsBelow  routine
  If (loc:UpdateButtonPosition=Net:Below or loc:UpdateButtonPosition=Net:Both) and band(loc:stage,net:web:GenerateUpdates)
    packet.append(p_web.DivHeader(clip(loc:divname)&'_update_b',p_web.combine(p_web.site.style.BrowseUpdateButtonSet,),net:noSend))
    If (loc:selecting = 0 or loc:popup)
      If p_web.CanCall('MailboxesFormControl',0,,) = net:ok
        If loc:viewonly = 0
          packet.append(p_web.CreateStdBrowseButton(Net:Web:InsertButton,'MailboxesBrowseControl',,,loc:FormPopup,'MailboxesFormControl',))
          do SendPacket
        End
      End
    End
        Loc:IsChange = 0
        If loc:selecting = 0 or loc:popup
          If p_web.CanCall('MailboxesFormControl',0,,) = net:ok
            If loc:viewonly = 0
              packet.append(p_web.CreateStdBrowseButton(Net:Web:ChangeButton,'MailboxesBrowseControl',,,loc:FormPopup,'MailboxesFormControl',))
              loc:isChange = 1
            End
          End
        End
        If loc:selecting = 0 or loc:popup
          If p_web.CanCall('MailboxesFormControl',0,,) = net:ok
            If loc:viewonly = 0
              packet.append(p_web.CreateStdBrowseButton(Net:Web:DeletebButton,'MailboxesBrowseControl',,,loc:FormPopup,'MailboxesFormControl',) & p_web.CRLF)
            End
          End
        End
        If p_web.site.DefaultExport
          packet.append(p_web.CreateStdBrowseButton(Net:Web:ExportButton,'MailboxesBrowseControl',,,,,) & p_web.CRLF)  !b
        End
    packet.append(p_web.DivFooter(Net:NoSend,clip(loc:divname)&'_update_b',false,true))
    If p_web.site.UseUpdateButtonSet
      loc:options.Free(True)
      p_web.jQuery('#'&clip(loc:divname)&'_update_b','controlgroup',loc:options)
    End ! If p_web.site.UseUpdateButtonSet
    do SendPacket
      packet.append('<div id="MailboxesBrowseControl_select_b" class="'&p_web.combine(p_web.site.style.BrowseSelectButtonSet,)&'">')
    If loc:selecting = 1
      packet.append(p_web.CreateStdBrowseButton(Net:Web:SelectButton,'MailboxesBrowseControl',,,loc:popup,,))
      do SendPacket
    End
    packet.append('</div>' & p_web.CRLF)
    If p_web.site.UseSelectButtonSet
      loc:options.Free(True)
      p_web.jQuery('#' & 'MailboxesBrowseControl_select_b','controlgroup',loc:options)
    End ! If p_web.site.UseSelectButtonSet
    do SendPacket
    do SendPacket
  End ! If (loc:UpdateButtonPosition...

DisplayUpdateButtons  Routine
  If loc:parentSilent
    p_web.ntBrowse(loc:divname,'hideFormButtons','true')
  ElsIf loc:found = 0
    p_web.ntBrowse(loc:divname,'hideFormButtons','"0"')
  Else
    p_web.ntBrowse(loc:divname,'unhideFormButtons')
  End

GenerateNavButtonsAbove  routine
  If loc:FileLoading=Net:PageLoad and band(loc:stage,net:web:GenerateNav) and (loc:NavButtonPosition=Net:Above or loc:NavButtonPosition=Net:Both)
      packet.append('<div id="' & clip(loc:divname) & '_nav_a" class="'&p_web.combine(p_web.site.style.BrowseNavButtonSet,)&'">')
      packet.append(p_web.CreateStdButton('button',Net:Web:FirstButton,,,,,,loc:previousdisabled,,'MailboxesBrowseControl')) !p1
      packet.append(p_web.CreateStdButton('button',Net:Web:PreviousButton,,,,,,loc:previousdisabled,,'MailboxesBrowseControl')) !p2
      packet.append(p_web.CreateStdButton('button',Net:Web:NextButton,,,,,,loc:nextdisabled,,'MailboxesBrowseControl')) !p3
      packet.append(p_web.CreateStdButton('button',Net:Web:LastButton,,,,,,loc:nextdisabled,,'MailboxesBrowseControl')) !p4
      packet.append('</div>' & p_web.CRLF)
      If p_web.site.UseNavigationButtonSet
        loc:options.Free(True)
        p_web.jQuery('#' & clip(loc:divname) & '_nav_a','controlgroup',loc:options)
      End
      do SendPacket
    do SendPacket
  End

GenerateNavButtonsBelow  routine
  If loc:FileLoading=Net:PageLoad and band(loc:stage,net:web:GenerateNav) and (loc:NavButtonPosition=Net:Below or loc:NavButtonPosition=Net:Both)
      packet.append('<div id="' & clip(loc:divname) & '_nav_b" class="'&p_web.combine(p_web.site.style.BrowseNavButtonSet,)&'">')
      packet.append(p_web.CreateStdButton('button',Net:Web:FirstButton,,,,,,loc:previousdisabled,,'MailboxesBrowseControl')) !p1
      packet.append(p_web.CreateStdButton('button',Net:Web:PreviousButton,,,,,,loc:previousdisabled,,'MailboxesBrowseControl')) !p2
      packet.append(p_web.CreateStdButton('button',Net:Web:NextButton,,,,,,loc:nextdisabled,,'MailboxesBrowseControl')) !p3
      packet.append(p_web.CreateStdButton('button',Net:Web:LastButton,,,,,,loc:nextdisabled,,'MailboxesBrowseControl')) !p4
      packet.append('</div>' & p_web.CRLF)
      If p_web.site.UseNavigationButtonSet
        loc:options.Free(True)
        p_web.jQuery('#' & clip(loc:divname) & '_nav_b','controlgroup',loc:options)
      End
      do SendPacket
    do SendPacket
  End

DisplayNavButtons  Routine
  If loc:FileLoading=Net:PageLoad
    If band(loc:stage,net:web:GenerateNav + net:web:UpdateNav)
      if (loc:previousdisabled and loc:nextdisabled) or loc:parentsilent or loc:found = 0
        p_web.ntBrowse(loc:divname,'hideNav')
      elsif loc:ParentSilent = 0
        p_web.ntBrowse(loc:divname,'unhideNav',loc:previousdisabled&','&loc:nextdisabled)
      end
    End
  End

BrowseRow  routine
  Data
  Code
  If loc:eip = 0
    If(loc:InView)
      loc:field = p_web.AddBrowseValue('MailboxesBrowseControl_' & loc:RandomBrowseId,'MailBoxes',MAI:PrimaryKey,ThisView)
    Else
      loc:field = p_web.AddBrowseValue('MailboxesBrowseControl_' & loc:RandomBrowseId,'MailBoxes',MAI:PrimaryKey)
    End
  End
  p_web._thisrow = p_web.nocolon('MAI:MailBoxNumber')
  p_web._thisvalue = p_web._jsok(loc:field)
  loc:RecordExtra.SetValue('')
  if loc:eip = 0
    if Loc:LocatorValue <> '' and loc:ActualSelection = ''
       ! this path was disabled because of  https://www.nettalkcentral.com/forum/index.php?topic=5043
       ! but disabling this path breaks position locators to then end of the file. [12.19]
      loc:checked = 'checked'
      do SetSelection
    elsif loc:ActualSelection = '' and MAI:MailBoxNumber = p_web.GetSessionValue('MAI:MailBoxNumber')
       loc:checked = 'checked'
       do SetSelection
    elsif loc:selecting = 1
      loc:checked = Choose(p_web.getsessionvalue(p_web.GetSessionValue('MailboxesBrowseControl:LookupField')) = MAI:MailBoxNumber and loc:ActualSelection = '','checked','')
      if loc:checked <> '' then do SetSelection.
    else
      loc:checked = Choose((MAI:MailBoxNumber = loc:selected) and loc:ActualSelection = '','checked','')
      if loc:checked <> '' then do SetSelection.
    end
    loc:rowstyle = p_web.combine()
    loc:RecordExtra.SetValue('data-nt-id="'& clip(loc:field) &'"')
    loc:RecordClicked.SetValue('')
    If(loc:RecordClicked.Length())
      loc:RecordExtra.append(' onclick="'& loc:RecordClicked.GetValue()&'"')
    End
    do StartRowHTML
    do StartRow
    loc:RowsIn = 0
    if(loc:FileLoading=Net:PageLoad)
      if loc:first = 0 or loc:direction < 0
        loc:firstvalue = p_web.ViewPos
        if loc:first = 0 then loc:first = records(TableQueue) + 1.
        loc:DefaultSelection = loc:field
      end
      if loc:direction > 0 or loc:lastvalue = ''
        loc:lastvalue = p_web.ViewPos
      end
    Else
      If loc:first = 0
        loc:first = records(TableQueue) + 1
        loc:DefaultSelection = loc:field
      End
    End
    If loc:checked then do SetSelection.
    If loc:DefaultSelection = '' or loc:direction < 0
      loc:DefaultSelection = loc:field
    End
  end ! loc:eip = 0
  if p_web.RequestJSON
    packet.append('"cells": [')
  end
  loc:CellsCounter = 0
  do Cells1
  If loc:cellStarted
    packet.append(p_web.BrowseTableCellEnd('',loc:LayoutMethod))
    loc:CellStarted = false
  End
  If p_web.RequestJSON
    packet.append(']}')
  End
  loc:found = 1

Cells1  Routine
          If Loc:Eip = 0
              If p_web.RequestJson = 0
                If loc:CellStarted = false
                  packet.append(p_web.BrowseTableCellStart(clip(loc:field)&'-1',p_web.combine(' nt-flexwidth-1'),loc:ColumnNumber,1,loc:rownumber,1,'browse-cell','',loc:LayoutMethod)) !w3
                  loc:CellStarted = true
                End
              Else
                loc:CellsCounter += 1
                if loc:CellsCounter > 1 then packet.append(',').
                packet.append('{{"cell":{{' & p_web.HtmlToJsonAttributes(p_web.combine(' nt-flexwidth-1') & ''))   !b1
              End
          end ! loc:eip = 0
          If p_web.RequestJson = 0
            do value::MAI:MailBoxName
          Else
            packet.append('"content":"')
            tempjson.SetValue(packet.GetValue())
            packet.SetValue('')
            do value::MAI:MailBoxName
            packet.JsonEncode(st:xml)
            packet.SetValue(tempjson.GetValue() & packet.GetValue())
            packet.append('"')
          end
          If loc:eip = 0
            If p_web.RequestJson = 0
              packet.append(p_web.BrowseTableCellEnd('',loc:LayoutMethod))
              loc:CellStarted = false
              loc:ColumnNumber += 1
            Else
              packet.append('}}' & p_web.CRLF)
            End
          End
          If Loc:Eip = 0
              If p_web.RequestJson = 0
                If loc:CellStarted = false
                  packet.append(p_web.BrowseTableCellStart(clip(loc:field)&'-2',p_web.combine(' nt-flexwidth-1'),loc:ColumnNumber,1,loc:rownumber,1,'browse-cell','',loc:LayoutMethod)) !w3
                  loc:CellStarted = true
                End
              Else
                loc:CellsCounter += 1
                if loc:CellsCounter > 1 then packet.append(',').
                packet.append('{{"cell":{{' & p_web.HtmlToJsonAttributes(p_web.combine(' nt-flexwidth-1') & ''))   !b1
              End
          end ! loc:eip = 0
          If p_web.RequestJson = 0
            do value::MAI:CollectFrom
          Else
            packet.append('"content":"')
            tempjson.SetValue(packet.GetValue())
            packet.SetValue('')
            do value::MAI:CollectFrom
            packet.JsonEncode(st:xml)
            packet.SetValue(tempjson.GetValue() & packet.GetValue())
            packet.append('"')
          end
          If loc:eip = 0
            If p_web.RequestJson = 0
              packet.append(p_web.BrowseTableCellEnd('',loc:LayoutMethod))
              loc:CellStarted = false
              loc:ColumnNumber += 1
            Else
              packet.append('}}' & p_web.CRLF)
            End
          End
          If Loc:Eip = 0
              If p_web.RequestJson = 0
                If loc:CellStarted = false
                  packet.append(p_web.BrowseTableCellStart(clip(loc:field)&'-3',p_web.combine(' nt-flexwidth-1'),loc:ColumnNumber,1,loc:rownumber,1,'browse-cell','',loc:LayoutMethod)) !w3
                  loc:CellStarted = true
                End
              Else
                loc:CellsCounter += 1
                if loc:CellsCounter > 1 then packet.append(',').
                packet.append('{{"cell":{{' & p_web.HtmlToJsonAttributes(p_web.combine(' nt-flexwidth-1') & ''))   !b1
              End
          end ! loc:eip = 0
          If p_web.RequestJson = 0
            do value::MAI:CollectTo
          Else
            packet.append('"content":"')
            tempjson.SetValue(packet.GetValue())
            packet.SetValue('')
            do value::MAI:CollectTo
            packet.JsonEncode(st:xml)
            packet.SetValue(tempjson.GetValue() & packet.GetValue())
            packet.append('"')
          end
          If loc:eip = 0
            If p_web.RequestJson = 0
              packet.append(p_web.BrowseTableCellEnd('',loc:LayoutMethod))
              loc:CellStarted = false
              loc:ColumnNumber += 1
            Else
              packet.append('}}' & p_web.CRLF)
            End
          End
          If Loc:Eip = 0
              If p_web.RequestJson = 0
                If loc:CellStarted = false
                  packet.append(p_web.BrowseTableCellStart(clip(loc:field)&'-4',p_web.combine(' nt-flexwidth-1'),loc:ColumnNumber,1,loc:rownumber,1,'browse-cell','',loc:LayoutMethod)) !w3
                  loc:CellStarted = true
                End
              Else
                loc:CellsCounter += 1
                if loc:CellsCounter > 1 then packet.append(',').
                packet.append('{{"cell":{{' & p_web.HtmlToJsonAttributes(p_web.combine(' nt-flexwidth-1') & ''))   !b1
              End
          end ! loc:eip = 0
          If p_web.RequestJson = 0
            do value::Randum
          Else
            packet.append('"content":"')
            tempjson.SetValue(packet.GetValue())
            packet.SetValue('')
            do value::Randum
            packet.JsonEncode(st:xml)
            packet.SetValue(tempjson.GetValue() & packet.GetValue())
            packet.append('"')
          end
          If loc:eip = 0
            If p_web.RequestJson = 0
              packet.append(p_web.BrowseTableCellEnd('',loc:LayoutMethod))
              loc:CellStarted = false
              loc:ColumnNumber += 1
            Else
              packet.append('}}' & p_web.CRLF)
            End
          End

StartRowHTML  Routine
  data
DataDo  String(100)
  code
  If loc:rowstarted
    if p_web.RequestJson = 0
      packet.append(p_web.BrowseTableRowEnd('',loc:LayoutMethod))
    else
      packet.append('},'&p_web.CRLF)
    end
    do AddPacket
    loc:rowstarted = 0
  End
  loc:columnNumber = 1
  If band(p_web.site.DefaultDoubleClick,Net:Select + Net:SingleClick ) = Net:Select + Net:SingleClick and loc:selecting
    DataDo = 'data-do="ss"'
  ElsIf band(p_web.site.DefaultDoubleClick,Net:Select) and loc:selecting
    DataDo = 'data-do="ds"'
  ElsIf  band(p_web.site.DefaultDoubleClick,Net:Update) !! goto form
    If True
      If band(p_web.site.DefaultDoubleClick,Net:SingleClick)
        DataDo = 'data-do="sc"'
      Else
        DataDo = 'data-do="dc"'
      End
    End
  Else  !! no DoubleClick (or SingleClick) support
  End
  If p_web.RequestJson = 0
    packet.append(p_web.BrowseTableRowStart('',' ' & clip(loc:rowstyle) & ' nt-browse-row-data mailboxesbrowsecontrol-row-data','browse-row',loc:RecordExtra.GetValue() & ' ' & dataDo,loc:LayoutMethod,))
  Else
    packet.append('{{ "row": {{' & p_web.HtmlToJsonAttributes(dataDo) & p_web.HtmlToJsonAttributes(loc:rowstyle) &p_web.CRLF)
  End
  loc:RowNumber += 1
  loc:rowstarted = 1

StartRow  Routine
  loc:rowcount += 1
  TableQueue.Idx = loc:field !p_web.AddBrowseValue('MailboxesBrowseControl','MailBoxes',MAI:PrimaryKey,ThisView)
  TableQueue.Id[1] = MAI:MailBoxNumber
  Loc:cellStarted = false

ClosingScripts  Routine
  data
loc:BuildOptions                stringTheory
FirstInCell                     long
  code
    do SetFormAction
    loc:options.Free(True)
    p_web.SetOption(loc:options,'procedure',lower('MailboxesBrowseControl'))
    p_web.SetOption(loc:options,'id',loc:divname)
    p_web.SetOption(loc:options,'tableId', clip(loc:tablename))
    p_web.SetOption(loc:options,'title',loc:Heading)
    p_web.SetOption(loc:options,'randomid',loc:RandomBrowseId)
    p_web.SetOption(loc:options,'parent',loc:parent)
    p_web.SetOption(loc:options,'parentrid',p_web.GetValue('_parentrid_'))
    p_web.SetOption(loc:options,'value',loc:actualselection)
    p_web.SetOption(loc:options,'form',loc:formaction)
    p_web.SetOption(loc:options,'formInsert','')
    p_web.SetOption(loc:options,'formCopy','')
    p_web.SetOption(loc:options,'formChange','')
    p_web.SetOption(loc:options,'formView','')
    p_web.SetOption(loc:options,'formDelete','')
    p_web.SetOption(loc:options,'formpopup',loc:FormPopup)
    p_web.SetOption(loc:options,'selectAction',loc:selectAction)
    p_web.SetOption(loc:options,'cancelAction',loc:cancelAction)
    p_web.SetOption(loc:options,'closeAction',loc:CloseAction)
    p_web.SetOption(loc:options,'viewOnly',loc:ViewOnly)
    p_web.SetOption(loc:options,'animateSpeed', 500 )
    p_web.SetOption(loc:options,'lookupField',p_web.GetSessionValue('MailboxesBrowseControl:LookupField'))
    p_web.SetOption(loc:options,'greenbar',0)
    If p_web.CanCallAddSec() = net:ok
      p_web.SetOption(loc:options,'addsec','MailboxesBrowseControl') !b
    End
    p_web.SetOption(loc:options,'confirmDeleteMessage',p_web.translate('Are you sure you want to delete this record?'))
    p_web.SetOption(loc:options,'confirmText',p_web.translate('Confirm'))
    p_web.SetOption(loc:options,'deleteText',p_web.translate('Delete'))
    p_web.SetOption(loc:options,'cancelText',p_web.translate('No'))
    p_web.SetOption(loc:options,'confirmDelete',1)
    p_web.SetOption(loc:options,'rowsHigh',loc:RowsHigh)
    if p_web.Site.Style.BrowseOverColor
      p_web.SetOption(loc:options,'bgOver',p_web.Site.Style.BrowseOverColor)
    end
    if p_web.Site.Style.BrowseHighlightColor
      p_web.SetOption(loc:options,'bgSelect',p_web.Site.Style.BrowseHighlightColor)
    end
    if p_web.Site.Style.BrowseOneColor
      p_web.SetOption(loc:options,'bgOne',p_web.Site.Style.BrowseOneColor)
    end
    if p_web.Site.Style.BrowseTwoColor
      p_web.SetOption(loc:options,'bgTwo',p_web.Site.Style.BrowseTwoColor)
    end
    p_web.SetOption(loc:options,'rubberband',0)
    p_web.SetOption(loc:options,'hideRubberbandOnMouseUp',1)
    p_web.SetOption(loc:options,'popup',loc:popup)
    p_web.SetOption(loc:options,'eip','eip')
    p_web.SetOption(loc:options,'timer',loc:timer)
    p_web.SetOption(loc:options,'timerRefresh','current')
    p_web.ntBrowse(loc:divname,loc:options)
    If p_web.GetValue('SelectField') = '' and loc:LocatorPosition <> Net:None and p_web.Focus = true
      p_web.ntBrowse(loc:divname,'locatorFocus')
    End
    do SendPacket
    do ResetBrowseOptions

CloseFilesB  Routine
  p_web.CloseFile(MailBoxes)
  popbind()

OpenFilesB  Routine
  If ThisView &= null then do SetVorder.
  pushbind()
  p_web.OpenFile(MailBoxes)
  Bind(MAI:Record)
  Clear(MAI:Record)

Children  Routine
  if loc:selecting = 0
    If p_web.Ajax = 0 or p_web.GetValue('_cb_')
      do StartChildren
    Else
      do AjaxChildren
    End
  end

AjaxChildren  Routine
  data
refresh  string(100)
  code

StartChildren  Routine
  data
parent_  string(252)
  code
  parent_ = p_web.SetParent(loc:parent,'MailboxesBrowseControl')
! ----------------------------------------------------------------------------------------
CallClicked  Routine
  p_web.SetSessionValue('MAI:MailBoxNumber',p_web.GetValue('MAI:MailBoxNumber'))

! ----------------------------------------------------------------------------------------
CallRow  Routine
  data
loc:result  long
loc:hash  string(Net:HashSize)
  code
  do OpenFilesB
  MAI:MailBoxNumber = p_web.GetSessionValue('MAI:MailBoxNumber')
  loc:result = p_web.GetFile(MailBoxes,MAI:PrimaryKey)
  if loc:result = 0
    loc:hash = p_web.GetBrowseHash('MailboxesBrowseControl_' & loc:RandomBrowseId,'MailBoxes',MailBoxes,MAI:PrimaryKey ,MAI:MailBoxNumber)
    if loc:hash
      p_web.GetBrowseValue(loc:hash) ! primes p_web.viewpos for use in GetView
    end
  end
  loc:result = p_web.GetView(ThisView,'MailboxesBrowseControl',loc:RandomBrowseId)
  loc:InView = 1
  loc:eip = 1
  loc:viewstate = p_web.escape(p_web.Base64Encode(clip(MAI:MailBoxNumber)))
  do BrowseRow
  loc:InView = 0
  do SendPacket
  do ClosefilesB

! ----------------------------------------------------------------------------------------
SendMessage  Routine
  p_web.Message('Alert',loc:alert,p_web.site.MessageClass,Net:Send,true)

! ----------------------------------------------------------------------------------------
CallEip  Routine
  Data
loc:RefreshAction  long
  Code
  loc:eip = 1
  p_web.OpenFile(MailBoxes)
  Case upper(p_web.GetValue('_eipclm_'))
  Else
    loc:RefreshAction = p_web.GetValue('_action_')
    case loc:RefreshAction
    of Net:ChangeRecord
      loc:eip = 0
      do CallRow
      p_web.ntBrowse(loc:divname,'enable')
    of Net:InsertRecord
    orof Net:DeleteRecord
    orof Net:CopyRecord
    orof Net:LookupRecord
    orof Net:RefreshWholeTable
    orof Net:NotKnown
      loc:eip = 0
      loc:stage = net:web:GenerateTable + net:web:UpdateNav + net:web:GenerateUpdates
      do GenerateBrowse
      p_web.ntBrowse(loc:divname,'enable')
    of Net:ViewRecord
      p_web.ntBrowse(loc:divname,'enable')
    end
  End
  do GotFocusBack
  p_web.CloseFile(MailBoxes)
!
! ----------------------------------------------------------------------------------------
value::MAI:MailBoxName  Routine
  data
loc:extra          String(ExtraStringSize)
loc:disabled       String(20)
loc:FormOk         Long(1)
loc:options        StringTheory ! options for jQuery calls
loc:fieldClass     String(252)
loc:javascript     String(JavascriptStringLen)
loc:ok             Long
loc:abbreviate     Long
loc:FilterA         StringTheory
  code
    If false
    Else ! default settings for browse column
      loc:extra = ''
      Case loc:LayoutMethod
      of net:Table
      of net:Grid
      of net:Flex
        packet.append('<div class="' & p_web.Combine('nt-browse-flex-cell-prompt',' nt-flex nt-browse-data',,) & '">'&p_web.Translate('Mail Box',(Net:HtmlOk*0)+(Net:UnsafeHtmlOk*0))&'</div>')
      End
      packet.append(p_web.DivHeader('MailboxesBrowseControl_MAI:MailBoxName_'&MAI:MailBoxNumber,' nt-flex nt-browse-data',net:crc,,loc:extra))
      packet.append( p_web.CreateHyperLink(p_web._jsok(Left(p_web.FormatValue(MAI:MailBoxName,'@s80')),(Net:HtmlOk*0)+(Net:UnsafeHtmlOk*0)),,,,loc:javascript,,,(Net:HtmlOk*0)+(Net:UnsafeHtmlOk*0),,,'MailboxesBrowseControl'))
    End
    packet.append(p_web.DivFooter(Net:NoSend))
    if loc:eip = 1
      do SendPacket
    end
! ----------------------------------------------------------------------------------------
value::MAI:CollectFrom  Routine
  data
loc:extra          String(ExtraStringSize)
loc:disabled       String(20)
loc:FormOk         Long(1)
loc:options        StringTheory ! options for jQuery calls
loc:fieldClass     String(252)
loc:javascript     String(JavascriptStringLen)
loc:ok             Long
loc:abbreviate     Long
loc:FilterA         StringTheory
  code
    If false
    Else ! default settings for browse column
      loc:extra = ''
      Case loc:LayoutMethod
      of net:Table
      of net:Grid
      of net:Flex
        packet.append('<div class="' & p_web.Combine('nt-browse-flex-cell-prompt',' nt-flex nt-browse-data',,) & '">'&p_web.Translate('Collect From',(Net:HtmlOk*0)+(Net:UnsafeHtmlOk*0))&'</div>')
      End
      packet.append(p_web.DivHeader('MailboxesBrowseControl_MAI:CollectFrom_'&MAI:MailBoxNumber,' nt-flex nt-browse-data',net:crc,,loc:extra))
      packet.append( p_web.CreateHyperLink(p_web._jsok(Left(p_web.FormatValue(MAI:CollectFrom,'@t1')),(Net:HtmlOk*0)+(Net:UnsafeHtmlOk*0)),,,,loc:javascript,,,(Net:HtmlOk*0)+(Net:UnsafeHtmlOk*0),,,'MailboxesBrowseControl'))
    End
    packet.append(p_web.DivFooter(Net:NoSend))
    if loc:eip = 1
      do SendPacket
    end
! ----------------------------------------------------------------------------------------
value::MAI:CollectTo  Routine
  data
loc:extra          String(ExtraStringSize)
loc:disabled       String(20)
loc:FormOk         Long(1)
loc:options        StringTheory ! options for jQuery calls
loc:fieldClass     String(252)
loc:javascript     String(JavascriptStringLen)
loc:ok             Long
loc:abbreviate     Long
loc:FilterA         StringTheory
  code
    If false
    Else ! default settings for browse column
      loc:extra = ''
      Case loc:LayoutMethod
      of net:Table
      of net:Grid
      of net:Flex
        packet.append('<div class="' & p_web.Combine('nt-browse-flex-cell-prompt',' nt-flex nt-browse-data',,) & '">'&p_web.Translate('Collect To',(Net:HtmlOk*0)+(Net:UnsafeHtmlOk*0))&'</div>')
      End
      packet.append(p_web.DivHeader('MailboxesBrowseControl_MAI:CollectTo_'&MAI:MailBoxNumber,' nt-flex nt-browse-data',net:crc,,loc:extra))
      packet.append( p_web.CreateHyperLink(p_web._jsok(Left(p_web.FormatValue(MAI:CollectTo,'@t4')),(Net:HtmlOk*0)+(Net:UnsafeHtmlOk*0)),,,,loc:javascript,,,(Net:HtmlOk*0)+(Net:UnsafeHtmlOk*0),,,'MailboxesBrowseControl'))
    End
    packet.append(p_web.DivFooter(Net:NoSend))
    if loc:eip = 1
      do SendPacket
    end
! ----------------------------------------------------------------------------------------
value::Randum  Routine
  data
loc:extra          String(ExtraStringSize)
loc:disabled       String(20)
loc:FormOk         Long(1)
loc:options        StringTheory ! options for jQuery calls
loc:fieldClass     String(252)
loc:javascript     String(JavascriptStringLen)
loc:ok             Long
loc:abbreviate     Long
loc:FilterA         StringTheory
  code
    If false
    Else ! default settings for browse column
      loc:extra = ''
      Case loc:LayoutMethod
      of net:Table
      of net:Grid
      of net:Flex
        packet.append('<div class="' & p_web.Combine('nt-browse-flex-cell-prompt',' nt-flex nt-browse-data',,) & '">'&p_web.Translate('Random',(Net:HtmlOk*0)+(Net:UnsafeHtmlOk*0))&'</div>')
      End
      packet.append(p_web.DivHeader('MailboxesBrowseControl_Randum_'&MAI:MailBoxNumber,' nt-flex nt-browse-data',net:crc,,loc:extra))
      packet.append( p_web.CreateHyperLink(p_web._jsok(Left(p_web.FormatValue(random(1,1000),'@t4')),(Net:HtmlOk*0)+(Net:UnsafeHtmlOk*0)),,,,loc:javascript,,,(Net:HtmlOk*0)+(Net:UnsafeHtmlOk*0),,,'MailboxesBrowseControl'))
    End
    packet.append(p_web.DivFooter(Net:NoSend))
    if loc:eip = 1
      do SendPacket
    end
OpenFiles  ROUTINE
  FilesErrorOnOpen.SetValue('')
  FilesOpened = True
!--------------------------------------
CloseFiles ROUTINE
  IF FilesOpened
     FilesOpened = False
  END
!--------------------------------------
SendPacket  routine
  p_web.ParseHTML(packet, 1, 0, NET:NoHeader)
  packet.SetValue('')
CheckForDuplicate  Routine
SetSelection  Routine
  loc:ActualSelection = loc:field
  p_web.SetSessionValue('MAI:MailBoxNumber',MAI:MailBoxNumber)

Totals  Routine
  If Loc:Found = 0 then exit.

AddPacket  Routine
  If packet.Length() = 0 then exit.
  TableQueue.Row = packet.GetValue()
  TableQueue.Sub = loc:RowsIn
  if loc:direction > 0
    add(TableQueue)
  else
    add(TableQueue,loc:first + loc:RowsIn)
  end
  packet.SetValue('')

!---------------------------------------------------------------------------------
RenumberQueue  Routine
  loc:rownumber = 0
  loc:section = Net:BeforeTable
  do RenumberSection
  loc:section = Net:Locator
  do RenumberSection
  loc:section = Net:JustBeforeTable
  do RenumberSection
  loc:section = Net:RowTable
  do RenumberSection
  loc:section = Net:RowHeader
  do RenumberSection
  loc:section = Net:PreRowData
  do RenumberSection
  loc:section = Net:RowData
  do RenumberSection
  loc:section = Net:RowFooter
  do RenumberSection

!---------------------------------------------------------------------------------
RenumberSection Routine
  data
loc:counter  long
  code
  Loop loc:counter = 1 to records(TableQueue)
    get(TableQueue,loc:counter)
    If TableQueue.Kind = loc:section
      p_web.RenumberTableRow(TableQueue.Kind,TableQueue.Row,loc:rownumber)
      Put(TableQueue)
    End
  End

!---------------------------------------------------------------------------------
SendQueue  Routine
  data
ix  long
iy  long
  code
  if loc:ParentSilent = 0
    If loc:LayoutMethod = net:Grid
      do RenumberQueue
    End
    If loc:ActualSelection = ''
      p_web.GetBrowseValue(loc:DefaultSelection,Net:Web:Record+Net:Web:SessionQueue) ! so children are primed with correct sessionValue, and whole record is loaded in call to SetSelection
      loc:Field = loc:DefaultSelection                                               ! want this set for the call to SetSelection
      do SetSelection
    End
    loc:section = Net:RowTable
    do SendSection
    if loc:found
      if p_web.RequestJson = 0
        if loc:LayoutMethod = net:Table
          packet.append('<thead class="'&p_web.combine(p_web.site.style.BrowseHeader,'nt4')&'">' & p_web.CRLF)
        end
      else
        packet.append('"head":{{ "class":"'&p_web.combine(p_web.site.style.BrowseHeader,'nt4')&'",' & p_web.CRLF)
      end
      loc:section = Net:RowHeader
      do SendSection
      if packet.length() = 0                   ! if it comes back blank, it's been sent, so send the closing tag.
        If p_web.RequestJson = 0
          if loc:LayoutMethod = net:Table
            packet.append('</thead>' & p_web.CRLF)
          End
        Else
          packet.append('},' & p_web.CRLF)
        End
        do SendPacket
      end
    end
    packet.setvalue('')
    if loc:LayoutMethod = net:Table
      do SendFooterSection
    end
    If p_web.RequestJson = 0
      packet.append(p_web.BrowseTableBody('',,'0',loc:LayoutMethod))
    Else
      packet.append('"body":{{"class":"'&p_web.combine(p_web.site.style.BrowseBody,)&'","rows": [ ' )
    End
    do SendPacket
    loc:section = Net:PreRowData
    do SendSection
    loc:section = Net:RowData
    do SendSection
    if p_web.RequestJson = 0
      packet.append(p_web.BrowseTableBodyEnd('endBody',loc:LayoutMethod))
    else
      packet.append(']}'& p_web.CRLF)
    end
    do SendPacket
    if loc:LayoutMethod <> net:Table
      do SendFooterSection
    end
  end

!---------------------------------------------------------------------------------
SendFooterSection  Routine
  If p_web.RequestJson = 0
    if loc:LayoutMethod = net:Table
      packet.append('<tfoot class="'&p_web.combine(p_web.site.style.BrowseFoot,)&'">' & p_web.CRLF)
    end
  Else
    packet.append('"foot":{{ "class":"'&p_web.combine(p_web.site.style.BrowseFoot,)&'",' & p_web.CRLF)
  End
  loc:section = Net:RowFooter
  do SendSection
  if packet.Length() = 0                   ! if it comes back blank, it's been sent, so send the closing tag.
    If p_web.RequestJson = 0
      if loc:LayoutMethod = net:Table
        packet.append('</tfoot>' & p_web.CRLF)
      end
    Else
      packet.append('},' & p_web.CRLF)
    End
    do SendPacket
  end
  packet.setvalue('')

!---------------------------------------------------------------------------------
SendSection  Routine
  DATA
loc:counter  Long
loc:r        Long
  CODE
  Loop loc:counter = 1 to records(TableQueue)
    get(TableQueue,loc:counter)
    if TableQueue.Kind = loc:section
      if loc:r = 0 then do SendPacket. ! <head> and <foot> come in "suspended"
      packet.append(clip(TableQueue.Row))
      do SendPacket
      loc:r += 1
    End
  End
  if(loc:FileLoading=Net:PageLoad)
  End
