let timer = null,
  list = [];
function doEmit(t) {
  postMessage(list[0]),
    list.shift(),
    (timer = list.length
      ? setTimeout(() => {
          doEmit(list[0].duration);
        }, 1e3 * t)
      : setTimeout(() => {
          postMessage('finish');
        }, 1e3 * t));
}
(self.onmessage = function (t) {
  if ('stop' == t.data) clearTimeout(timer);
  else if ('keepalive' == t.data) postMessage('ok');
  else {
    let e = new Date().getTime(),
      i = t.data.startTime,
      s = (e - i) / 1e3;
    list = t.data.intervalList;
    while (list.length) {
      let t = list[0],
        e = t.duration - s;
      if (!(e < 0)) {
        doEmit(e);
        break;
      }
      (e *= -1), (s = e), list.shift();
    }
  }
}),
  postMessage('worker loaded');
