import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Bestseller from './components/Bestseller';
import SingleProductPage from './components/SingleProductPage';
import ShopByCategory from './components/ShopByCategory';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Motto from './components/Motto';
import Collection from './components/Collection';
import ContactUs from './components/ContactUs';

function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route
					path=''
					element={
						<div>
							<HeroSection />
							<Motto />
							<Bestseller />
							<Collection />
							<ShopByCategory />
							<AboutUs />
							<ContactUs />
						</div>
					}
				/>
				<Route path='/bestseller/:id' element={<SingleProductPage />} />
			</Routes>

			<Footer />
		</>
	);
}

export default App;
