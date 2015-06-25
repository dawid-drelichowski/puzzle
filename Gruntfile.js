/* global module */

module.exports = function(grunt) {
    'use strict';

    var replace = {
        files: [{
            src: ['index.html'], dest: 'index.html'
        }],
        paths: {
            dev: 'js/src/config',
            prod: 'js/dist/app'
        }
    };

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-replace');

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            src: [ 'js/src/*.js', 'Gruntfile.js']
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        requirejs: {
            puzzle: {
                options: {
                    baseUrl: 'js/src',
                    mainConfigFile: 'js/src/config.js',
                    name: 'app',
                    out: 'js/dist/app.js',
                    optimize: 'uglify2'
                }
            }
        },
        replace: {
            options: {
                usePrefix: false
            },
            dev: {
                options: {
                    patterns: [{
                        match: replace.paths.prod,
                        replace: replace.paths.dev
                    }]
                },
                files: replace.files
            },
            prod: {
                options: {
                    patterns: [{
                        match: replace.paths.dev,
                        replace: replace.paths.prod
                    }]
                },
                files: replace.files
            }
        }
    });

    grunt.registerTask('default', ['jshint', 'karma']);
    grunt.registerTask('dev', ['replace:dev']);
    grunt.registerTask('prod', ['replace:prod', 'requirejs']);
};