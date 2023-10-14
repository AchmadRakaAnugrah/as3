import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Interest from './components/Interest';
import Awards from './components/Awards';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: 'Home',
    };
  }

  handleMenuClick = (menu) => {
    this.setState({ activeMenu: menu });
  };

  render() {
    const { activeMenu } = this.state;

    return (
      <Router>
        <div>
          {/* Header */}
          <header style={headerStyle}>
          <h1>Walcome</h1>
            <h2>My Portofolio</h2>
            <nav>
              <ul style={navListStyle}>
                <li style={navListItemStyle}>
                  <Link
                    to="/"
                    style={activeMenu === 'Home' ? activeLinkStyle : navLinkStyle}
                    onClick={() => this.handleMenuClick('Home')}
                  >
                    Home
                  </Link>
                </li>
                <li style={navListItemStyle}>
                  <Link
                    to="/about"
                    style={activeMenu === 'About' ? activeLinkStyle : navLinkStyle}
                    onClick={() => this.handleMenuClick('About')}
                  >
                    About
                  </Link>
                </li>
                <li style={navListItemStyle}>
                  <Link
                    to="/experience"
                    style={activeMenu === 'Experience' ? activeLinkStyle : navLinkStyle}
                    onClick={() => this.handleMenuClick('Experience')}
                  >
                    Experience
                  </Link>
                </li>
                <li style={navListItemStyle}>
                  <Link
                    to="/skills"
                    style={activeMenu === 'Skills' ? activeLinkStyle : navLinkStyle}
                    onClick={() => this.handleMenuClick('Skills')}
                  >
                    Skills
                  </Link>
                </li>
                <li style={navListItemStyle}>
                  <Link
                    to="/interest"
                    style={activeMenu === 'Interest' ? activeLinkStyle : navLinkStyle}
                    onClick={() => this.handleMenuClick('Interest')}
                  >
                    Interest
                  </Link>
                </li>
                <li style={navListItemStyle}>
                  <Link
                    to="/awards"
                    style={activeMenu === 'Awards' ? activeLinkStyle : navLinkStyle}
                    onClick={() => this.handleMenuClick('Awards')}
                  >
                    Awards
                  </Link>
                </li>
              </ul>
            </nav>
          </header>

          {/* Content */}
          <div style={contentStyle}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/interest" element={<Interest />} />
              <Route path="/awards" element={<Awards />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

// Styles
const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '1rem',
  textAlign: 'center',
};

const navListStyle = {
  listStyle: 'none',
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
  gap: '15px', // Sesuaikan jarak yang diinginkan
  flexWrap: 'wrap', // Menangani wrap elemen pada layar kecil
};

const navListItemStyle = {
  marginRight: '15px', // Sesuaikan jarak yang diinginkan
};

const navLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
};

const activeLinkStyle = {
  color: '#ffcc00', // Warna teks untuk menu yang aktif
  textDecoration: 'none',
};

const contentStyle = {
  marginTop: '20px',
};

export default App;
