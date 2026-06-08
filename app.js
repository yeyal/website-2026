// Project data
var projectData = {
  'Ray-Ban Meta Display': {
    role: 'Staff Product Designer',
    year: '2023–Present',
    video: 'videos/hn.mp4',
    sections: [
      { label: 'Background', text: 'Meta set out to build its first consumer display glasses, a new product category with no precedent. It meant defining the system UX from 0→1 for an entirely new form factor: a monocular transparent display controlled by EMG gestures, voice, and captouch.' },
      { label: 'Role', text: 'Led the system UX design from early concept through market launch, defining the interaction model, information architecture, display logic, home surface, and navigation framework. As the Core UX lead, I was the connective glue across 10 domain teams, keeping the experience cohesive, holding a high quality bar, and guiding designs to meet both user needs and the product vision.' },
      { label: 'Impact', text: 'Established the foundational design frameworks the entire program shipped on, including display wake/sleep behavior and feedback orchestration. Drove extensive explorations toward an AI-first device that helped shape the program\'s eventual pivot to an agentic OS.' }
    ]
  },
  'Assistant': {
    role: 'Senior Product Designer',
    year: '2021–2023',
    video: 'videos/shorter.mp4',
    sections: [
      { label: 'Background', text: 'Meta was building a unified AI assistant experience that needed to work across fundamentally different hardware: Portal (display), Ray-Ban Meta (audio-only), and Quest (VR).' },
      { label: 'Role', text: 'Defined voice, multimodal, and hands-free patterns that shipped across both display and displayless wearables. Led design for AI-powered features like smart notifications and photo search, in close partnership with product and engineering. Defined the embodiment and interaction logic for the assistant (later Meta AI) on display glasses: how it appears, how it\'s dismissed, and how it responds across inputs.' },
      { label: 'Impact', text: 'Established design patterns for voice-first interaction that scaled across three form factors, laying the conceptual foundation for Hypernova\'s AI-first direction.' }
    ]
  },
  'Enterprise Products': {
    role: 'Senior Product Designer',
    year: '2020–2021',
    image: 'images/enterprise.webp',
    sections: [
      { label: 'Background', text: 'Meta needed to streamline the accounting of its internal assets to fuel innovation and business growth.' },
      { label: 'Role', text: 'Developed and launched a unified product vision leveraging AI to automate asset tracking, aligning engineering, finance, and operations stakeholders.' },
      { label: 'Impact', text: 'Shipped the first iteration, cutting the error rate from 13% to under 1%, automating 65% of batches to save ~252 hours/month, and reducing processing time.' }
    ]
  },
  'AI Commerce': {
    role: 'Product Designer',
    year: '2019–2020',
    image: 'images/ai-commerce.webp',
    sections: [
      { label: 'Background', text: 'Meta was applying product recognition and natural-language understanding across its family of apps to reduce friction in shopping.' },
      { label: 'Role', text: 'Led cross-org design workshops across Instagram, WhatsApp, and Marketplace, applying CV and NLU to buyer and seller experiences.' },
      { label: 'Impact', text: 'Shipped AI-powered product tagging on Instagram, reversing a 33% decline into 30% growth. Sellers adopted the suggestions in ~15% of sessions, with reduced search friction.' }
    ]
  }
};

function openModal(name) {
  var data = projectData[name];
  if (!data) return;

  var hero = document.getElementById('modal-hero');
  if (data.video) {
    hero.innerHTML = '<video autoplay loop muted playsinline><source src="' + data.video + '" type="video/mp4"></video>';
  } else if (data.image) {
    hero.innerHTML = '<img src="' + data.image + '" alt="' + name + '">';
  } else {
    hero.innerHTML = '';
    hero.style.background = '#0a0a0a';
  }

  document.getElementById('modal-title').textContent = name;
  document.getElementById('modal-role').textContent = data.role;
  document.getElementById('modal-year').textContent = data.year;

  var sections = document.getElementById('modal-sections');
  sections.innerHTML = '';
  data.sections.forEach(function(s) {
    var div = document.createElement('div');
    div.className = 'modal-section';
    var body = s.bullets
      ? '<ul class="modal-bullets">' + s.bullets.map(function(b){ return '<li>' + b + '</li>'; }).join('') + '</ul>'
      : '<p class="modal-section-text">' + s.text + '</p>';
    div.innerHTML = '<div class="modal-section-label">' + s.label + '</div>' + body;
    sections.appendChild(div);
  });

  // Auto-append a contact CTA to every project modal
  var cta = document.createElement('div');
  cta.className = 'modal-section';
  cta.innerHTML = '<div class="modal-section-label">Case Study</div>' +
    '<p class="modal-section-text"><a href="mailto:eyalyfat@gmail.com">Contact me for the case study →</a></p>';
  sections.appendChild(cta);

  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});

// Make work items clickable
document.querySelectorAll('.work-item').forEach(function(el) {
  el.style.cursor = 'none';
  el.addEventListener('click', function() {
    var name = el.querySelector('.work-name').textContent;
    openModal(name);
  });
});

// Scroll reveal for projects
var projects = document.querySelectorAll('[data-reveal]');
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      // Lazy-load video only when the card is near/in view
      var v = entry.target.querySelector('video.lazy-video');
      if (v && !v.dataset.loaded) {
        var s = v.querySelector('source[data-src]');
        if (s) { s.src = s.dataset.src; v.load(); v.play().catch(function(){}); }
        v.dataset.loaded = '1';
      }
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px 200px 0px' });
projects.forEach(function(p) { observer.observe(p); });
