  MEMBER('web46.clw')

  INCLUDE('ABFILE.INC'),ONCE

  MAP
web46_BC0:DctInit    PROCEDURE
web46_BC0:DctKill    PROCEDURE
web46_BC0:FilesInit  PROCEDURE
  END

Hide:Access:MailBoxes CLASS(FileManager),TYPE              ! FileManager for MailBoxes
Init                   PROCEDURE(),DERIVED
Kill                   PROCEDURE(),DERIVED
UseFile                PROCEDURE(BYTE UseType = UseType:Uses),BYTE,PROC,DERIVED
                     END


Hide:Relate:MailBoxes CLASS(RelationManager),TYPE          ! RelationManager for MailBoxes
Init                   PROCEDURE
DeferedAddRelations    PROCEDURE(),DERIVED
Kill                   PROCEDURE(),DERIVED
                     END

Hide:Access:NetWebLog CLASS(FileManager),TYPE              ! FileManager for NetWebLog
Init                   PROCEDURE(),DERIVED
Kill                   PROCEDURE(),DERIVED
UseFile                PROCEDURE(BYTE UseType = UseType:Uses),BYTE,PROC,DERIVED
                     END


Hide:Relate:NetWebLog CLASS(RelationManager),TYPE          ! RelationManager for NetWebLog
Init                   PROCEDURE
Kill                   PROCEDURE(),DERIVED
                     END

Hide:Access:Alias    CLASS(FileManager),TYPE               ! FileManager for Alias
Init                   PROCEDURE(),DERIVED
Kill                   PROCEDURE(),DERIVED
UseFile                PROCEDURE(BYTE UseType = UseType:Uses),BYTE,PROC,DERIVED
                     END


Hide:Relate:Alias    CLASS(RelationManager),TYPE           ! RelationManager for Alias
Init                   PROCEDURE
DeferedAddRelations    PROCEDURE(),DERIVED
Kill                   PROCEDURE(),DERIVED
                     END


_Hide:Access:MailBoxes &Hide:Access:MailBoxes,AUTO,THREAD
_Hide:Relate:MailBoxes &Hide:Relate:MailBoxes,AUTO,THREAD
_Hide:Access:NetWebLog &Hide:Access:NetWebLog,AUTO,THREAD
_Hide:Relate:NetWebLog &Hide:Relate:NetWebLog,AUTO,THREAD
_Hide:Access:Alias   &Hide:Access:Alias,AUTO,THREAD
_Hide:Relate:Alias   &Hide:Relate:Alias,AUTO,THREAD


web46_BC0:DctInit PROCEDURE
  CODE
  _Hide:Access:MailBoxes &= NEW(Hide:Access:MailBoxes)
  _Hide:Relate:MailBoxes &= NEW(Hide:Relate:MailBoxes)
  _Hide:Access:NetWebLog &= NEW(Hide:Access:NetWebLog)
  _Hide:Relate:NetWebLog &= NEW(Hide:Relate:NetWebLog)
  _Hide:Access:Alias &= NEW(Hide:Access:Alias)
  _Hide:Relate:Alias &= NEW(Hide:Relate:Alias)
  Relate:MailBoxes &= _Hide:Relate:MailBoxes
  Relate:NetWebLog &= _Hide:Relate:NetWebLog
  Relate:Alias &= _Hide:Relate:Alias


web46_BC0:FilesInit PROCEDURE
  CODE
  _Hide:Relate:MailBoxes.Init
  _Hide:Relate:NetWebLog.Init
  _Hide:Relate:Alias.Init


web46_BC0:DctKill PROCEDURE
  CODE
  _Hide:Relate:MailBoxes.Kill
  DISPOSE(_Hide:Relate:MailBoxes)
  _Hide:Relate:NetWebLog.Kill
  DISPOSE(_Hide:Relate:NetWebLog)
  _Hide:Relate:Alias.Kill
  DISPOSE(_Hide:Relate:Alias)


Hide:Relate:MailBoxes.Init PROCEDURE
  CODE
  _Hide:Access:MailBoxes.Init
  SELF.Init(Access:MailBoxes,1)


Hide:Access:MailBoxes.Init PROCEDURE

  CODE
  SELF.Initialized = False
  SELF.Buffer &= MAI:Record
  SELF.FileNameValue = 'MailBoxes'
  SELF.SetErrors(GlobalErrors)
  SELF.File &= MailBoxes
  PARENT.Init
  Access:MailBoxes &= SELF


Hide:Access:MailBoxes.Kill PROCEDURE

  CODE
  PARENT.Kill
  Access:MailBoxes &= NULL                                 ! File manager has been destroyed to assign null, it is an error to reference this after this point


Hide:Access:MailBoxes.UseFile PROCEDURE(BYTE UseType = UseType:Uses)

ReturnValue          BYTE,AUTO

  CODE
  IF UseType ~= UseType:Initialize
    SELF.UseFile(UseType:Initialize)                       !Recursive call to ensure initialization takes place
  END
  IF UseType = UseType:Initialize AND ~SELF.Initialized
    SELF.InUseFile = True
    SELF.Init(MailBoxes,GlobalErrors)
    SELF.Create = 1
    SELF.LockRecover = 10
    SELF.AddKey(MAI:NameKey,'MAI:NameKey',0)
    SELF.AddKey(MAI:PrimaryKey,'MAI:PrimaryKey',1)
  END
                                                           !SELF.InUseFile will be set to False in PARENT
  ReturnValue = PARENT.UseFile(UseType)
  RETURN ReturnValue


