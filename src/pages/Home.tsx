import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import BrandStory from '../components/BrandStory';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <div>
      <Hero />
      <ProductGrid />
      <BrandStory />
      <Newsletter />
    </div>
  );
};

export default Home;