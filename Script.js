const menuBtn = document.getElementById('menuBtn');
const drawer = document.getElementById('drawer');
const drawerOverlay = document.getElementById('drawerOverlay');

menuBtn.addEventListener('click', () => {
  drawer.classList.toggle('active');
  drawerOverlay.classList.toggle('active');
});

// Close drawer when overlay is clicked
drawerOverlay.addEventListener('click', () => {
  drawer.classList.remove('active');
  drawerOverlay.classList.remove('active');
});
