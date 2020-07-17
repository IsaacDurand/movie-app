var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

var clientApp = './src/app/';

var files = [
    clientApp + 'app.module.js',
    clientApp + '*.js'
];

gulp.task('build', function () {
    return gulp.src(files)
        .pipe(concat('build.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('scss', function () {
    return gulp.src('./src/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

gulp.task('html', function () {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'))
})

gulp.task('watch', function () {
    gulp.watch(clientApp + '*.js', ['build']);
    gulp.watch('./src/styles.scss', ['scss'])
    gulp.watch('./src/index.html', ['html'])
});

gulp.task('default', ['scss', 'build', 'html']);
