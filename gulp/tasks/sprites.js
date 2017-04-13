var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename'),
del = require('del'),
svg2png = require('gulp-svg2png');

var config = {
  mode: {
    css: {
      variables: {
        replaceSvgWithPng: function() {
          return function(sprite, render) {
            return render(sprite).split('.svg').join('.png');
          }
        }
      },
      sprite: 'sprite.svg',
      render: {
        css: {
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
}
// delete old sprite graphic before creating a new one
gulp.task('beginClean', function() {
  return del(['./app/temp/sprite', './app/assets/images/sprites']);
});
// create svg sprite
gulp.task('createSprite', ['beginClean'], function() {
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite/'));
});
// create svg to png copy
gulp.task('createPngCopy', ['createSprite'], function() {
  return gulp.src('./app/temp/sprite/css/*.svg')
  .pipe(svg2png())
  .pipe(gulp.dest('./app/temp/sprite/css'));
});
// relocate svgGraphic
gulp.task('copySpriteGraphic', ['createPngCopy'], function() {
  return gulp.src('./app/temp/sprite/css/**/*.{svg, png}')
    .pipe(gulp.dest('./app/assets/images/sprites'));
});
// relocate svg spriteCSS
gulp.task('copySpriteCSS', ['createSprite'], function() {
  return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'));
});
// delete sprite from temp folder
gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function() {
  return del(['./app/temp/sprite']);
});

gulp.task('icons', ['beginClean', 'createSprite', 'createPngCopy', 'copySpriteGraphic', 'copySpriteCSS',
'endClean']);
