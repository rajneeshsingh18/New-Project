import React, { useState } from 'react';
import './UserTestimonials.css';

function UserTestimonials() {

  
  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    setLocalities(cities[city] || []);
    setSelectedLocality('');
    setSafetyScore(null);
    setIsModalOpen(false);
  };

  const handleLocalityChange = (event) => {
    const locality = event.target.value;
    setSelectedLocality(locality);
    const selected = localities.find((loc) => loc.name === locality);
    setSafetyScore(selected ? selected.score : null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };



  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    padding: '20px',
    backgroundColor: '#FFFFFF', /* Coral Pink */
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontSize: '50px',
    fontWeight: 400,
    textAlign: 'center',
    // textShadow: '2px 2px rgb(0, 0, 0)',
    transition: 'transform 0.3s ease-in-out', 
    transform: isHovered ? 'scale(1.1)' : 'scale(1)', 
  };


  const testimonials = [
    {
      name: 'Alice Johnson',
      image: 'https://via.placeholder.com/100?text=Alice', // Replace with actual images
      text: 'This service is fantastic! It exceeded my expectations and has truly transformed my experience.',
    },
    {
      name: 'Bob Smith',
      image: 'https://via.placeholder.com/100?text=Bob',
      text: 'I am very pleased with the quality and the attention to detail. Highly recommended!',
    },
    {
      name: 'Carol Lee',
      image: 'https://via.placeholder.com/100?text=Carol',
      text: 'The best decision I made was to choose this service. It has been a game-changer for me.',
    },
  ];
  return (
    <section className="user-testimonials">

<h2 style={styles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >User Testimonials</h2>
     <div className="testimonials-container">
      {testimonials.map((testimonial, index) => (
        <div className="testimonial-box" key={index}>
          <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
          <div className="testimonial-content">
            <p className="testimonial-text">"{testimonial.text}"</p>
            <h4 className="testimonial-name">- {testimonial.name}</h4>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
}

export default UserTestimonials;

