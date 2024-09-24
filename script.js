
  // Smooth Scroll Functionality
  document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Mobile Menu Toggle
  const mobileMenu = document.querySelector('nav ul');
  const burgerMenu = document.createElement('div');
  burgerMenu.classList.add('burger-menu');
  burgerMenu.innerHTML = '&#9776;';
  document.querySelector('header').appendChild(burgerMenu);

  burgerMenu.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
  });

  // Back to Top Button
  const backToTopBtn = document.createElement('button');
  backToTopBtn.classList.add('back-to-top');
  backToTopBtn.innerText = '⬆';
  document.body.appendChild(backToTopBtn);

  window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
          backToTopBtn.style.display = 'block';
      } else {
          backToTopBtn.style.display = 'none';
      }
  });

  backToTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Form Validation
  const form = document.querySelector('.reservation-form form');
  form.addEventListener('submit', function(e) {
      const name = form.name.value;
      const email = form.email.value;
      const phone = form.phone.value;
      const date = form.date.value;
      const time = form.time.value;

      if (!name || !email || !phone || !date || !time) {
          alert('Please fill in all required fields');
          e.preventDefault();
      } else if (!validateEmail(email)) {
          alert('Please enter a valid email');
          e.preventDefault();
      }
  });

  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
  }

  // Gallery Image Modal
  const galleryImages = document.querySelectorAll('.image-item img');
  const modal = document.createElement('div');
  modal.classList.add('modal');
  document.body.appendChild(modal);

  galleryImages.forEach(image => {
      image.addEventListener('click', function() {
          modal.innerHTML = `<span class="close">&times;</span><img src="${this.src}" alt="${this.alt}">`;
          modal.style.display = 'block';
      });
  });

  modal.addEventListener('click', function(e) {
      if (e.target.classList.contains('close') || e.target.classList.contains('modal')) {
          modal.style.display = 'none';
      }
  });

