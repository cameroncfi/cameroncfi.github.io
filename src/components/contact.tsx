import { resolve } from 'path';
import React, { useEffect, useState } from 'react';
import './contact.css';
import phx from './phx.jpg';

export const Contact = () => {
	const [response, setResponse] = useState({
		success: '',
		message: '',
	});
	const [name, setName] = useState('');
	const handleNameChange = (event: any) => {
		setName(event.target.value);
	};
	const [email, setEmail] = useState('');
	const handleEmailChange = (event: any) => {
		setEmail(event.target.value);
	};
	const [message, setMessage] = useState('');
	const handleMessageChange = (event: any) => {
		setMessage(event.target.value);
	};

	let formComplete = false;
	if (name !== '' && email !== '' && message !== '') {
		formComplete = true;
	} else {
		formComplete = false;
	}
	const handleForm = (name: string, email: string, message: string) => {
		fetch('https://formsubmit.co/ajax/a0a2024bcd7d5cdcc04c90c52be634eb', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({
				name: name,
				email: email,
				message: message,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setResponse(data);
			})
			.catch((error) => console.log(error));
	};
	return (
		<div className="flexRow">
			<img
				src={phx}
				style={{
					width: '40%',
					borderRadius: '10px',
					boxShadow: '0 0 10px black',
				}}
				alt="phx"
			/>
			<div className="contactContainer">
				<form className="formManager">
					<label>
						Name:
						<input
							className="input"
							type="text"
							value={name}
							onChange={handleNameChange}
						/>
					</label>
					<label>
						Email:
						<input
							className="input"
							type="email"
							value={email}
							onChange={handleEmailChange}
						/>
					</label>

					<label>
						Message:
						<textarea
							className="textArea"
							placeholder="Enter your message here"
							value={message}
							onChange={handleMessageChange}
						/>
					</label>
					<button
						style={{ width: '100px', height: '60px' }}
						onClick={() => handleForm(name, email, message)}
						disabled={!formComplete}
					>
						Submit
					</button>
				</form>

				<div>{response.message}</div>
			</div>
		</div>
	);
};
