try {
  new Event('o_O');
} catch (o_O) {
  try {
    Event = CustomEvent.bind(null);
  } catch (o_O) {
    (function (document) {
      Event = function Event(type, init) {
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
    }(document));
  }
}
export default Event;
