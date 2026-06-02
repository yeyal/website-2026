var dot = document.getElementById('cursor-dot');
var mouseX = 0, mouseY = 0;
var dotX = 0, dotY = 0;
var dotSize = 24;
var targetSize = 24;
var isHovering = false;
var magnetTarget = null;
var magnetRect = null;

document.addEventListener('mousemove', function(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function lerp(a, b, t) { return a + (b - a) * t; }

function tick() {
  var tx = mouseX;
  var ty = mouseY;

  if (magnetTarget && magnetRect) {
    var cx = magnetRect.left + magnetRect.width / 2;
    var cy = magnetRect.top + magnetRect.height / 2;
    var dx = mouseX - cx;
    var dy = mouseY - cy;
    var dist = Math.sqrt(dx * dx + dy * dy);
    var maxDist = 120;

    if (dist < maxDist) {
      var pull = 1 - dist / maxDist;
      pull = pull * pull;
      var offsetX = dx * pull * 0.3;
      var offsetY = dy * pull * 0.3;
      magnetTarget.style.transform = 'translate(' + offsetX + 'px, ' + offsetY + 'px)';
    } else {
      magnetTarget.style.transform = '';
    }
  }

  dotX = lerp(dotX, tx, 0.15);
  dotY = lerp(dotY, ty, 0.15);
  dotSize = lerp(dotSize, targetSize, 0.12);

  dot.style.left = dotX - dotSize / 2 + 'px';
  dot.style.top = dotY - dotSize / 2 + 'px';
  dot.style.width = dotSize + 'px';
  dot.style.height = dotSize + 'px';

  requestAnimationFrame(tick);
}

var isOnText = false;

function onEnterInteractive(e) {
  isHovering = true;
  targetSize = 64;
  dot.classList.add('hovering');
  dot.classList.remove('on-text');
  isOnText = false;

  if (e.currentTarget.classList.contains('magnetic')) {
    magnetTarget = e.currentTarget;
    magnetRect = magnetTarget.getBoundingClientRect();
  }
}

function onLeaveInteractive(e) {
  isHovering = false;
  targetSize = 24;
  dot.classList.remove('hovering');

  if (magnetTarget) {
    magnetTarget.style.transform = '';
    magnetTarget = null;
    magnetRect = null;
  }
}

function onEnterText(e) {
  if (isHovering) return;
  isOnText = true;
  dot.classList.remove('on-text', 'on-text-lg', 'on-text-xl');

  var tag = e.currentTarget.tagName;
  var cls = e.currentTarget.className;

  if (cls.indexOf('hero-statement') !== -1) {
    dot.classList.add('on-text-xl');
  } else if (tag === 'H1' || cls.indexOf('project-name') !== -1) {
    dot.classList.add('on-text-xl');
  } else if (tag === 'H2') {
    dot.classList.add('on-text-lg');
  } else {
    dot.classList.add('on-text');
  }
}

function onLeaveText() {
  isOnText = false;
  dot.classList.remove('on-text', 'on-text-lg', 'on-text-xl');
}

function bindInteractives() {
  var els = document.querySelectorAll('a, button, .project-name, .nav-link, .nav-photo, .footer-email');
  els.forEach(function(el) {
    el.addEventListener('mouseenter', onEnterInteractive);
    el.addEventListener('mouseleave', onLeaveInteractive);
  });

  var magnetics = document.querySelectorAll('.magnetic');
  magnetics.forEach(function(el) {
    el.addEventListener('mousemove', function() {
      if (magnetTarget === el) {
        magnetRect = el.getBoundingClientRect();
      }
    });
  });

  var textEls = document.querySelectorAll('h1, h2, p, span, .hero-statement, .project-desc, .hero-label, .hero-date, .footer-note');
  textEls.forEach(function(el) {
    if (el.closest('a') || el.closest('button')) return;
    el.addEventListener('mouseenter', onEnterText);
    el.addEventListener('mouseleave', onLeaveText);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  bindInteractives();
  dotX = window.innerWidth / 2;
  dotY = window.innerHeight / 2;
  tick();
});

document.addEventListener('mousedown', function() {
  dot.classList.add('clicking');
});
document.addEventListener('mouseup', function() {
  dot.classList.remove('clicking');
});
