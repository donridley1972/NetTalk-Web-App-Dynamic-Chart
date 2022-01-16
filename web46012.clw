

   MEMBER('web46.clw')                                     ! This is a MEMBER module

                     MAP
                       INCLUDE('WEB46012.INC'),ONCE        !Local module procedure declarations
                     END


ProgressSoFar        PROCEDURE  (NetWebServerWorker p_web)
! Use this procedure to "embed" html in other pages.
! on the web page use <!-- Net:ProgressSoFar -->
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
  GlobalErrors.SetProcedureName('ProgressSoFar')
  loc:parent = p_web.PlainText(lower(p_web.GetValue('_parentProc_')))
  If loc:parent <> ''
    loc:divname = lower(clip(loc:parent) & net:PARENTSEPARATOR & 'ProgressSoFar')
  Else
    loc:divname = lower('ProgressSoFar')
  End

  p_web.DivHeader(loc:divname,Choose('adiv'),,,,1)
!----------- put your Header Panel html code here -----------------------------------
    !
      do SendPacket
      Do one
      do SendPacket
!----------- end of custom code ----------------------------------------
  do SendPacket
  p_web.DivFooter(,loc:divName)
  timer = 2000
  if loc:parent
    p_web._RegisterDivEx(loc:divname,timer,'''_parentProc_='&clip(loc:parent)&'''')
  else
    p_web._RegisterDivEx(loc:divname,timer)
  End
  GlobalErrors.SetProcedureName()
  Return

!--------------------------------------
SendPacket  routine
  p_web.ParseHTML(packet,1,0,NET:NoHeader)
  packet.SetValue('')

one  Routine
  packet.append(p_web.AsciiToUTF(|
    'Progress: <<!-- Net:s:LoopProgress --><13,10>'&|
    '',net:OnlyIfUTF,net:StoreAsAscii))
