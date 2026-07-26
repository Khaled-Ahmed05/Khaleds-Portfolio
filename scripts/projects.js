/* ============================================
   PROJECTS.JS — Project Modal & Carousel
   ============================================ */

(function () {
  'use strict';

  // ============================================
  // PROJECT DATA
  // ============================================

  var projects = {
    siyah: {
      title: 'Siyah — AI-Powered Tourism Platform',
      description:
        'An AI-powered tourism platform that gamifies the travel experience. Siyah combines artificial intelligence with interactive features to make exploring new destinations engaging and rewarding.',
      stack: ['C#', '.Net', 'AI Integration', 'ASP.NET'],
      features: [
        'AI monument recognition using image classification',
        'Smart navigation system for tourists',
        'Interactive challenges and gamification elements',
        'Global leaderboard to track traveler achievements',
        'Responsive and intuitive user interface',
      ],
      images: [
        { src: 'images/optimized/siyah_project5/01-full-page.webp', alt: 'Siyah - Full page overview', fallback: 'images/siyah_project5/01-full-page.png' },
        { src: 'images/optimized/siyah_project5/03-trip-planner.webp', alt: 'Siyah - Trip planner feature', fallback: 'images/siyah_project5/03-trip-planner.png' },
        { src: 'images/optimized/siyah_project5/04-explore-ai.webp', alt: 'Siyah - AI exploration feature', fallback: 'images/siyah_project5/04-explore-ai.png' },
        { src: 'images/optimized/siyah_project5/05-must-visit.webp', alt: 'Siyah - Must visit locations', fallback: 'images/siyah_project5/05-must-visit.png' },
        { src: 'images/optimized/siyah_project5/06-souvenir-simulator.webp', alt: 'Siyah - Souvenir simulator', fallback: 'images/siyah_project5/06-souvenir-simulator.png' },
        { src: 'images/optimized/siyah_project5/08-street-translator.webp', alt: 'Siyah - Street translator feature', fallback: 'images/siyah_project5/08-street-translator.png' },
      ],
      links: [{ label: 'View on GitHub', url: 'https://github.com/Khaled-Ahmed05', type: 'primary' }],
    },
    safeway: {
      title: 'SafeWay — Community Incident Reporting',
      description:
        'A community-driven incident reporting application that works both online and offline. SafeWay empowers users to report and acknowledge incidents in their community, with a reputation system that encourages responsible reporting.',
      stack: ['Node.js', 'Express', 'Flutter', 'Bluetooth', 'MongoDB'],
      features: [
        'Online and offline incident reporting capability',
        'Offline report transmission via Flutter Nearby Connections (Bluetooth)',
        'Community reputation system with rewards and penalties',
        'Report acknowledgment and verification workflow',
        'User-friendly interface for quick incident submission',
      ],
      images: [
        { src: 'images/optimized/safeway_project4/main.webp', alt: 'SafeWay - Main dashboard', fallback: 'images/safeway_project4/main.png' },
        { src: 'images/optimized/safeway_project4/signup.webp', alt: 'SafeWay - User signup', fallback: 'images/safeway_project4/signup.png' },
        { src: 'images/optimized/safeway_project4/create report.webp', alt: 'SafeWay - Create report form', fallback: 'images/safeway_project4/create report.png' },
        { src: 'images/optimized/safeway_project4/report.webp', alt: 'SafeWay - Report details', fallback: 'images/safeway_project4/report.png' },
        { src: 'images/optimized/safeway_project4/logo.webp', alt: 'SafeWay - Logo', fallback: 'images/safeway_project4/logo.jpg' },
      ],
      links: [{ label: 'View on GitHub', url: 'https://github.com/Khaled-Ahmed05', type: 'primary' }],
    },
    academix: {
      title: 'Academix — Course Management Platform',
      description:
        'A role-based web application designed for educational institutions. Academix provides a complete course management system with separate dashboards for students and instructors, featuring authentication, enrollment tracking, and course administration.',
      stack: ['PHP', 'Laravel', 'MySQL', 'Blade Templates'],
      features: [
        'Role-based authentication (Student / Instructor)',
        'Student dashboard for course browsing and enrollment',
        'Course enrollment and progress tracking',
        'Instructor features for course CRUD operations',
        'Enrollment management and student oversight',
      ],
      images: [
        { src: 'images/optimized/academix_project1/P1_Instructor.webp', alt: 'Academix - Instructor dashboard', fallback: 'images/academix_project1/P1_Instructor.png' },
        { src: 'images/optimized/academix_project1/P1_Student.webp', alt: 'Academix - Student dashboard', fallback: 'images/academix_project1/P1_Student.png' },
      ],
      links: [{ label: 'View on GitHub', url: 'https://github.com/Khaled-Ahmed05', type: 'primary' }],
    },
    travel: {
      title: 'Travel Agency — Booking Platform',
      description:
        'A comprehensive travel booking platform for worldwide event reservations. The application features intelligent hotel recommendation logic based on nearby locations and provides a full booking management dashboard.',
      stack: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf'],
      features: [
        'Worldwide event and travel booking system',
        'Hotel recommendation logic based on nearby locations',
        'Booking dashboard for managing reservations',
        'Event search and filtering capabilities',
        'User registration and booking history',
      ],
      images: [
        { src: 'images/optimized/travel_project3/P3_dashboard.webp', alt: 'Travel Agency - Dashboard', fallback: 'images/travel_project3/P3_dashboard.png' },
        { src: 'images/optimized/travel_project3/P3_Events.webp', alt: 'Travel Agency - Events listing', fallback: 'images/travel_project3/P3_Events.png' },
        { src: 'images/optimized/travel_project3/P3_Hotels.webp', alt: 'Travel Agency - Hotel recommendations', fallback: 'images/travel_project3/P3_Hotels.png' },
        { src: 'images/optimized/travel_project3/P3_booking.webp', alt: 'Travel Agency - Booking page', fallback: 'images/travel_project3/P3_booking.png' },
        { src: 'images/optimized/travel_project3/P3_Register.webp', alt: 'Travel Agency - Registration', fallback: 'images/travel_project3/P3_Register.png' },
      ],
      links: [{ label: 'View on GitHub', url: 'https://github.com/Khaled-Ahmed05', type: 'primary' }],
    },
    weather: {
      title: 'Weather Forecast — Location-Based Weather App',
      description:
        'A location-based weather forecast web application that converts user-entered locations into coordinates and retrieves real-time forecast data via external APIs. The app presents weather information through a clean, user-friendly interface.',
      stack: ['Node.js', 'Express', 'REST APIs', 'Geocoding'],
      features: [
        'Location-based weather forecast retrieval',
        'Geocoding of user-entered locations to coordinates',
        'Integration with external weather APIs',
        'Clean and intuitive forecast display',
        'Responsive design for all device sizes',
      ],
      images: [
        { src: 'images/optimized/weather_project2/P2_ForecastInfo.webp', alt: 'Weather Forecast - Forecast information', fallback: 'images/weather_project2/P2_ForecastInfo.png' },
        { src: 'images/optimized/weather_project2/P2_About.webp', alt: 'Weather Forecast - About page', fallback: 'images/weather_project2/P2_About.png' },
      ],
      links: [{ label: 'View on GitHub', url: 'https://github.com/Khaled-Ahmed05', type: 'primary' }],
    },
  };

  // ============================================
  // MODAL ELEMENTS
  // ============================================

  var modal = document.getElementById('project-modal');
  var modalImg = document.getElementById('modal-carousel-img');
  var modalTitle = document.getElementById('modal-title');
  var modalStack = document.getElementById('modal-stack');
  var modalDescription = document.getElementById('modal-description');
  var modalFeatures = document.getElementById('modal-features');
  var modalLinks = document.getElementById('modal-links');
  var carouselDots = document.getElementById('carousel-dots');
  var prevBtn = document.querySelector('.carousel-prev');
  var nextBtn = document.querySelector('.carousel-next');
  var closeBtn = document.querySelector('.project-modal-close');

  var currentProject = null;
  var currentImageIndex = 0;

  // ============================================
  // OPEN MODAL
  // ============================================

  function openModal(projectId) {
    currentProject = projects[projectId];
    if (!currentProject) return;

    currentImageIndex = 0;

    // Populate content
    modalTitle.textContent = currentProject.title;
    modalDescription.textContent = currentProject.description;

    // Stack tags
    modalStack.innerHTML = '';
    currentProject.stack.forEach(function (tech) {
      var span = document.createElement('span');
      span.textContent = tech;
      modalStack.appendChild(span);
    });

    // Features
    modalFeatures.innerHTML = '<h4>Key Features</h4><ul></ul>';
    var featuresList = modalFeatures.querySelector('ul');
    currentProject.features.forEach(function (feature) {
      var li = document.createElement('li');
      li.textContent = feature;
      featuresList.appendChild(li);
    });

    // Links
    modalLinks.innerHTML = '';
    currentProject.links.forEach(function (link) {
      var a = document.createElement('a');
      a.href = link.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.className = link.type === 'primary' ? 'modal-btn-primary' : 'modal-btn-secondary';
      a.innerHTML =
        link.label +
        ' <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>';
      modalLinks.appendChild(a);
    });

    // Build carousel
    buildCarousel();

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Focus trap
    closeBtn.focus();
  }

  // ============================================
  // CLOSE MODAL
  // ============================================

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    currentProject = null;
  }

  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
    if (e.key === 'ArrowLeft' && modal.classList.contains('active')) {
      prevImage();
    }
    if (e.key === 'ArrowRight' && modal.classList.contains('active')) {
      nextImage();
    }
  });

  // ============================================
  // CAROUSEL
  // ============================================

  function buildCarousel() {
    if (!currentProject || !currentProject.images.length) return;

    updateCarouselImage();
    buildDots();
  }

  function updateCarouselImage() {
    if (!currentProject) return;
    var img = currentProject.images[currentImageIndex];
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    // Fallback to PNG if WebP fails
    modalImg.onerror = function () {
      if (img.fallback) {
        this.src = img.fallback;
        this.onerror = null;
      }
    };

    // Update dots
    var dots = carouselDots.querySelectorAll('.carousel-dot');
    dots.forEach(function (dot, i) {
      dot.classList.toggle('active', i === currentImageIndex);
    });

    // Show/hide nav buttons
    var hasMultiple = currentProject.images.length > 1;
    prevBtn.style.display = hasMultiple ? 'flex' : 'none';
    nextBtn.style.display = hasMultiple ? 'flex' : 'none';
    carouselDots.style.display = hasMultiple ? 'flex' : 'none';
  }

  function buildDots() {
    carouselDots.innerHTML = '';
    if (!currentProject) return;

    currentProject.images.forEach(function (_, i) {
      var dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Go to image ' + (i + 1));
      dot.addEventListener('click', function () {
        currentImageIndex = i;
        updateCarouselImage();
      });
      carouselDots.appendChild(dot);
    });
  }

  function prevImage() {
    if (!currentProject) return;
    currentImageIndex =
      (currentImageIndex - 1 + currentProject.images.length) % currentProject.images.length;
    updateCarouselImage();
  }

  function nextImage() {
    if (!currentProject) return;
    currentImageIndex = (currentImageIndex + 1) % currentProject.images.length;
    updateCarouselImage();
  }

  prevBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    prevImage();
  });

  nextBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    nextImage();
  });

  // ============================================
  // PROJECT CARD CLICK HANDLERS
  // ============================================

  document.querySelectorAll('.project-card').forEach(function (card) {
    card.addEventListener('click', function () {
      var projectId = this.getAttribute('data-project');
      openModal(projectId);
    });
  });
})();
