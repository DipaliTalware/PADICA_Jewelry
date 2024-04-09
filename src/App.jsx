import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Bestseller from "./components/Bestseller";
import SingleProductPage from "./components/SingleProductPage";
import ShopByCategory from "./components/ShopByCategory";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      {/* <Bestseller /> */}
      <Routes>
        <Route path="/" element={<Bestseller />} />
        {/* <Route path="/" element={<ShopByCategory />} /> */}
        <Route path="/bestseller/:id" element={<SingleProductPage />} />
      </Routes>
      <ShopByCategory />
      <Footer />
    </>
  );
}

export default App;
