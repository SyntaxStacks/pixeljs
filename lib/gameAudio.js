var buzz = require('node-buzz');
var _ = require('lodash');

var tracks = {};
var playQueue = [];

var audio = {
    initialize: function (sndFiles, config) {
        var snds = _.map(_.keys(sndFiles), function (name) {
            return {
                src: name + '.' + sndFiles[name][0],
                id: name
            };
        });
        audio.soundDir = config.soundDir;
        if (_.last(audio.soundDir) != '/') {
            audio.soundDir += '/';
        }
        createjs.Sound.registerSounds(snds, audio.soundDir);
    },

    addTrack: function addTrack (trackName, formats) {
        var filePath = soundDir + trackName;
        tracks[trackName] = new createjs.Sound.registerSounds(sounds, soundDir)
    },

    add: function queueSound (track) {
        playQueue.push(tracks[track]);  
    },

    play: function play (trackName, opts) {
        createjs.Sound.play(trackName);
    },

    stop: function stop () {
        createjs.Sound.stop();
    }

};

module.exports = audio;
