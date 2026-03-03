function StarField(canvas) {
  const context = canvas.getContext("2d");

  const STAR_COLOR = "#fff";
  const STAR_SIZE = 3;
  const STAR_MIN_SCALE = 0.2;
  const OVERFLOW_THRESHOLD = 50;
  const STAR_COUNT = (window.innerWidth + window.innerHeight) / 8;

  const query = window.matchMedia("(prefers-reduced-motion: reduce)")

  let scale = 1, width, height;
  let stars = [];
  let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };

  let running = !query.matches

  function generate() {
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: 0,
        y: 0,
        z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE),
      });
    }
  }

  function placeStar(star) {
    star.x = Math.random() * width;
    star.y = Math.random() * height;
  }

  function recycleStar(star) {
    star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE);
    star.x = Math.random() * width;
    star.y = Math.random() * height;
  }

  function resize() {
    scale = window.devicePixelRatio || 1;
    width = canvas.clientWidth * scale;
    height = canvas.clientHeight * scale;

    canvas.width = width;
    canvas.height = height;

    stars.forEach(placeStar);
  }

  function update() {
    stars.forEach((star) => {
      star.x += (star.x - width / 2) * velocity.z * star.z;
      star.y += (star.y - height / 2) * velocity.z * star.z;
      star.z += velocity.z;

      if (
        star.x < -OVERFLOW_THRESHOLD ||
        star.x > width + OVERFLOW_THRESHOLD ||
        star.y < -OVERFLOW_THRESHOLD ||
        star.y > height + OVERFLOW_THRESHOLD
      ) {
        recycleStar(star);
      }
    });
  }

  function render() {
    context.clearRect(0, 0, width, height);

    stars.forEach((star) => {
      context.beginPath();
      context.globalAlpha = 0.6;
      context.fillStyle = STAR_COLOR;

      const STAR_SIZE = 1.25;
      const radius = STAR_SIZE * star.z * scale;

      context.arc(star.x, star.y, radius, 0, Math.PI * 2);
      context.fill();
    });
  }

  function step() {
    update();
    render();

    if (running) {
      requestAnimationFrame(step);
    }
  }

  generate();
  resize();
  step();

  window.addEventListener("resize", resize);

  return {
    destroy() {
      window.addEventListener("resize", resize);
      running = false;
    },
  }
}
