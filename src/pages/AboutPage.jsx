function AboutPage() {
    return (
      <div className="min-h-screen bg-pink-50 py-16 px-4">
        
        {/* Üst Bölüm */}
        <div className="text-center mb-16">
          <p className="text-pink-300 text-sm tracking-widest uppercase mb-3">Bizim Hikayemiz</p>
          <h1 className="text-4xl font-bold text-gray-700 mb-4">Hakkımızda</h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Magic Mom, bir annenin mutfağında başlayan küçük bir hayalin, 
            sevgiyle büyüyen lezzet hikayesidir.
          </p>
        </div>
  
        {/* Hikaye Bölümü */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-8xl text-center">👩‍🍳</div>
          <div>
            <h2 className="text-2xl font-bold text-gray-600 mb-4">Nasıl Başladı?</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Her şey çocuklarımız için pişirdiğimiz küçük keklerle başladı. 
              Komşularımız ve arkadaşlarımız tariflerimizi o kadar sevdi ki, 
              bu sevgiyi herkesle paylaşmaya karar verdik.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Bugün Magic Mom olarak, her ürünümüzü aynı ev sıcaklığıyla, 
              taze malzemeler ve geleneksel tariflerle hazırlıyoruz.
            </p>
          </div>
        </div>
  
        {/* Değerlerimiz */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-600 text-center mb-8">Değerlerimiz</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-3">🌿</div>
              <h3 className="font-bold text-gray-600 mb-2">Doğal Malzeme</h3>
              <p className="text-gray-400 text-sm">Hiçbir ürünümüzde yapay katkı maddesi kullanmıyoruz.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-3">💝</div>
              <h3 className="font-bold text-gray-600 mb-2">Sevgiyle Yapılır</h3>
              <p className="text-gray-400 text-sm">Her ürün özenle, elle ve sevgiyle hazırlanır.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-3">🎁</div>
              <h3 className="font-bold text-gray-600 mb-2">Özel Siparişler</h3>
              <p className="text-gray-400 text-sm">Doğum günü, düğün ve özel günler için sipariş alıyoruz.</p>
            </div>
          </div>
        </div>
  
      </div>
    );
  }
  
  export default AboutPage;