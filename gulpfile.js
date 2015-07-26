var gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task('js', function() {
    
    return gulp.src([
        
        './app.js',
        './filters/*.js',
        './controllers/*.js',
        './directives/*.js',
        './services/*.js'
        
    ]).pipe(concat('app.js'))
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('watch', function(){
    gulp.watch([
        './app.js',
        './filters/*.js',
        './controllers/*.js',
        './directives/*.js',
        './services/*.js'
    ], ['js']);
});

gulp.task('default', ['js']);