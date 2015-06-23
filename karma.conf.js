module.exports = function(config) {
    config.set({
        frameworks: ['mocha', 'requirejs', 'chai'],
        files: [
            'js/test/config.js',
            {pattern: 'node_modules/requirejs-text/text.js', included: false},
            {pattern: 'node_modules/require-html/html.js', included: false},
            {pattern: 'js/**/*.js', included: false},
            {pattern: 'js/test/fixture/*.html', included: false},
        ],
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        captureTimeout: 60000,
        singleRun: true
    });
};