Hide:Relate:MailBoxes.DeferedAddRelations PROCEDURE

  CODE
  DO AddRelations_1
  
  PARENT.DeferedAddRelations

AddRelations_1 ROUTINE
  SELF.AddRelation(Relate:Alias,RI:CASCADE,RI:CASCADE,ALI:MailBoxKey)
  SELF.AddRelationLink(MAI:MailBoxNumber,ALI:MailBoxNumber)


Hide:Relate:MailBoxes.Kill PROCEDURE

  CODE
  _Hide:Access:MailBoxes.Kill                              ! Kill the file manager
  PARENT.Kill
  Relate:MailBoxes &= NULL                                 ! Assign NULL to the RelationManager's FileManager reference, it is an error to reference this after this point
  DISPOSE(_Hide:Access:MailBoxes)                          ! destroy the file manager


Hide:Relate:NetWebLog.Init PROCEDURE
  CODE
  _Hide:Access:NetWebLog.Init
  SELF.Init(Access:NetWebLog,1)


Hide:Access:NetWebLog.Init PROCEDURE

  CODE
  SELF.Initialized = False
  SELF.Buffer &= WEBLOG:Record
  SELF.FileNameValue = 'NetWebLog'
  SELF.SetErrors(GlobalErrors)
  SELF.File &= NetWebLog
  SELF.FileName &= glo:WebLogName
  PARENT.Init
  Access:NetWebLog &= SELF


Hide:Access:NetWebLog.Kill PROCEDURE

  CODE
  PARENT.Kill
  Access:NetWebLog &= NULL                                 ! File manager has been destroyed to assign null, it is an error to reference this after this point


Hide:Access:NetWebLog.UseFile PROCEDURE(BYTE UseType = UseType:Uses)

ReturnValue          BYTE,AUTO

  CODE
  IF UseType ~= UseType:Initialize
    SELF.UseFile(UseType:Initialize)                       !Recursive call to ensure initialization takes place
  END
  IF UseType = UseType:Initialize AND ~SELF.Initialized
    SELF.InUseFile = True
    SELF.Init(NetWebLog,GlobalErrors)
    SELF.Create = 1
    SELF.LockRecover = 10
  END
                                                           !SELF.InUseFile will be set to False in PARENT
  ReturnValue = PARENT.UseFile(UseType)
  RETURN ReturnValue


Hide:Relate:NetWebLog.Kill PROCEDURE

  CODE
  _Hide:Access:NetWebLog.Kill                              ! Kill the file manager
  PARENT.Kill
  Relate:NetWebLog &= NULL                                 ! Assign NULL to the RelationManager's FileManager reference, it is an error to reference this after this point
  DISPOSE(_Hide:Access:NetWebLog)                          ! destroy the file manager


Hide:Relate:Alias.Init PROCEDURE
  CODE
  _Hide:Access:Alias.Init
  SELF.Init(Access:Alias,1)


Hide:Access:Alias.Init PROCEDURE

  CODE
  SELF.Initialized = False
  SELF.Buffer &= ALI:Record
  SELF.FileNameValue = 'Alias'
  SELF.SetErrors(GlobalErrors)
  SELF.File &= Alias
  PARENT.Init
  Access:Alias &= SELF


Hide:Access:Alias.Kill PROCEDURE

  CODE
  PARENT.Kill
  Access:Alias &= NULL                                     ! File manager has been destroyed to assign null, it is an error to reference this after this point


Hide:Access:Alias.UseFile PROCEDURE(BYTE UseType = UseType:Uses)

ReturnValue          BYTE,AUTO

  CODE
  IF UseType ~= UseType:Initialize
    SELF.UseFile(UseType:Initialize)                       !Recursive call to ensure initialization takes place
  END
  IF UseType = UseType:Initialize AND ~SELF.Initialized
    SELF.InUseFile = True
    SELF.Init(Alias,GlobalErrors)
    SELF.Create = 1
    SELF.LockRecover = 10
    SELF.AddKey(ALI:NameKey,'ALI:NameKey',0)
    SELF.AddKey(ALI:MailBoxKey,'ALI:MailBoxKey',0)
    SELF.AddKey(ALI:key,'ALI:key',1)
  END
                                                           !SELF.InUseFile will be set to False in PARENT
  ReturnValue = PARENT.UseFile(UseType)
  RETURN ReturnValue


Hide:Relate:Alias.DeferedAddRelations PROCEDURE

  CODE
  DO AddRelations_1
  
  PARENT.DeferedAddRelations

AddRelations_1 ROUTINE
  SELF.AddRelation(Relate:MailBoxes)


Hide:Relate:Alias.Kill PROCEDURE

  CODE
  _Hide:Access:Alias.Kill                                  ! Kill the file manager
  PARENT.Kill
  Relate:Alias &= NULL                                     ! Assign NULL to the RelationManager's FileManager reference, it is an error to reference this after this point
  DISPOSE(_Hide:Access:Alias)                              ! destroy the file manager

