import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';

function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-sm py-4 px-8 flex justify-between items-center">
      
      <Link to="/" className="text-2xl font-bold text-pink-400 tracking-wide">
      Magic Mom 🪄
      </Link>

      <div className="flex gap-6 items-center">
        <Link to="/" className="text-gray-500 hover:text-pink-400 transition">
          Ana Sayfa
        </Link>
        <Link to="/urunler" className="text-gray-500 hover:text-pink-400 transition">
          Ürünler
        </Link>
        <Link to="/hakkimizda" className="text-gray-500 hover:text-pink-400 transition">
          Hakkımızda
        </Link>
        <Link to="/iletisim" className="text-gray-500 hover:text-pink-400 transition">
          İletişim
        </Link>
        <Link to="/sepet" className="relative text-gray-500 hover:text-pink-400 transition">
          🛒
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;