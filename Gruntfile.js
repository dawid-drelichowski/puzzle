module.exports = function(grunt) {
    'use strict';
  
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');
    
    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            src: [ 'js/**/*.js', 'Gruntfile.js']
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }                                   
    });
    
    grunt.registerTask('default', ['jshint', 'karma']);
};