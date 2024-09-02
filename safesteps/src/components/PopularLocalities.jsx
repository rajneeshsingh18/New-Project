// components/PopularLocalities.js
import React from 'react';
import './PopularLocalities.css';

function PopularLocalities() {
  const localities = [
    { 
      name: "Hauz Khas", 
      score: "Safe", 
      image: "https://www.bing.com/ck/a?!&&p=7eef68f49ef5b9fbJmltdHM9MTcyNTE0ODgwMCZpZ3VpZD0xYWNlZjM2MS02ZTI5LTY4YzUtMDU3Zi1lN2Q4NmZkYjY5NTQmaW5zaWQ9NTU3Mg&ptn=3&ver=2&hsh=3&fclid=1acef361-6e29-68c5-057f-e7d86fdb6954&u=a1L2ltYWdlcy9zZWFyY2g_cT1oYXV6JTIwa2hhcyUyMGltYWdlcyZGT1JNPUlRRlJCQSZpZD05ODAxRjIxMEQxNzY4NTM3RDFEQzlBNzAwNzM3NkI3MDZDQzAwMkUx&ntb=1"
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
