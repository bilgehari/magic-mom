import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm p-8 w-full max-w-md">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-pink-400 mb-2">Magic Mom 🪄</h1>
          <p className="text-gray-400">Yeni hesap oluşturun</p>
        </div>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Adınız Soyadınız"
            className="border border-pink-100 rounded-xl px-4 py-3 text-gray-600 outline-none focus:border-pink-300 transition"
          />
          <input
            type="email"
            placeholder="E-posta adresiniz"
            className="border border-pink-100 rounded-xl px-4 py-3 text-gray-600 outline-none focus:border-pink-300 transition"
          />
          <input
            type="password"
            placeholder="Şifre oluşturun"
            className="border border-pink-100 rounded-xl px-4 py-3 text-gray-600 outline-none focus:border-pink-300 transition"
          />
          <input
            type="password"
            placeholder="Şifrenizi tekrar girin"
            className="border border-pink-100 rounded-xl px-4 py-3 text-gray-600 outline-none focus:border-pink-300 transition"
          />
          <button className="bg-pink-300 text-white py-3 rounded-full hover:bg-pink-400 transition text-lg">
            Kayıt Ol
          </button>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            Zaten hesabınız var mı?{' '}
            <Link to="/giris" className="text-pink-400 hover:text-pink-500 font-medium">
              Giriş Yap
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}

export default RegisterPage;