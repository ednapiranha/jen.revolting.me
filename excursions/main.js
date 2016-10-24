(function () {
  var count = 0;
  function render() {

    setTimeout(function () {
      if (document.body.classList.contains('on')) {
        document.body.classList.remove('on');
      } else {
        document.body.classList.add('on');
      }
      requestAnimationFrame(render);
    }, 500);
  }

  render();
})()