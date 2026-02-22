function SpecialOrderPage() {
    return (
      <div className="min-h-screen bg-pink-50 py-16 px-4">
  
        <div className="text-center mb-12">
          <p className="text-pink-300 text-sm tracking-widest uppercase mb-3">Özel Günler İçin</p>
          <h1 className="text-4xl font-bold text-gray-700 mb-4">Özel Sipariş</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Doğum günü, düğün, nişan veya özel günleriniz için hayalinizdeki tatlıyı birlikte tasarlayalım.
          </p>
        </div>
  
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
  
          {/* Bilgi Kartları */}
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-4">
              <span className="text-3xl">🎂</span>
              <div>
                <h3 className="font-bold text-gray-600">Doğum Günü</h3>
                <p className="text-gray-400 text-sm">Kişiye özel tasarım kekler.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-4">
              <span className="text-3xl">💍</span>
              <div>
                <h3 className="font-bold text-gray-600">Düğün & Nişan</h3>
                <p className="text-gray-400 text-sm">Özel günlerinize özel lezzetler.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-4">
              <span className="text-3xl">🎁</span>
              <div>
                <h3 className="font-bold text-gray-600">Hediye Kutusu</h3>
                <p className="text-gray-400 text-sm">Sevdiklerinize özel hazırlanmış kutular.</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-4">
              <span className="text-3xl">📅</span>
              <div>
                <h3 className="font-bold text-gray-600">Teslimat Süresi</h3>
                <p className="text-gray-400 text-sm">En az 3 gün önceden sipariş veriniz.</p>
              </div>
            </div>
          </div>
  
          {/* Sipariş Formu */}
          <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col gap-4">
            <h2 className="text-xl font-bold text-gray-600 mb-2">Sipariş Formu</h2>
            
            <input
              type="text"
              placeholder="Adınız Soyadınız"
              className="border border-pink-100 rounded-xl px-4 py-3 text-gray-600 outline-none focus:border-pink-300 transition"
            />
            <input
              type="tel"
              placeholder="Telefon Numaranız"
              className="border border-pink-100 rounded-xl px-4 py-3 text-gray-600 outline-none focus:border-pink-300 transition"
            />
            <input
              type="date"
              className="border border-pink-100 rounded-xl px-4 py-3 text-gray-600 outline-none focus:border-pink-300 transition"
            />
  
            <select className="border border-pink-100 rounded-xl px-4 py-3 text-gray-500 outline-none focus:border-pink-300 transition">
              <option value="">Ürün Seçiniz</option>
              <option value="kek">Özel Tasarım Kek</option>
              <option value="kurabiye">Kurabiye Tabağı</option>
              <option value="kruvasan">Kruvasan Sepeti</option>
              <option value="brownie">Brownie Kutusu</option>
              <option value="karma">Karma Kutu</option>
            </select>
  
            <select className="border border-pink-100 rounded-xl px-4 py-3 text-gray-500 outline-none focus:border-pink-300 transition">
              <option value="">Kişi Sayısı</option>
              <option value="10">10 Kişilik</option>
              <option value="20">20 Kişilik</option>
              <option value="30">30 Kişilik</option>
              <option value="50">50 Kişilik</option>
              <option value="diger">Diğer</option>
            </select>
  
            <textarea
              placeholder="Özel istekleriniz... (renk, tema, yazı vb.)"
              rows={4}
              className="border border-pink-100 rounded-xl px-4 py-3 text-gray-600 outline-none focus:border-pink-300 transition resize-none"
            />
  
            <button className="bg-pink-300 text-white py-3 rounded-full hover:bg-pink-400 transition text-lg">
              Sipariş Talebi Gönder
            </button>
            <p className="text-gray-300 text-xs text-center">
              * Talebiniz alındıktan sonra sizi arayacağız.
            </p>
          </div>
  
        </div>
      </div>
    );
  }
  
  export default SpecialOrderPage;