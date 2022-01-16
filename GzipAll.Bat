del  web\scripts\*.gz

rem -- Combine Desktop Scripts -----------------------------------
IF EXIST web\scripts\modernizr.custom.js type web\scripts\modernizr.custom.js            > web\scripts\all.fat.js
IF EXIST web\scripts\jquery-3.4.1.min.js type web\scripts\jquery-3.4.1.min.js            >> web\scripts\all.fat.js
IF EXIST web\scripts\jquery-ui-1.12.1.custom.min.js type web\scripts\jquery-ui-1.12.1.custom.min.js >> web\scripts\all.fat.js
IF EXIST web\scripts\jquery.form.js type web\scripts\jquery.form.js                 >> web\scripts\all.fat.js
IF EXIST web\scripts\jquery.nt-form.js type web\scripts\jquery.nt-form.js              >> web\scripts\all.fat.js
IF EXIST web\scripts\jquery.nt-menu.js type web\scripts\jquery.nt-menu.js              >> web\scripts\all.fat.js
IF EXIST web\scripts\jquery.nt-wiz.js type web\scripts\jquery.nt-wiz.js               >> web\scripts\all.fat.js
IF EXIST web\scripts\jquery.metadata.js type web\scripts\jquery.metadata.js             >> web\scripts\all.fat.js
IF EXIST web\scripts\jquery.nt-color.js type web\scripts\jquery.nt-color.js             >> web\scripts\all.fat.js
IF EXIST web\scripts\jquery.nt-dialog.js type web\scripts\jquery.nt-dialog.js            >> web\scripts\all.fat.js
IF EXIST web\scripts\jquery.media.js type web\scripts\jquery.media.js                      >> web\scripts\all.fat.js
IF EXIST web\scripts\netweb.js type web\scripts\netweb.js                      >> web\scripts\all.fat.js
IF EXIST web\scripts\jquery.nt-session.js type web\scripts\jquery.nt-session.js  >> web\scripts\all.fat.js
IF EXIST web\scripts\jquery.nt-browse.js type web\scripts\jquery.nt-browse.js  >> web\scripts\all.fat.js
IF EXIST web\scripts\jcanvas.js type web\scripts\jcanvas.js              >> web\scripts\all.fat.js
IF EXIST web\scripts\jquery.nt-cal.js type web\scripts\jquery.nt-cal.js               >> web\scripts\all.fat.js
IF EXIST web\scripts\jquery.ad-gallery.js type web\scripts\jquery.ad-gallery.js           >> web\scripts\all.fat.js
IF EXIST web\scripts\jquery.iframe-transport.js type web\scripts\jquery.iframe-transport.js     >> web\scripts\all.fat.js
IF EXIST web\scripts\jquery.fileupload.js type web\scripts\jquery.fileupload.js           >> web\scripts\all.fat.js
IF EXIST web\scripts\jquery.nt-upload.js type web\scripts\jquery.nt-upload.js            >> web\scripts\all.fat.js

rem -- compress all.js ---------------------------------------------
type web\scripts\all.fat.js > web\scripts\all.js
rem "C:\Program Files (x86)\SoftVelocity\Clarion8\accessory\bin\jsmin" < web\scripts\all.fat.js > web\scripts\all.js
"C:\Program Files (x86)\SoftVelocity\Clarion8\accessory\bin\gzip" -9 -n -f -c "web\scripts\all.fat.js"        > "web\scripts\all.js.gz"

