var gulp = require('gulp');
var jshint = require('gulp-jshint');
var Server = require('karma').Server;

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
  return gulp.src('./src/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

/**
 * Run JSHint with stylish
 */
gulp.task('lint', function() {
  return gulp.src('./src/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('default', ['tdd']);