var assert = require('assert')
var hp = require('../index')

var idPrefix = "toc_index_"

describe('hp', function() {
  it('has no heading elements', function() {
    var str = 'foo';
    var result = hp(str)

    assert.ok(result.toc)
    assert.ok(result.html)
    assert.equal(result.toc.length, 0)
    assert.equal(result.html, 'foo')
  });
});

describe('hp', function() {
  it('has one heading element', function() {
    var str = '<h1>Heading1</h1>';
    var result = hp(str)

    assert.ok(result.toc)
    assert.ok(result.html)
    assert.equal(result.toc.length, 1)
    assert.equal(result.toc[0].title, 'Heading1')
    assert.equal(result.html, '<h1 id="' + idPrefix + '0">Heading1</h1>')
  });
});

describe('hp', function() {
  it('has all heading elements', function() {
    var str = '<h1>Heading1</h1><h2>Heading2</h2><h3>Heading3</h3><h4>Heading4</h4><h5>Heading5</h5><h6>Heading6</h6>';
    var result = hp(str)
    var html = '<h1 id="' + idPrefix + '0">Heading1</h1><h2 id="' + idPrefix + '1">Heading2</h2><h3 id="' + idPrefix + '2">Heading3</h3><h4 id="' + idPrefix + '3">Heading4</h4><h5 id="' + idPrefix + '4">Heading5</h5><h6 id="' + idPrefix + '5">Heading6</h6>'

    assert.ok(result.toc)
    assert.ok(result.html)
    assert.equal(result.toc.length, 6)
    assert.equal(result.html, html)
  });
});

describe('hp', function() {
  it('has one heading element with id attribute', function() {
    var str = '<h1 id="h">Heading1</h1>';
    var result = hp(str)

    assert.ok(result.toc)
    assert.ok(result.html)
    assert.equal(result.toc.length, 1)
    assert.equal(result.toc[0].title, 'Heading1')
    assert.equal(result.html, '<h1 id="h">Heading1</h1>')
  });
});

describe('hp', function() {
  it('has one heading element with title attribute but no text content', function() {
    var str = '<h1 title="Heading1"></h1>';
    var result = hp(str)

    assert.ok(result.toc)
    assert.ok(result.html)
    assert.equal(result.toc.length, 1)
    assert.equal(result.toc[0].title, 'Heading1')
    assert.equal(result.html, '<h1 title="Heading1" id="' + idPrefix + '0"></h1>')
  });
});

