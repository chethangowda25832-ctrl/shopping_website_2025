import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: 'Urban Oversized Hoodie',
      price: 'RS:1299',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      tag: 'Bestseller'
    },
    {
      id: 2,
      name: 'Street Cargo Pants',
      price: 'RS:1299',
      image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      tag: 'New'
    },
    {
      id: 3,
      name: 'Graphic Print Tee',
      price: 'RS:1299',
      image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      tag: null
    },
    {
      id: 4,
      name: 'Denim Jacket',
      price: 'RS:1299',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      tag: 'Limited'
    },
    {
      id: 5,
      name: 'Track Joggers',
      price: 'RS:1299',
      image: 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      tag: null
    },
    {
      id: 6,
      name: 'Bomber Jacket',
      price: 'RS:1299',
      image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      tag: 'New'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Collection</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium streetwear pieces
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {product.tag && (
                <div className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-semibold ${
                  product.tag === 'New' ? 'bg-green-500 text-white' :
                  product.tag === 'Bestseller' ? 'bg-red-500 text-white' :
                  'bg-yellow-500 text-black'
                }`}>
                  {product.tag}
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                
                {/* Action buttons */}
                <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                    <Heart size={18} className="text-gray-700" />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                    <ShoppingCart size={18} className="text-gray-700" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-black">{product.price}</p>
                <button className="w-full mt-4 bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;