rem -- combine desktop themes  -----------------------------------
rem    --  absolution
IF EXIST web\themes\absolution\nt-theme.css type web\themes\absolution\nt-theme.css    >  web\themes\absolution\theme.fat.css
IF EXIST web\styles\jquery-ui.structure.css type web\styles\jquery-ui.structure.css    >>  web\themes\absolution\theme.fat.css
IF EXIST web\themes\absolution\jquery-ui.theme.css type web\themes\absolution\jquery-ui.theme.css    >>  web\themes\absolution\theme.fat.css
IF EXIST web\styles\jquery-nt-color.css type web\styles\jquery-nt-color.css         >> web\themes\absolution\theme.fat.css
IF EXIST web\styles\jquery-nt-menu.css type web\styles\jquery-nt-menu.css          >> web\themes\absolution\theme.fat.css
IF EXIST web\styles\jquery-nt-cal.css type web\styles\jquery-nt-cal.css           >> web\themes\absolution\theme.fat.css
IF EXIST web\styles\jquery.ad-gallery.css type web\styles\jquery.ad-gallery.css       >> web\themes\absolution\theme.fat.css
IF EXIST web\styles\jquery.fileupload-ui.css type web\styles\jquery.fileupload-ui.css     >> web\themes\absolution\theme.fat.css
IF EXIST web\styles\netweb.css type web\styles\netweb.css                  >> web\themes\absolution\theme.fat.css
IF EXIST web\styles\nettalk-grid.css type web\styles\nettalk-grid.css            >> web\themes\absolution\theme.fat.css
IF EXIST web\themes\absolution\nettalk-ui.css type web\themes\absolution\nettalk-ui.css   >> web\themes\absolution\theme.fat.css
rem    --  aristo
IF EXIST web\themes\aristo\nt-theme.css type web\themes\aristo\nt-theme.css    >  web\themes\aristo\theme.fat.css
IF EXIST web\styles\jquery-ui.structure.css type web\styles\jquery-ui.structure.css    >>  web\themes\aristo\theme.fat.css
IF EXIST web\themes\aristo\jquery-ui.theme.css type web\themes\aristo\jquery-ui.theme.css    >>  web\themes\aristo\theme.fat.css
IF EXIST web\styles\jquery-nt-color.css type web\styles\jquery-nt-color.css         >> web\themes\aristo\theme.fat.css
IF EXIST web\styles\jquery-nt-menu.css type web\styles\jquery-nt-menu.css          >> web\themes\aristo\theme.fat.css
IF EXIST web\styles\jquery-nt-cal.css type web\styles\jquery-nt-cal.css           >> web\themes\aristo\theme.fat.css
IF EXIST web\styles\jquery.ad-gallery.css type web\styles\jquery.ad-gallery.css       >> web\themes\aristo\theme.fat.css
IF EXIST web\styles\jquery.fileupload-ui.css type web\styles\jquery.fileupload-ui.css     >> web\themes\aristo\theme.fat.css
IF EXIST web\styles\netweb.css type web\styles\netweb.css                  >> web\themes\aristo\theme.fat.css
IF EXIST web\styles\nettalk-grid.css type web\styles\nettalk-grid.css            >> web\themes\aristo\theme.fat.css
IF EXIST web\themes\aristo\nettalk-ui.css type web\themes\aristo\nettalk-ui.css   >> web\themes\aristo\theme.fat.css
rem    --  base
IF EXIST web\themes\base\nt-theme.css type web\themes\base\nt-theme.css    >  web\themes\base\theme.fat.css
IF EXIST web\styles\jquery-ui.structure.css type web\styles\jquery-ui.structure.css    >>  web\themes\base\theme.fat.css
IF EXIST web\themes\base\jquery-ui.theme.css type web\themes\base\jquery-ui.theme.css    >>  web\themes\base\theme.fat.css
IF EXIST web\styles\jquery-nt-color.css type web\styles\jquery-nt-color.css         >> web\themes\base\theme.fat.css
IF EXIST web\styles\jquery-nt-menu.css type web\styles\jquery-nt-menu.css          >> web\themes\base\theme.fat.css
IF EXIST web\styles\jquery-nt-cal.css type web\styles\jquery-nt-cal.css           >> web\themes\base\theme.fat.css
IF EXIST web\styles\jquery.ad-gallery.css type web\styles\jquery.ad-gallery.css       >> web\themes\base\theme.fat.css
IF EXIST web\styles\jquery.fileupload-ui.css type web\styles\jquery.fileupload-ui.css     >> web\themes\base\theme.fat.css
IF EXIST web\styles\netweb.css type web\styles\netweb.css                  >> web\themes\base\theme.fat.css
IF EXIST web\styles\nettalk-grid.css type web\styles\nettalk-grid.css            >> web\themes\base\theme.fat.css
IF EXIST web\themes\base\nettalk-ui.css type web\themes\base\nettalk-ui.css   >> web\themes\base\theme.fat.css
rem    --  bootstrap
IF EXIST web\themes\bootstrap\nt-theme.css type web\themes\bootstrap\nt-theme.css    >  web\themes\bootstrap\theme.fat.css
IF EXIST web\styles\jquery-ui.structure.css type web\styles\jquery-ui.structure.css    >>  web\themes\bootstrap\theme.fat.css
IF EXIST web\themes\bootstrap\jquery-ui.theme.css type web\themes\bootstrap\jquery-ui.theme.css    >>  web\themes\bootstrap\theme.fat.css
IF EXIST web\styles\jquery-nt-color.css type web\styles\jquery-nt-color.css         >> web\themes\bootstrap\theme.fat.css
IF EXIST web\styles\jquery-nt-menu.css type web\styles\jquery-nt-menu.css          >> web\themes\bootstrap\theme.fat.css
IF EXIST web\styles\jquery-nt-cal.css type web\styles\jquery-nt-cal.css           >> web\themes\bootstrap\theme.fat.css
IF EXIST web\styles\jquery.ad-gallery.css type web\styles\jquery.ad-gallery.css       >> web\themes\bootstrap\theme.fat.css
IF EXIST web\styles\jquery.fileupload-ui.css type web\styles\jquery.fileupload-ui.css     >> web\themes\bootstrap\theme.fat.css
IF EXIST web\styles\netweb.css type web\styles\netweb.css                  >> web\themes\bootstrap\theme.fat.css
IF EXIST web\styles\nettalk-grid.css type web\styles\nettalk-grid.css            >> web\themes\bootstrap\theme.fat.css
IF EXIST web\themes\bootstrap\nettalk-ui.css type web\themes\bootstrap\nettalk-ui.css   >> web\themes\bootstrap\theme.fat.css
rem    --  bottle
IF EXIST web\themes\bottle\nt-theme.css type web\themes\bottle\nt-theme.css    >  web\themes\bottle\theme.fat.css
IF EXIST web\styles\jquery-ui.structure.css type web\styles\jquery-ui.structure.css    >>  web\themes\bottle\theme.fat.css
IF EXIST web\themes\bottle\jquery-ui.theme.css type web\themes\bottle\jquery-ui.theme.css    >>  web\themes\bottle\theme.fat.css
IF EXIST web\styles\jquery-nt-color.css type web\styles\jquery-nt-color.css         >> web\themes\bottle\theme.fat.css
IF EXIST web\styles\jquery-nt-menu.css type web\styles\jquery-nt-menu.css          >> web\themes\bottle\theme.fat.css
IF EXIST web\styles\jquery-nt-cal.css type web\styles\jquery-nt-cal.css           >> web\themes\bottle\theme.fat.css
IF EXIST web\styles\jquery.ad-gallery.css type web\styles\jquery.ad-gallery.css       >> web\themes\bottle\theme.fat.css
IF EXIST web\styles\jquery.fileupload-ui.css type web\styles\jquery.fileupload-ui.css     >> web\themes\bottle\theme.fat.css
IF EXIST web\styles\netweb.css type web\styles\netweb.css                  >> web\themes\bottle\theme.fat.css
IF EXIST web\styles\nettalk-grid.css type web\styles\nettalk-grid.css            >> web\themes\bottle\theme.fat.css
IF EXIST web\themes\bottle\nettalk-ui.css type web\themes\bottle\nettalk-ui.css   >> web\themes\bottle\theme.fat.css
rem    --  material17
IF EXIST web\themes\material17\nt-theme.css type web\themes\material17\nt-theme.css    >  web\themes\material17\theme.fat.css
IF EXIST web\styles\jquery-ui.structure.css type web\styles\jquery-ui.structure.css    >>  web\themes\material17\theme.fat.css
IF EXIST web\themes\material17\jquery-ui.theme.css type web\themes\material17\jquery-ui.theme.css    >>  web\themes\material17\theme.fat.css
IF EXIST web\styles\jquery-nt-color.css type web\styles\jquery-nt-color.css         >> web\themes\material17\theme.fat.css
IF EXIST web\styles\jquery-nt-menu.css type web\styles\jquery-nt-menu.css          >> web\themes\material17\theme.fat.css
IF EXIST web\styles\jquery-nt-cal.css type web\styles\jquery-nt-cal.css           >> web\themes\material17\theme.fat.css
IF EXIST web\styles\jquery.ad-gallery.css type web\styles\jquery.ad-gallery.css       >> web\themes\material17\theme.fat.css
IF EXIST web\styles\jquery.fileupload-ui.css type web\styles\jquery.fileupload-ui.css     >> web\themes\material17\theme.fat.css
IF EXIST web\styles\netweb.css type web\styles\netweb.css                  >> web\themes\material17\theme.fat.css
IF EXIST web\styles\nettalk-grid.css type web\styles\nettalk-grid.css            >> web\themes\material17\theme.fat.css
IF EXIST web\themes\material17\nettalk-ui.css type web\themes\material17\nettalk-ui.css   >> web\themes\material17\theme.fat.css
rem    --  metroblue
IF EXIST web\themes\metroblue\nt-theme.css type web\themes\metroblue\nt-theme.css    >  web\themes\metroblue\theme.fat.css
IF EXIST web\styles\jquery-ui.structure.css type web\styles\jquery-ui.structure.css    >>  web\themes\metroblue\theme.fat.css
IF EXIST web\themes\metroblue\jquery-ui.theme.css type web\themes\metroblue\jquery-ui.theme.css    >>  web\themes\metroblue\theme.fat.css
IF EXIST web\styles\jquery-nt-color.css type web\styles\jquery-nt-color.css         >> web\themes\metroblue\theme.fat.css
IF EXIST web\styles\jquery-nt-menu.css type web\styles\jquery-nt-menu.css          >> web\themes\metroblue\theme.fat.css
IF EXIST web\styles\jquery-nt-cal.css type web\styles\jquery-nt-cal.css           >> web\themes\metroblue\theme.fat.css
IF EXIST web\styles\jquery.ad-gallery.css type web\styles\jquery.ad-gallery.css       >> web\themes\metroblue\theme.fat.css
IF EXIST web\styles\jquery.fileupload-ui.css type web\styles\jquery.fileupload-ui.css     >> web\themes\metroblue\theme.fat.css
IF EXIST web\styles\netweb.css type web\styles\netweb.css                  >> web\themes\metroblue\theme.fat.css
IF EXIST web\styles\nettalk-grid.css type web\styles\nettalk-grid.css            >> web\themes\metroblue\theme.fat.css
IF EXIST web\themes\metroblue\nettalk-ui.css type web\themes\metroblue\nettalk-ui.css   >> web\themes\metroblue\theme.fat.css
rem    --  metroorange
IF EXIST web\themes\metroorange\nt-theme.css type web\themes\metroorange\nt-theme.css    >  web\themes\metroorange\theme.fat.css
IF EXIST web\styles\jquery-ui.structure.css type web\styles\jquery-ui.structure.css    >>  web\themes\metroorange\theme.fat.css
IF EXIST web\themes\metroorange\jquery-ui.theme.css type web\themes\metroorange\jquery-ui.theme.css    >>  web\themes\metroorange\theme.fat.css
IF EXIST web\styles\jquery-nt-color.css type web\styles\jquery-nt-color.css         >> web\themes\metroorange\theme.fat.css
IF EXIST web\styles\jquery-nt-menu.css type web\styles\jquery-nt-menu.css          >> web\themes\metroorange\theme.fat.css
IF EXIST web\styles\jquery-nt-cal.css type web\styles\jquery-nt-cal.css           >> web\themes\metroorange\theme.fat.css
IF EXIST web\styles\jquery.ad-gallery.css type web\styles\jquery.ad-gallery.css       >> web\themes\metroorange\theme.fat.css
IF EXIST web\styles\jquery.fileupload-ui.css type web\styles\jquery.fileupload-ui.css     >> web\themes\metroorange\theme.fat.css
IF EXIST web\styles\netweb.css type web\styles\netweb.css                  >> web\themes\metroorange\theme.fat.css
IF EXIST web\styles\nettalk-grid.css type web\styles\nettalk-grid.css            >> web\themes\metroorange\theme.fat.css
IF EXIST web\themes\metroorange\nettalk-ui.css type web\themes\metroorange\nettalk-ui.css   >> web\themes\metroorange\theme.fat.css
rem    --  morris
IF EXIST web\themes\morris\nt-theme.css type web\themes\morris\nt-theme.css    >  web\themes\morris\theme.fat.css
IF EXIST web\styles\jquery-ui.structure.css type web\styles\jquery-ui.structure.css    >>  web\themes\morris\theme.fat.css
IF EXIST web\themes\morris\jquery-ui.theme.css type web\themes\morris\jquery-ui.theme.css    >>  web\themes\morris\theme.fat.css
IF EXIST web\styles\jquery-nt-color.css type web\styles\jquery-nt-color.css         >> web\themes\morris\theme.fat.css
IF EXIST web\styles\jquery-nt-menu.css type web\styles\jquery-nt-menu.css          >> web\themes\morris\theme.fat.css
IF EXIST web\styles\jquery-nt-cal.css type web\styles\jquery-nt-cal.css           >> web\themes\morris\theme.fat.css
IF EXIST web\styles\jquery.ad-gallery.css type web\styles\jquery.ad-gallery.css       >> web\themes\morris\theme.fat.css
IF EXIST web\styles\jquery.fileupload-ui.css type web\styles\jquery.fileupload-ui.css     >> web\themes\morris\theme.fat.css
IF EXIST web\styles\netweb.css type web\styles\netweb.css                  >> web\themes\morris\theme.fat.css
IF EXIST web\styles\nettalk-grid.css type web\styles\nettalk-grid.css            >> web\themes\morris\theme.fat.css
IF EXIST web\themes\morris\nettalk-ui.css type web\themes\morris\nettalk-ui.css   >> web\themes\morris\theme.fat.css
rem    --  palmtree
IF EXIST web\themes\palmtree\nt-theme.css type web\themes\palmtree\nt-theme.css    >  web\themes\palmtree\theme.fat.css
IF EXIST web\styles\jquery-ui.structure.css type web\styles\jquery-ui.structure.css    >>  web\themes\palmtree\theme.fat.css
IF EXIST web\themes\palmtree\jquery-ui.theme.css type web\themes\palmtree\jquery-ui.theme.css    >>  web\themes\palmtree\theme.fat.css
IF EXIST web\styles\jquery-nt-color.css type web\styles\jquery-nt-color.css         >> web\themes\palmtree\theme.fat.css
IF EXIST web\styles\jquery-nt-menu.css type web\styles\jquery-nt-menu.css          >> web\themes\palmtree\theme.fat.css
IF EXIST web\styles\jquery-nt-cal.css type web\styles\jquery-nt-cal.css           >> web\themes\palmtree\theme.fat.css
IF EXIST web\styles\jquery.ad-gallery.css type web\styles\jquery.ad-gallery.css       >> web\themes\palmtree\theme.fat.css
IF EXIST web\styles\jquery.fileupload-ui.css type web\styles\jquery.fileupload-ui.css     >> web\themes\palmtree\theme.fat.css
IF EXIST web\styles\netweb.css type web\styles\netweb.css                  >> web\themes\palmtree\theme.fat.css
IF EXIST web\styles\nettalk-grid.css type web\styles\nettalk-grid.css            >> web\themes\palmtree\theme.fat.css
IF EXIST web\themes\palmtree\nettalk-ui.css type web\themes\palmtree\nettalk-ui.css   >> web\themes\palmtree\theme.fat.css
rem    --  redmond
IF EXIST web\themes\redmond\nt-theme.css type web\themes\redmond\nt-theme.css    >  web\themes\redmond\theme.fat.css
IF EXIST web\styles\jquery-ui.structure.css type web\styles\jquery-ui.structure.css    >>  web\themes\redmond\theme.fat.css
IF EXIST web\themes\redmond\jquery-ui.theme.css type web\themes\redmond\jquery-ui.theme.css    >>  web\themes\redmond\theme.fat.css
IF EXIST web\styles\jquery-nt-color.css type web\styles\jquery-nt-color.css         >> web\themes\redmond\theme.fat.css
IF EXIST web\styles\jquery-nt-menu.css type web\styles\jquery-nt-menu.css          >> web\themes\redmond\theme.fat.css
IF EXIST web\styles\jquery-nt-cal.css type web\styles\jquery-nt-cal.css           >> web\themes\redmond\theme.fat.css
IF EXIST web\styles\jquery.ad-gallery.css type web\styles\jquery.ad-gallery.css       >> web\themes\redmond\theme.fat.css
IF EXIST web\styles\jquery.fileupload-ui.css type web\styles\jquery.fileupload-ui.css     >> web\themes\redmond\theme.fat.css
IF EXIST web\styles\netweb.css type web\styles\netweb.css                  >> web\themes\redmond\theme.fat.css
IF EXIST web\styles\nettalk-grid.css type web\styles\nettalk-grid.css            >> web\themes\redmond\theme.fat.css
IF EXIST web\themes\redmond\nettalk-ui.css type web\themes\redmond\nettalk-ui.css   >> web\themes\redmond\theme.fat.css
rem    --  seven
IF EXIST web\themes\seven\nt-theme.css type web\themes\seven\nt-theme.css    >  web\themes\seven\theme.fat.css
IF EXIST web\styles\jquery-ui.structure.css type web\styles\jquery-ui.structure.css    >>  web\themes\seven\theme.fat.css
IF EXIST web\themes\seven\jquery-ui.theme.css type web\themes\seven\jquery-ui.theme.css    >>  web\themes\seven\theme.fat.css
IF EXIST web\styles\jquery-nt-color.css type web\styles\jquery-nt-color.css         >> web\themes\seven\theme.fat.css
IF EXIST web\styles\jquery-nt-menu.css type web\styles\jquery-nt-menu.css          >> web\themes\seven\theme.fat.css
IF EXIST web\styles\jquery-nt-cal.css type web\styles\jquery-nt-cal.css           >> web\themes\seven\theme.fat.css
IF EXIST web\styles\jquery.ad-gallery.css type web\styles\jquery.ad-gallery.css       >> web\themes\seven\theme.fat.css
IF EXIST web\styles\jquery.fileupload-ui.css type web\styles\jquery.fileupload-ui.css     >> web\themes\seven\theme.fat.css
IF EXIST web\styles\netweb.css type web\styles\netweb.css                  >> web\themes\seven\theme.fat.css
IF EXIST web\styles\nettalk-grid.css type web\styles\nettalk-grid.css            >> web\themes\seven\theme.fat.css
IF EXIST web\themes\seven\nettalk-ui.css type web\themes\seven\nettalk-ui.css   >> web\themes\seven\theme.fat.css
rem    --  shoestrap1
IF EXIST web\themes\shoestrap1\nt-theme.css type web\themes\shoestrap1\nt-theme.css    >  web\themes\shoestrap1\theme.fat.css
IF EXIST web\styles\jquery-ui.structure.css type web\styles\jquery-ui.structure.css    >>  web\themes\shoestrap1\theme.fat.css
IF EXIST web\themes\shoestrap1\jquery-ui.theme.css type web\themes\shoestrap1\jquery-ui.theme.css    >>  web\themes\shoestrap1\theme.fat.css
IF EXIST web\styles\jquery-nt-color.css type web\styles\jquery-nt-color.css         >> web\themes\shoestrap1\theme.fat.css
IF EXIST web\styles\jquery-nt-menu.css type web\styles\jquery-nt-menu.css          >> web\themes\shoestrap1\theme.fat.css
IF EXIST web\styles\jquery-nt-cal.css type web\styles\jquery-nt-cal.css           >> web\themes\shoestrap1\theme.fat.css
IF EXIST web\styles\jquery.ad-gallery.css type web\styles\jquery.ad-gallery.css       >> web\themes\shoestrap1\theme.fat.css
IF EXIST web\styles\jquery.fileupload-ui.css type web\styles\jquery.fileupload-ui.css     >> web\themes\shoestrap1\theme.fat.css
IF EXIST web\styles\netweb.css type web\styles\netweb.css                  >> web\themes\shoestrap1\theme.fat.css
IF EXIST web\styles\nettalk-grid.css type web\styles\nettalk-grid.css            >> web\themes\shoestrap1\theme.fat.css
IF EXIST web\themes\shoestrap1\nettalk-ui.css type web\themes\shoestrap1\nettalk-ui.css   >> web\themes\shoestrap1\theme.fat.css
rem    --  shoestrap2
IF EXIST web\themes\shoestrap2\nt-theme.css type web\themes\shoestrap2\nt-theme.css    >  web\themes\shoestrap2\theme.fat.css
IF EXIST web\styles\jquery-ui.structure.css type web\styles\jquery-ui.structure.css    >>  web\themes\shoestrap2\theme.fat.css
IF EXIST web\themes\shoestrap2\jquery-ui.theme.css type web\themes\shoestrap2\jquery-ui.theme.css    >>  web\themes\shoestrap2\theme.fat.css
IF EXIST web\styles\jquery-nt-color.css type web\styles\jquery-nt-color.css         >> web\themes\shoestrap2\theme.fat.css
IF EXIST web\styles\jquery-nt-menu.css type web\styles\jquery-nt-menu.css          >> web\themes\shoestrap2\theme.fat.css
IF EXIST web\styles\jquery-nt-cal.css type web\styles\jquery-nt-cal.css           >> web\themes\shoestrap2\theme.fat.css
IF EXIST web\styles\jquery.ad-gallery.css type web\styles\jquery.ad-gallery.css       >> web\themes\shoestrap2\theme.fat.css
IF EXIST web\styles\jquery.fileupload-ui.css type web\styles\jquery.fileupload-ui.css     >> web\themes\shoestrap2\theme.fat.css
IF EXIST web\styles\netweb.css type web\styles\netweb.css                  >> web\themes\shoestrap2\theme.fat.css
IF EXIST web\styles\nettalk-grid.css type web\styles\nettalk-grid.css            >> web\themes\shoestrap2\theme.fat.css
IF EXIST web\themes\shoestrap2\nettalk-ui.css type web\themes\shoestrap2\nettalk-ui.css   >> web\themes\shoestrap2\theme.fat.css
rem    --  shoestrap3
IF EXIST web\themes\shoestrap3\nt-theme.css type web\themes\shoestrap3\nt-theme.css    >  web\themes\shoestrap3\theme.fat.css
IF EXIST web\styles\jquery-ui.structure.css type web\styles\jquery-ui.structure.css    >>  web\themes\shoestrap3\theme.fat.css
IF EXIST web\themes\shoestrap3\jquery-ui.theme.css type web\themes\shoestrap3\jquery-ui.theme.css    >>  web\themes\shoestrap3\theme.fat.css
IF EXIST web\styles\jquery-nt-color.css type web\styles\jquery-nt-color.css         >> web\themes\shoestrap3\theme.fat.css
IF EXIST web\styles\jquery-nt-menu.css type web\styles\jquery-nt-menu.css          >> web\themes\shoestrap3\theme.fat.css
IF EXIST web\styles\jquery-nt-cal.css type web\styles\jquery-nt-cal.css           >> web\themes\shoestrap3\theme.fat.css
IF EXIST web\styles\jquery.ad-gallery.css type web\styles\jquery.ad-gallery.css       >> web\themes\shoestrap3\theme.fat.css
IF EXIST web\styles\jquery.fileupload-ui.css type web\styles\jquery.fileupload-ui.css     >> web\themes\shoestrap3\theme.fat.css
IF EXIST web\styles\netweb.css type web\styles\netweb.css                  >> web\themes\shoestrap3\theme.fat.css
IF EXIST web\styles\nettalk-grid.css type web\styles\nettalk-grid.css            >> web\themes\shoestrap3\theme.fat.css
IF EXIST web\themes\shoestrap3\nettalk-ui.css type web\themes\shoestrap3\nettalk-ui.css   >> web\themes\shoestrap3\theme.fat.css
rem    --  smoothness
IF EXIST web\themes\smoothness\nt-theme.css type web\themes\smoothness\nt-theme.css    >  web\themes\smoothness\theme.fat.css
IF EXIST web\styles\jquery-ui.structure.css type web\styles\jquery-ui.structure.css    >>  web\themes\smoothness\theme.fat.css
IF EXIST web\themes\smoothness\jquery-ui.theme.css type web\themes\smoothness\jquery-ui.theme.css    >>  web\themes\smoothness\theme.fat.css
IF EXIST web\styles\jquery-nt-color.css type web\styles\jquery-nt-color.css         >> web\themes\smoothness\theme.fat.css
IF EXIST web\styles\jquery-nt-menu.css type web\styles\jquery-nt-menu.css          >> web\themes\smoothness\theme.fat.css
IF EXIST web\styles\jquery-nt-cal.css type web\styles\jquery-nt-cal.css           >> web\themes\smoothness\theme.fat.css
IF EXIST web\styles\jquery.ad-gallery.css type web\styles\jquery.ad-gallery.css       >> web\themes\smoothness\theme.fat.css
IF EXIST web\styles\jquery.fileupload-ui.css type web\styles\jquery.fileupload-ui.css     >> web\themes\smoothness\theme.fat.css
IF EXIST web\styles\netweb.css type web\styles\netweb.css                  >> web\themes\smoothness\theme.fat.css
IF EXIST web\styles\nettalk-grid.css type web\styles\nettalk-grid.css            >> web\themes\smoothness\theme.fat.css
IF EXIST web\themes\smoothness\nettalk-ui.css type web\themes\smoothness\nettalk-ui.css   >> web\themes\smoothness\theme.fat.css
rem    --  sunny
IF EXIST web\themes\sunny\nt-theme.css type web\themes\sunny\nt-theme.css    >  web\themes\sunny\theme.fat.css
IF EXIST web\styles\jquery-ui.structure.css type web\styles\jquery-ui.structure.css    >>  web\themes\sunny\theme.fat.css
IF EXIST web\themes\sunny\jquery-ui.theme.css type web\themes\sunny\jquery-ui.theme.css    >>  web\themes\sunny\theme.fat.css
IF EXIST web\styles\jquery-nt-color.css type web\styles\jquery-nt-color.css         >> web\themes\sunny\theme.fat.css
IF EXIST web\styles\jquery-nt-menu.css type web\styles\jquery-nt-menu.css          >> web\themes\sunny\theme.fat.css
IF EXIST web\styles\jquery-nt-cal.css type web\styles\jquery-nt-cal.css           >> web\themes\sunny\theme.fat.css
IF EXIST web\styles\jquery.ad-gallery.css type web\styles\jquery.ad-gallery.css       >> web\themes\sunny\theme.fat.css
IF EXIST web\styles\jquery.fileupload-ui.css type web\styles\jquery.fileupload-ui.css     >> web\themes\sunny\theme.fat.css
IF EXIST web\styles\netweb.css type web\styles\netweb.css                  >> web\themes\sunny\theme.fat.css
IF EXIST web\styles\nettalk-grid.css type web\styles\nettalk-grid.css            >> web\themes\sunny\theme.fat.css
IF EXIST web\themes\sunny\nettalk-ui.css type web\themes\sunny\nettalk-ui.css   >> web\themes\sunny\theme.fat.css
rem    --  ui-darkness
IF EXIST web\themes\ui-darkness\nt-theme.css type web\themes\ui-darkness\nt-theme.css    >  web\themes\ui-darkness\theme.fat.css
IF EXIST web\styles\jquery-ui.structure.css type web\styles\jquery-ui.structure.css    >>  web\themes\ui-darkness\theme.fat.css
IF EXIST web\themes\ui-darkness\jquery-ui.theme.css type web\themes\ui-darkness\jquery-ui.theme.css    >>  web\themes\ui-darkness\theme.fat.css
IF EXIST web\styles\jquery-nt-color.css type web\styles\jquery-nt-color.css         >> web\themes\ui-darkness\theme.fat.css
IF EXIST web\styles\jquery-nt-menu.css type web\styles\jquery-nt-menu.css          >> web\themes\ui-darkness\theme.fat.css
IF EXIST web\styles\jquery-nt-cal.css type web\styles\jquery-nt-cal.css           >> web\themes\ui-darkness\theme.fat.css
IF EXIST web\styles\jquery.ad-gallery.css type web\styles\jquery.ad-gallery.css       >> web\themes\ui-darkness\theme.fat.css
IF EXIST web\styles\jquery.fileupload-ui.css type web\styles\jquery.fileupload-ui.css     >> web\themes\ui-darkness\theme.fat.css
IF EXIST web\styles\netweb.css type web\styles\netweb.css                  >> web\themes\ui-darkness\theme.fat.css
IF EXIST web\styles\nettalk-grid.css type web\styles\nettalk-grid.css            >> web\themes\ui-darkness\theme.fat.css
IF EXIST web\themes\ui-darkness\nettalk-ui.css type web\themes\ui-darkness\nettalk-ui.css   >> web\themes\ui-darkness\theme.fat.css
rem    --  ui-lightness
IF EXIST web\themes\ui-lightness\nt-theme.css type web\themes\ui-lightness\nt-theme.css    >  web\themes\ui-lightness\theme.fat.css
IF EXIST web\styles\jquery-ui.structure.css type web\styles\jquery-ui.structure.css    >>  web\themes\ui-lightness\theme.fat.css
IF EXIST web\themes\ui-lightness\jquery-ui.theme.css type web\themes\ui-lightness\jquery-ui.theme.css    >>  web\themes\ui-lightness\theme.fat.css
IF EXIST web\styles\jquery-nt-color.css type web\styles\jquery-nt-color.css         >> web\themes\ui-lightness\theme.fat.css
IF EXIST web\styles\jquery-nt-menu.css type web\styles\jquery-nt-menu.css          >> web\themes\ui-lightness\theme.fat.css
IF EXIST web\styles\jquery-nt-cal.css type web\styles\jquery-nt-cal.css           >> web\themes\ui-lightness\theme.fat.css
IF EXIST web\styles\jquery.ad-gallery.css type web\styles\jquery.ad-gallery.css       >> web\themes\ui-lightness\theme.fat.css
IF EXIST web\styles\jquery.fileupload-ui.css type web\styles\jquery.fileupload-ui.css     >> web\themes\ui-lightness\theme.fat.css
IF EXIST web\styles\netweb.css type web\styles\netweb.css                  >> web\themes\ui-lightness\theme.fat.css
IF EXIST web\styles\nettalk-grid.css type web\styles\nettalk-grid.css            >> web\themes\ui-lightness\theme.fat.css
IF EXIST web\themes\ui-lightness\nettalk-ui.css type web\themes\ui-lightness\nettalk-ui.css   >> web\themes\ui-lightness\theme.fat.css
rem    --  whales
IF EXIST web\themes\whales\nt-theme.css type web\themes\whales\nt-theme.css    >  web\themes\whales\theme.fat.css
IF EXIST web\styles\jquery-ui.structure.css type web\styles\jquery-ui.structure.css    >>  web\themes\whales\theme.fat.css
IF EXIST web\themes\whales\jquery-ui.theme.css type web\themes\whales\jquery-ui.theme.css    >>  web\themes\whales\theme.fat.css
IF EXIST web\styles\jquery-nt-color.css type web\styles\jquery-nt-color.css         >> web\themes\whales\theme.fat.css
IF EXIST web\styles\jquery-nt-menu.css type web\styles\jquery-nt-menu.css          >> web\themes\whales\theme.fat.css
IF EXIST web\styles\jquery-nt-cal.css type web\styles\jquery-nt-cal.css           >> web\themes\whales\theme.fat.css
IF EXIST web\styles\jquery.ad-gallery.css type web\styles\jquery.ad-gallery.css       >> web\themes\whales\theme.fat.css
IF EXIST web\styles\jquery.fileupload-ui.css type web\styles\jquery.fileupload-ui.css     >> web\themes\whales\theme.fat.css
IF EXIST web\styles\netweb.css type web\styles\netweb.css                  >> web\themes\whales\theme.fat.css
IF EXIST web\styles\nettalk-grid.css type web\styles\nettalk-grid.css            >> web\themes\whales\theme.fat.css
IF EXIST web\themes\whales\nettalk-ui.css type web\themes\whales\nettalk-ui.css   >> web\themes\whales\theme.fat.css
rem    --  windows
IF EXIST web\themes\windows\nt-theme.css type web\themes\windows\nt-theme.css    >  web\themes\windows\theme.fat.css
IF EXIST web\styles\jquery-ui.structure.css type web\styles\jquery-ui.structure.css    >>  web\themes\windows\theme.fat.css
IF EXIST web\themes\windows\jquery-ui.theme.css type web\themes\windows\jquery-ui.theme.css    >>  web\themes\windows\theme.fat.css
IF EXIST web\styles\jquery-nt-color.css type web\styles\jquery-nt-color.css         >> web\themes\windows\theme.fat.css
IF EXIST web\styles\jquery-nt-menu.css type web\styles\jquery-nt-menu.css          >> web\themes\windows\theme.fat.css
IF EXIST web\styles\jquery-nt-cal.css type web\styles\jquery-nt-cal.css           >> web\themes\windows\theme.fat.css
IF EXIST web\styles\jquery.ad-gallery.css type web\styles\jquery.ad-gallery.css       >> web\themes\windows\theme.fat.css
IF EXIST web\styles\jquery.fileupload-ui.css type web\styles\jquery.fileupload-ui.css     >> web\themes\windows\theme.fat.css
IF EXIST web\styles\netweb.css type web\styles\netweb.css                  >> web\themes\windows\theme.fat.css
IF EXIST web\styles\nettalk-grid.css type web\styles\nettalk-grid.css            >> web\themes\windows\theme.fat.css
IF EXIST web\themes\windows\nettalk-ui.css type web\themes\windows\nettalk-ui.css   >> web\themes\windows\theme.fat.css

