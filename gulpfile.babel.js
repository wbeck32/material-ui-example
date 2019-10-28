import { src, dest, watch } from 'gulp';
import sass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import livereload from 'gulp-livereload';
import sourcemaps from 'gulp-sourcemaps';
import debug from 'gulp-debug';

const watchCss = () => {
  return watch(
    [
      './src/static/scss/*.scss',
      './src/static/scss/modern.scss',
      './gulpfile.babel.js',
    ],
    () => {
      return src('./src/static/scss/*.scss')
        .pipe(debug())
        .pipe(sourcemaps.init())
        .pipe(
          sass({
            includePaths: []
              .concat(require('bourbon').includePaths)
              .concat(require('bourbon-neat').includePaths),
            // outputStyle: 'compressed',
          }).on('error', sass.logError)
        )
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('public/static/css'))
        .pipe(dest('dist/static/css'))
        .pipe(dest('./src/static/css'))
        .pipe(livereload());
    }
  );
};

exports.default = watchCss;
