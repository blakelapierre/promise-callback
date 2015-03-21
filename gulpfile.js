const gulp = require('gulp'),
      minimist = require('minimist');

const {
  babel,
  cached,
  clean,
  concat,
  gutil,
  jshint,
  pipe,
  print,
  run,
  sequence,
  sourcemaps,
  tasks,
  traceur
} = require('gulp-load-plugins')({
  rename: {
    'gulp-util': 'gutil'
  }
});

const args = minimist(process.argv.slice(2));

const result = tasks(gulp, require);
if (typeof result === 'string') console.log(result);

gulp.task('default', ['build']);

gulp.task('build', sequence('clean', 'transpile'));

gulp.task('dev', ['transpile'], () => gulp.watch(paths.scripts, ['transpile']));

gulp.task('run', () => run(`node ${paths.dist}/index.js ${args.args || ''}`).exec());

gulp.task('transpile', //['jshint'],
  () => pipe([
    gulp.src(paths.scripts)
    ,cached('transpile')
    ,print()
    ,sourcemaps.init()
    ,babel()
    //,traceur({modules: 'commonjs', asyncGenerators: true, forOn: true, asyncFunctions: true})
    ,sourcemaps.write('.')
    ,gulp.dest(paths.dist)
  ])
  .on('error', function(e) { console.log(e); }));

gulp.task('jshint',
  () => pipe([
    gulp.src(paths.scripts)
    ,cached('jshint')
    ,print()
    ,jshint()
    ,jshint.reporter('jshint-stylish')
    ,jshint.reporter('fail')
  ]));

gulp.task('clean',
  () => pipe([
    gulp.src(paths.dist, {read: false})
    ,clean()
  ]));

const paths = {
  scripts: ['src/**/*.js'],
  dist: '.dist'
};
