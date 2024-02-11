import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Donate.css';
import { usePaystackPayment } from 'react-paystack';

const Donate = () => {
	const [ formData, setFormData ] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: '',
		amount: ''
	});
	const [ showText2, setShowText2 ] = useState(false);
	const toggleText2 = () => {
		setShowText2(!showText2);
	};
	const navigate = useNavigate();

	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	const clearInput = () => {
		setFormData({
			firstName: '',
			lastName: '',
			email: '',
			phoneNumber: '',
			amount: ''
		});
	};
	const config = {
		reference: new Date().getTime().toString(),
		email: formData.email,
		amount: formData.amount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
		publicKey: 'pk_test_a554b88b651a39b862cf1d07c1bb1a052d1e84a6'
	};

	// you can call this function anything
	const onSuccess = (reference) => {
		// Implementation for whatever you want to do with reference and after success call.
		// console.log(reference);
		clearInput();
		navigate('/donate/success');
	};

	// you can call this function anything
	const onClose = () => {
		// implementation for  whatever you want to do when the Paystack dialog closed.
		console.log('closed');
		window.location.reload();
	};

	const initializePayment = usePaystackPayment(config);

	const handleSubmit = () => {};
	return (
		<div>
			<div className='donate_title'>
				<h1>Together We Can Change Lives</h1>
				<p>
					Join Agbecha Foundation by donating today!, All donations go directly to making a difference for our
					cause.
				</p>
			</div>

			<div className='donate_form'>
				<h3>Donate With Card</h3>
				<p>Enter Billing Information</p>
				<label for='firstName'>
					First Name: <br />
					<input
						type='text'
						name='firstName'
						value={formData.firstName}
						onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
					/>
					<br />
				</label>
				<label for='lastName'>
					Last Name: <br />
					<input
						type='text'
						name='lastName'
						value={formData.lastName}
						onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
					/>
					<br />
				</label>
				<label for='email'>
					Email: <br />
					<input
						type='email'
						name='title'
						value={formData.email}
						onChange={(e) => setFormData({ ...formData, email: e.target.value })}
					/>
					<br />
				</label>
				<label for='phoneNumber'>
					Phone: <br />
					<input
						type='text'
						name='phoneNumber'
						value={formData.phoneNumber}
						onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
					/>
					<br />
				</label>
				<label className='donate_amount_label ' for='amount'>
					Amount: <br />
					<input
						type='number'
						name='title'
						value={formData.amount}
						onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
					/>
					<br />
					<br />
				</label>
				<button
					onClick={() => {
						initializePayment(onSuccess, onClose);
					}}
					className='btn_contact'
				>
					Donate
				</button>

				<div className='donate_divider_container'>
					<div className='donate_divider' />
					<div className='divider_writeUp'>or</div>
				</div>
				<h3>Donate Via Bank Transfer</h3>
				<button style={{ marginTop: '20px' }} onClick={toggleText2} className='btn_contact'>
					Donate
				</button>
				<div style={{ display: showText2 ? 'block' : 'none' }} className='donate_bank'>
					<div className='donate_bank_inner'>
						<h4>Beneficiary:</h4>
						<p>Agbecha Initiative for healthcare and rural development</p>
					</div>
					<div className='donate_bank_inner'>
						<h4>Acc. Number:</h4>
						<p>8142796019</p>
					</div>
					<div className='donate_bank_inner'>
						<h4>Bank:</h4>
						<p>FCMB</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Donate;
// Agbecha Initiative for healthcare and rural development
// 8142796019
// FCMB
