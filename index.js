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

    // Callback for an error occurring
    var onError = function(err) {
        // Notify the user
        notify.onError({
            title: 'Laravel Elixir',
            subtitle: 'JSCS Failed',
            message: '<%= error.message %>',
            icon: path.join(__dirname, '../laravel-elixir/icons/fail.png')
        })(err);

        // end the stream
        this.emit('end');
    };

    // Setup the task
    gulp.task('jscs', function() {
        return gulp.src(files)
            .pipe(jscs(options))
            .on('error', onError)
            .pipe(notify({
                title: 'Laravel Elixir',
                message: 'JSCS passed',
                icon: path.join(__dirname, '../laravel-elixir/icons/pass.png'),
                onLast: true
            }));
    });

    // register the task to actually run via elixir
    this.registerWatcher('jscs', files);
    return this.queueTask('jscs');
});
