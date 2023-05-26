import React, { useEffect, useState } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/navBar';
import { AboutMe } from './components/about';
import { Home } from './components/home';
import { Contact } from './components/contact';
import { LessonPlans } from './components/lessonPlans/lessonPlans';

function App() {
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
		<BrowserRouter>
			<NavBar />
			<div className="appContainer">
				<Routes>
					<Route path="/" element={<AboutMe />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/lessons" element={<LessonPlans />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
