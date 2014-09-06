var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');

var less_paths = [
    'assets/less/site.less'
];

var js_paths = [
    'assets/js/jquery-1.11.1.min.js',
    'assets/js/bootstrap/*.js',
    'assets/js/app.js'
];

gulp.task('build-less', function() {
    return gulp.src(less_paths)
        .pipe(less())
        .pipe(gulp.dest('assets/css/'));
});

gulp.task('build-js', function() {
    return gulp.src(js_paths)
        .pipe(concat('assets/js/site.js'))
        .pipe(gulp.dest('assets/js'));
});

gulp.task('dev', ['build-less', 'build-js'], function() {
   var less_watcher = gulp.watch([
       'assets/less/bootstrap/*.less',
       'assets/less/*.less'
   ], ['build-less']);

   var js_watcher = gulp.watch([
        'assets/js/app.js'
   ], ['build-js']);

   less_watcher.on('change', function(e) {
       console.log('File ' + e.path + ' was ' + e.type + ', running tasks ...');
   });

   js_watcher.on('change', function(e) {
       console.log('File ' + e.path + ' was ' + e.type + ', running tasks ...');
   });
});