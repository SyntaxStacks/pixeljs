sinon.stub(document, 'getElementById').returns(document.createElement('div'));
var assets = require('../../lib/gameAssets');
var canvas = require('../../lib/gameCanvas');

var engine = require('../../lib/engine');

document.getElementById.restore();
describe('engine', function () {
  var sandbox;

  beforeEach(function () {
    sandbox = sinon.sandbox.create();
    sandbox.stub(assets, 'initialize');
    sandbox.stub(canvas, 'initialize');
    window.createjs = {
      Tween: {
        removeAllTweens: sandbox.stub()
      },
      Ticker: {
        on: sandbox.stub(),
        addEventListener: sandbox.stub(),
        removeAllEventListeners: sandbox.stub()
      }
    };
  });

  afterEach(function () {
    sandbox.restore();
  });

  it('should run a scene');
  it('should initialize', function () {
    var opts = {};
    engine.initialize(opts);

    expect(assets.initialize).to.be.calledWith(opts);
    expect(canvas.initialize).to.be.calledWith(opts);
  });

  it('should add event listeners', function () {
    var e = function(){};
    engine.addEvent(e);
    expect(createjs.Ticker.addEventListener).to.be.calledWith('tick', e);
  });

  it('should clear event listeners', function () {
    engine.clearEvents();
    expect(createjs.Ticker.removeAllEventListeners).to.be.calledOnce;
  });

});
