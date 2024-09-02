// components/UserTestimonials.js
import React from 'react';
import './UserTestimonials.css';

function UserTestimonials() {
  const testimonials = [
    { name: "User 1", photo: "/path/to/photo1.jpg", review: "This area is very safe and I feel comfortable living here." },
    { name: "User 2", photo: "/path/to/photo2.jpg", review: "The locality has a great community and good police presence." }
  ];

  return (
    <section className="user-testimonials">
      <h2>User Testimonials</h2>
      <div className="testimonials-carousel">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.photo} alt={testimonial.name} />
            <p>{testimonial.review}</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UserTestimonials;
