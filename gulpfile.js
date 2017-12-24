const [
	gulp,
	postcss,
	magician,
	circle,
	triangle,
	linkcolors,
	center,
	autoprefixer,
	cssnext,
	precss,
	color_rgba_fallbac,
	opacity,
	pseudoelements,
	vmin,
	pixrem,
	will_change,
	atImport,
	mqpacker,
	cssnano
] = [
	require('gulp'),
	require('gulp-postcss'),
	require('postcss-font-magician'),
	require('postcss-circle'),
	require('postcss-triangle'),
	require('postcss-all-link-colors'),
	require('postcss-center'),
	require('autoprefixer'),
	require('cssnext'),
	require('precss'),
	require('postcss-color-rgba-fallback'),
	require('postcss-opacity'),
	require('postcss-pseudoelements'),
	require('postcss-vmin'),
	require('pixrem'),
	require('postcss-will-change'),
	require('postcss-import'),
	require('css-mqpacker'),
	require('cssnano')
];

gulp.task('css', () => {
	const [...processors] = [
		will_change,
		magician,
		circle,
		triangle,
		linkcolors,
		center,
		autoprefixer({
			browsers: ['ie >= 8', 'last 3 version']
		}),
		color_rgba_fallbac,
		opacity,
		pseudoelements,
		vmin,
		will_change,
		cssnext,
		precss,
		atImport,
		mqpacker,
		// cssnano
	];

	gulp.src('./src/*.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('./dest/'));
});
gulp.task('watch', () => {
	gulp.watch('./src/*.css', ['css']);
});