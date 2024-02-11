import React, { useEffect } from 'react';
import agbechaLogo from '../../assets/agbechalogo-removebg-preview.png';
import mainBanner from '../../assets/mainBanner.JPG';
import upcomingProject from '../../assets/upcomingProject.png';
import childrenSmiling from '../../assets/bennett-unsplash.jpg';
import heartImage from '../../assets/heart.png';
import Typewriter from 'typewriter-effect';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
	useEffect(() => {
		Aos.init({ duration: 1500 });
	}, []);

	return (
		<div>
			<nav className='navbar'>
				<img src={agbechaLogo} style={{ width: '100px', height: 'auto' }} alt='pix_1' />
				<div className='nav_items'>
					<a class='btn_donate custom_border' href=''>
						<img src={heartImage} alt='pix_1' /> Donate Now
					</a>
				</div>
			</nav>

			<section className='hero_section'>
				<div className='hero_section_container'>
					<div className='container_a'>
						<h3>AGBECHA INITIATIVE</h3>
						<h1 className='mission'>
							<Typewriter
								options={{
									autoStart: true,
									loop: true,
									// delay: 100,
									typeSpeed: 200,
									strings: [
										'By making quality health and social service accessible to the poor,',
										'we reach the unreach,',
										'towards creating equal living standards to all.',
										'Together we can build a better future.'
									]
								}}
							/>
						</h1>
					</div>

					<div className='container_b'>
						<img src={mainBanner} alt='pix_1' />
					</div>
				</div>
			</section>

			{/* upcoming section  */}
			<section className='upcoming_container'>
				<div className='upcoming_inner'>
					<img data-aos='fade-right' src={upcomingProject} alt='pix_1' />
					<div className='upcoming_description'>
						<h3>Upcoming Project</h3>
						<p>Donate For The Installation Of 200KVA Transformer at Haa Bako Settlement</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi deleniti illo perspiciatis
							esse suscipit voluptate eaque exercitationem, rem ipsam blanditiis!
						</p>
						<div className='btn_container'>
							<a className='btn_donate' href=''>
								Donate Now
							</a>
							<a className='btn_project' href=''>
								View Projects
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* objective section  */}
			<section className='objective_container'>
				<div className='objective_image'>
					<img data-aos='fade-right' src={childrenSmiling} alt='pix_1' />
				</div>
				<div className='objective_writeup'>
					<h3>WELCOME TO AGBECHA INITIATIVE</h3>
					<p>...Reaching The Unreached</p>
					<p>
						To provide quality and affordable health and social service delivery to the poor rural
						dwellers.(make quality health and social service accessible to the poor)
					</p>
					<p>
						To advocate for early intervention programs that prevents child marriage responsible for rampant
						mother and child health and life threats common among rural dwellers.
					</p>
					<p>
						Champion Collaborations with other policy colleague in creating awareness to the government and
						other concerned organizations on the scope, opportunities, challenges and issues in implementing
						prudent health and social care in rural environment.
					</p>
					<div className='years_helping'>
						3+ <br /> Years Reaching The Unreached
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
