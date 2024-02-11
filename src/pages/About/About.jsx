import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import './About.css';
import healthIcon from '../../assets/health-48.png';
import teachingIcon from '../../assets/teaching-50.png';
import transformationIcon from '../../assets/transformation-64.png';
import researchIcon from '../../assets/research-64.png';
import trust1 from '../../assets/trust_1.jpg';
import trust2 from '../../assets/trust_2.jpg';
import trust3 from '../../assets/trust_3.jpg';
import trust5 from '../../assets/trust_5.jpg';
import hospital1 from '../../assets/hospital_1.jpg';
import transformer_1 from '../../assets/transformer_1.jpg';
import road_2 from '../../assets/road_2.jpg';
import pr1 from '../../assets/pr1.jpeg';
import pr2 from '../../assets/pr2.jpeg';
import pr3 from '../../assets/pr3.jpeg';
import pr4 from '../../assets/pr4.jpeg';
import pr5 from '../../assets/pr5.jpeg';
import pr6 from '../../assets/pr6.jpeg';
import pr7 from '../../assets/pr7.JPG';
import pr8 from '../../assets/pr8.JPG';
import pr9 from '../../assets/pr9.JPG';
import pr10 from '../../assets/pr10.JPG';
import pr11 from '../../assets/pr11.JPG';
import pr12 from '../../assets/pr12.JPG';
import austinIcon from '../../assets/austin.jpeg';
import austinIcon2 from '../../assets/austin-removebg-preview.jpg';
import chairman from '../../assets/chairman.jpeg';
import vice_chair from '../../assets/vice_chair.jpeg';
import vice_chairman_p from '../../assets/vice_chairman_p.jpeg';

import { BiDownArrowAlt } from 'react-icons/bi';
import { BiUpArrowAlt } from 'react-icons/bi';

