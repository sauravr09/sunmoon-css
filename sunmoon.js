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
const navLinks  = document.querySelector('.navbar__links')

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open')
  hamburger.setAttribute('aria-expanded', isOpen)
  hamburger.textContent = isOpen ? '▴' : '▾'  // arrow flips when open
})

// close menu when a link is clicked
document.querySelectorAll('.navbar__link').forEach(link => {
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