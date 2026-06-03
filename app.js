// Project data
var projectData = {
  'Ray-Ban Meta Display': {
    role: 'Staff Product Designer',
    year: '2023–Present',
    video: 'videos/display.mp4',
    sections: [
      { label: 'Background', text: 'Meta set out to build its first consumer display glasses — a new product category with no precedent. The device needed an OS-level UX that worked for a monocular transparent display controlled by EMG gestures, voice, and captouch.' },
      { label: 'Role', text: 'Led the system UX design from early concept through market launch — defining the interaction model, information architecture, display logic, home surface, navigation framework, and notification system across 6–10 domain teams.' },
      { label: 'Impact', text: 'Established the foundational design frameworks the entire program shipped on, including display wake/sleep behavior, gesture mapping, and feedback orchestration. Drove the strategic pivot from phone-model launcher to AI-first home experience.' }
    ]
  },
  'Ray-Ban Meta': {
    role: 'Staff Product Designer',
    year: '2023',
    video: 'videos/rayban.mp4',
    sections: [
      { label: 'Background', text: 'Ray-Ban Meta is Meta\'s most successful wearable — smart glasses without a display, built around camera, audio, and AI integration.' },
      { label: 'Role', text: 'Defined smart notifications, modes, and AI-integrated experiences for a displayless form factor — where everything is communicated through audio and haptics.' },
      { label: 'Impact', text: 'Designed the notification and feedback systems that shipped to millions of users, balancing information delivery with presence and social acceptability.' }
    ]
  },
  'Assistant': {
    role: 'Senior Product Designer',
    year: '2022–2023',
    video: 'videos/assistant.mp4',
    sections: [
      { label: 'Background', text: 'Meta was building a unified AI assistant experience that needed to work across fundamentally different hardware — Portal (display), Ray-Ban Meta (audio-only), and Quest (VR).' },
      { label: 'Role', text: 'Designed how the assistant adapts its interaction model to each device\'s strengths and constraints. Authored early concepts for AI on display glasses, including multimodal camera + voice + gesture interactions.' },
      { label: 'Impact', text: 'Established design patterns for voice-first AI interaction that scaled across three form factors, laying the conceptual foundation for Hypernova\'s AI-first direction.' }
    ]
  },
  'Enterprise AI': {
    role: 'Senior Product Designer',
    year: '2021–2022',
    sections: [
      { label: 'Background', text: 'Meta needed to streamline the accounting of its internal assets to fuel innovation and business growth.' },
      { label: 'Role', text: 'Developed and launched a unified product vision leveraging AI to automate asset tracking, aligning engineering, finance, and operations stakeholders.' },
      { label: 'Impact', text: 'Shipped an AI-powered platform that automated asset tracking across the organization.' }
    ]
  },
  'AI Commerce': {
    role: 'Product Designer',
    year: '2020–2021',
    sections: [
      { label: 'Background', text: 'Meta was applying computer vision and natural language understanding across its family of apps to reduce friction in shopping experiences.' },
      { label: 'Role', text: 'Designed AI-powered product discovery, immersive buying experiences, and recommendation systems across Instagram. Led cross-organization design workshops.' },
      { label: 'Impact', text: 'Reduced buyer friction through visual recognition and NLU, aligning multiple product teams on a shared commerce AI strategy.' }
    ]
  },
  'Stories in Emerging Markets': {
    role: 'Product Designer',
    year: '2017–2019',
    sections: [
      { label: 'Background', text: 'Stories needed to work for users in low-bandwidth, high-growth regions with different devices, connectivity, and mental models.' },
      { label: 'Role', text: 'Designed for critical user problems across Stories production and consumption — adapting creation and viewing experiences for emerging markets.' },
      { label: 'Impact', text: 'Adapted the Stories format for hundreds of millions of users in regions with fundamentally different constraints than the US market.' }
    ]
  }
};

function openModal(name) {
  var data = projectData[name];
  if (!data) return;

  var hero = document.getElementById('modal-hero');
  if (data.video) {
    hero.innerHTML = '<video autoplay loop muted playsinline><source src="' + data.video + '" type="video/mp4"></video>';
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
    div.innerHTML = '<div class="modal-section-label">' + s.label + '</div><p class="modal-section-text">' + s.text + '</p>';
    sections.appendChild(div);
  });

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
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
projects.forEach(function(p) { observer.observe(p); });
