# VS-Gulp
Gulp Tutorial 
gulp installation for VSCode:

//to use globally install with --global
npm install --global gulp-cli

//to create package.json file create where u r going to save project
npm init

//will create dependecy and add line in pakage.json,also will install node-module
npm install gulp --save-dev

//create gulpfile.js on same directory as package.json and add task 
gulpfile.js

//importing gulp dir from node-modules
var gulp = require('gulp');

//create task of gulp
gulp.task('demo',function(){
	//all task will be here
	console.log('working');
});

//for ckecking gulp task in terminal
gulp taskname

//install sass for converting scss to css
npm install gulp-sass --save-dev

//add line in gulpfile.js
var saas=require('gulp-sass');

gulp.task('sass',function(){
    return gulp.src('src/sass/*.scss')
           .pipe(sass())
           .pipe(gulp.dest('dist/css'))
}
