var gulp = require('gulp'),
    umd = require('gulp-umd'),
    babel = require('gulp-babel');

gulp.task('compress', function() {

    gulp.src('lib/index.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(umd())
        .pipe(gulp.dest('dist/index.js'));
});