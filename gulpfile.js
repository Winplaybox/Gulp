const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const uglify= require('gulp-uglify');
const sourcemaps =require('gulp-sourcemaps');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const brotli = require('gulp-brotli');
const gzip = require('gulp-gzip');
const tar = require('gulp-tar');
const cssScss = require ('gulp-css-scss');
const postcss = require('gulp-postcss');
const ext_replace= require('gulp-ext-replace');
const jsonminify= require('gulp-jsonminify');
const gutil= require('gulp-util');
const SubTask= require('gulp-subtask');
const plumber= require('gulp-plumber');
const cleanCSS= require('gulp-clean-css');
const iconfont = require('gulp-iconfont');
const useref= reuiqre('gulp-useref');

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
    .pipe(gulp.dest('dist/css/sourcemap'))
  });

// concat scripts [for example., file1.js + file2.js = main.js]

gulp.task('scripts',function(){
    gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/concat'));
  });

// rename particular files via string [first create any txt format file in src folder]
// First my file name was file.txt in src folder and in dist/files folder it rename to hellow1.txt

gulp.task('rename',function(){
    gulp.src('src/*.txt')
    .pipe(rename('hellow1.text'))
    .pipe(gulp.dest('dist/files'));
  });

// rename particular files with ext via function
// First my file name was file.txt in src folder and in dist/filx folder it rename to file-hurry.md

gulp.task('rename1',function(){
    gulp.src('src/*.txt')
    .pipe(rename(function(Path){
      Path.dirname +='/filx';
      Path.basename +='-hurry';
      Path.extname ='.md';
    })
  )
  .pipe(gulp.dest('dist'));
  });
// rename particular files with ext via hash
// First my file name was file.txt in src folder and in dist/filx folder it rename to hello-file-hurry.txt

gulp.task('rename2',function(){
    gulp.src('src/*.txt',{base:process.cwd()})
    .pipe(rename({
      dirname :"/filx",
      basename :"hurry",
      prefix:"hello-",
      suffix:"-now",
      extname :".txt"
    }))
    .pipe(gulp.dest('dist'));
    });

// compress file [This will compress particular file like sass or js and format is .br]
gulp.task('compress',function(){
    gulp.src('src/sass/*.scss')
      .pipe(sass().on('Error',sass.logError))
    .pipe(brotli.compress())
    .pipe(gulp.dest('dist/compress'))
  });

//decompress files [This will decompress .br file and it comes to original file format]
gulp.task('decompress',function(){
    gulp.src('dist/compress/*.br')
    .pipe(brotli.decompress())
    .pipe(gulp.dest('dist/decompress'))
  });

// create in gzip files [This will compress particular file like sass or js or images and format is .gz]

gulp.task('gzip',function(){
    gulp.src('src/js/*.js')
    .pipe(gzip())
    .pipe(gulp.dest('dist/gzip'))
  });

// create in tar files [This will compress particular file like sass or js or images and format is .tar]

gulp.task('tar',function(){
    gulp.src('dist/gzip/*')
    .pipe(tar('achive.tar'))
    .pipe(gulp.dest('dist/tar'))
  });

// create CssScss [This plugins will convert from  css to scss]

  gulp.task('css-scss', () => {
    gulp.src('dist/css/*.css')
      .pipe(cssScss())
      .pipe(gulp.dest('dist/cssScss'));
  });

// post css

gulp.task('postcss',function(){
    gulp.src('dist/css/*.css')
    .pipe(postcss())
    .pipe(gulp.dest('dist'));
  });

// csswring minify css and autoprefixer [auto compatiable with all browser]
gulp.task('csswring',function(){
    var process=[
      csswring,
      autoprefixer
    ];
    gulp.src('src/sass/*.scss')
    .pipe(sass().on('Error',sass.logError))
    .pipe(postcss(process))
    .pipe(gulp.dest('dist/prefixer'))
  });
  // css nano and autoprefixer({browsers:['last 2 version']}) this will copatiable with last 2 version of all browser
  
  gulp.task('cssnano1', function () {
      var plugins2 = [
          autoprefixer({browsers:['last 2 version']}),
          cssnano
      ];
       gulp.src('src/sass/*.scss')
       .pipe(sass().on('Error',sass.logError))
          .pipe(postcss(plugins2))
          .pipe(gulp.dest('dist/cssnano'));
  });

