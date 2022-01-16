  MEMBER('web46.clw')

  PRAGMA('define(init_priority=>3)')

  MAP
    MODULE('web46_BC0.CLW')
web46_BC0:DctInit             PROCEDURE
web46_BC0:DctKill             PROCEDURE
web46_BC0:FilesInit           PROCEDURE
    END
  END

DctInit PROCEDURE
  CODE
  web46_BC0:DctInit
  web46_BC0:FilesInit


DctKill PROCEDURE
  CODE
  web46_BC0:DctKill

