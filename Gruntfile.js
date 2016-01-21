// Gruntfile.js
module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
        build: {
            files: {
                'dist/js/main.min.js': 
                [
                'bower_components/jquery/dist/jquery.js',
                'src/js/**/*.js',
                'src/js/*.js'
                ]
            }
        }
    },
    sass: {
      dist: {
        files: {
          'dist/css/screen.css': 'src/sass/screen.scss'
        }
      }
    },
    
    autoprefixer:{
       build:{
         options: { 
           outputStyle: 'compressed'
         },
         files:{
           'dist/css/screen.css': 'dist/css/screen.css'
         }
       }
     },

    cssmin: {
      build: {
        files: {
          'dist/css/screen.min.css': 'dist/css/screen.css'
        }
      }
    },
    
    watch: {
      css: {
        files: ['src/sass/**/*.scss'],
        tasks: ['sass','cssmin','autoprefixer']
      },
      js: {
        files: ['src/js/**/*.js'],
        tasks: ['uglify']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify','sass','cssmin','autoprefixer','watch']);

};
