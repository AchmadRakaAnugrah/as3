import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AboutImage from '../About.png';
import ExperienceImage from '../Experience.png';
import SkillsImage from '../Skills.png';
import InterestImage from '../Interest.png';
import AwardsImage from '../Awards.png';

class Home extends Component {
  render() {
    return (
      <div style={containerStyle}>
        <div style={rowStyle}>
          {renderMenuItem("About", AboutImage, "/about")}
          {renderMenuItem("Experience", ExperienceImage, "/experience")}
          {renderMenuItem("Skills", SkillsImage, "/skills")}
        </div>
        <div style={rowStyle}>
          {renderMenuItem("Interest", InterestImage, "/interest")}
          {renderMenuItem("Awards", AwardsImage, "/awards")}
        </div>
      </div>
    );
  }
}

const renderMenuItem = (label, imageSrc, to) => (
  <Link to={to} style={menuItemStyle}>
    <img src={imageSrc} alt={label} style={imageStyle} />
    <p>{label}</p>
  </Link>
);

// Styles
const containerStyle = {
  // Sesuaikan gaya container jika diperlukan
};

const rowStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px', // Sesuaikan jarak yang diinginkan antar item
};

const menuItemStyle = {
  textAlign: 'center',
  textDecoration: 'none',
  color: '#333', // Sesuaikan warna teks jika diperlukan
};

const imageStyle = {
  width: '50%', // Sesuaikan ukuran gambar jika diperlukan
};

export default Home;
