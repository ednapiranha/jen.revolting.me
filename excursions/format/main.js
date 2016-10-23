(function () {
  var width = 70;
  var height = 70;
  var title = document.querySelector('h1');

  function render() {
    document.body.style.backgroundSize = width + 'vh ' + height + 'vh';
    var now = Date.now();
    width = Math.sin(now) * width;
    height = Math.tan(now) * height;

    if (width < 10) {
      width = 70;
    }
    if (height < 10) {
      height = 70;
    }
    requestAnimationFrame(render);
  }

  setTimeout(function () {
    title.classList.add('on');
  }, 500);

  window.onmouseover = window.ontouchstart = function () {
    document.body.classList.add('pause');
  }

  window.onmouseout = window.ontouchend = function () {
    document.body.classList.remove('pause');
  }

  render();
})()