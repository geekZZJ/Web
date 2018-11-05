import gulp from 'gulp';
import gulpif from 'gulp-if'
import livereload from 'gulp-livereload'
import args from './util/args'

gulp.task('serve',(cb)=>{
    if (!args.watch){
        return cb();
    }
    var server = liveserver.new(['--harmony','server/bin/www']);
    server.start()

    gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function (file) {
        server.notify.apply(server,[file]);
    });
    gulp.watch(['server/routes/**/*.js','server/app.js'],function () {
        server.start.bind(server)()
    })
})