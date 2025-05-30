const mix = require('laravel-mix');
const path = require('path');

mix.options({
    terser: {
        terserOptions: {
            compress: {
                drop_console: true,
            },
        },
    },
})
    .setPublicPath('public')
    .js('resources/js/app.js', 'public')
    .vue()
    .sass('resources/css/app.scss', 'public')
    .version()
    .copy('resources/img', 'public/img')
    .webpackConfig({
        resolve: {
            symlinks: false,
            alias: {
                'vue$': 'vue/dist/vue.runtime.esm-bundler.js',
                '@': path.resolve(__dirname, 'resources/js/'),
            },
        },
        // stats: {
        //     children: true,
        // }
    });

mix.disableSuccessNotifications();
