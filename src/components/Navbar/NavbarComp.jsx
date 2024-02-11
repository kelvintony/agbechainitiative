import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import abgbechalogoLogo from '../../assets/abgbechalogo-logo.png';
import heartIcon from '../../assets/heart.png';
import './Navbar.css';

import { Container, Navbar, Form, Nav, Button, NavDropdown } from 'react-bootstrap';

const NavbarComp = () => {
	const [ expanded, setExpanded ] = useState(false);
	return (
		<Navbar expanded={expanded} className='custom_nav' sticky='top' collapseOnSelect expand='lg'>
			<Container fluid>
				<Navbar.Brand>
					<Link onClick={() => setExpanded(false)} to='/'>
						<img
							src={abgbechalogoLogo}
							width='100px'
							// height='auto'
							className='d-inline-block align-top myimage'
							alt='pix_1'
						/>
					</Link>
				</Navbar.Brand>

				<Navbar.Toggle
					aria-controls='responsive-navbar-nav'
					onClick={() => setExpanded(expanded ? false : 'expanded')}
				/>
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='ms-auto navbar_update'>
						<Nav.Link style={{ color: 'black' }}>
							<Link onClick={() => setExpanded(false)} className='remove_line' to='/'>
								Home
							</Link>
						</Nav.Link>
						<NavDropdown title='Projects' id='collasible-nav-dropdown' style={{ color: 'black' }}>
							<NavDropdown.Item style={{ color: 'black' }}>
								<Link
									onClick={() => setExpanded(false)}
									className='remove_line'
									to='/projects/completedprojects'
								>
									Completed Projects
								</Link>
							</NavDropdown.Item>

							<NavDropdown.Item style={{ color: 'black' }}>
								<Link
									onClick={() => setExpanded(false)}
									className='remove_line'
									to='/projects/ongoingprojects'
								>
									Ongoing Projects
								</Link>
							</NavDropdown.Item>
							<NavDropdown.Item style={{ color: 'black' }}>
								<Link
									onClick={() => setExpanded(false)}
									className='remove_line'
									to='/projects/upcomingprojects'
								>
									Upcoming Projects
								</Link>
							</NavDropdown.Item>
							{/* <NavDropdown.Divider />
							<NavDropdown.Item href='#action/3.4' style={{ color: 'black' }}>
								Separated link
							</NavDropdown.Item> */}
						</NavDropdown>
						<Nav.Link style={{ color: 'black' }}>
							<Link onClick={() => setExpanded(false)} className='remove_line' to='/partnership'>
								Partnership
							</Link>
						</Nav.Link>
						<Nav.Link style={{ color: 'black' }}>
							<Link onClick={() => setExpanded(false)} className='remove_line' to='/about'>
								About
							</Link>
						</Nav.Link>
						<Nav.Link style={{ color: 'black' }}>
							<Link onClick={() => setExpanded(false)} className='remove_line' to='/contact'>
								Contact
							</Link>
						</Nav.Link>
						<Nav.Link style={{ color: 'black' }}>
							<Link
								onClick={() => setExpanded(false)}
								className='remove_line btn_donate custom_border'
								to='/donate'
							>
								<img src={heartIcon} alt='pix_1' /> Make a donation
							</Link>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarComp;
