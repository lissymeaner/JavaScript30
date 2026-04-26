  const canvas = document.querySelector('#draw');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.strokeStyle = '#BADA55';
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth = 10;
  // ctx.globalCompositeOperation = 'multiply';

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;
  let hue = 0;
  let direction = true;
  let isMisc = false;

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  isMisc = true;
  
  let colours = document.querySelectorAll('.colour');
  let colourSelection = [];

  colours.forEach(colour => {
    colourSelection.push(colour.id);
  });

  function draw(e) {
    if (!isDrawing) return; // if the user is not moused down, stop running the function

    console.log(e);
    ctx.beginPath();
    // start from
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

    // function miscColour() {
    //   ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    //   isMisc = true;
    //   return isMisc;
    // }
  
    // miscColour();

    // Colour manipulation
    if (isMisc){
      hue++;
      if (hue >= 360) {
        hue = 0;
      }
    }

    // Line width manipulation
    if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
      direction = !direction;
    }

    if (direction) {
      ctx.lineWidth++;
      console.log(ctx.lineWidth);
    } else {
      ctx.lineWidth--;
      console.log(ctx.lineWidth);
    }
  }
  
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
  });
  canvas.addEventListener('mouseup', () => isDrawing = false);
  canvas.addEventListener('mouseout', () => isDrawing = false);
  colours.forEach(colour => {
    colour.addEventListener('click', () =>
    {
      if (colour.id == "misc") {
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        isMisc = true;
      } else {
        ctx.strokeStyle = `${colour.id}`;
        isMisc = false;
      }
    });
  });