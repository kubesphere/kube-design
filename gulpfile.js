const gulp = require("gulp");
const babel = require("gulp-babel");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");

sass.compiler = require("node-sass");

const paths = {
  dest: {
    lib: "lib",
    esm: "esm",
    dist: "dist",
  },
  styles: ["src/**/**/*.scss"],
  scripts: ["src/**/**/*.{js,jsx}", "!src/**/**/*.test.js"],
};

function compileScripts(babelEnv, destDir) {
  const { scripts } = paths;

  process.env.BABEL_ENV = babelEnv;
  return gulp.src(scripts).pipe(babel()).pipe(gulp.dest(destDir));
}

function compileCJS() {
  const { dest } = paths;
  return compileScripts("cjs", dest.lib);
}

function compileESM() {
  const { dest } = paths;
  return compileScripts("esm", dest.esm);
}

function buildStyles() {
  return gulp
    .src(paths.styles)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.dest.lib))
    .pipe(gulp.dest(paths.dest.esm));
}

function copyStyles() {
  return gulp
    .src(paths.styles)
    .pipe(gulp.dest(paths.dest.lib))
    .pipe(gulp.dest(paths.dest.esm));
}

const buildScripts = gulp.series(compileCJS, compileESM);

const build = gulp.parallel(buildScripts, copyStyles, buildStyles);

exports.build = build;

exports.default = build;
