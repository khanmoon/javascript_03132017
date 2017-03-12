'use strict';

const gulp = require('gulp');

const srcWebRoot = './src/www/**/*.html';
const dstWebRoot = './dist/www';

const srcStyles = './src/www/css/**/*.css';
const dstStyles = './dist/www/css';

gulp.task('html-copy', () =>
    gulp.src(srcWebRoot)
        .pipe(gulp.dest(dstWebRoot)));

gulp.task('css-copy', () =>
    gulp.src(srcStyles)
        .pipe(gulp.dest(dstStyles)));

gulp.task('html-watch', () =>
    gulp.watch(srcWebRoot, () =>
        gulp.start('html-copy')));

gulp.task('css-watch', () =>
    gulp.watch(srcStyles, () =>
        gulp.start('css-copy')));

gulp.task('copy-only', [
    'html-copy', 'css-copy'
]);

gulp.task('copy-watch', [
    'copy-only', 'html-watch', 'css-watch'
]);