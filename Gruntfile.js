'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    coffee: {
      main: {
        files: {
          'js/main.js': [
            'js/coffee/**/*.coffee',
            'js/coffee/main.coffee'
          ]
        }
      }
    },

    jshint: {
      gruntfile: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: 'Gruntfile.js'
      }
    },

    connect: {
      server: {
        options: {
          port: 9001,
          base: '.',
          hostname: '*'
        }
      }
    },

    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      js: {
        files: ['js/coffee/**/*.coffee'],
        tasks: ['coffee:main']
      }
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-connect');


  // Default task.
  // grunt.registerTask('build', ['jshint', 'coffee', 'concat', 'uglify']);
  grunt.registerTask('server', ['connect:server:keepalive']);

};



