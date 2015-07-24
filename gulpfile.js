var gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task('js', function() {
    
    return gulp.src([
        
        './controllers/*.js',
        './directives/*.js',
        './filters/*.js',
        './services/*.js'
        
    ]).pipe(concat('app.js'))
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('default', ['js']);