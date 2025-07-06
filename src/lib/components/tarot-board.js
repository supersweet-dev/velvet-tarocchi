import React, { useState } from 'react';
import { style } from './styles.js';
import { cards, cardback, tablecloth } from './cards';

const TarotBoard = () => {
	const [selectedDate, handleDateChange] = useState('');
	const [enabled, setEnabled] = useState(false);
	const [spread, updateSpread] = useState([
		{ flipped: false, card: cardback },
		{ flipped: false, card: cardback },
		{ flipped: false, card: cardback },
	]);

	const reset = () => {
		const seed = new Date(selectedDate).getTime();
		const deck = [...cards];
		const draw = [];
		while (draw.length < 3) {
			const rand = Math.random() + parseFloat('.' + seed);
			const index = Math.floor((rand - Math.floor(rand)) * deck.length);
			draw.push(deck[index]);
			deck.splice(index, 1);
		}
		updateSpread(draw.map((card) => ({ flipped: false, card })));
		setEnabled(true);
	};

	const flipCard = (index) => {
		if (!spread[index].flipped) {
			const newSpread = [...spread];
			newSpread[index].flipped = true;
			updateSpread(newSpread);
		}
	};

	return (
		<>
			<style>{style}</style>
			<div className="tarot-board">
				<div className="tarot-header">
					<h1 className="tarot-title">Velvet Tarocchi</h1>
					<p className="tarot-subtitle">
						enter your birthday. click draw. click each card to
						reveal.
					</p>
					<div className="tarot-controls">
						<input
							type="date"
							max={new Date().toISOString().split('T')[0]}
							value={selectedDate}
							onChange={(e) => handleDateChange(e.target.value)}
						/>
						<button
							className="tarot-neo-button"
							onClick={reset}
							disabled={!selectedDate}
						>
							DRAW
						</button>
					</div>
				</div>

				<section className="tarot-card-grid">
					{['Past', 'Present', 'Advice'].map((label, i) => (
						<div
							className={`tarot-card ${
								enabled ? '' : 'disabled'
							}`}
							onClick={() => flipCard(i)}
							key={label}
						>
							<div className="tarot-card-info">
								<h2>
									{spread[i].flipped
										? spread[i].card.name === 'Card'
											? `Reveal ${label}`
											: spread[i].card.name
										: `Reveal ${label}`}
								</h2>
							</div>
							<div className="tarot-card-img-wrapper">
								<img
									src={
										spread[i].flipped
											? spread[i].card.image
											: cardback.image
									}
									alt={label}
								/>
							</div>
							<div className="tarot-card-info">
								<p className="tarot-phantom-description">
									You might not even realize it, but you're
									very likely hooked on something that's
									holding you back. It could be a person or a
									bad habit but this card is a reminder to
									look after yourself. There is a terrible
									connection in your life that is keeping you
									from being your full self.
								</p>
								<p className="tarot-card-label">
									{spread[i].flipped
										? spread[i].card[label.toLowerCase()]
										: cardback[label.toLowerCase()]}
								</p>
							</div>
						</div>
					))}
				</section>
			</div>
		</>
	);
};

export default TarotBoard;
