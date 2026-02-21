import { useCart } from '../CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition flex flex-col">
      
      {/* Fotoğraf */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />

      {/* İçerik */}
      <div className="p-6 flex flex-col flex-1">
        <h2 className="text-xl font-bold text-gray-700 mb-2">{product.name}</h2>
        <p className="text-gray-400 text-sm mb-4 flex-1">{product.description}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-pink-400 font-bold text-lg">{product.price} ₺</span>
          <button
            onClick={() => addToCart(product)}
            className="bg-pink-200 text-pink-700 px-5 py-2 rounded-full hover:bg-pink-300 transition"
          >
            Sepete Ekle
          </button>
        </div>
      </div>

    </div>
  );
}

export default ProductCard;