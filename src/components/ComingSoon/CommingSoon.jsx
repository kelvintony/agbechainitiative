import React from 'react';
import './CommingSoon.css';
import commingsoonIcon from '../../assets/comingsoon.png';

const CommingSoon = (props) => {
	return (
		<div className='commingsoon_container'>
			<h1>{props.title} Page Under Construction</h1>
			<img src={commingsoonIcon} alt='pix_1' />
		</div>
	);
};

export default CommingSoon;

// import CommingSoon from '../../components/ComingSoon/CommingSoon';
// CommingSoon title='Partnership' />
