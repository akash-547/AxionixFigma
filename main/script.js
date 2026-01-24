const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const menuIcon = document.getElementById('menu-icon');

  // Toggle Function
  hamburgerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileDrawer.classList.toggle('hidden');
    menuIcon.classList.toggle('bx-menu');
    menuIcon.classList.toggle('bx-x');
  });

  // Link Click & Smooth Scroll
  document.querySelectorAll('.nav-link, .mobile-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      
      // Drawer close logic
      if (!mobileDrawer.classList.contains('hidden')) {
        mobileDrawer.classList.add('hidden');
        menuIcon.classList.add('bx-menu');
        menuIcon.classList.remove('bx-x');
      }

      if (targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const headerHeight = document.querySelector('header').offsetHeight;
          const offsetPosition = targetElement.offsetTop - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    });
  });

  // Close menu if clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileDrawer.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        mobileDrawer.classList.add('hidden');
        menuIcon.classList.add('bx-menu');
        menuIcon.classList.remove('bx-x');
    }
  });