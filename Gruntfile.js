/* global module */

module.exports = function(grunt) {
    'use strict';
  
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-karma');
    
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
        }
    });
    
    grunt.registerTask('default', ['jshint', 'karma']);
};