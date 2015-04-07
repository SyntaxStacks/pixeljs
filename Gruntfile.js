module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        browserify: {
            options: {
                bundleOptions: {
                    standalone: 'pixeljs'
                }
            },
            engine: {
                src: ['./lib/engine.js'],
                dest: './lib/pixeljs.js'
            }
        },
        watch: {
            scripts: {
                files: [
                    './lib/*.js', 
                    './package.json'
                ],
                tasks: ['browserify'],
                options: { interupt: true },
            }
        }
    });
};
