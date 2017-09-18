let gulp = require('gulp');
let sass = require ('gulp-sass');
let browser = require('gulp-browser');

gulp.task('default', ['html', 'css', 'js', 'assets']);

gulp.task('html', function() {
    return gulp.src('index.html')
        .pipe(gulp.dest('public/'));
});

gulp.task('css', function() {
    return gulp.src('styles/style.scss')
        .pipe(sass()) 
        .pipe(gulp.dest('public/'));
});

gulp.task('js', function() {
    return gulp.src('js/app.js')
        .pipe(browser.browserify()) 
        .pipe(gulp.dest('public/'));
});

gulp.task('assets', function() {
    return gulp.src(['assets/*.ico', 'assets/*.jpg', 'assets/*.png', 'assets/*.pdf'])
        .pipe(gulp.dest('public/assets'));
});

gulp.task('watch', ['default'], function() {
    gulp.watch('*.html', ['html']);
    gulp.watch('styles/*.scss', ['css']);
    gulp.watch('styles/partials/*.scss', ['css']);
    gulp.watch('*.js', ['js']);
    gulp.watch('assets/**.*', ['assets']);
});