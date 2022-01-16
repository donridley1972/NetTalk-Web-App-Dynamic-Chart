

   MEMBER('web46.clw')                                     ! This is a MEMBER module

                     MAP
                       INCLUDE('WEB46008.INC'),ONCE        !Local module procedure declarations
                     END


PageHeaderTag        PROCEDURE  (NetWebServerWorker p_web)
! Use this procedure to "embed" html in other pages.
! on the web page use <!-- Net:PageHeaderTag -->
!
! In this procedure set the packet stringTheory object, and call the SendPacket routine.
!
! EXAMPLE:
! packet.append('<strong>Hello World!</strong>'& p_web.CRLF)
! do SendPacket
loc:divname           string(252)
loc:parent            string(252)  ! should always be a lower-case string
loc:ContentBodyClass  string(StyleStringSize)
loc:LeftPanelClass    string(StyleStringSize)
loc:RightPanelClass   string(StyleStringSize)
loc:leftpanel         Long
loc:rightpanel        Long
packet                  StringTheory
timer                   long
loc:options             StringTheory ! options for jQuery calls
loc:BorderStyle  Long
loc:class        String(1024)
  CODE
  If p_web.Event='callpopups'
    Return
  End
  GlobalErrors.SetProcedureName('PageHeaderTag')
  loc:parent = p_web.PlainText(lower(p_web.GetValue('_parentProc_')))
  If loc:parent <> ''
    loc:divname = lower(clip(loc:parent) & net:PARENTSEPARATOR & 'PageHeaderTag')
  Else
    loc:divname = lower('PageHeaderTag')
  End

  p_web.DivHeader(loc:divname,'nt-width-100',,,' data-role="header"',1,,,'PageHeaderTag')
!----------- put your Header Panel html code here -----------------------------------
    !
    Loc:BorderStyle = Net:Web:Round
    do BorderHeader:2
    do SendPacket
    do heading
    do BorderFooter:2
    do SendPacket
!----------- end of custom code ----------------------------------------
  do SendPacket
  p_web.DivFooter(,loc:divName)
  packet.append('<!-- Net:Busy -->')
  packet.append('<!-- Net:Message -->')
  do SendPacket
  If loc:leftpanel and loc:rightpanel
    loc:ContentBodyClass = ' nt-contentpanel-lr'
    loc:LeftPanelClass = 'nt-leftpanel nt-leftpanel-lr'
    loc:RightPanelClass = 'nt-rightpanel nt-rightpanel-lr'
  ElsIf loc:leftpanel
    loc:ContentBodyClass = ' nt-contentpanel-l'
    loc:LeftPanelClass = 'nt-leftpanel nt-leftpanel-l'
  ElsIf loc:Rightpanel
    loc:ContentBodyClass = ' nt-contentpanel-r'
    loc:RightPanelClass = 'nt-rightpanel nt-rightpanel-r'
  Else
    loc:ContentBodyClass = ' nt-contentpanel-h'
  End
  If Loc:LeftPanel
    p_web.DivHeader(clip(loc:divname) & '_left',p_web.Combine(loc:LeftPanelClass,'nt-leftpanel'),,,,1,,,'Left Panel')
    p_web.DivFooter(,clip(loc:divname) & '_left')
  End
  If Loc:RightPanel
    p_web.DivHeader(clip(loc:divname) & '_right',p_web.Combine(loc:RightPanelClass,'nt-rightpanel'),,,,1,,,'Right Panel')
    p_web.DivFooter(,clip(loc:divname) & '_right')
  End
  If (p_web.site.ContentBody) and p_web.Ajax = 0
    p_web.DivHeader(p_web.site.ContentBody,p_web.Combine(p_web.site.contentbodydivclass,loc:ContentBodyClass),,,,,,,'Content Body')
  end
  GlobalErrors.SetProcedureName()
  Return

!--------------------------------------
SendPacket  routine
  p_web.ParseHTML(packet,1,0,NET:NoHeader)
  packet.SetValue('')

BorderHeader:2 Routine
  loc:class = 'nt-width-100'
  loc:class = p_web.combine(loc:class,' nt-margin-bottom')
  packet.append('<div '&p_web.wrap('class',loc:class)&'>')
  loc:class = ''
  Case loc:BorderStyle
  of Net:Web:Rounded
    loc:class = p_web.combine('ui-corner-all','')
  of Net:Web:Plain
    loc:class = ''
  End
  packet.append('<fieldset '& p_web.wrap('class',loc:class) &'><13,10>')

BorderFooter:2 Routine
  packet.append('</fieldset></div><13,10>')
heading  Routine
  packet.append(p_web.AsciiToUTF(|
    '      <<table class="headingtable"><13,10>'&|
    '        <<tr><13,10>'&|
    '        <<td width="10%"><<img border="0" src="images/heading.png" /><</td><13,10>'&|
    ' {9}<<td width="80%">CapeSoft Email Server - Configuration<</td><13,10>'&|
    ' {9}<<td width="10%"><<a href="javascript:top.close()"><<img border="0" src="images/close.png" /><</a><</td><13,10>'&|
    ' {9}<</tr><13,10>'&|
    '        <</table><13,10>'&|
    '',net:OnlyIfUTF,net:StoreAsAscii))
