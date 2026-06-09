# SunmoonCSS

A lightweight personal CSS design system with sun (light) and moon (dark) themes.

---

## Installation

Install directly from GitHub:

```bash
npm install github:sauravr09/sunmoon-css
```

---

## Setup

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