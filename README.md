# VS-Gulp
Gulp Tutorial 
gulp installation for VSCode:

//to use globally install with --global
<pre><code>
npm install --global gulp-cli</code></pre>

//to create package.json file create where u r going to save project
<pre><code>npm init</code></pre>

//will create dependecy and add line in pakage.json,also will install node-module
<pre><code>npm install gulp --save-dev</code></pre>

//create gulpfile.js on same directory as package.json and add task 
<pre><code>gulpfile.js</code></pre>

//importing gulp dir from node-modules
<pre><code>var gulp = require('gulp');</code></pre>

//create task of gulp
<pre><code>gulp.task('demo',function(){
	//all task will be here
	console.log('working');
});
</code></pre>
//for ckecking gulp task in terminal
<pre><code>gulp taskname</code></pre>

//install sass for converting scss to css
<pre><code>npm install gulp-sass --save-dev</code></pre>

//add line in gulpfile.js
<pre><code>var saas=require('gulp-sass');</code></pre>

<pre><code>gulp.task('sass',function(){
    return gulp.src('src/sass/*.scss')
           .pipe(sass())
           .pipe(gulp.dest('dist/css'))
}</code></pre>

