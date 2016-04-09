var gameImage = require('../../lib/gameImage');
describe('gameImage', function () {
  var sandbox;

  beforeEach(function () {
    window.createjs = {
      Sound: {
        play: sinon.stub(),
        stop: sinon.stub(),
        registerSounds: sinon.stub()
      }
    };
    sandbox = sinon.sandbox.create();
  });

  afterEach(function () {
    sandbox.restore();
  });

  it('should initialize audio', function () {

    var imageFiles = {};
    var config = {
      imageDir: 'dir'
    };

    gameImage.initialize(imageFiles, config);
    expect(gameImage.imageDir).to.equal('dir/');
  });

  it('should add images', function () {
    gameImage.add('image', ['png']);
    expect(gameImage.collection.image).to.be.defined;
  });

});
