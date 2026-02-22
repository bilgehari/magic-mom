function ContactPage() {
    return (
      <div className="min-h-screen bg-pink-50 py-16 px-4">
        
        <div className="text-center mb-12">
          <p className="text-pink-300 text-sm tracking-widest uppercase mb-3">Bize Ulaşın</p>
          <h1 className="text-4xl font-bold text-gray-700 mb-4">İletişim</h1>
          <p className="text-gray-400 text-lg">Sorularınız veya özel siparişleriniz için bize yazın.</p>
        </div>
  
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          
          {/* İletişim Bilgileri */}
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-4">
              <span className="text-3xl">📍</span>
              <div>
                <h3 className="font-bold text-gray-600">Adres</h3>
                <p className="text-gray-400 text-sm">İstanbul, Türkiye</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-4">
              <span className="text-3xl">📧</span>
              <div>
                <h3 className="font-bold text-gray-600">E-posta</h3>
                <p className="text-gray-400 text-sm">magicmom@email.com</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-4">
              <span className="text-3xl">📞</span>
              <div>
                <h3 className="font-bold text-gray-600">Telefon</h3>
                <p className="text-gray-400 text-sm">0555 555 55 55</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-4">
              <span className="text-3xl">🕐</span>
              <div>
                <h3 className="font-bold text-gray-600">Çalışma Saatleri</h3>
                <p className="text-gray-400 text-sm">Hafta içi 09:00 - 18:00</p>
              </div>
            </div>
          </div>
  
          {/* İletişim Formu */}
          <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col gap-4">
            <h2 className="text-xl font-bold text-gray-600 mb-2">Mesaj Gönder</h2>
            <input
              type="text"
              placeholder="Adınız"
              className="border border-pink-100 rounded-xl px-4 py-3 text-gray-600 outline-none focus:border-pink-300 transition"
            />
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="border border-pink-100 rounded-xl px-4 py-3 text-gray-600 outline-none focus:border-pink-300 transition"
            />
            <textarea
              placeholder="Mesajınız..."
              rows={4}
              className="border border-pink-100 rounded-xl px-4 py-3 text-gray-600 outline-none focus:border-pink-300 transition resize-none"
            />
            <button className="bg-pink-300 text-white py-3 rounded-full hover:bg-pink-400 transition text-lg">
              Gönder
            </button>
            <p className="text-gray-300 text-xs text-center">
              * Form şu an aktif değildir.
            </p>
          </div>
  
        </div>
      </div>
    );
  }
  
  export default ContactPage;