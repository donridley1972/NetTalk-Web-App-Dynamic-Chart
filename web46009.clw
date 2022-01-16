

   MEMBER('web46.clw')                                     ! This is a MEMBER module

                     MAP
                       INCLUDE('WEB46009.INC'),ONCE        !Local module procedure declarations
                     END


PageFooterTag        PROCEDURE  (NetWebServerWorker p_web)
! Use this procedure to "embed" html in other pages.
! on the web page use <!-- Net:PageFooterTag -->
!
! In this procedure set the packet stringTheory object, and call the SendPacket routine.
!
! EXAMPLE:
! packet.append('<strong>Hello World!</strong>'& p_web.CRLF)
! do SendPacket
loc:divname           string(252)
loc:parent            string(252)  ! should always be a lower-case string
packet                  StringTheory
timer                   long
loc:options             StringTheory ! options for jQuery calls
  CODE
  If p_web.Event='callpopups'
    Return
  End
  GlobalErrors.SetProcedureName('PageFooterTag')
  loc:parent = p_web.PlainText(lower(p_web.GetValue('_parentProc_')))
  If loc:parent <> ''
    loc:divname = lower(clip(loc:parent) & net:PARENTSEPARATOR & 'PageFooterTag')
  Else
    loc:divname = lower('PageFooterTag')
  End

  If (p_web.site.ContentBody) and p_web.Ajax = 0
    p_web.DivFooter(,'contentbody_div')
  end
  packet.append('<style>:root{{--footer-height:'& clip('3rem')&';--minus-footer-height:-'& clip('3rem') &';}</style>')
  do SendPacket
  p_web.DivHeader(loc:divname,'nt-width-100 nt-left',,,' data-role="footer"',1,,,'PageFooterTag')
!----------- put your Header Panel html code here -----------------------------------
    !
      do SendPacket
      Do one
      do SendPacket
!----------- end of custom code ----------------------------------------
  do SendPacket
  p_web.DivFooter(,loc:divName)
  GlobalErrors.SetProcedureName()
  Return

!--------------------------------------
SendPacket  routine
  p_web.ParseHTML(packet,1,0,NET:NoHeader)
  packet.SetValue('')

one  Routine
  packet.append(p_web.AsciiToUTF(|
    '<<form name="counter"><13,10>'&|
    '<<div class="ui-round-all"><13,10>'&|
    '<<input type="text" size="82" name="d2" /><13,10>'&|
    '<</div><13,10>'&|
    '<</form><13,10>'&|
    '<13,10>'&|
    '<<script><13,10>'&|
    '<<!--<13,10>'&|
    'var seconds=60<13,10>'&|
    'var minutes = 1<13,10>'&|
    'document.counter.d2.value="If you do not work you will automatically be logged out in "+minutes+" minutes and "+seconds+" seconds."<13,10>'&|
    'function display(){{<13,10>'&|
    'if (seconds<<=0){{<13,10>'&|
    '    seconds=60<13,10>'&|
    '    minutes-=1<13,10>'&|
    '}<13,10>'&|
    'if (minutes<<0){{<13,10>'&|
    '    seconds=0<13,10>'&|
    '    minutes=0<13,10>'&|
    '    window.open(''IndexPage'',''_top'');<13,10>'&|
    '}<13,10>'&|
    'else<13,10>'&|
    '    seconds-=1<13,10>'&|
    '    document.counter.d2.value="If you do not work you will automatically be logged out in "+minutes+" minutes and "+seconds+" seconds."<13,10>'&|
    '    setTimeout("display()",1000)<13,10>'&|
    '}<13,10>'&|
    'display()<13,10>'&|
    '--><13,10>'&|
    '<</script><13,10>'&|
    '',net:OnlyIfUTF,net:StoreAsAscii))
