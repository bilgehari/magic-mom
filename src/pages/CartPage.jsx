import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';

function CartPage() {
  const { cart, removeFromCart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center text-center px-4">
        <div className="text-6xl mb-4">🛒</div>
        <h2 className="text-2xl font-bold text-gray-600 mb-2">Sepetiniz Boş</h2>
        <p className="text-gray-400 mb-6">Henüz sepete ürün eklemediniz.</p>
        <Link
          to="/urunler"
          className="bg-pink-300 text-white px-6 py-3 rounded-full hover:bg-pink-400 transition"
        >
          Ürünlere Git
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50 py-12 px-4">
      <h1 className="text-3xl font-bold text-pink-400 text-center mb-10">Sepetim 🛒</h1>

      <div className="max-w-2xl mx-auto flex flex-col gap-4">
        
        {/* Ürün Listesi */}
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-sm p-5 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl">{item.emoji}</span>
              <div>
                <h3 className="font-bold text-gray-700">{item.name}</h3>
                <p className="text-gray-400 text-sm">{item.price} ₺ x {item.quantity}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-bold text-pink-400">{item.price * item.quantity} ₺</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-gray-300 hover:text-red-400 transition text-xl"
              >
                ✕
              </button>
            </div>
          </div>
        ))}

        {/* Toplam ve Sipariş */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mt-4">
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-600 font-bold text-lg">Toplam</span>
            <span className="text-pink-400 font-bold text-2xl">{totalPrice()} ₺</span>
          </div>
          <button className="bg-pink-300 text-white w-full py-3 rounded-full hover:bg-pink-400 transition text-lg">
            Sipariş Ver
          </button>
          <p className="text-gray-300 text-xs text-center mt-3">
            * Sipariş butonu şu an aktif değildir.
          </p>
        </div>

      </div>
    </div>
  );
}

export default CartPage;