# VS-Gulp
Gulp Tutorial 
gulp installation for VSCode:

//to use globally install with --global
<code>
npm install --global gulp-cli</code>

//to create package.json file create where u r going to save project
<code>npm init</code>

//will create dependecy and add line in pakage.json,also will install node-module
<code>npm install gulp --save-dev</code>

//create gulpfile.js on same directory as package.json and add task 
<code>gulpfile.js</code>

//importing gulp dir from node-modules
<code>var gulp = require('gulp');</code>

//create task of gulp
<code>gulp.task('demo',function(){
	//all task will be here
	console.log('working');
});
</code>
//for ckecking gulp task in terminal
<code>gulp taskname</code>

//install sass for converting scss to css
<code>npm install gulp-sass --save-dev</code>

//add line in gulpfile.js
<code>var saas=require('gulp-sass');</code>

<code>gulp.task('sass',function(){
    return gulp.src('src/sass/*.scss')
           .pipe(sass())
           .pipe(gulp.dest('dist/css'))
}</code>

