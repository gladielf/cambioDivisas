// Karma configuration
// Generated on Tue Sep 29 2015 16:38:05 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({
    //reporters: ['verbose', 'junit'],
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
      {pattern: 'app/lib/**/*.js', included: false},
      {pattern: 'app/src/*.js', included: false},
      {pattern: 'test/**/*Spec.js', included: false},
      //'app/src/*.js',
      //'test/spec/*Spec.js',
      'test/test-main.js'
    ],


    // list of files to exclude
    exclude: [
        "app/src/main.js"
    ],

    plugin: [
        'karma-jasmine',
        'karma-phantomjs-launcher',
        'coverage',
        'ec-karma-junit-reporter23',
        'karma-coverage'
    ],
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'app/src/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['verbose', 'coverage', 'junit', 'notify'],

    
    notifyReporter: {
      //reportEachFailure: true, // Default: false, Will notify on every failed sepc 
      //reportSuccess: true, // Default: true, Will notify when a suite was successful 
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // the default configuration
    junitReporter: {
    outputDir: 'reports/coverage/',
    suite: 'models'
    },
    coverageReporter: {
        dir: 'reports/coverage/',
        reporters: [
        // reporters not supporting the `file` property
        { type: 'html', dir: 'reports/coverage/', subdir: 'report-html' },
        { type: 'lcovonly', dir: 'reports/coverage/', subdir: 'report-lcov' },
        { type: 'cobertura', dir: 'reports/coverage/', subdir: 'report-xml' }
      ]
    }
  })
}
