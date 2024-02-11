import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import homeAddress from '../../assets/home-address-48.png';
import phonePix from '../../assets/phone-50.png';
import securedLetter from '../../assets/secured-letter-30.png';
import instagramPix from '../../assets/instagram-50.png';
import twitterCircled from '../../assets/twitter-circled-48.png';
import facebookPix from '../../assets/facebook-48.png';

const Footer = () => {
  return (
    <section class='footer_container'>
      <div class='footer_inner'>
        <h3>About Agbecha Initiative</h3>
        <p>
          We are non profit, building bridges to close gaps in living standards.
        </p>
        <div class='navbar_icons'>
          <a href=''>
            <img src={facebookPix} alt='pix_8' />
          </a>
          <a href=''>
            <img src={twitterCircled} alt='pix_8' />
          </a>
          <a href=''>
            <img src={instagramPix} alt='pix_8' />
          </a>
        </div>
      </div>
      <div class='footer_inner'>
        <h3>Pages</h3>
        <div className='footer_menu'>
          <Link className='footer_links' to='/partnership'>
            Partnership
          </Link>
          <Link className='footer_links' to='/projects/completedprojects'>
            Projects
          </Link>
          <Link className='footer_links' to='/donate'>
            Donations
          </Link>
          <Link className='footer_links' to='/about'>
            About
          </Link>
          <Link className='footer_links' to='/contact'>
            Contact
          </Link>
        </div>
      </div>
      <div class='footer_inner'>
        <h3>Contact</h3>
        <p>
          <img src={securedLetter} alt='pix_6' /> info@agbechainitiative.org
        </p>
        <p>
          <img src={phonePix} alt='pix_6' /> +234(0)7088790090
        </p>
        <p>
          <img src={homeAddress} alt='pix_6' /> KM 7, Makurdi Gboko Road,
          Makurdi, Benue State.
        </p>
      </div>
    </section>
  );
};

export default Footer;
