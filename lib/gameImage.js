var _ = require('lodash');

image = {
    collection: {},
    initialize: function (files, config) {
        var fileNames = Object.keys(files);

        image.imageDir = config.imageDir;
        if (_.last(image.imageDir) != '/') {
            image.imageDir += '/';
        }
        _.map(fileNames, function (name) {
            var formats = files[name];
            image.add(name, formats);
        });

        return image.collection;
    },
    add: function addImage (imageName, formats) {
        var filePath = image.imageDir + imageName + '.' + formats[0];
        image.collection[imageName] = new Image();
        image.collection[imageName].src = filePath;
    }
};

module.exports = image;
