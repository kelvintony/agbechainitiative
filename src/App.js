import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NavbarComp from './components/Navbar/NavbarComp';
import Footer from './components/Footer/Footer';

import About from './pages/About/About';
import Donate from './pages/Donate/Donate';
import Contact from './pages/Contact/Contact';
import Partnership from './pages/Partnership/Partnership';
import CompletedProjects from './pages/CompletedProjects/CompletedProjects';
import OngoingProjects from './pages/OngoingProjects/OngoingProjects';
import UpcomingProjects from './pages/UpcomingProjects/UpcomingProjects';
import PaymentSuccess from './pages/PaymentSuccess/PaymentSuccess';
// import EditPost from './components/EditPost/EditPost';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<NavbarComp />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/about' element={<About />} />
					<Route exact path='/donate' element={<Donate />} />
					<Route exact path='/contact' element={<Contact />} />
					<Route exact path='/partnership' element={<Partnership />} />
					<Route exact path='/projects/completedprojects' element={<CompletedProjects />} />
					<Route exact path='/projects/ongoingprojects' element={<OngoingProjects />} />
					<Route exact path='/projects/upcomingprojects' element={<UpcomingProjects />} />
					<Route exact path='/donate/success' element={<PaymentSuccess />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
