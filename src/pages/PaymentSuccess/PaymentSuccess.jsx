import React, { useEffect } from 'react';
// import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import './PaymentSuccess.css';

const PaymentSuccess = () => {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);
	return (
		<div className='payment_suc_container'>
			<div className='pay_cont'>
				<h1>Thanks For Donating </h1>
			</div>
			<Confetti numberOfPieces={400} width={window.innerWidth} height={window.innerHeight} />
		</div>
	);
};

export default PaymentSuccess;
// ImHappy
