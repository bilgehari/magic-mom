import { useCart } from '../CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition">
      <div className="text-6xl mb-4">{product.emoji}</div>
      <h2 className="text-xl font-bold text-gray-700 mb-2">{product.name}</h2>
      <p className="text-gray-400 text-sm mb-4">{product.description}</p>
      <span className="text-pink-400 font-bold text-lg mb-4">{product.price} ₺</span>
      <button
        onClick={() => addToCart(product)}
        className="bg-pink-200 text-pink-700 px-6 py-2 rounded-full hover:bg-pink-300 transition w-full"
      >
        Sepete Ekle
      </button>
    </div>
  );
}

export default ProductCard;