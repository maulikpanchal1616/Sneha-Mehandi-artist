// ===== PAGE NAVIGATION =====
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-' + name);
  if (page) {
    page.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    updateActiveNav(name);
    triggerReveal();
  }
}

function updateActiveNav(name) {
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const el = document.getElementById('nav-' + name);
  if (el) el.classList.add('active');
}

// ===== SMOOTH SCROLL SECTIONS =====
function scrollToSection(selector) {
  const homePage = document.getElementById('page-home');
  if (!homePage.classList.contains('active')) {
    showPage('home');
    setTimeout(() => {
      const target = document.querySelector(selector);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }, 450);
  } else {
    const target = document.querySelector(selector);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  }
}

// ===== ACTIVE SECTION LINK OBSERVER =====
window.addEventListener('scroll', () => {
  const homePage = document.getElementById('page-home');
  if (!homePage || !homePage.classList.contains('active')) return;
  
  const sections = [
    { id: 'nav-philosophy', selector: '.collection-section' },
    { id: 'nav-artistry', selector: '.testimonial-section' },
    { id: 'nav-contact', selector: '#footer-home' }
  ];
  
  let currentActive = null;
  const scrollPos = window.scrollY + 250;
  
  sections.forEach(sec => {
    const el = document.querySelector(sec.selector);
    if (el) {
      const top = el.offsetTop;
      const height = el.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentActive = sec.id;
      }
    }
  });
  
  // Only override if scroll position is within homepage sections
  if (currentActive) {
    document.querySelectorAll('.nav-link').forEach(l => {
      if (l.id !== currentActive) l.classList.remove('active');
    });
    const el = document.getElementById(currentActive);
    if (el) el.classList.add('active');
  } else {
    // Clear active states if we are at the top of the homepage hero
    if (window.scrollY < 400) {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    }
  }
});

// ===== MOBILE NAV =====
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
hamburger.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});
function closeMobileNav() {
  mobileNav.classList.remove('open');
}

// ===== SCROLL HEADER =====
window.addEventListener('scroll', () => {
  const header = document.getElementById('site-header');
  header.classList.toggle('scrolled', window.scrollY > 10);
});

// ===== REVEAL ON SCROLL =====
function triggerReveal() {
  setTimeout(() => {
    const els = document.querySelectorAll('.page.active .reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    els.forEach(el => {
      el.classList.remove('visible');
      observer.observe(el);
    });
  }, 50);
}

// ===== GALLERY FILTER =====
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const filter = this.dataset.filter;
    document.querySelectorAll('.gallery-item').forEach(item => {
      if (filter === 'all' || item.dataset.cat === filter) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  });
});

// ===== BOOKING SUMMARY UPDATE =====
function updateSummary() {
  const dateInput = document.getElementById('event-date');
  const sumDate = document.getElementById('sum-date');
  if (dateInput && sumDate) {
    if (dateInput.value) {
      const d = new Date(dateInput.value);
      sumDate.textContent = d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    } else {
      sumDate.textContent = 'Not Selected';
    }
  }
}

let selectedAesthetic = 'Indo-Arabic';
function selectAesthetic(card) {
  document.querySelectorAll('.aesthetic-card').forEach(c => c.classList.remove('active'));
  card.classList.add('active');
  selectedAesthetic = card.dataset.val;
  const sumStyle = document.getElementById('sum-style');
  if (sumStyle) sumStyle.textContent = selectedAesthetic;
}

// ===== EMAILJS INIT =====
emailjs.init("GjDtAo_wWF8OT0Du2");

// ===== BOOKING FORM SUBMIT =====
function handleBooking(e) {
  e.preventDefault();

  const form = e.target;
  const submitBtn = document.getElementById('submit-btn');
  const originalBtnText = submitBtn.innerText;

  // Button loading state
  submitBtn.innerText = "SENDING INQUIRY...";
  submitBtn.style.opacity = "0.7";
  submitBtn.style.pointerEvents = "none";

  // Collect form values
  const templateParams = {
    name:         form.querySelector('[name="name"]').value,
    phone:        form.querySelector('[name="phone"]').value,
    email:        form.querySelector('[name="email"]').value,
    event_date:   form.querySelector('[name="event_date"]').value,
    event_type:   form.querySelector('[name="event_type"]').value,
    guest_count:  form.querySelector('[name="guest_count"]').value,
    location:     form.querySelector('[name="location"]').value,
    aesthetic:    selectedAesthetic,
    vision_notes: form.querySelector('[name="vision_notes"]').value
  };

  emailjs.send("service_ftktlc7", "template_rqtszid", templateParams)
    .then(() => {
      submitBtn.innerText = originalBtnText;
      submitBtn.style.opacity = "1";
      submitBtn.style.pointerEvents = "auto";
      form.reset();
      updateSummary();
      // Reset aesthetic to default after form reset
      document.querySelectorAll('.aesthetic-card').forEach(c => c.classList.remove('active'));
      document.querySelector('.aesthetic-card[data-val="Indo-Arabic"]').classList.add('active');
      selectedAesthetic = 'Indo-Arabic';
      showPage('confirmation');
    })
    .catch((error) => {
      submitBtn.innerText = originalBtnText;
      submitBtn.style.opacity = "1";
      submitBtn.style.pointerEvents = "auto";
      console.error('EmailJS error:', error);
      alert("Failed to send booking. Please check your internet connection and try again.");
    });
}

// ===== TESTIMONIAL SLIDER =====
let currentSlide = 0;
const textSlides = document.querySelectorAll('.testimonial-text-slide');
const imageSlides = document.querySelectorAll('.testimonial-img-wrap');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const currentNumSpan = document.querySelector('.current-slide-num');

if (textSlides.length > 0 && imageSlides.length > 0) {
  const totalSlides = textSlides.length;

  function updateSlider(index) {
    if (index < 0) {
      currentSlide = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentSlide = 0;
    } else {
      currentSlide = index;
    }

    textSlides.forEach((slide, i) => {
      if (i === currentSlide) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    imageSlides.forEach((slide, i) => {
      if (i === currentSlide) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    if (currentNumSpan) {
      currentNumSpan.textContent = String(currentSlide + 1).padStart(2, '0');
    }
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      updateSlider(currentSlide - 1);
    });

    nextBtn.addEventListener('click', () => {
      updateSlider(currentSlide + 1);
    });

    let autoPlayInterval = setInterval(() => {
      updateSlider(currentSlide + 1);
    }, 6000);

    const resetInterval = () => {
      clearInterval(autoPlayInterval);
      autoPlayInterval = setInterval(() => {
        updateSlider(currentSlide + 1);
      }, 6000);
    };

    prevBtn.addEventListener('click', resetInterval);
    nextBtn.addEventListener('click', resetInterval);
  }
}

// ===== INIT =====
showPage('home');
