(function () {
  var as = document.querySelectorAll('li a');
  var i = 0;
  var count = 0;
  var fall = 0;
  var liLength = as.length;

  function setLink(a, i) {
    setTimeout(function () {
      count++;
      if (a.classList.contains('on')) {
        a.classList.remove('on');
      } else {
        a.classList.add('on');
      }
    }, 100 * i);

    setTimeout(function () {
      var now = Date.now();
      var margin = 0;

      if (a.style.marginLeft) {
        margin = Math.abs(a.style.marginLeft.split('px')[0]) || 0;
      }
      a.style.marginLeft = Math.sin(now) + margin + 'px';

      if (margin > 10) {
        a.style.marginLeft = 0;
      }
    }, 1);
  }

  function anim() {
    setLink(as[i], i);
    requestAnimationFrame(anim);
    i++;
    if (i === liLength) {
      i = 0;
    }
  }

  anim();
})()