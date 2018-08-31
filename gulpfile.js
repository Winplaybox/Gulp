const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
// logs Message

gulp.task('message',function(){
    return console.log('Gulp is running...');
  });

// copying all html files

gulp.task('copyHTML',function(){
    gulp.src('src/*.html')
    .pipe(gulp.dest('dist'));
  }); 

// optimize images

gulp.task('imagemin',function(){
gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
});


gulp.task('sass',function(){
    gulp.src('src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
})
