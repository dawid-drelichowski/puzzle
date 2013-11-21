/* jshint nomen:false, camelcase:false */

require.config({
    baseUrl: '/base/js/src',
    deps: (function() {
        var tests = [];
      
        Object.keys(window.__karma__.files).forEach(function(file) {
            if (/spec\/.*\.js$/.test(file)) {
                tests.push(file);
            }      
        });
        
        return tests;
    })(),
    callback: window.__karma__.start
});