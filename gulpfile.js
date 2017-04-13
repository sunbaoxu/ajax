var gulp = require('gulp'),
	webserver = require('gulp-webserver'); 
gulp.task('webserver', function(){
	gulp.src('./')
	.pipe(webserver({
		port: 8011,//端口
		liveload: true,//实时刷新代码。不用f5刷新
		directoryListing: {
		path: './',
		enable: true
		}
	}))
});
