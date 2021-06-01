import mod_indexjs from "../..";
if (!chai)
  var chai = mod_indexjs;

var expect = chai.expect;

chai.config.includeStack = true;

suite('error display', function () {

  test('show error line', function () {
    expect(4).to.equal(2);
  });

});
