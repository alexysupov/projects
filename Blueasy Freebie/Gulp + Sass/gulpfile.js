const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');

// task1
 
function styles() {
	return gulp.src('./src/sass/**/*.scss')
			.pipe(sass())
			.pipe(concat('all.css'))
			.pipe(gulp.dest('./build/css'));
}

function autocompile() {
	return gulp.watch('./src/sass/**/*.scss', styles)
}


gulp.task('styles', styles);
gulp.task('autocompile', autocompile);

// task2