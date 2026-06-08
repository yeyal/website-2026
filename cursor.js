var dot = document.getElementById('cursor-dot');
var mouseX = 0, mouseY = 0;
var dotX = 0, dotY = 0;

document.addEventListener('mousemove', function(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function lerp(a, b, t) { return a + (b - a) * t; }

function tick() {
  dotX = lerp(dotX, mouseX, 0.15);
  dotY = lerp(dotY, mouseY, 0.15);

  var isOnProject = dot.classList.contains('on-project');
  var isOnNav = dot.dataset.navActive === 'true';

  if (isOnNav) {
    dot.style.left = dot.dataset.navLeft + 'px';
    dot.style.top = dot.dataset.navTop + 'px';
  } else if (isOnProject) {
    dot.style.left = (dotX - 60) + 'px';
    dot.style.top = (dotY - 60) + 'px';
  } else if (dot.classList.contains('on-name') || dot.classList.contains('on-cowboy')) {
    dot.style.left = (dotX - 22) + 'px';
    dot.style.top = (dotY - 22) + 'px';
  } else {
    dot.style.left = (dotX - 10) + 'px';
    dot.style.top = (dotY - 10) + 'px';
  }

  requestAnimationFrame(tick);
}

// Bind project hover
document.querySelectorAll('.work-item').forEach(function(el) {
  el.addEventListener('mouseenter', function() {
    dot.classList.add('on-project');
  });
  el.addEventListener('mouseleave', function() {
    dot.classList.remove('on-project');
  });
});

// Bind nav link hover — morph into rounded rect around the link
document.querySelectorAll('.nav-link').forEach(function(el) {
  el.addEventListener('mouseenter', function() {
    var rect = el.getBoundingClientRect();
    dot.classList.add('on-nav');
    dot.style.width = (rect.width + 24) + 'px';
    dot.style.height = (rect.height + 16) + 'px';
    dot.dataset.navLeft = rect.left - 12;
    dot.dataset.navTop = rect.top - 8;
    dot.dataset.navActive = 'true';
  });
  el.addEventListener('mouseleave', function() {
    dot.classList.remove('on-nav');
    dot.style.width = '';
    dot.style.height = '';
    dot.dataset.navActive = '';
  });
});

// Bind email hover — cursor becomes a waving hand
document.querySelectorAll('.footer-email').forEach(function(el) {
  el.addEventListener('mouseenter', function() {
    dot.classList.add('on-name');
  });
  el.addEventListener('mouseleave', function() {
    dot.classList.remove('on-name');
  });
});

// Bind location hover — cursor becomes a cowboy
document.querySelectorAll('.footer-location').forEach(function(el) {
  el.addEventListener('mouseenter', function() {
    dot.classList.add('on-cowboy');
  });
  el.addEventListener('mouseleave', function() {
    dot.classList.remove('on-cowboy');
  });
});

dotX = window.innerWidth / 2;
dotY = window.innerHeight / 2;
tick();
