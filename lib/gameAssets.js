var audio = require('./gameAudio');
var image = require('./gameImage');
var assets = {
    initialize: function (opts) {
        audio.initialize(opts.assets.snd, opts.config);
        image.initialize(opts.assets.img, opts.config);

        assets.sounds = audio;
        assets.images = image.collection;
    }
};

module.exports = assets;
