import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

const kategoriler = ['Hepsi', 'kek', 'kurabiye', 'kruvasan', 'brownie'];

function ProductsPage() {
  const [aktifKategori, setAktifKategori] = useState('Hepsi');

  const filtrelenmisUrunler = aktifKategori === 'Hepsi'
    ? products
    : products.filter((p) => p.category === aktifKategori);

  return (
    <div className="min-h-screen bg-pink-50 py-12 px-8">
      <h1 className="text-3xl font-bold text-pink-400 mb-8 text-center">Ürünlerimiz</h1>

      {/* Kategori Butonları */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {kategoriler.map((kategori) => (
          <button
            key={kategori}
            onClick={() => setAktifKategori(kategori)}
            className={`px-6 py-2 rounded-full transition capitalize ${
              aktifKategori === kategori
                ? 'bg-pink-400 text-white'
                : 'bg-white text-gray-500 hover:bg-pink-100'
            }`}
          >
            {kategori === 'Hepsi' ? 'Hepsi' :
             kategori === 'kek' ? 'Kek' :
             kategori === 'kurabiye' ? 'Kurabiye' :
             kategori === 'kruvasan' ? 'Kruvasan' : 'Brownie'}
          </button>
        ))}
      </div>

      {/* Ürün Listesi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {filtrelenmisUrunler.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
}

export default ProductsPage;