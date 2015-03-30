var _ = require('lodash');

image = {
    collection: {},
    initialize: function (files) {
        var fileNames = Object.keys(files);

        _.map(fileNames, function (name) {
            var formats = files[name];
            image.add(name, formats);
        });

        return image.collection;
    },
    add: function addImage (imageName, formats) {
        var imageDir = './assets/img/';
        var filePath = imageDir + imageName + '.' + formats[0];
        image.collection[imageName] = new Image();
        image.collection[imageName].src = filePath;
    }
};

module.exports = image;
