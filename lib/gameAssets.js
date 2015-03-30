var audio = require('./gameAudio');
var image = require('./gameImage');
var assets = {
    initialize: function (assets) {
        audio.initialize(assets.snd);
        image.initialize(assets.img);

        assets.sounds = audio;
        assets.images = image.collection;
    }
};

module.exports = assets;
