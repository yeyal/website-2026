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
      { label: 'Background', text: 'Finance and accounting teams managed Meta\'s financial activity across disparate tools and siloed documents. Manual prep consumed the time meant for analysis and storytelling, while growth kept compounding dependency and specialization across teams.' },
      { label: 'Role', text: 'I drove the vision and strategy for a centralized, AI-driven platform: a "Digital Controllership" that surfaces financial insights and reduces the time, effort, and complexity of accounting, freeing teams for analysis while maintaining standardization at scale. I won exec leadership buy-in on the vision and delivered an iterative roadmap to realize it over time.' },
      { label: 'Impact', text: 'Shipped the first iteration, cutting the error rate from 13% to under 1%, automating 65% of batches to save ~252 hours/month, and reducing processing time.' }
    ]
  },
  'AI Commerce': {
    role: 'Product Designer',
    year: '2019–2020',
    image: 'images/ai-commerce-modal.webp',
    sections: [
      { label: 'Background', text: 'Meta\'s AI Commerce team built the AI building blocks (computer vision, NLU) that product teams across the family of apps used to create shoppable experiences.' },
      { label: 'Role', text: 'As a product designer on the team, I partnered directly with Instagram, Marketplace, and WhatsApp to turn CV and NLU into product opportunities, led AI ideation workshops, and pitched and aligned teams on experiences to launch together, focused on making everything shoppable, making shopping personal, and improving the seller experience.' },
      { label: 'Impact', text: 'Shipped AI-powered product tagging on Instagram, reversing a 33% decline into 30% growth. Sellers adopted the suggestions in ~15% of sessions, with reduced search friction.' }
    ]
  },
  'Stories & Emerging Markets': {
    role: 'Product Designer',
    year: '2018–2019',
    platform: 'Android, iOS, Jio',
    image: 'images/stories-cover.webp',
    sections: [
      { label: 'Background', text: "Original sharing had been declining on Facebook for several years, with people feeling pressure to only share their best moments. Stories and its ephemerality reversed that trend, bringing sharing and app usage back into a growth pattern. My team focused on expanding Stories into emerging markets, which brought significant challenges of its own. I focused on identifying opportunities across both the production and consumption funnels, and building localized experiences specific to users in our key emerging markets." },
      { label: 'Creative Formats', text: "A critical touchpoint affecting the production and consumption flywheel was the motivation and inspiration to share. Exploring how we might encourage people in emerging markets to share more, we found common problems: not knowing what to share, feeling they didn't have anything of interest to share, and fear of exposure (concerns that their images could be abused, or fear of retribution). I led design on multiple projects addressing these, including audio stories, synthetic content, localized education, and prompts to share. In parallel, I partnered with the creative team on localized production formats based on visual trends that resonated with specific regions (frames, stickers, effects, layout templates, and more).", img: 'images/stories-formats.webp' },
      { label: 'Story Replies in Blue', text: "Another critical focus was retaining new and existing producers and preventing churn. Most users in our target markets used apps other than Messenger as their primary messaging tool, mainly WhatsApp. This created a major break in the production funnel: producers weren't receiving their feedback, and couldn't engage in conversations about it, because Messenger was siloed from the main app. Working with partner teams, I designed the Story Replies in Blue experience, bringing replies into the viewer sheet and letting people hold conversations on Stories directly. This eventually fed a larger initiative to reintegrate Messenger into the core app.", img: 'images/stories-journey.webp' },
      { label: 'Relevant Platforms', text: "Devices and data are expensive in these markets, so we invested in customized Stories experiences for the platforms that mattered, including Facebook Lite and feature phones. This investment became a major growth driver for Stories. I drove the strategy and feature prioritization, and owned the entire Stories experience (camera, production, and consumption) on these platforms, creating production formats adapted to each platform's constraints and building and maintaining the new UI component library for them.", img: 'images/stories-platforms.webp' }
    ]
  },
  'Wix': {
    role: 'Product Designer',
    year: '2015–2017',
    image: 'images/wix-modal.webp',
    sections: [
      { label: 'Background', text: "Wix is a platform that lets people create their own professional web presence with ease, through a WYSIWYG visual editor. As part of a strategic move to reach a wider audience and offer a new level of advanced functionality, Wix launched a new integrated development environment that lets users build robust websites by managing data, customizing component behavior, and creating web applications." },
      { label: 'Role', text: "As a 0→1 initiative, I owned the entire data connections domain (data binding, dynamic pages, and more), working in parallel and collaborating with multiple product teams from concept to launch. After a successful beta launch, the platform was eventually rebranded as Wix Velo." },
      { label: 'Demo', embed: 'https://www.youtube.com/embed/rzReCvkI4gg?start=30' }
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

  var platformCol = document.getElementById('modal-platform-col');
  if (data.platform) {
    document.getElementById('modal-platform').textContent = data.platform;
    platformCol.style.display = '';
  } else {
    platformCol.style.display = 'none';
  }

  var sections = document.getElementById('modal-sections');
  sections.innerHTML = '';
  data.sections.forEach(function(s) {
    var div = document.createElement('div');
    div.className = 'modal-section';
    var body = '';
    if (s.bullets) {
      body += '<ul class="modal-bullets">' + s.bullets.map(function(b){ return '<li>' + b + '</li>'; }).join('') + '</ul>';
    } else if (s.text) {
      body += '<p class="modal-section-text">' + s.text + '</p>';
    }
    if (s.img) {
      body += '<img class="modal-section-img" src="' + s.img + '" alt="' + s.label + '" loading="lazy">';
    }
    if (s.embed) {
      var vidMatch = s.embed.match(/embed\/([^?]+)/);
      var vid = vidMatch ? vidMatch[1] : '';
      var playSrc = s.embed + (s.embed.indexOf('?') > -1 ? '&' : '?') + 'autoplay=1';
      body += '<div class="modal-embed" data-src="' + playSrc + '">' +
        (vid ? '<img class="modal-embed-thumb" src="https://img.youtube.com/vi/' + vid + '/hqdefault.jpg" alt="' + s.label + '">' : '') +
        '<span class="modal-embed-play"></span></div>';
    }
    div.innerHTML = '<div class="modal-section-label">' + s.label + '</div>' + body;
    sections.appendChild(div);
  });

  // Auto-append a contact CTA to every project modal
  var cta = document.createElement('div');
  cta.className = 'modal-section';
  cta.innerHTML = '<div class="modal-section-label">Case Study</div>' +
    '<p class="modal-section-text"><a href="mailto:eyalyfat@gmail.com">Contact me for the full case study →</a></p>';
  sections.appendChild(cta);

  // Click a video thumbnail to load the player inline
  sections.querySelectorAll('.modal-embed').forEach(function (el) {
    el.addEventListener('click', function () {
      var src = el.getAttribute('data-src');
      if (!src) return;
      el.innerHTML = '<iframe src="' + src + '" title="Video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
    });
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
