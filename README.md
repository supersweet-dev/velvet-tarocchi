# velvet-tarocchi

A minimal, React-based tarot micro-app styled with modern CSS. Cards are drawn using a seeded birthday input, and revealed with a single-click spread.

## Install

```bash
npm i velvet-tarocchi
```

## Usage

```js
import * as Tarot from 'velvet-tarocchi';
function App() {
	return <Tarot.TarotBoard />;
}
```

## CSS Matching

This app uses a set of custom properties for consistent theming. These should be declared in your global stylesheet, or passed via `:root` in a wrapper component:

```css
:root {
	--tarot-background: var(--background, #ebebeb);
	--tarot-accent: var(--accent, #000);
	--tarot-primary: var(--primary, #ff6347);
	--tarot-secondary: var(--secondary, #ffa500);
	--tarot-text: var(--text, #333);
	--tarot-card-bg: var(--background, #ebebeb);
	--tablecloth: url('https://i.imgur.com/Ki1Lu8C.png');
}
```
