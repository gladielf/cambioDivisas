var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');
var istanbul = require('gulp-istanbul');
var jshint = require('gulp-jshint');
var jshintXMLReporter = require('gulp-jshint-xml-file-reporter');


gulp.task('pre-test', function () {
  return gulp.src(['app/src/*.js'])
    // Covering files
    .pipe(istanbul())
    // Force `require` to return covered files
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], function () {
  return gulp.src(['spec/*.js'])
    .pipe(mocha())
    // Creating the reports after tests ran
    .pipe(istanbul.writeReports())
    // Enforce a coverage of at least 90%
    .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }));
});

gulp.task('mocha', function() {
    return gulp.src(['spec/*.js'], { read: false })
        .pipe(mocha({ reporter: 'list' }))
        .on('error', gutil.log);
});

gulp.task('watch-mocha', function() {
    gulp.watch(['app/src/**', 'spec/**'], ['mocha']);
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

// gulp.task('webserver', function() {
//   gulp.src('app')
//     .pipe(webserver({
//       livereload: true,
      
//       open: true
//     }));
// });

 gulp.task('default', ['mocha']);