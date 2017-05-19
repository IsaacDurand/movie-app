var gulp = require('gulp');
var concat = require('gulp-concat');

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

gulp.task('watch', function () {
    gulp.watch(clientApp + '*.js', ['build']);
});

gulp.task('default', ['build', 'watch']);
