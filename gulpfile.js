const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const uglify= require('gulp-uglify');
const sourcemaps=require('gulp-sourcemaps');

// logs Message

gulp.task('message',function(){
    return console.log('Gulp is running...');
  });

// copying all html files

gulp.task('copyHTML',function(){
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
  }); 

// optimize images [Minified 3 images (saved 36.1 kB - 15.5%)]

gulp.task('imagemin',function(){
gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
});

//  minify js

gulp.task('minify',function(){
    gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
  });

//compile sass to css

gulp.task('sass',function(){
    gulp.src('src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
});

// before compile sass create source maps [css.map]

gulp.task('sassmap',function(){
    gulp.src('src/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('Error',sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'))
  });