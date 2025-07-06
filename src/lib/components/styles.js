export const style = `:root {
	--tarot-background: #507096;
	--tarot-accent: #ffcd45;
	--tarot-primary: #60abbb;
	--tarot-secondary: #2f304c;
	--tarot-text: #ebebeb;
	--tarot-card-bg: var(--tarot-background);
	--tablecloth: url('https://i.imgur.com/Ki1Lu8C.png');
}

.tarot-board {
	padding: 1rem;
	background-image: var(--tablecloth);
	background-repeat: repeat;
	background-color: var(--tarot-background);
	color: var(--tarot-accent);
	background-size: 10%;
	background-position: center;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	border: 4px solid var(--tarot-secondary);
	box-shadow: 6px 6px 0 var(--tarot-secondary);
}

.tarot-board .disabled {
	opacity: 0.5;
	pointer-events: none;
}

.tarot-header {
	text-align: center;
	background-color: var(--tarot-card-bg);
	padding: 1rem;
	border: 4px solid var(--tarot-accent);
	box-shadow: 4px 4px 0 var(--tarot-secondary);
}

.tarot-title {
	margin: 0;
	font-size: 2rem;
	text-transform: uppercase;
}

.tarot-subtitle {
	font-size: 1.4rem;
	margin: 0.2rem 0;
}

.tarot-controls {
	display: flex;
	justify-content: center;
	gap: 1rem;
	flex-wrap: wrap;
	margin-top: 1rem;
}

.tarot-controls input[type='date'] {
	padding: 0.5rem;
	border: 2px solid var(--tarot-accent);
	font-size: 1.2rem;
	color: var(--tarot-accent);
	background: transparent;
}

.tarot-neo-button {
	background: var(--tarot-primary);
	color: var(--tarot-secondary) !important;
	border: none;
	font-weight: 600;
	padding: 0.5rem 1rem;
	cursor: pointer;
	box-shadow: 4px 4px 0 var(--tarot-secondary);
	text-transform: uppercase;
}

.tarot-neo-button:disabled {
	background: #aaa;
	cursor: not-allowed;
	box-shadow: none;
}

.tarot-card-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
	gap: 1rem;
}

.tarot-card {
	background: var(--tarot-card-bg);
	border: 4px solid var(--tarot-accent);
	box-shadow: 4px 4px 0 var(--tarot-secondary);
	cursor: pointer;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow: hidden;
	transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.tarot-card:hover {
	transform: translateY(-4px);
	box-shadow: 6px 6px 0 var(--tarot-secondary);
}

.tarot-card-info {
	padding: 1rem;
	position: relative;
}

.tarot-card-info h2 {
	margin: 0;
	font-size: 1.4rem;
}

.tarot-card-info p {
	margin-top: 0.5rem;
	font-size: 1rem;
}

.tarot-card-label {
	position: absolute;
	top: 1rem;
	left: 0.5rem;
	right: 0.5rem;
}

@media (max-width: 768px) {
	.tarot-card-grid {
		grid-template-columns: 1fr;
	}
}

.tarot-card-img-wrapper {
	position: relative;
	width: 60%;
	aspect-ratio: 3 / 4;
	background: var(--tarot-card-bg);
	overflow: hidden;
}

.tarot-card-img-wrapper img {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	object-fit: contain;
}

.tarot-phantom-description {
	opacity: 0;
	pointer-events: none;
	user-select: none;
}`;
