import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import upcomingProject from '../../assets/upcomingproject.png';
import childrenSmiling from '../../assets/bennett-unsplash.jpg';
import childrenReading from '../../assets/children_readinga.jpg';

import thebanner from '../../assets/thebanner.jpg';
import heartImage from '../../assets/heart.png';
import serviceThree from '../../assets/services3.svg';
import serviceTwo from '../../assets/services2.svg';
import serviceOne from '../../assets/services1.svg';
import glitterBackground from '../../assets/glitter_background.png';
import bannerThree from '../../assets/bannerthree.png';
import bannerTwo from '../../assets/bannertwo.png';
import bannerOne from '../../assets/bannerone.png';
import main_children_image from '../../assets/main_children_image.jpeg';

//
import pr8 from '../../assets/pr8.JPG';
import pr9 from '../../assets/pr9.JPG';
import pr10 from '../../assets/transformer_2.jpg';
import transf_new from '../../assets/transf_new.jpeg';
import roadIconOne from '../../assets/road_1.jpg';
import roadIconTwo from '../../assets/road_2.jpg';
import roadIconThree from '../../assets/road_3.JPG';
import hospitalIconOne from '../../assets/hospital_1.jpg';
import hospitalIconTwo from '../../assets/hospital_2.jpg';
import hospitalIconThree from '../../assets/hospital_3.JPG';
import waterOne from '../../assets/water_1.jpeg';
import waterTwo from '../../assets/water_2.jpeg';
import waterThree from '../../assets/water_3.jpeg';

import pr1 from '../../assets/pr1.jpeg';
import surgery1 from '../../assets/surgery1.jpeg';
import surgery2 from '../../assets/surgery2.jpeg';
import surgery4 from '../../assets/surgery4.jpeg';
import surgery5 from '../../assets/surgery5.jpeg';

import heroanother from '../../assets/d44148-022-00013-y_20083828.jpg';
import women_things from '../../assets/women_things.jpeg';

