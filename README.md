# SunmoonCSS

A personal CSS design system with sun (light) and moon (dark) themes. Check out the test page for visual references: https://sauravr09.github.io/sunmoon-css/

---

## Installation

Install directly from GitHub:

```bash
npm install github:sauravr09/sunmoon-css
```

---

## Setup - Plain HTML

Add to your HTML `<head>`:

```html
<link rel="stylesheet" href="node_modules/sunmoon-css/sunmoon.css">
```

Add the script before your closing `</body>` tag:

```html
<script src="node_modules/sunmoon-css/sunmoon.js"></script>
```

Add a toggle button somewhere in your HTML:

```html
<button id="toggle">Toggle Theme</button>
```

---

## Setup — React (Vite)

Install directly from GitHub:

```bash
npm install github:yourusername/sunmoon-css
```

Import the CSS in your `main.jsx`:

```javascript
import 'sunmoon-css/sunmoon.css'
```

Import the JS in your `main.jsx` as well:

```javascript
import 'sunmoon-css/sunmoon.js'
```

Add a toggle button anywhere in your JSX:

```jsx
<button id="toggle">Toggle Theme</button>
```

---

### Recommended: wrap the toggle in a React component

Rather than relying on the `id="toggle"` in sunmoon.js, in React it's cleaner to handle the toggle yourself:

```jsx
// ThemeToggle.jsx
export default function ThemeToggle() {
  const toggle = () => {
    const html = document.documentElement
    const isDark = html.dataset.theme === 'dark'
    html.dataset.theme = isDark ? '' : 'dark'
    localStorage.setItem('sunmoon-theme', isDark ? 'light' : 'dark')
  }

  return (
    <button className="btn btn-ghost" onClick={toggle}>
      Toggle Theme
    </button>
  )
}
```

Then use it anywhere:

```jsx
import ThemeToggle from './ThemeToggle'

export default function App() {
  return (
    <div>
      <ThemeToggle />
    </div>
  )
}
```

---

### Applying the saved theme on load

In React, add this to your `main.jsx` before the `ReactDOM.createRoot` call so the theme is applied before the page renders — this prevents a flash of the wrong theme:

```javascript
const saved = localStorage.getItem('sunmoon-theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

if (saved === 'dark' || (!saved && prefersDark)) {
  document.documentElement.dataset.theme = 'dark'
}
```

Your full `main.jsx` should look like this:

```javascript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'sunmoon-css/sunmoon.css'
import App from './App.jsx'

// apply theme before render to prevent flash
const saved = localStorage.getItem('sunmoon-theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

if (saved === 'dark' || (!saved && prefersDark)) {
  document.documentElement.dataset.theme = 'dark'
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
```

## Theming

Themes are controlled via the `data-theme` attribute on the `<html>` tag.

| Attribute | Theme |
|---|---|
| _(none or `data-theme="light"`)_ | Sun — warm light mode |
| `data-theme="dark"` | Moon — cool dark mode |

SunmoonCSS will automatically respect the user's OS preference on first visit, and persist their choice across page refreshes.

---

## Components

### Buttons
```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-ghost">Ghost</button>
```

### Cards
```html
<div class="card">Card content</div>
```

### Badges
```html
<span class="badge badge-success">Success</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-danger">Danger</span>
<span class="badge badge-info">Info</span>
```

### Inputs
```html
<input class="input" type="text" placeholder="Text">
<input class="input" type="email" placeholder="Email">
<input class="input" type="password" placeholder="Password">
<input class="input" type="search" placeholder="Search">
<input class="input" type="number" placeholder="0">
<textarea class="textarea" placeholder="Write something..."></textarea>
<select class="select">
  <option value="" disabled selected>Choose an option</option>
  <option value="one">Option one</option>
  <option value="two">Option two</option>
</select>
```

### Links
```html
<a href="#">Anchor link</a>
```

### Typography utilities
```html
<p class="text-muted">Muted text</p>
<p class="text-subtle">Subtle text</p>
<code>inline code</code>
```

---

### Theme toggle button 

You can choose between a fixed toggle button on the top right or a normal button. 

```html
      <button class="theme-toggle sun-toggle" >☀️ Sun / 🌙 Moon</button>
      <button class="theme-toggle-fixed sun-toggle" >☀️ Sun / 🌙 Moon</button>
```

### Simple Nav Bar + Mobile responsiveness

```html
<nav class="navbar">
  <div class="navbar-logo">SunmoonCSS</div>

  <ul class="navbar-links">
    <li><a href="#home" class="navbar-link">Home</a></li>
    <li><a href="#docs" class="navbar-link">Docs</a></li>
    <li><a href="#components" class="navbar-link">Components</a></li>
      <!-- mobile only toggle -->
    <li class="navbar-toggle-item navbar-toggle-item--mobile">
      <button class="navbar-toggle sun-toggle nav-toggle">🌙</button>
    </li>
  </ul>

  <div class="navbar-actions">
    <button class="navbar-toggle sun-toggle navbar-toggle--desktop nav-toggle">🌙</button>
    <button class="navbar-hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
      ▾
    </button>
  </div>
</nav>
```

### Tables | Container | Spinner | Avatar | Tooltip | Dropdown Menu | etc

All design implementations can be found in index.html of the repo. Check it out!

---

## Tokens

All design values are available as CSS custom properties. Key tokens:

| Token | Description |
|---|---|
| `--color-primary` | Primary brand color |
| `--color-bg` | Page background |
| `--color-surface` | Cards, panels |
| `--color-text` | Primary text |
| `--color-text-muted` | Secondary text |
| `--color-text-subtle` | Hints, placeholders |
| `--color-border` | Default border |
| `--color-success` | Success semantic color |
| `--color-warning` | Warning semantic color |
| `--color-danger` | Danger semantic color |
| `--color-info` | Info semantic color |

Full token reference in `src/tokens.css`.

---



## Updating

To pull the latest version into your project:

```bash
npm update sunmoon-css
```