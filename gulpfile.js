//Include Gulp
var gulp = require('gulp');


//Include plugins
var uncss = require('gulp-uncss');
var rename = require('gulp-rename');




//Uncss task

gulp.task('uncss', function() {
    gulp.src('lib/bootstrap/css/bootstrap.min.css')
        .pipe(uncss({
            html: ["http:\/\/wordpress-gulp.dev","http:\/\/wordpress-gulp.dev\/","http:\/\/wordpress-gulp.dev\/hello-world\/"]
        }))
        .pipe(rename({suffix: '.clean'}))
        .pipe(gulp.dest('lib/bootstrap/css/'));
});