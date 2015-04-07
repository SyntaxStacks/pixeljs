var gameCanvas = {
    initialize: function initialize(opts) {
        var config = opts.config;
        gameCanvas.element = document.createElement('canvas');
        gameCanvas.element.width = config.frameWidth;
        gameCanvas.element.height = config.frameHeight;
        document.getElementById(config.id).appendChild(gameCanvas.element);
        gameCanvas.stage = new createjs.Stage(gameCanvas.element);
    },
    update: function draw(game) {
        gameCanvas.stage.update();
    }
};  

module.exports = gameCanvas;
