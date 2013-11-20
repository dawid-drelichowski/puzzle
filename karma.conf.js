module.exports = function(config) {
    config.set({
        frameworks: ['mocha', 'chai'],
        files: ['js/*.js', 'js/tests/*.js'],
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
