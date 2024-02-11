import React, { useEffect } from 'react';
import './OngoingProjects.css';

import upcomingIcon from '../../assets/upcoming_file.png';
import transformerNew from '../../assets/transf_new.jpeg';
import healthCheck from '../../assets/health_check.jpg';

const OngoingProjects = () => {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	return (
		<section class='upcoming_container'>
			<div class='upcoming_header'>
				<h1>Our Ongoing Projects</h1>
				<p>Continued progress on project</p>
			</div>
			<div class='upcoming_background'>
				<div class='upcoming_inner'>
					<img src={transformerNew} alt='pix_7' />
					<div class='upcoming_description'>
						<p>The Installation Of 200KVA Transformer at Mbatyough community</p>
						<p>
							More transformers are being Procured and installed to extend the electrification project to
							mbatyough community.
						</p>
						<div class='btn_container'>
							<a class='btn_donate' href=''>
								Make a donation
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class='upcoming_background_b'>
				<div class='upcoming_inner'>
					<div class='upcoming_description'>
						<p>Free Health Check for Widows: A Gift of Compassion</p>
						<p>
							Commenced execution of the <strong>$60,000</strong> planned Registration of 2000 widows
							under GIFSHIP program of NHIA to ensure beneficiaries easy and regular access to health
							check
						</p>
						<div class='btn_container'>
							<a class='btn_donate' href=''>
								Make a donation
							</a>
						</div>
					</div>
					<img src={healthCheck} alt='pix_7' />
				</div>
			</div>
		</section>
	);
};

export default OngoingProjects;
