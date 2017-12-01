import React from 'react';

import FontAwesome from 'react-fontawesome';

import '../styles/css/Header.css';


export default function Header() {
	return (
		<div className="Header">
			<h4>freeCodeCamp</h4>
			<h1>Camper Leaderboard</h1>
			<a href="https://github.com/ivanzk/camper-leaderboard"
				aria-label="github repo"
			>
				<FontAwesome name="github" size="2x" />
			</a>
		</div>
	);
}
