(function () {
  var drawing = false;
  var prevY = 0;
  var prevX = 0;
  var currX = 0;
  var currY = 0;
  var flag = false;
  var color = 'rgba(0, 255, 255, 0.1)';
  var brushWidth = 50;
  var clientX;
  var clientY;

  var mountain1 = document.querySelector('#mountain1');
  var mountain2 = document.querySelector('#mountain2');
  var count = 0;
  var hover = false;
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  ctx.width = window.innerWidth;
  ctx.height = window.innerHeight;

  function draw(cX, cY, pX, pY) {
    ctx.lineCap = 'butt';
    ctx.globalCompositeOperation = 'xor';
    ctx.beginPath();
    ctx.beginPath();
    ctx.moveTo(pX, pY);
    ctx.lineTo(cX, cY);
    ctx.strokeStyle = color;
    ctx.lineWidth = brushWidth;
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(pX + 5, pY + 5);
    ctx.lineTo(cX + 5, cY + 5);
    ctx.strokeStyle = color;
    ctx.lineWidth = brushWidth;
    ctx.stroke();
    ctx.shadowBlur = 87;
    ctx.shadowColor = 'rgba(255, 0, 255, 0.85)';
    ctx.stroke();
    ctx.shadowBlur = 97;
    ctx.shadowColor = 'rgba(255, 0, 255, 0.75)';
    ctx.stroke();
    ctx.shadowBlur = 10;
    ctx.shadowColor = 'rgba(255, 255, 255, 0.85)';
    ctx.stroke();
    ctx.shadowBlur = 127;
    ctx.shadowColor = 'rgba(255, 255, 255, 0.65)';
    ctx.stroke();
    ctx.shadowBlur = 47;
    ctx.stroke();
    ctx.lineWidth = 24;
    ctx.beginPath();
    ctx.moveTo(pX - 15, pY - 15);
    ctx.lineTo(cX - 15, cY - 15);
    ctx.strokeStyle = 'rgba(255, 0, 255, 0.15)';
    ctx.stroke();
    ctx.closePath();
  }

  function render() {
    count++;

    if (mountain2.classList.contains('on')) {
      mountain2.classList.remove('on');
    } else {
      mountain2.classList.add('on');
    }

    setTimeout(function () {
      if (mountain1.classList.contains('on')) {
        mountain1.classList.remove('on');
      } else {
        mountain1.classList.add('on');
      }
      requestAnimationFrame(render);
    }, 700 * count);
  }

  function setDraw() {
    function setMove(type, e) {
      if (e.touches) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      switch (type) {
        case 'over':
          prevX = currX;
          prevY = currY;
          currX = clientX;
          currY = clientY;
          flag = true;
          drawing = true;

          if (drawing) {
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.fillRect(currX + count, currY + count, 2, 2);
            ctx.closePath();
            ctx.fillStyle = color;
            drawing = false;
          }
          break;
        case 'out':
          flag = false;
          break;
        case 'move':
          if (flag) {
            prevX = currX;
            prevY = currY;
            currX = clientX;
            currY = clientY;
            draw(currX, currY, prevX, prevY);
          }
          break;
      }
    }

    canvas.addEventListener('mouseout', (e) => {
      setMove('out', e);
    }, false);

    canvas.addEventListener('mousemove', (e) => {
      setMove('move', e);
    }, false);

    canvas.addEventListener('mouseover', (e) => {
      setMove('over', e);
    }, false);

    canvas.addEventListener('touchend', (e) => {
      setMove('out', e);
    }, false);

    canvas.addEventListener('touchmove', (e) => {
      setMove('move', e);
    }, false);

    canvas.addEventListener('touchstart', (e) => {
      setMove('over', e);
    }, false);
  }

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  document.body.appendChild(canvas);

  setDraw();
  render();

  window.onresize = function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
})()