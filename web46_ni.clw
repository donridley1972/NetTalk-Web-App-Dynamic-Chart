  Section('ProcessTag')
  loc:tag = Choose(Instring('?',loc:tag) > 0,sub(loc:tag,1,Instring('?',loc:tag)-1),loc:tag)
  Case loc:tag
    of 'pageheadertag'
      pageheadertag(Self)
    of 'mailboxesbrowsecontrol'
      mailboxesbrowsecontrol(Self)
    of 'progresssofar'
      progresssofar(Self)
    of 'pagefootertag'
      pagefootertag(Self)
    of 'timeclock'
      timeclock(Self)
    of 'mailboxesformcontrol'
      mailboxesformcontrol(Self)
  End
  Section('CallFormA')
    If Band(p_Stage, NET:WEB:StagePost + NET:WEB:StageValidate + NET:WEB:Cancel)
      case lower(self.formsettings.proc)
      Of 'mailboxesformcontrol'
         ReturnValue = MailboxesFormControl(Self,p_stage)
         RETURN ReturnValue
      End
    Else
      case lower(SELF.PageName)
        Of 'mailboxesformcontrol'
          ReturnValue = MailboxesFormControl(Self,p_stage)
          RETURN ReturnValue
      End
    End
  Section('CallFormB')
    If p_File &= mailboxes
       ReturnValue = MailboxesFormControl(Self,p_stage)
       RETURN ReturnValue
    End
  Section('CallFormC')
  Section('ProcessYear')
