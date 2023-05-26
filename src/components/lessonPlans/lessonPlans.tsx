import React, { useState } from 'react';
import DocViewer from '@cyntler/react-doc-viewer';
import './lessonPlans.css';

export const LessonPlans = () => {
	const [currentRating, setCurrentRating] = useState('');
	const lessonPlanChange = (event: any) => {
		setCurrentRating(event.target.value);
	};
	const [areaOfOperation, setAreaOfOperation] = useState(1);
	const areaOfOpChange = (event: any) => {
		setAreaOfOperation(event.target.value);
	};
	const url = [
		{
			uri: require('./FlightAndNav.pdf'),
		},
	];

	return (
		<div>
			<div>lessons plans</div>
			<form className="lessonPlanSelector">
				<label>
					Select a lesson to view
					<select value={currentRating} onChange={lessonPlanChange}>
						<option value="CFI">CFI - Initial Lesson Plans</option>
						<option value="CFII">CFII Addon Lesson Plans</option>
						<option value="MEI">MEI Addon Lesson Plans</option>
					</select>
					{currentRating === 'CFI' ? (
						<select value={areaOfOperation} onChange={areaOfOpChange}>
							<option value={1}>1 - FOI</option>
							<option value={2}>2 - Technical Subject Areas</option>
							<option value={3}>3 - Pre-flight Preperation</option>
							<option value={4}>4 - Pre-flight Procedures</option>
							<option value={5}>5 - Airport Operations</option>
							<option value={6}>
								6 - Takeoff, Landings & Go-Arounds
							</option>
							<option value={7}>7 - Fundamentals Of Flight</option>
							<option value={8}>8 - Performance Maneuvers</option>
							<option value={9}>9 - Ground Referance Maneuvers</option>
							<option value={10}>
								10 - Slow Flight, Stalls & Spins
							</option>
							<option value={11}>11 - Basic Instrument Flight</option>
							<option value={12}>12 - Emergency Operations</option>
							<option value={13}>13 - Post Flight Operations</option>
							<option value={14}>14 - Aircraft Systems</option>
						</select>
					) : (
						''
					)}
					{currentRating === 'CFII' ? (
						<select value={areaOfOperation} onChange={areaOfOpChange}>
							<option value={2}>2 - Technical Subject Areas</option>
							<option value={3}>3 - Pre-flight Preperation</option>
							<option value={5}>
								5 - ATC Clearances and Procedures
							</option>
							<option value={6}>
								6 - Flight by Referance to Instrument
							</option>
							<option value={7}>7 - Navigation Systems</option>
							<option value={8}>
								8 - Instrument Approach Procedures
							</option>
							<option value={9}>9 - Emergency Procedures</option>
							<option value={10}>10 - Postflight Procedures</option>
						</select>
					) : (
						''
					)}
					{currentRating === 'MEI' ? (
						<select value={areaOfOperation} onChange={areaOfOpChange}>
							<option value={2}>2 - Technical Subject Areas</option>
							<option value={5}>5 - Preflight Procedures</option>
							<option value={7}>
								7 - Takeoff, Landings & Go-Arounds
							</option>
							<option value={9}>9 - Performance Maneuvers</option>
							<option value={11}>
								11 - Slow Flight, Stalls & Spins
							</option>
							<option value={13}>13 - Emergency Operations</option>
							<option value={14}>14 - Multiengine Operations</option>
						</select>
					) : (
						''
					)}
				</label>
			</form>
			{/* <DocViewer
				documents={url}
				style={{ backgroundColor: '#191724' }}
				theme={{
					primary: '#26233a',
					secondary: '#26233a',
					tertiary: '#26233a',
					textPrimary: '#ffffff',
					textSecondary: '#5296d8',
					textTertiary: '#00000099',
					disableThemeScrollbar: false,
				}}
				config={{
					header: {
						disableHeader: true,
						disableFileName: true,
						retainURLParams: false,
					},
				}}
			/> */}
		</div>
	);
};
