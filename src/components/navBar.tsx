import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';
import github from './img/github.svg';
import burger from './img/burger.svg';

export const NavBar = () => {
	const [windowSize, setWindowSize] = useState([
		window.innerWidth,
		window.innerHeight,
	]);
	useEffect(() => {
		const handleWindowResize = () => {
			setWindowSize([window.innerWidth, window.innerHeight]);
		};
		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);
	return (
		<div className="navOrganizer">
			<ul className="socials">
				<li>
					<a
						draggable="false"
						href="https://github.com/Tacotakedown"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={github} alt="github" />
					</a>
				</li>
			</ul>
			<div style={{ fontSize: '30px', color: '#9ccfd8' }}>
				{windowSize[0] > 700
					? 'Cameron Griego | CFI CFII MEI'
					: 'Cameron Griego'}
			</div>

			{windowSize[0] > 1040 ? (
				<ul className="navList">
					<li>
						<Link draggable="false" className="navLink" to="/contact">
							Contact
						</Link>
					</li>

					<li>
						<Link draggable="false" className="navLink" to="/lessons">
							Lesson Plans
						</Link>
					</li>
					<li>
						<Link draggable="false" className="navLink" to="/">
							Home
						</Link>
					</li>
				</ul>
			) : (
				<img src={burger} alt="menu" />
			)}
		</div>
	);
};
