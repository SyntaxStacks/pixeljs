require('script!../node_modules/CreateJS/builds/createjs-2015.11.26.min.js');
promise = require('bluebird');
canvas = require('./gameCanvas');
input = require('./gameInput');
assets = require('./gameAssets');

engine = {
    run: function run (scene) {
        return new promise(function (resolve, reject) {
            var updateFn = function (opts) {
                canvas.update();
                var status = opts.status;
                var nextScene = opts.nextScene;
                if(status == 'exit') {
                    engine.clearEvents();
                    // hacktastic addition of tween to ticker
                    // maybe I shouldnt kill all the listeners
                    createjs.Ticker.on("tick", createjs.Tween);
                    canvas.newStage();
                    createjs.Tween.removeAllTweens();
                    resolve(nextScene);
                    return;
                }
            };

            var updateEvent =  function () {
                scene.run().then(updateFn);
            };

            engine.addEvent(updateEvent);
        });
    },
    initialize: function (opts) {
        /*
         * Initalizes game engine
         * opts.config: config file for engine
         * opts.assets: assets file
         */
        assets.initialize(opts);
        canvas.initialize(opts);
    },
    addEvent: function (fn) {
        createjs.Ticker.addEventListener('tick', fn);
    },
    clearEvents: function (type) {
        createjs.Ticker.removeAllEventListeners();
    }
};

module.exports = engine;
