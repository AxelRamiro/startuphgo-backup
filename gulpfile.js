var gulp = require('gulp'),
  jade = require('gulp-jade'),
  sass = require('gulp-sass');

gulp.task('default', ['watch']);

gulp.task('compile', function () {
  return gulp.src('source/jade/index.jade')
    .pipe(jade())
    .pipe(gulp.dest('dist/'));
});

gulp.task('sass-compile', function () {
  gulp.src('source/sass/style.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('watch', function () {
  gulp.watch('source/jade/**/*.jade', ['compile']);
  gulp.watch('source/sass/**/*.sass', ['sass-compile']);
});