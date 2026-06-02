var projects = document.querySelectorAll('[data-reveal]');

var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
});

projects.forEach(function(project) {
  observer.observe(project);
});
