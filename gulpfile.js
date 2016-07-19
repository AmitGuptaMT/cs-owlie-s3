var gulp = require('gulp');
var webserver = require('gulp-webserver');
 
gulp.task('default', function() {
	console.log("Inside webserver task");
	  gulp.src('.')
	    .pipe(webserver({
	      livereload: true,
	      directoryListing: false,
	      open: true,
          fallback: './index.html',
          port : 1678
	    }));
});