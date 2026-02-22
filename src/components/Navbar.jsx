import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import { useState } from 'react';

function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4 px-8">

      <div className="flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-pink-400 tracking-wide">
          Magic Mom 🪄
        </Link>

        {/* Masaüstü Menü */}
        <div className="hidden sm:flex gap-6 items-center">
          <Link to="/" className="text-gray-500 hover:text-pink-400 transition">Ana Sayfa</Link>
          <Link to="/urunler" className="text-gray-500 hover:text-pink-400 transition">Ürünler</Link>
          <Link to="/hakkimizda" className="text-gray-500 hover:text-pink-400 transition">Hakkımızda</Link>
          <Link to="/iletisim" className="text-gray-500 hover:text-pink-400 transition">İletişim</Link>
          <Link to="/ozel-siparis" className="text-gray-500 hover:text-pink-400 transition">Özel Sipariş</Link>
          <Link to="/giris" className="bg-pink-100 text-pink-500 px-4 py-2 rounded-full hover:bg-pink-200 transition text-sm">
            Giriş Yap
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

        {/* Mobil Sağ Taraf */}
        <div className="flex sm:hidden items-center gap-4">
          <Link to="/sepet" className="relative text-gray-500">
            🛒
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-500 hover:text-pink-400 transition text-2xl"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

      </div>

      {/* Mobil Açılır Menü */}
      {menuOpen && (
        <div className="sm:hidden flex flex-col gap-4 mt-4 pb-2">
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-gray-500 hover:text-pink-400 transition">Ana Sayfa</Link>
          <Link to="/urunler" onClick={() => setMenuOpen(false)} className="text-gray-500 hover:text-pink-400 transition">Ürünler</Link>
          <Link to="/hakkimizda" onClick={() => setMenuOpen(false)} className="text-gray-500 hover:text-pink-400 transition">Hakkımızda</Link>
          <Link to="/iletisim" onClick={() => setMenuOpen(false)} className="text-gray-500 hover:text-pink-400 transition">İletişim</Link>
          <Link to="/ozel-siparis" onClick={() => setMenuOpen(false)} className="text-gray-500 hover:text-pink-400 transition">Özel Sipariş</Link>
          <Link to="/giris" onClick={() => setMenuOpen(false)} className="text-gray-500 hover:text-pink-400 transition">Giriş Yap</Link>
        </div>
      )}

    </nav>
  );
}

export default Navbar;