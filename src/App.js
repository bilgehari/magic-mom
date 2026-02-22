import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { CartProvider } from './CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import SpecialOrderPage from './pages/SpecialOrderPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/urunler" element={<ProductsPage />} />
          <Route path="/hakkimizda" element={<AboutPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
          <Route path="/sepet" element={<CartPage />} />
          <Route path="/ozel-siparis" element={<SpecialOrderPage />} />
          <Route path="/giris" element={<LoginPage />} />
          <Route path="/kayit" element={<RegisterPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;