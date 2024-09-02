import React from 'react';
import './UserTestimonials.css';

function UserTestimonials() {
  return (
    <section className="user-testimonials">
      <h2 className="gradient-text">User Testimonials</h2>
      <div className="testimonials-carousel">
        <div className="testimonial-card">
          <img src=".././assets/user.jpeg" alt="User 1" />
          <p>This area is very safe and I feel comfortable living here.</p>
          <h4>- User 1</h4>
        </div>
        <div className="testimonial-card">
          <img src="/path/to/photo2.jpg" alt="User 2" />
          <p>The locality has a great community and good police presence.</p>
          <h4>- User 2</h4>
        </div>
      </div>
    </section>
  );
}

export default UserTestimonials;

