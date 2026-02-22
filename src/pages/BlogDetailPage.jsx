import { useParams, Link } from 'react-router-dom';
import blogs from '../data/blogs';

function BlogDetailPage() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center text-center">
        <div className="text-6xl mb-4">😕</div>
        <h2 className="text-2xl font-bold text-gray-600 mb-4">Yazı bulunamadı.</h2>
        <Link to="/blog" className="text-pink-400 hover:text-pink-500">← Bloga dön</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50 py-16 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">

        {/* Kapak Görseli */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover"
        />

        <div className="p-8">
          <span className="text-pink-300 text-xs uppercase tracking-widest">{blog.category}</span>
          <h1 className="text-3xl font-bold text-gray-700 mt-2 mb-2">{blog.title}</h1>
          <p className="text-gray-300 text-sm mb-6">{blog.date}</p>
          <p className="text-gray-500 leading-relaxed">{blog.icerik}</p>

          <div className="mt-8">
            <Link to="/blog" className="text-pink-400 hover:text-pink-500 font-medium">
              ← Bloga dön
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default BlogDetailPage;