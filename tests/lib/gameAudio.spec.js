var gameAudio = require('../../lib/gameAudio');
describe('gameAudio', function () {
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

    var soundFiles = {};
    var config = {
      soundDir: 'dir'
    };

    gameAudio.initialize(soundFiles, config);
    expect(gameAudio.soundDir).to.equal('dir/');
    expect(createjs.Sound.registerSounds).to.be.calledOnce;
  });

  it('should add sounds to play queue', function () {
    // pushes into array in lexical scope
  });

  it('should play sounds', function () {
    gameAudio.play('track');
    expect(createjs.Sound.play).to.be.calledWith('track');
  });

  it('should stop sounds', function () {
    gameAudio.stop();
    expect(createjs.Sound.stop).to.be.calledOnce;
  });
});
