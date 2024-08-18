// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const App = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Header Section */}
      <header className="sticky top-0 bg-black text-white z-40 shadow-md">
        <nav className="container mx-auto flex justify-between items-center py-6 px-10">
          <div className="text-2xl font-bold">
            RAGHAV-HOMES<span className="text-blue-500">.</span>
          </div>
          <div className="space-x-8 hidden md:flex">
            <a href="#" className="hover:text-gray-400">Residencies</a>
            <a href="#" className="hover:text-gray-400">Our Value</a>
            <a href="#" className="hover:text-gray-400">Contact Us</a>
            <a href="#" className="hover:text-gray-400">Get Started</a>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            Contact
          </button>
          <button
            onClick={toggleMenu}
            className="md:hidden bg-blue-600 text-white px-4 py-2 rounded-full"
          >
            Menu
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col items-center py-6">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
            <ul className="space-y-4">
              <li className="hover:text-gray-400">Residencies</li>
              <li className="hover:text-gray-400">Best Choice</li>
              <li className="hover:text-gray-400">Contact Us</li>
              <li className="hover:text-gray-400">Get Started</li>
              <li className="hover:text-gray-400">Contact</li>
            </ul>
          </div>
        )}
      </header>

      {/* Registration Pop-up */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-sm relative">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              <span className="block">Discover</span>
              <span className="block relative mt-4 md:mt-6">
                <span className="block">Most Suitable</span>
              </span>
              <span className="block mt-2">Property</span>
            </h1>
            <p className="text-gray-400 mb-8">
              Not every House is Home, So buy your First Home from Raghav Properties.
            </p>
            <div className="flex">
              <input
                type="text"
                placeholder="Search"
                className="bg-white text-black rounded-l-full py-2 md:py-3 px-4 md:px-6 w-full"
              />
              <button className="bg-blue-600 text-white rounded-r-full py-2 md:py-3 px-4 md:px-6">
                Search
              </button>
            </div>
          </div>
          <div className="md:w-1/4 mt-5 md:mt-0">
            <img
              src="/public/images/property-photo.jpg"
              alt="Property"
              className="rounded-full shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Popular Residencies Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Best Choices</h2>
          <div className="flex flex-wrap justify-center">
            <div className="max-w-sm m-4 bg-white rounded-lg shadow-md">
              <img
                src="/public/images/property1.jpg"
                alt="Property 1"
                className="w-full h-48 md:h-64 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">Green Pearl</h3>
                <p className="text-gray-500">$72,000</p>
                <p className="text-gray-600 mt-4">Very Far from SRM</p>
              </div>
            </div>
            <div className="max-w-sm m-4 bg-white rounded-lg shadow-md">
              <img
                src="/public/images/property2.jpg"
                alt="Property 2"
                className="w-full h-48 md:h-64 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">Estancia</h3>
                <p className="text-gray-500">$210,000</p>
                <p className="text-gray-600 mt-4">Near Potheri, SRM Nagar</p>
              </div>
            </div>
            <div className="max-w-sm m-4 bg-white rounded-lg shadow-md">
              <img
                src="/public/images/property3.avif"
                alt="Property 3"
                className="w-full h-48 md:h-64 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">Tech Park</h3>
                <p className="text-gray-500">$500,000</p>
                <p className="text-gray-600 mt-4">Near TP Ganesan Auditorium</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-3xl mb-4">
                <i className="fas fa-rocket"></i>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Speed</h3>
              <p className="text-gray-600">
                We ensure quick responses and timely assistance to make your property-buying experience smooth.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-3xl mb-4">
                <i className="fas fa-handshake"></i>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Trust</h3>
              <p className="text-gray-600">
                Trust is the foundation of our business. We prioritize transparency and honesty in every transaction.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-3xl mb-4">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                Building strong communities is our goal. We offer properties that contribute to thriving neighborhoods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Contact Us</h2>
          <form className="max-w-xl mx-auto">
            <div className="mb-4">
              <label className="block text-gray-400 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg bg-gray-800 text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg bg-gray-800 text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border rounded-lg bg-gray-800 text-white focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-gray-400">&copy; 2023 RAGHAV HOMES. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
