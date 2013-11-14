module.exports = function(grunt) {
    'use strict';
  
    grunt.loadNpmTasks('grunt-contrib-jshint');
    
    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            src: [ 'js/*.js', 'Gruntfile.js']
        }
    });
    
    grunt.registerTask('default', ['jshint']);
};