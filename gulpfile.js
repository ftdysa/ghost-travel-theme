var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var minify = require('gulp-minify-css');
var uglify = require('gulp-uglify');

var less_paths = [
    'assets/less/site.less'
];

var js_paths = [
    'assets/js/jquery-1.11.1.min.js',
    'assets/js/bootstrap/transition.js',
    'assets/js/bootstrap/button.js',
    'assets/js/bootstrap/tooltip.js',
    'assets/js/bootstrap/popover.js',
    'assets/js/bootstrap/dropdown.js',
    'assets/js/bootstrap/modal.js',
    'assets/js/bootstrap/scrollspy.js',
    'assets/js/bootstrap/affix.js',
    'assets/js/bootstrap/alert.js',
    'assets/js/bootstrap/carousel.js',
    'assets/js/bootstrap/collapse.js',
    'assets/js/bootstrap/tab.js',
    'assets/js/app.js'
];

gulp.task('build-less', function() {
    return gulp.src(less_paths)
        .pipe(less())
        .pipe(minify())
        .pipe(gulp.dest('assets/css/'));
});

gulp.task('build-js', function() {
    return gulp.src(js_paths)
        .pipe(concat('site.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/js'));
});

gulp.task('dev', ['build-less', 'build-js'], function() {
   var less_watcher = gulp.watch([
       'assets/less/font-awesome/*.less',
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

gulp.task('build', ['build-less', 'build-js']);