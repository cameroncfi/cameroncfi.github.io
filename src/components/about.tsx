import React from 'react';
import './about.css';
import mei from './MEI.jpg';
import { Link } from 'react-router-dom';

export const AboutMe = () => {
	return (
		<div className="aboutContainer">
			<div className="textContainer">
				Hello, I'm Cameron Griego, a CFI/CFII/MEI with a passion for
				aviation. As an experienced flight instructor, I enjoy sharing my
				knowledge and love for flying with aspiring pilots. I prioritize
				safety, discipline, and a comprehensive understanding of aviation
				principles in my teaching. I am open to{' '}
				<Link
					style={{ textDecoration: 'none', color: '#9ccfd8' }}
					to="/contact"
				>
					inquiries
				</Link>{' '}
				regarding flight instruction or any other aviation needs. Let's
				embark on your aviation journey together and explore the limitless
				possibilities of the sky!
			</div>
			<img className="meiPic" src={mei} alt="mei" />
		</div>
	);
};