import Typewriter from 'typewriter-effect';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaRegHandPointRight } from 'react-icons/fa';
// boostrap Carousel
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      {/* Navbar section  */}
      <nav className='navbar_container2'>
        <div className='overlay2' />
        <div className='navbar_inner_writeup2'>
          <div className='navbar_a2'>
            <h3>
              Making quality health and social service accessible to the poor!
            </h3>
            <p>Reaching the unreached.</p>
          </div>
        </div>
        <div className='navbar_image2'>
          {/* <img src={thebanner} alt='pix_2' /> */}
          <img src={heroanother} alt='pix_2' />
        </div>
      </nav>
      {/* upcoming section  */}
      <section className='upcoming_container2'>
        <div className='upcoming_inner2'>
          <div className='img_container'>
            <img src={women_things} alt='pix_1' />
            {/* <p>Equipping the rural child project sample school with AIHRD volunteer staff</p> */}
          </div>
          <div data-aos='fade-right' className='upcoming_description2'>
            <h3>Ongoing Project</h3>
            <p>REGULAR ACCESS TO HEALTH CHECK FOR WIDOWS.</p>
            <p>
              Sponsoring the Registration of <strong>3000</strong> Benue widows
              under the GIFSHIP program of National Health Insurance Authority
              (NHIA) to ensure selected rural widows have easy and regular
              access to health check.
            </p>

            <p>
              Your support can add to this number as we'd love to have you make
              a difference with us.
            </p>
            <div className='btn_container'>
              <Link
                style={{
                  marginTop: '20px',
                  borderRadius: '0px',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
                className='btn_donate'
                to='/donate'
              >
                <FaRegHandPointRight size={28} />
                you can donate to sponsor one widow.
              </Link>
              {/* <Link className='btn_project' to='/projects'>
								View Projects
							</Link> */}
            </div>
          </div>
        </div>
      </section>

      <section className='upcoming_container2'>
        <div style={{ paddingBottom: '80px' }} className='upcoming_inner2'>
          <div className='img_container'>
            <img src={main_children_image} alt='pix_1' />
            <p>
              Equipping the rural child project sample school with AIHRD
              volunteer staff
            </p>
          </div>
          <div className='upcoming_description2'>
            <h3 className='add_margin'>Upcoming Project</h3>
            <p>EQUIPPING THE RURAL CHILD TO EXCEL.</p>
            <p>
              A research based project enhance rural transformation through
              education and improved academic interest/excellence.
            </p>

            {/* <p>
							This project is research based, to enhance rural transformation through education and
							improved academic interest/excellence. Our target is{' '}
							<strong>500,000 pupils/students</strong> and no rural school child of selected locations
							will be left
						</p> */}
            <div className='btn_container'>
              <Link
                style={{
                  marginTop: '20px',
                  borderRadius: '0px',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
                className='btn_donate'
                to='/projects/upcomingprojects'
              >
                <FaRegHandPointRight size={28} /> see more on this project in
                the upcoming projects
              </Link>
              {/* <Link className='btn_project' to='/projects'>
								View Projects
							</Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* objective section  */}
      <section className='objective_container2'>
        <div className='objective_image2'>
          <img data-aos='fade-right' src={childrenSmiling} alt='pix_1' />
        </div>
        <div className='objective_writeup2'>
          <h3>WELCOME TO AGBECHA INITIATIVE</h3>
          <p>
            The Vehicle And Bridge To{' '}
            <span style={{ fontWeight: '900', fontStyle: 'italic' }}>
              Reaching The Unreached
            </span>
          </p>
          <p>
            provide quality and affordable health and social service delivery to
            the poor rural dwellers.(make quality health and social service
            accessible to the poor)
          </p>
          <p>
            Advocate for early intervention programs that prevents drops out of
            school and child marriage responsible for rampant mother and child
            health and life threats common among rural dwellers.
          </p>
          <p>
            Champion Collaborations with other policy colleague in creating
            awareness to the government and other concerned organizations on the
            scope, opportunities, challenges and issues in implementing prudent
            health and social care in rural environment.
          </p>
          <div className='years_helping2'>
            3+ <br /> Years Reaching The Unreached
          </div>
        </div>
      </section>
      <section className='accomplishments2'>
        <div data-aos='fade-right' className='accom_inner_a'>
          <h3>ACCOMPLISHMENTS</h3>
          <p>Our Completed Projects</p>
          <p>
            We strategize, we mobilize, we believe and build to make the
            difference we want to see.
          </p>
          <Link
            className='btn_project btn_view_all'
            to='/projects/completedprojects'
          >
            View Our Projects
          </Link>
        </div>
        <div class='accom_courousal'>
          <Carousel indicators={false}>
            <Carousel.Item interval={1500}>
              <img
                className='d-block w-100'
                src={waterThree}
                alt='First slide'
              />
              <Carousel.Caption>
                <div className='carousel_writeup'>
                  <p>Before Mbaade source of water.</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className='d-block w-100'
                src={waterTwo}
                alt='Second slide'
              />
              <Carousel.Caption>
                <div className='carousel_writeup'>
                  <p>after Mbaade source of water.</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className='d-block w-100'
                src={roadIconOne}
                alt='First slide'
              />
              <Carousel.Caption>
                <div className='carousel_writeup'>
                  <p>Road Before Construction</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className='d-block w-100'
                src={roadIconTwo}
                alt='Second slide'
              />
              <Carousel.Caption>
                <div className='carousel_writeup'>
                  <p>Road After Construction</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className='d-block w-100'
                src={hospitalIconTwo}
                alt='Second slide'
              />
              <Carousel.Caption>
                {/* <h3>Second slide label</h3> */}
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className='d-block w-100'
                src={hospitalIconOne}
                alt='First slide'
              />
              <Carousel.Caption>
                {/* <div className='carousel_writeup'>
									<h3>First slide label</h3>
									<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
								</div> */}
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1500}>
              <img className='d-block w-100' src={surgery1} alt='First slide' />
              <Carousel.Caption>
                {/* <div className='carousel_writeup'>
									<p>Consultations for medical or surgical interventions</p>
								</div> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img className='d-block w-100' src={surgery2} alt='First slide' />
              <Carousel.Caption>
                <div className='carousel_writeup'>
                  <p>Consultations for medical or surgical interventions</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img className='d-block w-100' src={pr1} alt='First slide' />
              <Carousel.Caption>
                {/* <div className='carousel_writeup'>
									<h3>First slide label</h3>
									<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
								</div> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img className='d-block w-100' src={surgery4} alt='First slide' />
              <Carousel.Caption>
                {/* <div className='carousel_writeup'>
									<h3>First slide label</h3>
									<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
								</div> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img className='d-block w-100' src={surgery5} alt='First slide' />
              <Carousel.Caption>
                {/* <div className='carousel_writeup'>
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
              <img
                className='d-block w-100'
                src={transf_new}
                alt='First slide'
              />
              <Carousel.Caption>
                {/* <div style={{ background: 'black', padding: '2px', opacity: '0.7' }}>
										<h3>First slide label</h3>
										<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
									</div> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>

      {/* what we dpix_11ection  */}
      <section className='we_do2'>
        <img src={glitterBackground} alt='pix_4' />
        <div className='we_do_inner2'>
          <h3>Helping Today</h3>
          <p>How We Reach The Unreached</p>
          <div className='we_do_inner_a2'>
            <div className='div_a2'>
              <div className='we_do_items2'>
                <img src={serviceOne} alt='pix_6' />
                <h3>Infrastructures</h3>
                <p>Beyond roads and bridges to social welfare and security.</p>
              </div>
              <div className='we_do_items2'>
                <img src={serviceTwo} alt='pix_6' />
                <h3>Health & Medicine</h3>
                <p>
                  Treating the disease while setting programs to prevent them.
                </p>
              </div>
              <div className='we_do_items2'>
                <img src={serviceThree} alt='pix_6' />
                <h3>Education</h3>
                <p>Increasing literacy to raise agents of transformation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
