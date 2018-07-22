
/**
 * Created by qianchen on 2017/10/11.
 */

var gulp = require('gulp'),
    gulpSequence = require('gulp-sequence'),
    open = require('gulp-open');
    connect = require('gulp-connect');

gulp.task('webserver', function() {
    connect.server({
        root:['demo', 'build', 'src'],
        port: 3090,
        livereload: true
    });
});

gulp.task('html',function(){
    gulp.src('./demo/**/*.html')
        .pipe(connect.reload());
});


gulp.task('open', function(){
    gulp.src(__filename)
        .pipe(open({uri: 'http://localhost:3090'}));
});


gulp.task('watch', function(){
    gulp.watch(['./demo/**/*.html'], ['html']);
});


gulp.task('default', ['webserver', 'open', 'watch']);

