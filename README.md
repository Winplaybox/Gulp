# Gulp

<h1><center>Gulp Tutorial</center></h1>
<ul>
<li><strong> gulp.task</strong> -- Define task</li>
<li><strong> gulp.src</strong> -- Point to File to use</li>
<li><strong> gulp.dest</strong> -- Point to folder to output</li>
<li><strong> gulp.watch</strong> -- watch folder and folder for changes</li>
</ul>
<strong>Gulp installation for Visual Studio Code:</strong>

1). To use globally install with --global or -g
<pre><code>npm install --global gulp-cli</code></pre>
OR
<pre><code>npm install --g gulp</code></pre>

2). To create package.json file write this code on terminal or command prompt & and place where your main folder is present
<pre><code>npm init</code></pre>

3). This Will create dependecy and auto add line in pakage.json, also will install node-module folder in your main folder
<pre><code>npm install gulp --save-dev</code></pre>

4). Create gulpfile.js on same directory[i.e., main folder]
<pre><code>gulpfile.js</code></pre>

5). Importing gulp directory from node-modules folder write this code on terminal or command prompt
<pre><code>const gulp = require('gulp');</code></pre>

6). Create your first task of gulp via entering below code on terminal or command prompt

<pre><code>gulp.task('demo',function(){
	//all task will be here
	console.log('working');
});
</code></pre>

7). For checking gulp task in terminal or command prompt 
<pre><code>gulp taskname</code></pre>

8). Install gulp-sass for converting scss to css
<pre><code>npm install gulp-sass --save-dev</code></pre>

9). Add line in gulpfile.js
<pre><code>const saas=require('gulp-sass');</code></pre>


<pre><code>gulp.task('sass',function(){
    return gulp.src('src/sass/*.scss')
           .pipe(sass())
           .pipe(gulp.dest('dist/css'))
}</code></pre>

