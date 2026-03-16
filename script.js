// Send Message via mailto
  function sendMail() {
    const name    = document.getElementById('contactName').value.trim();
    const email   = document.getElementById('contactEmail').value.trim();
    const subject = document.getElementById('contactSubject').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !message) {
      alert('Please fill in at least your name and message.');
      return;
    }

    const to      = 'saravanakumar2001official@gmail.com';
    const sub     = encodeURIComponent(subject || 'Portfolio Inquiry');
    const body    = encodeURIComponent(
      `Hi Saravana,\n\nName: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${to}?subject=${sub}&body=${body}`;
  }

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 70);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.01, rootMargin: '0px 0px -20px 0px' });
  reveals.forEach(el => observer.observe(el));

  // Force all reveals visible immediately on load
  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  });

  // Also run right away in case DOMContentLoaded already fired
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));

  // Photo upload on click
  const heroPhoto = document.getElementById('heroPhoto');
  heroPhoto.style.cursor = 'pointer';
  heroPhoto.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file'; input.accept = 'image/*';
    input.onchange = e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => {
        const img = document.createElement('img');
        img.src = ev.target.result;
        heroPhoto.innerHTML = '';
        heroPhoto.appendChild(img);
      };
      reader.readAsDataURL(file);
    };
    input.click();
  });