rem -- compress desktop themes ---------------------------------------------
copy web\themes\absolution\theme.fat.css web\themes\absolution\theme.css
"C:\Program Files (x86)\SoftVelocity\Clarion8\accessory\bin\gzip" -9 -n -f -c web\themes\absolution\theme.css  > "web\themes\absolution\theme.css.gz"
copy web\themes\aristo\theme.fat.css web\themes\aristo\theme.css
"C:\Program Files (x86)\SoftVelocity\Clarion8\accessory\bin\gzip" -9 -n -f -c web\themes\aristo\theme.css  > "web\themes\aristo\theme.css.gz"
copy web\themes\base\theme.fat.css web\themes\base\theme.css
"C:\Program Files (x86)\SoftVelocity\Clarion8\accessory\bin\gzip" -9 -n -f -c web\themes\base\theme.css  > "web\themes\base\theme.css.gz"
copy web\themes\bootstrap\theme.fat.css web\themes\bootstrap\theme.css
"C:\Program Files (x86)\SoftVelocity\Clarion8\accessory\bin\gzip" -9 -n -f -c web\themes\bootstrap\theme.css  > "web\themes\bootstrap\theme.css.gz"
copy web\themes\bottle\theme.fat.css web\themes\bottle\theme.css
"C:\Program Files (x86)\SoftVelocity\Clarion8\accessory\bin\gzip" -9 -n -f -c web\themes\bottle\theme.css  > "web\themes\bottle\theme.css.gz"
copy web\themes\material17\theme.fat.css web\themes\material17\theme.css
"C:\Program Files (x86)\SoftVelocity\Clarion8\accessory\bin\gzip" -9 -n -f -c web\themes\material17\theme.css  > "web\themes\material17\theme.css.gz"
copy web\themes\metroblue\theme.fat.css web\themes\metroblue\theme.css
"C:\Program Files (x86)\SoftVelocity\Clarion8\accessory\bin\gzip" -9 -n -f -c web\themes\metroblue\theme.css  > "web\themes\metroblue\theme.css.gz"
copy web\themes\metroorange\theme.fat.css web\themes\metroorange\theme.css
"C:\Program Files (x86)\SoftVelocity\Clarion8\accessory\bin\gzip" -9 -n -f -c web\themes\metroorange\theme.css  > "web\themes\metroorange\theme.css.gz"
copy web\themes\morris\theme.fat.css web\themes\morris\theme.css
"C:\Program Files (x86)\SoftVelocity\Clarion8\accessory\bin\gzip" -9 -n -f -c web\themes\morris\theme.css  > "web\themes\morris\theme.css.gz"
copy web\themes\palmtree\theme.fat.css web\themes\palmtree\theme.css
"C:\Program Files (x86)\SoftVelocity\Clarion8\accessory\bin\gzip" -9 -n -f -c web\themes\palmtree\theme.css  > "web\themes\palmtree\theme.css.gz"
copy web\themes\redmond\theme.fat.css web\themes\redmond\theme.css
"C:\Program Files (x86)\SoftVelocity\Clarion8\accessory\bin\gzip" -9 -n -f -c web\themes\redmond\theme.css  > "web\themes\redmond\theme.css.gz"
copy web\themes\seven\theme.fat.css web\themes\seven\theme.css
"C:\Program Files (x86)\SoftVelocity\Clarion8\accessory\bin\gzip" -9 -n -f -c web\themes\seven\theme.css  > "web\themes\seven\theme.css.gz"
copy web\themes\shoestrap1\theme.fat.css web\themes\shoestrap1\theme.css
"C:\Program Files (x86)\SoftVelocity\Clarion8\accessory\bin\gzip" -9 -n -f -c web\themes\shoestrap1\theme.css  > "web\themes\shoestrap1\theme.css.gz"
copy web\themes\shoestrap2\theme.fat.css web\themes\shoestrap2\theme.css
"C:\Program Files (x86)\SoftVelocity\Clarion8\accessory\bin\gzip" -9 -n -f -c web\themes\shoestrap2\theme.css  > "web\themes\shoestrap2\theme.css.gz"
copy web\themes\shoestrap3\theme.fat.css web\themes\shoestrap3\theme.css
"C:\Program Files (x86)\SoftVelocity\Clarion8\accessory\bin\gzip" -9 -n -f -c web\themes\shoestrap3\theme.css  > "web\themes\shoestrap3\theme.css.gz"
copy web\themes\smoothness\theme.fat.css web\themes\smoothness\theme.css
"C:\Program Files (x86)\SoftVelocity\Clarion8\accessory\bin\gzip" -9 -n -f -c web\themes\smoothness\theme.css  > "web\themes\smoothness\theme.css.gz"
copy web\themes\sunny\theme.fat.css web\themes\sunny\theme.css
"C:\Program Files (x86)\SoftVelocity\Clarion8\accessory\bin\gzip" -9 -n -f -c web\themes\sunny\theme.css  > "web\themes\sunny\theme.css.gz"
copy web\themes\ui-darkness\theme.fat.css web\themes\ui-darkness\theme.css
"C:\Program Files (x86)\SoftVelocity\Clarion8\accessory\bin\gzip" -9 -n -f -c web\themes\ui-darkness\theme.css  > "web\themes\ui-darkness\theme.css.gz"
copy web\themes\ui-lightness\theme.fat.css web\themes\ui-lightness\theme.css
"C:\Program Files (x86)\SoftVelocity\Clarion8\accessory\bin\gzip" -9 -n -f -c web\themes\ui-lightness\theme.css  > "web\themes\ui-lightness\theme.css.gz"
copy web\themes\whales\theme.fat.css web\themes\whales\theme.css
"C:\Program Files (x86)\SoftVelocity\Clarion8\accessory\bin\gzip" -9 -n -f -c web\themes\whales\theme.css  > "web\themes\whales\theme.css.gz"
copy web\themes\windows\theme.fat.css web\themes\windows\theme.css
"C:\Program Files (x86)\SoftVelocity\Clarion8\accessory\bin\gzip" -9 -n -f -c web\themes\windows\theme.css  > "web\themes\windows\theme.css.gz"
