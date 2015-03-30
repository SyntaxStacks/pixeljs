var audio = require('./gameAudio');
var image = require('./gameImage');
var assets = {
    initialize: function (assetsObj) {
        audio.initialize(assetsObj.snd);
        image.initialize(assetsObj.img);

        assets.sounds = audio;
        assets.images = image.collection;
    }
};

module.exports = assets;
