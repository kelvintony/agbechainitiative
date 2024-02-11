import React, { useEffect } from 'react';
import './CompletedProjects.css';

// boostrap Carousel
import Carousel from 'react-bootstrap/Carousel';

//image slider component
import CustomImageSlider from '../../components/CustomImage/CustomImageSlider';
//
//
import pr8 from '../../assets/pr8.JPG';
import pr9 from '../../assets/pr9.JPG';
import pr10 from '../../assets/transformer_2.jpg';
import roadIconOne from '../../assets/road_1.jpg';
import roadIconTwo from '../../assets/road_2.jpg';
import roadIconThree from '../../assets/road_3.JPG';
import hospitalIconOne from '../../assets/hospital_1.jpg';
import hospitalIconTwo from '../../assets/hospital_2.jpg';
import hospitalIconThree from '../../assets/hospital_3.JPG';
import waterOne from '../../assets/water_1.jpeg';
import waterTwo from '../../assets/water_2.jpeg';
import waterThree from '../../assets/water_3.jpeg';
//
//images for the slider
import { a, b, c, e, f, g, h, i, j, k } from '../../assets/sliderImages';

const CompletedProjects = () => {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);

	return (
		<div>
			{/* ongoing  */}
			<section class='accomplishments_list'>
				<h3>
					Completed Projects <br />{' '}
				</h3>
				<p className='acc_h_inner'>
					There was nine(9) great achievements in the year 2021 & 2022, all thanks to God whom through us and
					our wonderful partners enabled us to accomplish all this.
				</p>
				{/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p> */}
			</section>

			<section className='accomplishment_wrapper2'>
				<div class='accomplishments'>
					<div class='accom_inner_a'>
						<p>Mbaade, Mbaazage, Tyogbenda community Electrification </p>
						<p>Installation and electrification of Mbaade , Mbaazage, Tyogbenda rural settlement.</p>
					</div>
					<div class='accom_courousal'>
						<Carousel>
							<Carousel.Item interval={1500}>
								<img className='d-block w-100' src={pr8} alt='First slide' />
								<Carousel.Caption>
									{/* <div style={{ background: 'black', padding: '2px', opacity: '0.7' }}>
										<h3>First slide label</h3>
										<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
									</div> */}
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item interval={1500}>
								<img className='d-block w-100' src={pr9} alt='Second slide' />
								<Carousel.Caption>
									{/* <h3>Second slide label</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item interval={1500}>
								<img className='d-block w-100' src={pr10} alt='Third slide' />
								<Carousel.Caption>
									{/* <h3>Third slide label</h3>
									<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</div>
				</div>
			</section>

			<section class='accomplishments' style={{ marginTop: '100px' }}>
				<div class='accom_courousal'>
					<Carousel>
						<Carousel.Item interval={1500}>
							<img className='d-block w-100' src={hospitalIconOne} alt='First slide' />
							<Carousel.Caption>
								{/* <div className='carousel_writeup'>
									<h3>First slide label</h3>
									<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
								</div> */}
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item interval={1500}>
							<img className='d-block w-100' src={hospitalIconTwo} alt='Second slide' />
							<Carousel.Caption>
								{/* <h3>Second slide label</h3> */}
								{/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item interval={1500}>
							<img className='d-block w-100' src={hospitalIconThree} alt='Third slide' />
							<Carousel.Caption>
								{/* <h3>Third slide label</h3> */}
								{/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</div>
				<div class='accom_inner_a'>
					<p>Seraph Unity Hospital constructed in Anongu- Nyamatsor.</p>
					<p>
						A reference hospital equipped with state of the art medical facility with nine(9) departments
						including specialty clinics to feed the rural communities around it
					</p>
				</div>
			</section>

			<section className='accomplishment_wrapper2'>
				<div class='accomplishments' style={{ marginTop: '100px' }}>
					<div class='accom_inner_a'>
						<p>Rural road construction</p>
						<p>
							5km out of 20km feeder road to connect Abwa settlement to the rural settlement of Mbatseva
							through mbaade and Mbaazage.
						</p>
					</div>
					<div class='accom_courousal'>
						<Carousel>
							<Carousel.Item interval={1500}>
								<img className='d-block w-100' src={roadIconOne} alt='First slide' />
								<Carousel.Caption>
									<div className='carousel_writeup'>
										<p>Road Before Construction</p>
									</div>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item interval={1500}>
								<img className='d-block w-100' src={roadIconTwo} alt='Second slide' />
								<Carousel.Caption>
									<div className='carousel_writeup'>
										<p>Road After Construction</p>
									</div>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item interval={1500}>
								<img className='d-block w-100' src={roadIconThree} alt='Third slide' />
								<Carousel.Caption>
									<div className='carousel_writeup'>
										<p>Road After Construction</p>
									</div>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</div>
				</div>
			</section>

			<section style={{ backgroundColor: '#ffffff' }} className='accomplishment_wrapper2'>
				<div class='accomplishments' style={{ marginTop: '100px' }}>
					<div class='accom_inner_a'>
						<p>New Source Of Water For Mbaade Community </p>
						<p>
							Six New source of portable water mounted and installed in different strategic position of
							the Rural community .
						</p>
					</div>
					<div class='accom_courousal'>
						<Carousel>
							<Carousel.Item interval={1500}>
								<img className='d-block w-100' src={waterThree} alt='First slide' />
								<Carousel.Caption>
									<div className='carousel_writeup'>
										<p>Before Mbaade source of water.</p>
									</div>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item interval={1500}>
								<img className='d-block w-100' src={waterTwo} alt='Second slide' />
								<Carousel.Caption>
									<div className='carousel_writeup'>
										<p>after Mbaade source of water.</p>
									</div>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item interval={1500}>
								<img className='d-block w-100' src={waterOne} alt='Third slide' />
								<Carousel.Caption>
									<div className='carousel_writeup'>
										<p>after Mbaade source of water.</p>
									</div>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</div>
				</div>
			</section>

			<section className='project_gallery'>
				<div className='project_gallery_wrappper'>
					<h1>Project Gallery</h1>
					<p>Gallery showing all project preparations and more </p>
					<CustomImageSlider
						image1={a}
						image2={b}
						image3={c}
						caption1='Outreach committee planning'
						caption2='Outreach committee planning'
						caption3='Outreach committee planning'
						imagee={e}
						imagef={f}
						imageg={g}
						captione='Community awareness'
						captionf='Community awareness'
						captiong='Community awareness'
						imageh={h}
						captionh='Kindred head engagements.'
						imagei={i}
						imagej={j}
						imagek={k}
						captioni='Orientation and queues for health consultations and counselling'
						captionj='Orientation and queues for health consultations and counselling'
						captionk='Orientation and queues for health consultations and counselling'
					/>
				</div>
			</section>
		</div>
	);
};

export default CompletedProjects;
