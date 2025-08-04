import React from 'react';
import { Target, Award, Users } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              QCLAY was born from the streets, inspired by the raw energy and authentic expression of urban culture. 
              We believe streetwear isn't just clothing—it's a statement of individuality and a reflection of the 
              modern urban lifestyle.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Every piece we create is designed with meticulous attention to detail, using premium materials and 
              innovative techniques. Our mission is to provide streetwear enthusiasts with clothing that not only 
              looks exceptional but also tells a story of craftsmanship and authenticity.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target size={24} />
                </div>
                <h3 className="font-semibold mb-2">Quality First</h3>
                <p className="text-sm text-gray-400">Premium materials and construction</p>
              </div>
              <div className="text-center">
                <div className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award size={24} />
                </div>
                <h3 className="font-semibold mb-2">Authentic Design</h3>
                <p className="text-sm text-gray-400">Street-inspired aesthetics</p>
              </div>
              <div className="text-center">
                <div className="bg-white text-black w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users size={24} />
                </div>
                <h3 className="font-semibold mb-2">Community</h3>
                <p className="text-sm text-gray-400">Built by and for streetwear culture</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
              alt="QCLAY Brand Story"
              className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;