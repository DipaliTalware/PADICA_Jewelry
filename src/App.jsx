import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Bestseller from './components/Bestseller';
import SingleProductPage from './components/SingleProductPage';
function App() {
	return (
		<>
			<Header />
			{/* <Bestseller /> */}
			<Routes>
				<Route path='/' element={<Bestseller />} />
				<Route path='/bestseller/:id' element={<SingleProductPage />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
