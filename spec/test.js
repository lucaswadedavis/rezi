
if ( require !== undefined){
  var expect = require('chai').expect;
  var rezi = require('../index.js');
}

describe("rezi()", function() {

  it('exists', function() {
    expect(rezi).to.be.a('function');
  });

  it('returns null when invoked without arguments', function() {
    expect(rezi()).to.equal(null);
  });

  it('returns null when invoked with circular arguments', function() {
    var x = {};
    var y = {};
    y.next = x;
    x.next = y;
    expect(rezi(x)).to.equal(null);
  });

  it('returns a string when given a JSON object', function() {
    var sub1aStyle = {
      "color": "blue"
    };

    var sub1Style = {
      "font-size": "2em",
      "color": "red",
      ".sub1a": sub1aStyle
    };

    var bodyStyle = {
      "body": {
        "text-align": "center"
      },
      "div": {
        "border": "1px solid black",
        "margin": "10px"
      },
      ".sub1": sub1Style
    };

    expect(rezi.transpile(bodyStyle)).to.be.a('string');
  });


});
