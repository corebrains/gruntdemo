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
			  //src: ["ui-bootstrap**.js"]
			  src: ["ui-bootstrap**.js","Gruntfile.js"]
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
			src: ["ui-bootstrap**.js"]
		  }
		}
	},
	
	gitpush: {
		push: {
		  options: {
			remote : 'origin',
			branch : 'master'
		  }
		}
	}
	
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-git');
  
  grunt.registerTask('setup', ['gitcommit','gitpush']);

};