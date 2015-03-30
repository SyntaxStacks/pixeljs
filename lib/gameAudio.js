var buzz = require('node-buzz');
var _ = require('lodash');

var tracks = {};
var playQueue = [];

var soundDir = './assets/snd/';

var audio = {
    initialize: function (sndFiles) {
        _.map(_.keys(sndFiles), function (name) {
            var formats = sndFiles[name];
            audio.addTrack(name, formats);
        });
    },

    addTrack: function addTrack (trackName, formats) {
        var filePath = soundDir + trackName;
        tracks[trackName] = new buzz.sound(filePath, {
            formats: formats,
            preload: true
        });
    },

    add: function queueSound (track) {
        playQueue.push(tracks[track]);  
    },

    play: function play () {
        new buzz.group(playQueue).play();
        playQueue = [];
    }
};

module.exports = audio;
