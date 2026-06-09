/* 
   Handles theme toggling, persistence, and OS preference.
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
  document.body.style.transition = 'background var(--ease-slow), color var(--ease-slow)'
})

/* --- Toggle and persist --- */
document.querySelector('#toggle').addEventListener('click', () => {
  const isDark = html.dataset.theme === 'dark'

  html.dataset.theme = isDark ? 'light' : 'dark'
  localStorage.setItem('sunmoon-theme', html.dataset.theme)
})