import { Link } from 'react-router-dom';
import blogs from '../data/blogs';

function BlogPage() {
  return (
    <div className="min-h-screen bg-pink-50 py-16 px-4">

      <div className="text-center mb-12">
        <p className="text-pink-300 text-sm tracking-widest uppercase mb-3">Magic Mom</p>
        <h1 className="text-4xl font-bold text-gray-700 mb-4">Blog</h1>
        <p className="text-gray-400 text-lg">Tarifler, hikayeler ve mutfaktan notlar.</p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <Link
            to={`/blog/${blog.id}`}
            key={blog.id}
            className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition flex flex-col"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col gap-2 flex-1">
              <span className="text-pink-300 text-xs uppercase tracking-widest">{blog.category}</span>
              <h2 className="text-xl font-bold text-gray-700">{blog.title}</h2>
              <p className="text-gray-400 text-sm flex-1">{blog.ozet}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-300 text-xs">{blog.date}</span>
                <span className="text-pink-400 text-sm font-medium">Devamını oku →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}

export default BlogPage;