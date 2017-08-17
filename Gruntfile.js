module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'src/*.js',
				dest: 'build/*.min.js'
			}
		},
		karma: {
			unit: {
				options: {
					files: [
						//libs
						'src/html/js/libs/underscore-min.js',
						'src/html/js/libs/angular.min.js',
						'src/html/js/libs/angular-ui-router.min.js',
						'src/html/libs/angular-resource.min.js',
						// user files
						"src/html/app/app.js",
						"src/html/app/controllers-modules/navigation.controller.js",
						"src/html/app/controllers-modules/mainController.controler.js",
						"src/html/app/controllers-modules/mainList.controller.js",
						"src/html/app/controllers-modules/albumDetail.controller.js",
						"src/html/app/controllers-modules/albumAddEdit.controller.js",
						"src/html/app/controllers-modules/albumDelete.controller.js",
						"src/html/app/directives.js",
						//tests
						'src/tests/*.js',
					],
					frameworks: ['jasmine'],
					plugins: ['karma-jasmine', 'karma-phantomjs-launcher'],
					browsers: ['PhantomJS'],
					port: 9999,
					singleRun: true,
					logLevel: 'ERROR',
				},
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-karma');

	function start_server() {

		// Force task into async mode and grab a handle to the "done" function.
		var done = this.async();
		// Run some sync stuff.
		grunt.log.writeln('Processing task...');

		try {

			require('./src/server.js')();

		} catch (e) {
			console.error(e);
			done();
		}
	}

	grunt.registerTask('start_server', start_server);
	grunt.registerTask('test', ['karma']);
	grunt.registerTask('start', ['test', 'start_server']);

	// Default task(s).
	grunt.registerTask('default', ['uglify', 'start']);
};