import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail size={48} className="mx-auto mb-6 text-gray-300" />
        <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Be the first to know about new drops, exclusive releases, and street style inspiration
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg bg-white text-black font-medium focus:outline-none focus:ring-4 focus:ring-gray-400 transition-all"
              required
            />
            <button
              type="submit"
              disabled={isSubscribed}
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none flex items-center justify-center space-x-2"
            >
              {isSubscribed ? (
                <>
                  <Check size={20} />
                  <span>Subscribed!</span>
                </>
              ) : (
                <span>Subscribe</span>
              )}
            </button>
          </div>
        </form>

        <p className="text-sm text-gray-400 mt-4">
          No spam, just the latest streetwear updates. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;