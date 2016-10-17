// Generated on 2015-05-03 using
// generator-webapp 0.5.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// If you want to recursively match all subfolders, use:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Configurable paths
    var config = {
        app: 'app',
        dist: ''
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        config: config,

        assemble: {
            options: {
                flatten: true,
                layout: 'layout.hbs',
                layoutdir: '<%= config.app %>/templates/layouts',
                assets: 'dist/img',
                partials: [
                    '<%= config.app %>/templates/partials/**/*.hbs'
                ],
                site: true
            },
            //blog: {
            //    options: {
            //        layout: '/simple.hbs',
            //        site: false
            //    },
            //    src: ['<%= config.app %>/templates/pages/simple/*.hbs'],
            //    dest: 'dist/'
            //},
            dist: {
                files: {
                    'dist/': ['<%= config.app %>/templates/pages/*.hbs']
                }
            }
        },

        clean: {
            build: ["dist", "*.html"]
        },

        copy: {
            files: {
                cwd: 'lib/', // set working folder / root to copy
                src: '**/*',  // copy all files and subfolders
                dest: 'dist/lib',     // destination folder
                expand: true  // required when using cwd
            }
        },

        cssmin: {
            dist: {
                files: {
                    'dist/css/main.min.css': ['css/*.css']
                }
            }
        },

        uglify: {
            dist: {
                files: {
                    'dist/js/main.min.js': ['js/*.js']
                }
            }
        },

        imagemin: {                          // Task
            dynamic: {                         // Another target
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'img/',                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: 'dist/img'               // Destination path prefix
                }]
            }
        },

        watch: {
            js: {
                files: 'js/*.js',
                tasks: ['uglify'],
                options: {
                    livereload: true
                }
            },
            css: {
                files: 'css/*.css',
                tasks: ['cssmin'],
                options: {
                    livereload: true
                }
            },
            img: {
                files: 'img/*',
                tasks: ['imagemin'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: 'app/templates/partials/home/*.hbs',
                tasks: ['assemble'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.registerTask('build', [
        'clean',
        'cssmin',
        'uglify',
        'imagemin',
        'assemble',
        'copy',
        'watch'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);

    grunt.loadNpmTasks('assemble');
};
