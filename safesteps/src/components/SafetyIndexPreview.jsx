
// components/SafetyIndexPreview.js
import React, { useState } from 'react';
import SafetyScoreModal from './SafetyScoreModal';
import './SafetyIndexPreview.css';

function SafetyIndexPreview() {
  const [selectedCity, setSelectedCity] = useState('');
  const [localities, setLocalities] = useState([]);
  const [selectedLocality, setSelectedLocality] = useState('');
  const [safetyScore, setSafetyScore] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cities = {
    Delhi: [
      { name: 'Connaught Place', score: 9 },
      { name: 'Saket', score: 9 },
      { name: 'Karol Bagh', score: 3 },
      { name: 'Paharganj', score: 3 },
      { name: 'Vasant Kunj', score: 10 },
    ],
    Mumbai: [
      { name: 'Colaba', score: 9 },
      { name: 'Bandra', score: 10 },
      { name: 'Andheri', score: 9 },
    ],
  };

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

  return (
    <section className="safety-index-preview">
      <h2>Safety Index Preview</h2>
      <div className="map-container">
        {/* Replace with an actual map component or image */}
        <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90849.73676212145!2d77.0755829428175!3d28.5461825351399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce22d407e1085%3A0x75857374e839e2ed!2sGreater%20Kailash%2C%20New%20Delhi%2C%20Delhi%20110048!5e0!3m2!1sen!2sin!4v1725206368314!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        >
        </iframe>
        </div>
      </div>
      <div className="controls">
        <select onChange={handleCityChange}>
          <option>Select City</option>
          <option>Delhi</option>
          <option>Mumbai</option>
        </select>
        <select
          value={selectedLocality}
          onChange={handleLocalityChange}
          disabled={!selectedCity}
        >
          <option>Select Locality</option>
          {localities.map((locality, index) => (
            <option key={index}>{locality.name}</option>
          ))}
        </select>
      </div>
      <SafetyScoreModal
        isOpen={isModalOpen}
        onClose={closeModal}
        locality={selectedLocality}
        score={safetyScore}
      />
    </section>
  );
}

export default SafetyIndexPreview;

