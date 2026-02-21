import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-white border-t border-pink-100 py-10 px-8 mt-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
        
        {/* Logo ve Slogan */}
        <div>
          <h2 className="text-xl font-bold text-pink-400 mb-2">Magic Mom 🍰</h2>
          <p className="text-gray-400 text-sm">Sevgiyle pişirilmiş, taze malzemelerle hazırlanmış ev yapımı lezzetler.</p>
        </div>

        {/* Sayfalar */}
        <div>
          <h3 className="font-bold text-gray-600 mb-3">Sayfalar</h3>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-gray-400 hover:text-pink-400 transition text-sm">Ana Sayfa</Link>
            <Link to="/urunler" className="text-gray-400 hover:text-pink-400 transition text-sm">Ürünler</Link>
            <Link to="/hakkimizda" className="text-gray-400 hover:text-pink-400 transition text-sm">Hakkımızda</Link>
            <Link to="/iletisim" className="text-gray-400 hover:text-pink-400 transition text-sm">İletişim</Link>
          </div>
        </div>

        {/* İletişim */}
        <div>
          <h3 className="font-bold text-gray-600 mb-3">İletişim</h3>
          <div className="flex flex-col gap-2 text-gray-400 text-sm">
            <p>📍 İstanbul, Türkiye</p>
            <p>📧 magicmom@email.com</p>
            <p>📞 0555 555 55 55</p>
          </div>
        </div>

      </div>

      {/* Alt Çizgi */}
      <div className="text-center text-gray-300 text-xs mt-8">
        © 2024 Magic Mom. Tüm hakları saklıdır.
      </div>

    </footer>
  );
}

export default Footer;