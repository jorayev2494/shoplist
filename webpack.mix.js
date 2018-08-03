let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


 /**
  *  Shopica Assets
  */
/**
 *  Styles
 */
mix.styles([
    "resources/assets/shoplist/css/bootstrap.css",
    "resources/assets/shoplist/css/flexslider.css",
    "resources/assets/shoplist/css/style.css",
], "public/shoplist/css/style.css");

/**
 *  Js
 */
mix.js([
    "resources/assets/shoplist/js/bootstrap.min.js",
    "resources/assets/shoplist/js/imagezoom.js",
    "resources/assets/shoplist/js/jquery-1.11.0.min.js",
    "resources/assets/shoplist/js/jquery.flexslider.js",
    "resources/assets/shoplist/js/jquery.jscrollpane.min.js",
    "resources/assets/shoplist/js/simpleCart.min.js",
    "resources/assets/shoplist/js/master.js",
], "public/shoplist/js/js.js");

/**
 * Fonts
 */
mix.copy([
    "resources/assets/shoplist/fonts/glyphicons-halflings-regular.eot",
    "resources/assets/shoplist/fonts/glyphicons-halflings-regular.svg",
    "resources/assets/shoplist/fonts/glyphicons-halflings-regular.ttf",
    "resources/assets/shoplist/fonts/glyphicons-halflings-regular.woff",
    "resources/assets/shoplist/fonts/glyphicons-halflings-regular.woff2",
], "public/shoplist/fonts/")


/**
 *  Admin Assets
 */
mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');

mix.styles([
    "resources/assets/admin/bootstrap/css/bootstrap.min.css",
    "resources/assets/admin/font-awesome/4.5.0/css/font-awesome.min.css",
    "resources/assets/admin/ionicons/2.0.1/css/ionicons.min.css",
    "resources/assets/admin/plugins/datatables/dataTables.bootstrap.css",
    "resources/assets/admin/dist/css/AdminLTE.min.css",
    "resources/assets/admin/dist/css/skins/_all-skins.min.css",
], "public/admin/style.css");

// mix.js("resources/assets/admin/plugins/jQuery/jquery-2.2.3.min.js", "public/admin/js/jquery-2.2.3.min.js");
// mix.js("resources/assets/admin/bootstrap/js/bootstrap.min.js", "public/admin/js/bootstrap.min.js");
// mix.js("resources/assets/admin/plugins/slimScroll/jquery.slimscroll.min.js", "public/admin/js/jquery.slimscroll.min.js");
// mix.js("resources/assets/admin/plugins/fastclick/fastclick.js", "public/admin/js/fastclick.js");
// mix.js("resources/assets/admin/dist/js/app.min.js", "public/admin/js/app.min.js");
// mix.js("resources/assets/admin/dist/js/demo.js", "public/admin/js/demo.js");

// mix.js([
//     "resources/assets/admin/plugins/jQuery/jquery-2.2.3.min.js",
//     "resources/assets/admin/bootstrap/js/bootstrap.min.js",
//     "resources/assets/admin/plugins/slimScroll/jquery.slimscroll.min.js",
//     "resources/assets/admin/plugins/fastclick/fastclick.js",
//     "resources/assets/admin/dist/js/app.min.js",
//     "resources/assets/admin/dist/js/demo.js",
// ], "public/admin/js.js");

