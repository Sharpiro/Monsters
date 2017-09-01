var gulp = require('gulp');
var ts = require('gulp-typescript');


var config = {
    webroot: "./wwwroot/",
    libBase: 'node_modules',
    lib: [
        require.resolve('systemjs/dist/system.src.js'),
    ]
};

gulp.task('default', () => {
    
});

gulp.task('copyModules', () => {
    return gulp.src(config.lib, { base: config.libBase })
        .pipe(gulp.dest(config.webroot + 'lib'));
});

gulp.task('transpile', function () {
    var tsProject = ts.createProject('tsconfig.json');
    var tsResult = tsProject.src()
        .pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest('wwwroot/app'));
});