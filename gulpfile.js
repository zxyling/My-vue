var gulp = require('gulp'),
    webpack = require('gulp-webpack'),
    named = require('vinyl-named'),
    minify = require('gulp-uglify'),                 //js压缩
    minifyCss = require('gulp-minify-css'),          //css压缩
    clean = require('gulp-clean'),                   //清空文件夹
    autoprefixer = require('gulp-autoprefixer'),     //css代码前缀自动补全
    connect = require('gulp-connect'),               //web服务器
    imagecache = require('gulp-cache'),              //图片缓存
    imagemin = require('gulp-imagemin'),             //图片压缩
    pngquant = require('imagemin-pngquant'),         //png图片深入压缩
    livereload = require('gulp-livereload'),         //实时监控页面变化
    run = require('gulp-run-sequence'),              //gulp任务执行顺序外挂
    concat = require('gulp-concat');                //文件合并



var appList = ['app'];


//gulp.task('default', ['bundle'], function() {
//    console.log('done')
//});

gulp.task('bundle', function() {
    return gulp.src('src/pages/**/*.js')
        .pipe(named())
        .pipe(webpack(getConfig()))
        .pipe(gulp.dest('dist/pages'))
        .pipe(connect.reload());
});

//gulp.task('watch', function() {
//    return gulp.src(mapFiles(appList, 'js'))
//        .pipe(named())
//        .pipe(webpack(getConfig({watch: true})))
//        .pipe(gulp.dest('dist/'))
//});

/*
 * 线上环境 - html
 * @param 压缩合并至新目录
 * */
gulp.task('copyhtml',function(){
    return gulp.src('src/pages/**/*.html')
        .pipe(gulp.dest('dist/pages'))
        .pipe(connect.reload());
});

/*
 * 线上环境 - js
 * @param 压缩合并至新目录
 * */

gulp.task('minfy',function(){
    return gulp.src('src/pages/**/*.js')
        .pipe(jshint())
        .pipe(minify())
        .pipe(gulp.dest('dist/pages'))
        .pipe(connect.reload());
});
/*
 * 线上环境 - css
 * @param 压缩pages目录下的所有css文件
 * */
gulp.task('pagesCss',function(){
    return gulp.src('src/pages/**/*.css')
        .pipe(gulp.dest('dist/pages'))
        .pipe(connect.reload());
});

/*
 * 线上环境 - image
 * @param 压缩图片
 * */
gulp.task('images',function(){
    return gulp.src('src/images/**/*.{jpg,png,gif}')
        .pipe(imagecache(imagemin({             //只压缩修改的图片
            optimizationLevel: 7,               //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true,                  //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true,                   //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true,                    //类型：Boolean 默认：false 多次优化svg直到完全优化
            use: [pngquant()]                   //使用pngquant深度压缩png图片的imagemin插件
        })))
        .pipe(gulp.dest('dist/images'))
        .pipe(connect.reload());
});

/*
 * 线上环境 - css
 * @param 压缩vendor目录下的所有css文件
 * */
gulp.task('libCss',function(){
    return gulp.src('src/lib/**/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/lib'))
});

/*
 * 线上环境 - js
 * @param 压缩vendor目录下的所有js文件
 * */

gulp.task('libJs',function(){
    return gulp.src('src/lib/**/*.js')
        .pipe(minify())
        .pipe(gulp.dest('dist/lib'))
});


//清空文件夹
gulp.task('clean',function(){
    return gulp.src('dist')
        .pipe(clean())
});
//监视文件变化，并执行任务
gulp.task('watch',function(){
    gulp.watch('src/pages/**/*.html',['copyhtml']);
    gulp.watch('src/images/**/*.{jpg,png,gif,ico}',['images']);
    gulp.watch('src/pages/**/*.css',['pagesCss']);
    gulp.watch('src/pages/**/*.js',['bundle']);
    gulp.watch('src/components/*.vue',['bundle']);
});


//启动本地服务器
gulp.task('server',function(){
    connect.server({
        root:'dist',             //根目录
        livereload:true
    })
});
gulp.task('default',['server','watch'],function(){
    console.log("本地服务已启动")
});

//一键创建本地目录
gulp.task('build',function(){
    run('clean',['copyhtml','libJs','bundle','pagesCss','images'],function(){
        setTimeout(function () {
            console.log('\n 线上项目任务已经全部运行完毕 O(∩_∩)O~~');
        }, 100);
    })
});









/**
 * @private
 */
function getConfig(opt) {
    var config = {
        module: {
            loaders: [
                { test: /\.vue$/, loader: 'vue'},
                {
                    test: /\.js$/,
                    loader: 'babel-loader'
                }

            ]
        },
        resolve:{
            extensions: ["", ".js", ".vue", ".css", ".json"],
            alias:{}
        },
        devtool: 'source-map'
    };
    if (!opt) {
        return config
    }
    for (var i in opt) {
        config[i] = opt[i]
    }
    return config
}

/**
 * @private
 */
function mapFiles(list, extname) {
    return list.map(function (app) {return 'src/' + app + '.' + extname})
}
