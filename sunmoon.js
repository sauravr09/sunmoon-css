/* 
   Handles theme toggling, persistence, and OS preference & Nav Bar mobile responsiveness
 */

const html = document.documentElement

/* --- On load: check localStorage, then fall back to OS preference --- */
const saved = localStorage.getItem('sunmoon-theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

if (saved) {
  html.dataset.theme = saved          // user has explicitly chosen before
} else if (prefersDark) {
  html.dataset.theme = 'dark'         // first visit, respect OS setting
}

/* --- Smooth transition between themes --- */
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.transition = 'background var(--ease-x-slow), color var(--ease-x-slow)'
})

/* --- Toggle and persist --- */
function updateThemeIcons() {
  const isDark = html.dataset.theme === 'dark';

  document.querySelectorAll('.nav-toggle').forEach(toggle => {
    toggle.textContent = isDark ? '☀️' : '🌙';
  });
}

document.querySelectorAll('.sun-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const isDark = html.dataset.theme === 'dark';

    html.dataset.theme = isDark ? 'light' : 'dark';

    localStorage.setItem('sunmoon-theme', html.dataset.theme);

    updateThemeIcons();
  });
});

updateThemeIcons();

// hamburger menu
const hamburger = document.querySelector('#hamburger')
const navLinks  = document.querySelector('.navbar-links')

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open')
  hamburger.setAttribute('aria-expanded', isOpen)
  hamburger.textContent = isOpen ? '▴' : '▾'  // arrow flips when open
})

// close menu when a link is clicked
document.querySelectorAll('.navbar-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open')
    hamburger.setAttribute('aria-expanded', false)
    hamburger.textContent = '▾'
  })
})

// toggle click should NOT close the menu
document.querySelector('.nav-toggle').addEventListener('click', e => {
  e.stopPropagation()  // prevents the outside-click handler from firing
})

// close menu when clicking outside
document.addEventListener('click', e => {
  if (!e.target.closest('.navbar')) {
    navLinks.classList.remove('is-open')
    hamburger.setAttribute('aria-expanded', false)
    hamburger.textContent = '▾'
  }
})

// Modal open / close
function openModal(id) {
  document.getElementById(id).classList.add("active");
}

function closeModal(id) {
  document.getElementById(id).classList.remove("active");
}

// Dropdown menu 

document.addEventListener("click", function (e) {
  const toggleBtn = e.target.closest(".dropdown-toggle");
  const dropdown = e.target.closest(".dropdown");

  // If clicking button → toggle its menu
  if (toggleBtn) {
    const parent = toggleBtn.closest(".dropdown");
    const menu = parent.querySelector(".dropdown-menu");

    // close other dropdowns first
    document.querySelectorAll(".dropdown-menu").forEach((m) => {
      if (m !== menu) m.classList.remove("active");
    });

    menu.classList.toggle("active");
    return;
  }

  // If clicking outside → close all
  if (!dropdown) {
    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
      menu.classList.remove("active");
    });
  }
});