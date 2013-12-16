var assert = require('assert');
var label = require('../index');

describe('label', function () {
  describe('#generate', function () {
    it('should generate two words seperated by a single space', function () {
      var test = label.generate();
      var words = test.split(' ');
      assert.equal(words.length, 2);
      assert.ok(words[0].length > 1);
      assert.ok(words[1].length > 1);
    });
    it('should default to a capitalized sentence', function () {
      var test = label.generate();
      var words = test.split(' ');
      var char1 = words[0][0];
      var char2 = words[1][0];
      assert.equal(char1.toUpperCase(), char1);
      assert.equal(char2.toUpperCase(), char2);
    });
    it('should generate a sentence that is not capitalized', function () {
      var test = label.generate(true);
      var words = test.split(' ');
      var char1 = words[0][0];
      var char2 = words[1][0];
      assert.equal(char1.toLowerCase(), char1);
      assert.equal(char2.toLowerCase(), char2);
    });
    it('should be posible to change delimiter', function () {
      var test = label.generate(true, '_');
      // we also accept words like t-shirt
      assert(/^[a-z-]+_[a-z-]+$/.test(test));
    });
  });
});
