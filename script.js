const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileMenu = document.querySelector('.nav-mobile');

    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', String(!isExpanded));
      mobileMenu.classList.toggle('show');
    });

    // Close mobile nav on link click (for better UX)
    mobileMenu.querySelectorAll('a').forEach(link =>
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
        mobileToggle.setAttribute('aria-expanded', 'false');
      })
    );


  let currentSlide = 0;
    function showSlide(index) {
      const slides = document.querySelectorAll('.slide');
      if (index >= slides.length) {
        currentSlide = 0;
      } else if (index < 0) {
        currentSlide = slides.length - 1;
      } else {
        currentSlide = index;
      }
      const offset = -currentSlide * 100;
      document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
    }
    function changeSlide(direction) {
      showSlide(currentSlide + direction);
    }
    // Automatically change slides every 5 seconds
    setInterval(() => {
      changeSlide(1);
    }, 5000);


    // Simple contact form submission handler - typically would send to backend or email API
    function handleSubmit(event) {
      event.preventDefault();
      const form = event.target;
      const status = document.getElementById('form-status');
      
      // Basic validation already done by 'required' attribute
      // Simulate sending form data - replace with real endpoint or service
      status.textContent = 'Sending your message...';
      status.style.color = '#7c3aed';

      setTimeout(() => {
        status.textContent = 'Thank you for contacting us! We will get back to you soon.';
        status.style.color = '#15803d'; // success green
        form.reset();
      }, 1500);
    }