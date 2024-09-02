// components/PopularLocalities.js
import React from 'react';
import './PopularLocalities.css';

function PopularLocalities() {
  const localities = [
    { 
      name: "Hauz Khas", 
      score: "Safe", 
      image: ""
  },
      { name: "Connaught Place", score: "Moderate", image: "/path/to/image5.jpg" },
    { name: "Saket", score: "Safe", image: "/path/to/image6.jpg" },
    { name: "Vasant Kunj", score: "Moderate", image: "/path/to/image7.jpg" },
    { name: "Mohan Garden", score: "Unsafe", image: "/path/to/image8.jpg" }
  ];

  return (
    <section className="popular-localities">
      <h2>Popular Localities</h2>
      <div className="localities-carousel">
        {localities.map((locality, index) => (
          <div key={index} className="locality-card">
            <img src={locality.image} alt={locality.name} />
            <div className="locality-info">
              <h3>{locality.name}</h3>
              <p>Safety Rating: {locality.score}</p>
              <button>Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularLocalities;
