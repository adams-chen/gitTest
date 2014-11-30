module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({


    connect: {
      example: {
        port: 8000,
        base: '.'
      }
    },

   sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'styles',
          src: ['scss/*.scss'],
          dest: 'public',
          ext: '.css'
        }]
      }
    },



    watch: {
      options: {
        dateFormat: function(time) {
          grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
          grunt.log.writeln('Waiting for more changes...');
        },
      },
      scripts: {
        files: '**/*.js',
        tasks: 'jshint',
      },
    },    



    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/ngApp.js',
        dest: 'build/ngApp.min.js'
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.loadNpmTasks('grunt-connect');

  grunt.loadNpmTasks('grunt-contrib-sass');  
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).  
  grunt.registerTask('default', ['uglify']);

  // register sass task
  grunt.registerTask('default', ['sass']);



};
