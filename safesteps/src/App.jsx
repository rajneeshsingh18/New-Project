import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SafetyIndexPreview from './components/SafetyIndexPreview';
import PopularLocalities from './components/PopularLocalities';
import UserTestimonials from './components/UserTestimonials';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <SafetyIndexPreview />
      <PopularLocalities/>
      <UserTestimonials/>
      <Footer />
    </div>
  );
}

export default App;

