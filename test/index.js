var document = global.document || (global.document = {
  createEvent: function () {
    return {initEvent: function (type, init) {
      this.type = type;
      if (!init) init = {};
      this.bubbles = !!init.bubbles;
      this.cancelable = !!init.cancelable;
    }};
  }
});

var Event = require('../cjs');
test();

function test() {

  var a = new Event('a');
  console.assert(a.type === 'a');
  console.assert(!a.cancelable && !a.bubbles);

  var b = new Event('b', {bubbles: true, cancelable: true});
  console.assert(b.type === 'b');
  console.assert(b.cancelable && b.bubbles);
  return;
  var c = new Event('c', {bubbles: true});
  console.assert(c.type === 'c');
  console.assert(!c.cancelable && c.bubbles);

  var d = new Event('d', {cancelable: true});
  console.assert(d.type === 'd');
  console.assert(d.cancelable && !d.bubbles);

  var e = new Event('e', {bubbles: false, cancelable: false});
  console.assert(e.type === 'e');
  console.assert(!e.cancelable && !e.bubbles);
}
