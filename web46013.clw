

   MEMBER('web46.clw')                                     ! This is a MEMBER module

                     MAP
                       INCLUDE('WEB46013.INC'),ONCE        !Local module procedure declarations
                     END


SomeResult           PROCEDURE  (NetWebServerWorker p_web)
loc:x          Long
packet         StringTheory
loc:options    StringTheory ! options for jQuery calls

  CODE
  GlobalErrors.SetProcedureName('SomeResult')
  p_web.SetValue('_parentPage','SomeResult')
  p_web.publicpage = 1
  if p_web.sessionId = '' then p_web.NewSession().
  do Header
  packet.append(p_web.BodyOnLoad(p_web.Combine(p_web.site.bodyclass,'PageBody'),,p_web.Combine(p_web.site.bodydivclass,'PageBodyDiv')))
    do SendPacket
    Do one
    do SendPacket
  do Footer
  do SendPacket
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
    'Ok, so the process finished, and the user came here to see the result. Which you could obviously display on this page.<13,10>'&|
    '<<br /><13,10>'&|
    '<<!-- Net:PageFooterTag --><13,10>'&|
    '',net:OnlyIfUTF,net:StoreAsAscii))
