import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CommingSoon from '../../components/ComingSoon/CommingSoon';
import './Partnership.css';
import trustOne from '../../assets/trust_5.jpg';
import trustfour from '../../assets/trust_4.jpg';
import partner11 from '../../assets/partner_11.JPG';
import morrisae from '../../assets/morrisae.JPG';
import partner12 from '../../assets/partner12.JPG';
import trust1 from '../../assets/trust_1.jpg';
import austinIcon2 from '../../assets/austin-removebg-preview.jpg';
import governor from '../../assets/governor.jpeg';

import { BiDownArrowAlt } from 'react-icons/bi';
import { BiUpArrowAlt } from 'react-icons/bi';

import Table from 'react-bootstrap/Table';

const Partnership = () => {
	const [ showText, setShowText ] = useState(false);
	const [ showText2, setShowText2 ] = useState(false);
	const [ showText3, setShowText3 ] = useState(false);
	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	const toggleText = () => {
		setShowText(!showText);
	};
	const toggleText2 = () => {
		setShowText2(!showText2);
	};
	const toggleText3 = () => {
		setShowText3(!showText3);
	};
	return (
		<div>
			<div className='partnership_current'>
				<div className='partner_curr_header'>
					<p />
					<h3>Together We Can</h3>
					<p>
						Join our wonderful passionate partners, changing the rural narrative. These wonderful people has
						been immensely supportive. Their contributions and passionate compassion makes the giant tasks
						we take appear easy
					</p>
				</div>

				<div className='partners_title'>
					<h3>Partners And Completed Projects</h3>
				</div>
				{/* <div className='partners_involved'>
					<div className='partners_inner'>
						<img src={trustOne} alt='pix_1' />
						<div className='partners_inn_a'>
							<h3>NRR Consulting</h3>
							<p>Lorem ipsum dolor sit amet.</p>
						</div>
					</div>
					<div className='partners_inner'>
						<img src={trustfour} alt='pix_1' />
						<div className='partners_inn_a'>
							<h3>C.E.O Netrone Softwares</h3>
							<p>Lorem ipsum dolor sit amet.ipsum dolor sit amet.</p>
						</div>
					</div>
					<div className='partners_inner'>
						<img src={partner11} alt='pix_1' />
						<div className='partners_inn_a'>
							<h3>HR. Logis Holdings</h3>
							<p>Lorem ipsum dolor sit amet.dolor sit amet.</p>
						</div>
					</div>
				</div> */}
				<div className='partners_table'>
					<Table striped bordered hover responsive='sm'>
						<thead>
							<tr>
								<th>#</th>
								<th>Project</th>
								<th>Major Contributor</th>
								<th>Contributor</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>Free and regular access to healthcare for widows</td>
								<td>Seraph Oil Nig. Ltd.</td>
								<td>Agbecha Initiative</td>
							</tr>
							<tr>
								<td>2</td>
								<td>2021- Free health care for all</td>
								<td>Seraph Oil Nig. Ltd.</td>
								<td>Agbecha Initiative</td>
							</tr>
							<tr>
								<td>3</td>
								<td>2022- Free health care for all</td>
								<td>Seraph Oil Nig. Ltd.</td>
								<td>Agbecha Initiative</td>
							</tr>
							<tr>
								<td>4</td>
								<td>5km Feeder Road Construction from Abwa to Mbaade </td>
								<td>Federal Ministry Of Agric. Nig.</td>
								<td>Agbecha Initiative</td>
							</tr>
							<tr>
								<td>5</td>
								<td>electrification of Mbaade , Mbaazage, Tyogbenda Community</td>
								<td>Benue State Govt.</td>
								<td>Agbecha Initiative</td>
							</tr>
							<tr>
								<td>6</td>
								<td>Construction Of Seraph Unity Hospital</td>
								<td>Seraph Oil Nig. Ltd.</td>
								<td>Agbecha Initiative</td>
							</tr>
							<tr>
								<td>7</td>
								<td>Drilling And Installation of six(6) Borehole for the community</td>
								<td>Agbecha Initiative</td>
								<td>Agbecha Initiative</td>
							</tr>
						</tbody>
					</Table>
				</div>

				<div className='partner_btn'>
					<Link to='/donate' className='btn_donate'>
						join by Donating to support a project
					</Link>
				</div>
			</div>
			{/* partners profile */}
			<div className='our_partners_heading'>
				<h3>Words From Our Partners</h3>
				<p>We give back while getting immeasurable benefits</p>
			</div>

			<div className='partners_profile'>
				<div className='partner_profile_wrapper_left'>
					<div className='profile_details'>
						<h3>His excellency Dr. Samuel Ortom</h3>
						<p>The executive governor of Benue state Nigeria.</p>
						<p>
							The governor in his delight as a partner, while expressing his overwhelming joy during his
							commissioning of one of our giant project in Mbaazage Tyogbenda rural settlement, commended
							Agbecha initiative and her founders on their developmental strength and passion to change
							the rural narrative with giant infrastructures specially in area's the government find
							difficult to reach.
						</p>
						<p>
							He pledged never to relent in his support to the initiative when ever he can having seen the
							overwhelming transformation the NGO brought with the little support they got.
						</p>
						<p>
							Agbecha initiative! on behalf of the people of Benue state, I say thank you, Your goodwill
							and compassion to the poor will never go unrewarded.
						</p>
					</div>
					<img src={governor} alt='pix_1' />
				</div>
			</div>

			{/* <div style={{ backgroundColor: '#F6F6F6' }} className='partners_profile'>
				<div className='partner_profile_wrapper_right'>
					<img src={partner12} alt='pix_1' />

					<div className='profile_details'>
						<h3>MARCIA WIEDER</h3>
						<p>Founder, Dream University & The Meaning Institute</p>
						<p>
							“Hands down the highlight of my professional career was watching participants at 4 events
							contribute to sponsoring a total of 10 villages in Nigeria with the Agbecha Foundation.{' '}
							<br />
							It was the single most profound thing I’ve ever done, it upleveled our event, and we doubled
							our sales every time!”
						</p>
					</div>
				</div>
			</div> */}

			{/* executive statement section  */}
			<div className='executive_wrapper'>
				<div className='our_executive_header'>
					<h3>From The Desk Of The Program Manager</h3>
				</div>
				<div className='our_executive_writeup'>
					<div className='executive_writeup_inner'>
						<img
							style={{
								width: '120px',
								height: '150px',
								objectFit: 'cover',
								backgroundPosition: 'center top',
								paddingBottom: '20px'
							}}
							src={austinIcon2}
							alt='pix_3'
						/>
						<h3>
							Dr. Onwukwe Austine Nzeako. <br />
							<span style={{ fontSize: '12px', fontWeight: '400' }}>
								<em>
									(Foundation program manager, immediate past Medical Director Seraph Unity Hospital.)
								</em>
							</span>
						</h3>
						<p>
							Failure of government in taking responsibility on her lack of presence and social inequality
							in most of her rural communities has greatly widened the inequality gaps among its citizens
							and hence, impoverished the masses of the country who bear the brunt of the ills of bad
							governance and leadership thus, making life unbearable among the less privilege. If the
							essence of government existence is defeated, we still believe a society where there is equal
							opportunity for everyone is still possible hence, "Agbecha Initiative for Healthcare and
							Rural Development". <span style={{ fontWeight: 'bold' }}>(AIHRD)</span>.
						</p>
						<p>
							Agbecha Initiative was found to change the narrative of rural development with giant
							projects.
						</p>
						<div style={{ display: showText2 ? 'block' : 'none' }}>
							<p>
								In AIHRD, we go beyond raising monumental infrastructures and basic social amenities in
								rural communities to setting up maintenance machineries to sustain them. We go beyond
								setting up health centers in rural communities to equipping them to run health
								challenging researches common within dwellers to ensure health and productivity is
								improved.
							</p>
							<p>
								All these we achieve with our contribution and support from partners. In AIHRD, your
								support and partnership is not enough, we encourage your Monitoring and evaluation of
								every contribution you make as a partner for result and accountability. I hereby use
								this medium to call on all men of Good will and lovers of humanity to join efforts with
								us to see that life is made a little easier for the less privilege in our rural
								communities.{' '}
							</p>
						</div>
						<button className='btn_readmore' onClick={toggleText2}>
							{' '}
							{showText2 ? 'Show less' : 'Read more'}
							{showText2 ? <BiUpArrowAlt size={20} /> : <BiDownArrowAlt size={20} />}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Partnership;
