# Gulp

<h1><center>Gulp Tutorial</center></h1>
<ul>
<li><strong> gulp.task</strong> -- Define task</li>
<li><strong> gulp.src</strong> -- Point to File to use</li>
<li><strong> gulp.dest</strong> -- Point to folder to output</li>
<li><strong> gulp.watch</strong> -- watch folder and folder for changes</li>
</ul>
<strong>Gulp installation for Visual Studio Code:</strong>
<h3>To learn gulp first of all you need to install node.js setup file which is given below</h3>
<ul>
<li><p>LTS</p><p>Recommended For Most Users</p>
<ul><li><a href="https://nodejs.org/dist/v8.11.4/node-v8.11.4-x64.msi" target="_blank" title="Install Node.js official Windows Version">Windows User</a></li>
<li><a href="https://nodejs.org/dist/v8.11.4/node-v8.11.4.pkg" target="_blank" title="Install Node.js official Windows Version">MacOS User</a></li>
<li><a href="https://nodejs.org/dist/v8.11.4/node-v8.11.4.tar.gz" target="_blank" title="Install Node.js official Windows Version">Source Code</a></li>
</ul></li>
<li><p>Current</p><p>Latest Features</p>
<ul><li><a href="https://nodejs.org/dist/v10.9.0/node-v10.9.0-x64.msi" target="_blank" title="Install Node.js official Windows Version">Windows User</a></li>
<li><a href="https://nodejs.org/dist/v10.9.0/node-v10.9.0.pkg" target="_blank" title="Install Node.js official Windows Version">MacOS User</a></li>
<li><a href="https://nodejs.org/dist/v10.9.0/node-v10.9.0.tar.gz" target="_blank" title="Install Node.js official Windows Version">Source Code</a></li>
</ul></li>
</ul>

<strong>1).</strong> To use globally install with --global or -g
<pre><code>npm install --global gulp-cli</code></pre>
OR
<pre><code>npm install --g gulp</code></pre>

<strong>2).</strong> To create package.json file write this code on terminal or command prompt & and place where your main folder is present
<pre><code>npm init</code></pre>

<strong>3).</strong> This will create dependecy and auto add line in pakage.json [i.e., devDependencies{..}], also will install node-module folder in your main folder
<pre><code>npm install gulp --save-dev</code></pre>
OR auto add line in pakage.json [i.e., dependencies{..}]
<pre><code>npm install gulp</code></pre>
<strong>4).</strong> Create gulpfile.js on same directory[i.e., main folder]
<pre><code>gulpfile.js</code></pre>

<strong>5).</strong> Importing gulp directory from node-modules folder write this code on terminal or command prompt
<pre><code>const gulp = require('gulp');</code></pre>

<strong>6).</strong> Create your first task of gulp via entering below code on terminal or command prompt

<pre><code>gulp.task('demo',function(){
	//all task will be here
	console.log('working');
});
</code></pre>

<strong>7).</strong> For checking gulp task in terminal or command prompt 
<pre><code>gulp taskname</code></pre>

<strong>8).</strong> Install gulp-sass for converting scss to css
<pre><code>npm install gulp-sass --save-dev</code></pre>

<strong>9).</strong> Add line in gulpfile.js
<pre><code>const saas=require('gulp-sass');</code></pre>


<pre><code>gulp.task('sass',function(){
    return gulp.src('src/sass/*.scss')
           .pipe(sass())
           .pipe(gulp.dest('dist/css'))
}</code></pre>

<h2><strong>Plugins list [type in terminal or Command prompt]</strong></h2>
<pre><code><ul>
<li><strong>npm</strong> install --save-dev gulp</li>
<li><strong>npm</strong> install --save-dev gulp-sass</li>
<li><strong>npm</strong> install --save-dev gulp-imagemin</li>
<li><strong>npm</strong> install --save-dev gulp-uglify</li>
<li><strong>npm</strong> install --save-dev gulp-sourcemaps</li>
<li><strong>npm</strong> install --save-dev gulp-concat</li>
<li><strong>npm</strong> install --save-dev gulp-rename</li>
<li><strong>npm</strong> install --save-dev gulp-brotli</li>
<li><strong>npm</strong> install --save-dev gulp-gzip</li>
<li><strong>npm</strong> install --save-dev gulp-tar</li>
<li><strong>npm</strong> install --save-dev gulp-css-scss</li>
<li><strong>npm</strong> install --save-dev gulp-postcss</li>
<li><strong>npm</strong> install --save-dev gulp-ext-replace</li>
<li><strong>npm</strong> install --save-dev gulp-jsonminify</li>
<li><strong>npm</strong> install --save-dev gulp-util</li>
<li><strong>npm</strong> install --save-dev gulp-subtask</li>
</ul></code></pre>