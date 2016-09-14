'use strict';

var gulp = require('gulp'),
    merge = require('merge-stream'),
    plugins = require('gulp-load-plugins')();

var runSequence = require('run-sequence');

gulp.task('jade', function () {
    return gulp.src('./src/**/*.jade')
        .pipe(plugins.jade({
            pretty : '    '
        }))
        .pipe(gulp.dest("./src"));
});

gulp.task('html2js', function () {
    return gulp.src(['./src/**/*.html','!./src/index.html','!./src/mce-files/**/*.html','!./src/mce-files/*.html'])
        .pipe(plugins.ngHtml2js({
            moduleName: "universalEditor.TinyMCE.templates"
        }))
        .pipe(plugins.rename({
            suffix: '.tpl'
        }))
        .pipe(gulp.dest('./src/'));
});

gulp.task('js', function () {
    var module = gulp.src(['./src/module/tinymce-plugin.module.js','./src/*.js','./src/**/*.js','!./src/mce-files/**/*.js'])
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('jshint-stylish'))
        .pipe(plugins.concat("universal-editor.TinyMCE.js"))
       .pipe(plugins.rename({
            suffix: '.min'
        }))
        .pipe(plugins.uglify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('css', function () {
    return gulp.src(['./src/*.scss','./src/**/*.scss'])
        .pipe(plugins.sass())
        .pipe(plugins.concat("universal-editor.TinyMCE.css"))
        .pipe(plugins.uglifycss({
            maxLineLen : 80
        }))
        .pipe(plugins.rename({
            suffix : '.min'
        }))
        .pipe(gulp.dest("./dist"));
});



gulp.task('files',function(){
    return gulp.src('./src/mce-files/**/*')
        .pipe(gulp.dest('./dist/mce-files'));
});

gulp.task('build',function(){
    runSequence(
        'jade',
        'html2js',
        'js',
        'css',
        'files'
    );
});