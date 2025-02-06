const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const path = require('path');
const sass = require('gulp-sass')(require('sass'));

// Paths
const paths = {
    src: {
        html: './src/**/*.html',
        css: './src/css/**/*.css',
        js: './src/js/**/*.js',
        images: './src/img/**/*.*',
        fonts: './src/fonts/**/*.*',
    },
    build: {
        base: './build',
        css: './build/css',
        js: './build/js',
        images: './build/img',
        fonts: './build/fonts',
    }
};

// Clean Build Directory
async function clean() {
    const { deleteAsync } = await import('del');
    return deleteAsync([paths.build.base]);
  }

// Copy HTML to Build
function copyHtml() {
    return gulp.src(paths.src.html).pipe(gulp.dest(paths.build.base));
}

// Copy JavaScript to Build
function copyJs() {
    return gulp.src(paths.src.js).pipe(gulp.dest(paths.build.js));
}
// Copy Css to Build
async function copyCss() {
    const autoprefixer = (await import("gulp-autoprefixer")).default;
    return gulp.src("./src/sass/**/main.sass")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 16 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(paths.build.css));
}

// Copy Images to Build
function copyImages() {
    return gulp.src(paths.src.images).pipe(gulp.dest(paths.build.images));
}

// Copy Fonts to Build
function copyFonts() {
    return gulp.src(paths.src.fonts).pipe(gulp.dest(paths.build.fonts));
}

// Serve and Watch for Changes
function serve() {
    browserSync.init({
        server: {
            baseDir: paths.build.base
        },
        notify: false
    });


    gulp.watch(paths.src.html, copyHtml).on('change', browserSync.reload);
    gulp.watch(paths.src.js, copyJs).on('change', browserSync.reload);
    gulp.watch(paths.src.css, copyCss).on('change', browserSync.reload);
    gulp.watch(paths.src.images, copyImages).on('change', browserSync.reload);
    gulp.watch(paths.src.fonts, copyFonts).on('change', browserSync.reload);
}

// Build Task
const build = gulp.series(
    clean,
    gulp.parallel(copyHtml,copyCss, copyJs, copyImages, copyFonts)
);

// Default Task
exports.default = gulp.series(build, serve);
exports.build = build;
exports.clean = clean;
exports.serve = serve;
