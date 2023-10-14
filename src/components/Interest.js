import React from 'react';
import CodingImage from '../Coding.png';
import TravelImage from '../Travel.png';
import CookingImage from '../Cooking.png';

const Interest = () => {
  const interests = [
    { name: 'Coding', image: CodingImage, description: 'Passionate about writing clean and efficient code.' },
    { name: 'Travel', image: TravelImage, description: 'Love exploring new places and experiencing different cultures.' },
    { name: 'Cooking', image: CookingImage, description: 'Enjoy experimenting with ingredients and creating delicious meals.' },
    // Add more interests as needed
  ];

  return (
    <div>
      <h2>Interests</h2>

      <div style={interestContainer}>
        {interests.map((interest, index) => (
          <div key={index} style={interestItem}>
            <img src={interest.image} alt={interest.name} style={imageStyle} />
            <h3>{interest.name}</h3>
            <p>{interest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles
const interestContainer = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
};

const interestItem = {
  textAlign: 'center',
  margin: '20px',
  maxWidth: '300px',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '10px',
};

export default Interest;
