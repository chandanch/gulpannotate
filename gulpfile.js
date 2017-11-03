// gulp Core
var gulp = require('gulp');

// gulp plugins
var ngAnnotate = require('gulp-ng-annotate');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// local vars
var path = 'app/view1/*.js';

// Lint task
gulp.task('lint', function () {
   return gulp.src('app/view1/*.js')
       .pipe(jshint())
       .pipe(jshint.reporter('default'))
});

// Concatenate and minify
gulp.task('scripts', function () {
   return gulp.src(path)
       .pipe(ngAnnotate())
       .pipe(concat('all.js'))
       .pipe(gulp.dest('dist/js'))
       .pipe(rename('all.min.js'))
       .pipe(uglify())
       .pipe(gulp.dest('dist/js'))
});

// watch files for changes
gulp.task('watch', function () {
   gulp.watch(path, ['lint', 'scripts'])
});

// Default task
gulp.task('default', ['lint','scripts', 'watch']);