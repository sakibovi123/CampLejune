import React from 'react';
import './App.css';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Testimonial from './components/Testimonial/Testimonial';

function App() {
  return (
    <div className="">
      <Header />
      <Banner />
      <Services />
      <About />
      <Blog />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
