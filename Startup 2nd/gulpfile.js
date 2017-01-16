var gulp = require('gulp'),
  jade = require('gulp-jade'),
  concat = require('gulp-concat'),
  sass = require('gulp-sass');

gulp.task('default', ['watch']);

gulp.task('compile', function () {
  return gulp.src('source/jade/index.jade')
    .pipe(jade())
    .pipe(gulp.dest('dist/'));
});

gulp.task('concat-css', function () {
  return gulp.src('source/css/*.css')
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('sass-compile', function () {
  gulp.src('source/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css/sass/'));
});

gulp.task('watch', function () {
  gulp.watch('source/jade/*.jade', ['compile']);
  gulp.watch('source/css/*.css', ['concat-css']);
  gulp.watch('source/sass/*.sass', ['sass-compile']);

});