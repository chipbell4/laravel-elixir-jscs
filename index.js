'use strict';

var elixir = require('laravel-elixir');
var gulp = require('gulp');
var jscs = require('gulp-jscs');
var notify = require('gulp-notify');
var path = require('path');

// The files that will be linted
var files = [];

elixir.extend('jscs', function(src, options) {
    // append all of the src files onto the end of the array. This allows us to keep calling the plugin to build more
    // and more files on to the end
    if(!src instanceof Array) {
        src = [src];
    }
    Array.prototype.push.apply(files, src);

    // default options
    options = options || {};

    // Setup the task
    gulp.task('jscs', function() {
        return gulp.src(files)
            .pipe(jscs(options))
    });

    // register the task to actually run via elixir
    this.registerWatcher('jscs', files);
    return this.queueTask('jscs');
});
