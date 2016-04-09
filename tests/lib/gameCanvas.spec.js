var gameCanvas = require('../../lib/gameCanvas');
describe('gameCanvas', function () {
  var sandbox;

  beforeEach(function () {
    sandbox = sinon.sandbox.create();
  });

  afterEach(function () {
    sandbox.restore();
  });

  it('should initialize a canvas', function () {
    sandbox.stub(gameCanvas, 'newStage');
    sandbox.stub(document, 'getElementById').returns({ appendChild: sinon.stub() });
    gameCanvas.initialize({
      config: {
        frameWidth: 10,
        frameHeight: 10,
        id: '#id'
      }
    });

    expect(gameCanvas.element).to.exist;
    expect(document.getElementById).to.have.been.calledWith('#id');
    expect(gameCanvas.newStage).to.have.been.calledOnce;
  });

  it('should update the canvas', function () {
    gameCanvas.stage = { update: sinon.stub() }
    gameCanvas.update()
    expect(gameCanvas.stage.update).to.have.been.calledOnce;
  });

  it('should set the stage', function () {
    gameCanvas.element = 'element';
    window.createjs = { Stage: sinon.stub() };

    gameCanvas.newStage();
    expect(createjs.Stage).to.have.been.calledWith(gameCanvas.element);
  });

});
