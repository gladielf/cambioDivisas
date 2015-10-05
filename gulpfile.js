var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jshintXMLReporter = require('gulp-jshint-xml-file-reporter');
var Server = require('karma').Server;
var webserver = require('gulp-webserver');

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});

/**
 * Run default JSHint 
 */
gulp.task('lintDefault', function() {
  return gulp.src('./app/src/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

/**
 * Run JSHint with stylish
 */
gulp.task('lint', function() {
  return gulp.src('./app/src/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('lintOutput', function () {
    return gulp.src('./app/src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(jshintXMLReporter))
        .on('end', jshintXMLReporter.writeFile({
            format: 'checkstyle',
            filePath: './jshint.xml'
        }));
});

gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      
      open: true
    }));
});

gulp.task('default', ['webserver']);