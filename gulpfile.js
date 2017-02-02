var gulp = require( 'gulp' ),
	sass = require( 'gulp-sass' ),
	maps = require( 'gulp-sourcemaps'),
	notify = require( 'gulp-notify' ),
	http = require('http'),
	postCSS = {
		nano: require( 'cssnano' ),
		core: require( 'gulp-postcss' ),
		media: require( 'css-mqpacker' ),
		prefix: require( 'autoprefixer' )
	},
	path = './static/';

gulp.task( 'css',
	function ( cb ) {
		return gulp.src( path + 'scss/style.scss' )
			.pipe( maps.init() )
			.pipe(
				sass(
					{
						errLogToConsole: true,
						outputStyle: 'compressed'
					}
				)
				.on( 'error', onError )
			)
			.pipe(
				postCSS.core(
					[
						postCSS.prefix(
							{
								browsers: [
									'ie >= 9',
									'ie_mob >= 10',
									'ff >= 30',
									'chrome >= 34',
									'safari >= 7',
									'opera >= 23',
									'ios >= 7',
									'android >= 4.4',
									'bb >= 10'
								],
								cascade : false,
								remove  : true
							}
						),
						postCSS.media(
							{
								sort: true
							}
						)
					]
				)
			)
			.pipe( maps.write( '.' ) )
			.pipe(
				gulp.dest( path + 'css' )
			)
			cb( err );
	}
);

function onError( err ) {
	notify().write( err );
	this.emit( 'end' );
}


gulp.task('reloadWebpack', function(cb) {
	console.log( 'a' );
	http.get('http://localhost:8080/reload');
	cb();
});

gulp.task( 'default',
	function () {
		gulp.watch( path + 'scss/**/*.scss', [ 'css', 'reloadWebpack' ] );
	}
);
