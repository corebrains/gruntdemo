module.exports = function(grunt) {
	grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	gitcommit: {
		your_target: {
		  options: {
			message: "Testing",
			noVerify: true,
			noStatus: false
		  },
		  files: [
			{
			  src: ["Gruntfile.js"]
			}
		  ]
		}
	},
	
	gitadd: {
		task: {
		  options: {
			force: true
		  },
		  files: {
			src: ["Gruntfile.js"]
		  }
		}
	},
	
	gitpush: {
		push: {
		  options: {
			cwd: "dtbowercomponentsrepo",  
			remote : 'origin',
			branch : 'master'
		  }
		}
	}
	
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-git');
  
  grunt.registerTask('setup', ['gitadd','gitcommit','gitpush']);

};