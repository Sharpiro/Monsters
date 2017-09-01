/// <binding ProjectOpened='watch' />
var gulp = require('gulp');
var ts = require('gulp-typescript');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');


var config = {
    webroot: "./wwwroot/",
    libBase: 'node_modules',
    lib: [
        require.resolve('systemjs/dist/system.src.js'),
        require.resolve('jquery/dist/jquery.min.js'),
        require.resolve('bootstrap/dist/css/bootstrap.min.css'),
    ]
};

gulp.task('default', ["transpile", "copyTsDev"]);

gulp.task('copyModules', () => {
    return gulp.src(config.lib, { base: config.libBase })
        .pipe(gulp.dest(config.webroot + 'lib'));
});

gulp.task("copyTsDev", () => {
    gulp.src(['src/**/*']).pipe(gulp.dest('wwwroot/src'));
    //gulp.src(['app/**/*']).pipe(gulp.dest('wwwroot/app'));
});

gulp.task('transpile', ["copyTsDev"], () => {
    var tsProject = ts.createProject('tsconfig.json');
    var tsResult = tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));

    tsResult.js
        //.pipe(concat('output.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('wwwroot/src'));
    return;
});

gulp.task('watch', () => {
    gulp.watch('src/**/*.ts', ["copyTsDev", "transpile"]);
});