// replace extension in second way
gulp.task('extreplace',function(){
    gulp.src('src/*.coffee')
    .pipe(ext_replace('.js'))
    .pipe(gulp.dest('dist/extreplace'))
  });

gulp.task('change', function() {
    gulp.src('src/*.coffee')
        .pipe(ext_replace('.coffee','.js'))
        .pipe(gulp.dest('dist/extreplace/change'))
  });

// minify jsson file like uglify

gulp.task('jminify',function(){
    gulp.src('src/*.json')
    .pipe(jsonminify())
    .pipe(gulp.dest('dist/json'))
  });

// noop()
gulp.task('noop', function() {
  gulp.src('src/js/*.js')
    .pipe(concat('script.js'))
    .pipe(gutil.env.type === 'sbmscript' ? uglify() : gutil.noop())
    .pipe(gulp.dest('dist/noop'));
});

// lib bundle into uglify
gulp.task('bundle',function(){
  gulp.src('src/js/*.js')
  .pipe(rename('bunjdle.min.js'))
  .pipe(sourcemaps.init())
  //.pipe(plugins.duglify())
  .pipe(sourcemaps.write('./maps'))
  .pipe(gulp.dest('dist/sourcemap'))
});

// creating sub task of js
gulp.task('subtask',function(){
  var taskrun= new SubTask('taskrun')
  .src('{{src}}')
  .pipe(concat,'main.js')
  .pipe(uglify,'{{concat}}')
  .pipe(gulp.dest,'dist/subtask')

  taskrun.run({
    src:'src/js/*.js',
    concat:'file1.js'
  });
  taskrun.run({
    src:'src/js/*.js',
    concat:'file2.js'
  });
});

// plumber
gulp.task('plumber',function(){
  gulp.src('src/js/*.js')
    .pipe(plumber())
    .pipe(sass())
    .pipe(plumber.stop())
    .pipe(gulp.dest('dist/plumber'));
});

// subtask with clean css and concat
gulp.task('tsk',function(){
  var task = new SubTask('task')
       .src('{{src}}')
       .pipe(concat,'{{concatfile}}')
       .pipe(cleanCSS({compatibility: 'ie8'}))
       .pipe(gulp.dest,'{{dest}}')
   task.run({
       src : 'src/js/*.js',
       concatfile : 'concat.js',
       dest : 'dist/subtaskJsChanges'
   });
   task.run({
       src : 'dist/css/*.css',
       concatfile : 'concat.css',
       dest : 'dist/subtaskCSSChanges'
   });
});


// cleanCSS
gulp.task('minifycss', () => {
  return gulp.src('dist/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/cleancss'));

});

//ICONFONTS
gulp.task('iconfonts',function(){
  gulp.src('src/icons/*.svg')
  .pipe(iconfont({
    fontName:'sbmfont',
    appendCodepoints:true
  }))
  .on('codepoints',function(codepoints,options){
    console.log(codepoints,options)
  })

  .pipe(gulp.dest('dist/Iconfont'))
  gulp.start('minifycss')
});

// useref
gulp.task('user',function(){
  gulp.src('src/*.html')
  .pipe(useref())
  .pipe(gulp.dest('dist'))
});
// useref with options
gulp.task('user1',function(){
  gulp.src('src/*.html')
  .pipe(useref({searchPath:'.tmp'}))
  .pipe(gulp.dest('dist'))
});
// codintional in userref
gulp.task('condi',function(){
  gulp.src('dist/*.html')
  .pipe(plugins.useref())
  .pipe(plugins.if('*.css',cleanCSS()))
  .pipe(plugins.if('*.js',plugins.uglify()))
  .pipe(gulp.dest('dist/condi'))
});