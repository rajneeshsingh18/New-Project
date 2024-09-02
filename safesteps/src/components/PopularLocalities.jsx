import React, { useState } from 'react';
import './PopularLocalities.css';

function PopularLocalities() {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    padding: '20px',
    backgroundColor: 'black',
    color: 'white', // Text color
    fontSize: '50px',
    fontWeight: 400,
    textAlign: 'center',
    transition: 'transform 0.3s ease-in-out', // Animation for hover effect
    transform: isHovered ? 'scale(1.1)' : 'scale(1)', // Scale on hover
  };

  const localities = [
    { name: "Hauz Khas", imageUrl: "https://th.bing.com/th?id=OIP.sbAhlxH671f3-2sxhH3lggHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2", safety: "Safe" },
    { name: "Greater Kailash", imageUrl: "https://justahotels.com/wp-content/uploads/2022/09/m-block-gk.png", safety: "Moderate" },
    { name: "Vasant Kunj", imageUrl: "https://imgmedia.lbb.in/media/2018/06/5b347cf93913b103bf81a5af_1530166521145.jpg", safety: "Moderate" },
    { name: "Mohan Garden", imageUrl: "https://img.staticmb.com/mbphoto/locality/cropped_images/2022/Jun/28/Photo_h470_w1080/77997_IMG_20220525_061236295---Satender-Info_470_1080.jpg", safety: "Unsafe" },
  ];

  return (
    <section className="popular-localities">
      <h2
        className='titlepopular'
        style={styles}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Popular Localities
      </h2>
      <div className="container" style={{ backgroundColor: 'black' , marginTop:'-150px' , marginBottom:'-125px'}}>
        {localities.map((locality, index) => (
          <div 
            className="box"
            key={index}
            style={{ backgroundImage: `url(${locality.imageUrl})` }}
          >
            <div className="content">
              <h3>{locality.name}</h3>
              <button className="learn-more">{locality.safety}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularLocalities;
