import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './UpcomingProjects.css';

import childrenReading from '../../assets/children_readinga.jpg';

const UpcomingProjects = () => {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	return (
		<div>
			<div className='upcoming__header'>
				<h1>Our Upcoming Project</h1>
				<p>Humans can make the best creation out of life when education is harnessed</p>
			</div>
			<div className='unpcoming__wrapper'>
				<div className='upcoming__container'>
					<div className='upcoming__inner'>
						<div className='upcoming__innera'>
							<h3>Project:</h3>
							<p>
								An all inclusive Grassroot academic performance intervention project to expose and
								harness more rural potentials.
							</p>
						</div>
						<div className='upcoming__innera'>
							<h3>Project Review:</h3>
							<p>
								That a student does not perform well in school as expected, to us means, the child is a
								dullard, not intelligent or we, sometimes, term it genetic. <br />
							</p>
						</div>
						<div className='upcoming__innera'>
							<h3>Aim Of Project:</h3>
							<p>
								To equip and harness more rural potentials by exposing hindrances against literacy and
								academic performance of the rural child.
							</p>
							<p>
								This project is research based, to enhance rural academic excellence targeting{' '}
								<strong>500,000 pupils/students</strong> and no rural school child of selected location
								will be left.
							</p>
						</div>
						<Link to='/contact' className='btn_project'>
							Contact us for more, on this project
						</Link>
					</div>
					<img src={childrenReading} alt='pix_upcoming' />
				</div>
			</div>

			<div className='upcoming__moreInfo'>
				<div className='upcoming__info__inner'>
					<p>
						Follow us on the platform for your support and to see the unfolding preparatory events on this
						project
					</p>
					<p>You can support this project to help a rural child share equal opportunity</p>
					<button className='btn_donate'>Make a donation</button>
				</div>
			</div>
		</div>
	);
};

export default UpcomingProjects;
