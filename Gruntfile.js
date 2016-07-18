module.exports = function (grunt) {
    grunt.initConfig({
        dirs: {
            css:  "assets/css",
            scss: "assets/scss"
        },
        watch: {
            options: {
                spawn: false
            },
            sass: {
                files: 'assets/scss/**/*.scss',
                tasks: ['sass', 'autoprefixer', 'bsReload:css']
            },
            html: {
                files: '*.html',
                tasks: ['bsReload:all']
            }
        },
        sass: {
            dev: {
                files: {
                    'assets/css/style.css': '<%= dirs.scss %>/style.scss'
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 5 versions', 'ie 8']
            },
            css: {
                src: 'assets/css/style.css',
                dest: 'assets/css/style.css'
            }
        },
        browserSync: {
            dev: {
                options: {
                    server: "./",
                    background: true
                }
            }
        },
        bsReload: {
            css: {
                reload: "assets/css/style.css"
            },
            all: {
                reload: true
            }
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // define default task
    grunt.registerTask('default', ['browserSync', 'watch']);
};