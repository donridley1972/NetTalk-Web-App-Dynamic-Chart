

   MEMBER('web46.clw')                                     ! This is a MEMBER module

                     MAP
                       INCLUDE('WEB46011.INC'),ONCE        !Local module procedure declarations
                     END


SomePage             PROCEDURE  (NetWebServerWorker p_web)
x  long
y  long
perc  long
loc:x          Long
packet         StringTheory
loc:options    StringTheory ! options for jQuery calls

  CODE
  GlobalErrors.SetProcedureName('SomePage')
  p_web.SetValue('_parentPage','SomePage')
  p_web.publicpage = 1
  if p_web.sessionId = '' then p_web.NewSession().
  do Header
  packet.append(p_web.BodyOnLoad(p_web.Combine(p_web.site.bodyclass,'PageBody'),,p_web.Combine(p_web.site.bodydivclass,'PageBodyDiv')))
    do SendPacket
    Do one
    do SendPacket
  do Footer
  do SendPacket
 ! first close the connection to the browser (it has the page already)
 ! so it doesn't keep waiting for this connection to change
  p_web.ReplyComplete()

 ! so at this point the page has been sent to the browser.
 ! so we could call another procedure here, or just embed the
 ! code right here. Obviously in this case the example is very artificial
 ! but hopefully you get the idea.

 x = clock()
 y = clock() + 10000 ! about 100 seconds
 loop until clock() > y
   perc = (clock() - x) / 100
   if perc = 100
   else
     p_web.SetSessionValue('LoopProgress','Progress: ' & perc & ' %')
   end
   yield
   yield
   yield
   yield
 end

  GlobalErrors.SetProcedureName()
  Return

SendPacket  Routine
  p_web.ParseHTML(packet,1,0,Net:NoHeader)
  packet.SetValue('')
Header  Routine
  packet.Append(p_web.w3Header(p_web.Combine(p_web.site.HtmlClass,),))
  p_web.SetCustomHTMLHeaders()
  packet.append('<head>' & p_web.CRLF &|
      '<title>'&p_web.Translate(p_web.site.PageTitle)&'</title>' & p_web.CRLF &|
      '<meta http-equiv="Content-Type" content="text/html; charset='&clip(p_web.site.HtmlCharset)&'" />' & p_web.CRLF &|
      clip(p_web.MetaHeaders))
  packet.append('<meta name="viewport" content="initial-scale=1">' & p_web.CRLF)
  packet.append(p_web.IncludeStyles())
  packet.append(p_web.IncludeScripts())
  packet.append('</head>' & p_web.CRLF)
  p_web.ParseHTML(packet,1,0,Net:SendHeader+Net:DontCache)
  packet.setvalue('')

Footer  Routine
  packet.append('<!-- Net:SelectField -->')
  do SendPacket
  packet.append('<div class="endbody"></div></div>' & p_web.Comment('body_div') & p_web.CRLF)
  do SendPacket
  packet.append('</body>' & p_web.CRLF & '</html>' & p_web.CRLF)
  do SendPacket
one  Routine
  packet.append(p_web.AsciiToUTF(|
    '<<!-- Net:PageHeaderTag --><13,10>'&|
    '<<br /><13,10>'&|
    'In this example some long process is busy happening on the server. While it carries on the progress will be updated here.<<br /><13,10>'&|
    '<<br /><13,10>'&|
    '<<!-- Net:ProgressSoFar --><13,10>'&|
    '<<!-- Net:PageFooterTag --><13,10>'&|
    '',net:OnlyIfUTF,net:StoreAsAscii))
