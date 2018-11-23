/*! (c) Andrea Giammarchi - ISC */
var self = this || /* istanbul ignore next */ {};
try { self.Event = new Event('.').constructor; }
catch (Event) {
  try {
    self.Event = CustomEvent.bind(null);
  } catch (Event) {
    self.Event = function Event(type, init) {
      if (!init)
        init = {};
      var e = document.createEvent('Event');
      var bubbles = !!init.bubbles;
      var cancelable = !!init.cancelable;
      e.initEvent(type, bubbles, cancelable);
      e.bubbles = bubbles;
      e.cancelable = cancelable;
      return e;
    };
  }
}
export default self.Event;
