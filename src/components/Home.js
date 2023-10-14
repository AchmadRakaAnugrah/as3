import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AboutImage from '../About.png';
import Gambar2Image from '../Gambar2.png';
import Gambar3Image from '../Gambar3.png';
import Gambar4Image from '../Gambar4.png';
import Gambar5Image from '../Gambar5.png';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: 'Home',
    };
  }

  handleImageClick = (menu) => {
    this.setState({ activeMenu: menu });
  };

  render() {
    const { activeMenu } = this.state;

    return (
      <div style={containerStyle}>
        <div style={rowStyle}>
          <Link to="/about">
            <div>
              <img
                src={AboutImage}
                alt="Deskripsi Gambar 1"
                style={{
                  ...imageStyle,
                  ...(activeMenu === 'About' ? theme.activeImage : {}),
                }}
                onClick={() => this.handleImageClick('About')}
              />
              <p>About</p>
            </div>
          </Link>
          <Link to="/experience">
            <div>
              <img
                src={Gambar2Image}
                alt="Deskripsi Gambar 2"
                style={{
                  ...imageStyle,
                  ...(activeMenu === 'Experience' ? theme.activeImage : {}),
                }}
                onClick={() => this.handleImageClick('Experience')}
              />
              <p>Experience</p>
            </div>
          </Link>
          <Link to="/skills">
            <div>
              <img
                src={Gambar3Image}
                alt="Deskripsi Gambar 3"
                style={{
                  ...imageStyle,
                  ...(activeMenu === 'Skills' ? theme.activeImage : {}),
                }}
                onClick={() => this.handleImageClick('Skills')}
              />
              <p>Skills</p>
            </div>
          </Link>
        </div>
        <div style={rowStyle}>
          <Link to="/interest">
            <div>
              <img
                src={Gambar4Image}
                alt="Deskripsi Gambar 4"
                style={{
                  ...imageStyle,
                  ...(activeMenu === 'Interest' ? theme.activeImage : {}),
                }}
                onClick={() => this.handleImageClick('Interest')}
              />
              <p>Interest</p>
            </div>
          </Link>
          <Link to="/awards">
            <div>
              <img
                src={Gambar5Image}
                alt="Deskripsi Gambar 5"
                style={{
                  ...imageStyle,
                  ...(activeMenu === 'Awards' ? theme.activeImage : {}),
                }}
                onClick={() => this.handleImageClick('Awards')}
              />
              <p>Awards</p>
            </div>
          </Link>
        </div>
        <div>Halaman Utama</div>
      </div>
    );
  }
}

// Theme
const theme = {
  activeImage: {
    border: '2px solid #ffcc00',
  },
};

// Styles
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  maxWidth: '600px',
  margin: '0 auto',
};

const rowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
};

const imageStyle = {
  width: '200px',
  height: 'auto',
  margin: '10px',
};

export default Home;
