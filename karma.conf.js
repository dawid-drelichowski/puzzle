module.exports = function(config) {
    config.set({
        frameworks: ['mocha', 'requirejs', 'chai'],
        files: [
            'js/tests/config.js',
            {pattern: 'js/**/*.js', included: false},
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