const About = () => {
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
			{/* our story section */}
			<section class='our_story'>
				<div class='our_story_container'>
					<h1>Our Story</h1>
					<h3>...Reaching The Unreached</h3>
					<p>
						<span style={{ fontWeight: 'bold' }}>AIHRD</span> is a brainchild of Air Comdr. Titus Terhemba
						Agbecha (Rtd.) conceived many years ago based on his spirit of philanthropism. However,the
						organization was brought into fruition th on the{' '}
						<span style={{ fontWeight: 'bold', fontstyle: 'italic' }}>15th day of June 2021</span> by an Act
						of government through the Corporate Affairs Commission{' '}
						<span style={{ fontWeight: 'bold' }}>(CAC)</span> Abuja.
					</p>
					<p>
						Before the establishment of the organization, the founder had embarked on giant strides executed
						through Seraph Unity Hospital,Agbecha which was established by the organization.
					</p>
					<p>
						Such strides included free eye medical and surgical outreaches,free general medical and surgical
						outreaches,registration of over 500 widows and widowers on the National Health Insurance Scheme{' '}
						<span style={{ fontWeight: 'bold' }}>(NHIS)</span>, which under the Group Individuals and Family
						Social Health Insurance Program <span style={{ fontWeight: 'bold' }}>(GIFSHIP)</span> scheme.
					</p>
					<p>
						In education, the AIHRD has a number of vulnerable children on scholarship at both the
						primary,secondary and tertiary levels of education in every community of her presence. This is
						to raise a generation amongst the communities that will ensure the maintenance and sustenance of
						these progressive start.
					</p>
					<div style={{ display: showText ? 'block' : 'none' }}>
						<p>
							In her desire for rural development,construction of Abwa-Nyamatsor-Tyowanyeroad, a
							20kilometers feeder road with five pedestrian bridges is under construction with over four
							kilometers of the road fully completed (tarred) and is been put to use. The planned aim of
							this road is to link the village community to major access road leading to nearby suburb
							(Gboko, Ushongu and Katsina Ala).
						</p>
						<p>
							More so,rural electrification project is ongoing at an advanced stage with concrete poles
							laid,spraying of hightension (100mm) and low tension (70mm) cables and installation of three
							(3) transformers at Anongul junction , Haa Bako settlement and Nyamtsor settlement
							respectively. In her quest to provide portable drinking water,four boreholes has been dug as
							source of portable water to the rural dwellers in different locations of the community.
							Currently, there is a reconsideration to dig additional five more considering the distance
							some of the villagers go to get drinking water.
						</p>
						<p>
							<span style={{ fontWeight: 'bold' }}>AIHRD</span> has established a state-of-the-art
							hospital named
							<span style={{ fontWeight: 'bold' }}>SERAPH UNITYHOSPITAL</span>
							located in a remote village at Tse-Agbecha Mbaazager Council ward in Buruku Local Government
							Area of Benue state,Nigeria with the aim of providing affordable, quality healthcare
							services to the rural dwellers.
						</p>
						<p>
							The hospital equipped with state-of-the-art facilities,qualified personnel and it is sited
							in the calmest environment suitable for a hospital where there in none. The hospital was
							commissioned by the executive Governor of Benue State{' '}
							<span style={{ fontWeight: 'bold' }}>
								His Excellency rd Dr. Samuel Ortom on the 3 of January 2020
							</span>{' '}
							, thegovernor who was visibly astonished, praised the effort been made by the initiator to
							stand in the gap for the government in providing quality healthcare for citizens in and
							around the community.
						</p>
					</div>
					<button className='btn_readmore' onClick={toggleText}>
						{' '}
						{showText ? 'Show less' : 'Read more'}
						{showText ? <BiUpArrowAlt size={20} /> : <BiDownArrowAlt size={20} />}
					</button>
				</div>
			</section>
			{/* what we do section  */}
			<section className='we_do'>
				<div className='we_do_inner'>
					<h3>Helping Today</h3>
					<p>Our Core Values</p>
					<div className='we_do_inner_a'>
						<div className='div_a'>
							<div className='we_do_items'>
								<img src={healthIcon} alt='pix_6' />
								<h3>Health & Medicine</h3>
								<p>Treating the disease while setting programs to prevent them.</p>
							</div>
							<div className='we_do_items'>
								<img src={teachingIcon} alt='pix_6' />
								<h3>Education</h3>
								<p>Increasing literacy to raise agents of transformation.</p>
							</div>
							<div className='we_do_items'>
								<img src={transformationIcon} alt='pix_6' />
								<h3>Rural Tranformation</h3>
								<p>Beyond roads and bridges to social welfare and security.</p>
							</div>
							<div className='we_do_items'>
								<img src={researchIcon} alt='pix_6' />
								<h3>Rural Health Research And Intervention</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* our mission section  */}
			<section className='our_mission'>
				<div className='our_mission_container'>
					<div className='our_mission_inner'>
						<h3>Our Vision</h3>
						<p>
							To be a network for living standard equity through our strategic Health Care and rural
							development interventions
						</p>
					</div>
					<div className='our_mission_inner'>
						<h3>Our Mission</h3>
						<p>
							To reach abject rural commnunities with basic structural amenities, raise and maintain state
							of the art health centers, support research based health & educational intervention projects
							that will ensure improved living standard for rural dwellers
						</p>
					</div>
				</div>
			</section>

			{/* Our Partners slide show  */}
			<div className='our_partners_header'>
				<h3>Our Awesome Projects</h3>
				<p>Together we can achieve more</p>
			</div>
			<section className='our_partners'>
				{/* pauseOnHover={true} */}
				<Marquee speed={100} gradient={false}>
					<div class='our_partners_inner'>
						<img src={hospital1} alt='pix_1' />
					</div>
					<div class='our_partners_inner'>
						<img src={transformer_1} alt='pix_1' />
					</div>
					<div class='our_partners_inner'>
						<img src={road_2} alt='pix_1' />
					</div>
					<div class='our_partners_inner'>
						<img src={pr1} alt='pix_1' />
					</div>
					<div class='our_partners_inner'>
						<img src={pr2} alt='pix_1' />
					</div>
					<div class='our_partners_inner'>
						<img src={pr3} alt='pix_1' />
					</div>
					<div class='our_partners_inner'>
						<img src={pr4} alt='pix_1' />
					</div>
					<div class='our_partners_inner'>
						<img src={pr5} alt='pix_1' />
					</div>
					<div class='our_partners_inner'>
						<img src={pr6} alt='pix_1' />
					</div>
					<div class='our_partners_inner'>
						<img src={pr7} alt='pix_1' />
					</div>
					<div class='our_partners_inner'>
						<img src={pr8} alt='pix_1' />
					</div>
					<div class='our_partners_inner'>
						<img src={pr9} alt='pix_1' />
					</div>
					<div class='our_partners_inner'>
						<img src={pr10} alt='pix_1' />
					</div>
					<div class='our_partners_inner'>
						<img src={pr11} alt='pix_1' />
					</div>
					<div class='our_partners_inner'>
						<img src={pr12} alt='pix_1' />
					</div>
				</Marquee>
			</section>

			{/* our board of trustees */}
			<div className='our_partners_header'>
				<h3>Our Board Of Trustees</h3>
				<p>Meet Our Amazing People</p>
			</div>

			<section className='board_ofTrustees'>
				<div className='board_ofTrustees_inner'>
					<img src={chairman} alt='pix_1' />
					<h3>Retd. Air Commodore Titus T. Agbecha.</h3>
					<p>
						Foundation Chairman, <br /> C.E.O Seraph Nig. Lmtd.{' '}
					</p>
				</div>
				<div className='board_ofTrustees_inner'>
					<img src={austinIcon2} alt='pix_1' />
					<h3>Dr. Onwukwe Austin Nzeako</h3>
					<p>
						Foundation Program Manager, <br /> immediate past Medical Director <br /> Seraph Unity Hospital.{' '}
					</p>
				</div>
				<div className='board_ofTrustees_inner'>
					<img src={vice_chairman_p} alt='pix_1' />
					<h3>Zachary Agbecha</h3>
					<p>Foundation Vice Chairman</p>
				</div>
				<div className='board_ofTrustees_inner'>
					<img src={vice_chair} alt='pix_1' />
					<h3>Mrs Roseline Agbecha</h3>
					<p>
						Foundation Secretary, <br />Managing Director Seraph HMO{' '}
					</p>
				</div>
			</section>

			{/* executive statement section  */}
			<div className='executive_wrapper'>
				<div className='our_executive_header'>
					<h3>Executive Statement</h3>
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
							src={chairman}
							alt='pix_3'
						/>
						<h3>
							Retd. Air Commodore Titus T. Agbecha. <br />
							<span style={{ fontSize: '12px', fontWeight: '400' }}>
								<em>(Foundation Chairman, C.E.O - Seraph Nig. Lmtd.)</em>
							</span>
						</h3>
						<p>
							My promise to God to help the less fortunate especially the ones in the rural communities
							made me fond of reaching out to the poor and less privilege any time I can. But finding out
							touching life's in isolation was only putting smiles on faces of the ones I reached out to
							left me with the quest on how to sustain their smiles. Out of my passionate quest and
							curiosity stems the foundation{' '}
							<span style={{ fontWeight: 'bold' }}>
								“AGBECHA INITIATIVE FOR HEALTHCARE AND RURAL DEVELOPMENT''. (AIHRD)
							</span>
						</p>
						<p>
							<span style={{ fontWeight: 'bold' }}>AIHRD</span> is a foundation conceived and established
							by great divine to help humanity serve humanity, and to me, through my support and
							sponsorship of her projects, I am not only fulfilling my promise to God, I am equally
							experiencing the true taste of Joy and fulfilled living whenever I reach out.
						</p>
						<div style={{ display: showText2 ? 'block' : 'none' }}>
							<p>
								<span style={{ fontWeight: 'bold' }}>AIHRD</span> has created me that avenue where
								individual rural lives are touched and followed-up to ensure absolute upward
								transformation of lives. We embark on rural urbanization through provision of basic
								amenities in abject rural communities just to lift and sustain improved rural lives. I
								can actually say that the foundation brings government presence to where government has
								no existence and impact through her projects, hence reaching the unreached.
							</p>
							<p>
								That this today is a dream come through is something I owe God all praise. Therefore, it
								will be my pleasure to invite all to join efforts so as to make life a little easy for
								the common man, for no one will, if we don't, I believe.{' '}
							</p>
							<p>
								This call is challenging, but the challenge is worth embarking due to the joy it brings
								Join us in the train.
							</p>
						</div>
						<button className='btn_readmore' onClick={toggleText2}>
							{' '}
							{showText2 ? 'Show less' : 'Read more'}
							{showText2 ? <BiUpArrowAlt size={20} /> : <BiDownArrowAlt size={20} />}
						</button>
					</div>
					{/* <div className='executive_writeup_inner'>
						<h3>
							By - "Dr. Onwukwe Austin Nzeako <em>(Program Manager)</em>"
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
							projects.{' '}
						</p>
						<div style={{ display: showText3 ? 'block' : 'none' }}>
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
						<button className='btn_readmore' onClick={toggleText3}>
							{' '}
							{showText3 ? 'Show less' : 'Read more'}
							{showText3 ? <BiUpArrowAlt size={20} /> : <BiDownArrowAlt size={20} />}
						</button>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default About;
