import { Link } from 'react-router-dom';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

function HomePage() {
  return (
    <div className="bg-pink-50 min-h-screen">

      {/* Hero Bölümü - Sitenin ana karşılama alanı */}
      <div className="flex flex-col items-center justify-center text-center px-4 py-24">
        <p className="text-pink-300 text-sm tracking-widest uppercase mb-3">El yapımı & Taze</p>
        <h1 className="text-6xl font-bold text-gray-700 mb-4">Magic Mom</h1>
        <p className="text-gray-400 text-lg max-w-md mb-8">
          Sevgiyle pişirilmiş, taze malzemelerle hazırlanmış ev yapımı lezzetler.
        </p>
        <Link
          to="/urunler"
          className="bg-pink-300 text-white px-8 py-3 rounded-full hover:bg-pink-400 transition text-lg"
        >
          Ürünleri Keşfet 🍰
        </Link>
      </div>

      {/* Öne Çıkan Ürünler */}
      <div className="bg-white py-16 px-8">
        <h2 className="text-2xl font-bold text-center text-gray-600 mb-10">Öne Çıkan Lezzetler</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/urunler"
            className="text-pink-400 hover:text-pink-500 transition font-medium"
          >
            Tüm ürünleri gör →
          </Link>
        </div>
      </div>

      {/* Neden Magic Mom */}
      <div className="py-16 px-8 text-center">
        <h2 className="text-2xl font-bold text-gray-600 mb-10">Neden Magic Mom?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="text-4xl mb-3">🧁</div>
            <h3 className="font-bold text-gray-600 mb-2">El Yapımı</h3>
            <p className="text-gray-400 text-sm">Her ürün özenle elle hazırlanır.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="text-4xl mb-3">🌿</div>
            <h3 className="font-bold text-gray-600 mb-2">Taze Malzeme</h3>
            <p className="text-gray-400 text-sm">Sadece doğal ve taze içerikler kullanıyoruz.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="text-4xl mb-3">💝</div>
            <h3 className="font-bold text-gray-600 mb-2">Sevgiyle Pişirilir</h3>
            <p className="text-gray-400 text-sm">Her lokmada emeği hissedebilirsiniz.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default HomePage;