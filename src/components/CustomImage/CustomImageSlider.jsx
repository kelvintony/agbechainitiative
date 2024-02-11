import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const CustomImageSlider = (props) => {
	return (
		<div className='project_gallery_inner'>
			<Carousel indicators={false}>
				<Carousel.Item interval={1500}>
					<img className='d-block w-100 custom_cover' src={props.image1} alt='First slide' />
					<Carousel.Caption>
						<div className='carousel_writeup'>
							<p>{props.caption1}</p>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={1500}>
					<img className='d-block w-100 custom_cover' src={props.image2} alt='Second slide' />
					<Carousel.Caption>
						<div className='carousel_writeup'>
							<p>{props.caption3}</p>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={1500}>
					<img className='d-block w-100 custom_cover' src={props.image3} alt='Third slide' />
					<Carousel.Caption>
						<div className='carousel_writeup'>
							<p>{props.caption3}</p>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={1500}>
					<img className='d-block w-100 custom_cover' src={props.imagee} alt='Third slide' />
					<Carousel.Caption>
						<div className='carousel_writeup'>
							<p>{props.captione}</p>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={1500}>
					<img className='d-block w-100 custom_cover' src={props.imagef} alt='Third slide' />
					<Carousel.Caption>
						<div className='carousel_writeup'>
							<p>{props.captionf}</p>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={1500}>
					<img className='d-block w-100 custom_cover' src={props.imageg} alt='Third slide' />
					<Carousel.Caption>
						<div className='carousel_writeup'>
							<p>{props.captiong}</p>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={1500}>
					<img className='d-block w-100 custom_cover' src={props.imageh} alt='Third slide' />
					<Carousel.Caption>
						<div className='carousel_writeup'>
							<p>{props.captionh}</p>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={1500}>
					<img className='d-block w-100 custom_cover' src={props.imagei} alt='Third slide' />
					<Carousel.Caption>
						<div className='carousel_writeup'>
							<p>{props.captioni}</p>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={1500}>
					<img className='d-block w-100 custom_cover' src={props.imagej} alt='Third slide' />
					<Carousel.Caption>
						<div className='carousel_writeup'>
							<p>{props.captionj}</p>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={1500}>
					<img className='d-block w-100 custom_cover' src={props.imagek} alt='Third slide' />
					<Carousel.Caption>
						<div className='carousel_writeup'>
							<p>{props.captionk}</p>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default CustomImageSlider;
