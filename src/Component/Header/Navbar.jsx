



import React, { useState } from 'react';
import './Navbar.css'; 
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);


  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="Navbar">
      <div className="navbar-content">
        <div className="left">
          <div className="category">
            <button
              className="btn btn-outline-success me-2"
              type="button"
              onClick={toggleSidebar}  // Add click handler to toggle the sidebar
              style={{ marginLeft: '290px', height: '50px', width: '200px', fontSize: '17px', borderRadius: '3px solid white' }}>
              <i className="fa-solid fa-bars" style={{ marginRight: '10px' }}></i>
              All Category
            </button>
          </div>
          <ul className="menu-items" style={{ gap: '10px' }}>
          <Link to='/Medicine' className="menu-link">Aayurvedmedicine</Link>
          <Link to='/Food' className="menu-link">Foods</Link>
          <Link to='/nutraceuticals' className="menu-link">Nutraceutical</Link>
          <Link to='/NaturalPersonalCare' className="menu-link">Personalcare</Link>
          <Link to="/Health" className="menu-link">Healthcare</Link>
          <Link to='/Paridhan' className="menu-link">Paridhan</Link>
          <Link to='/About' className="menu-link">About us</Link>
        </ul>
        
        </div>
      </div>

      {/* Sidebar Component */}
      {isSidebarVisible && (
        <div className="sidebar" style={{ position: 'fixed', top: 0, left: 0, height: '100%', width: '250px', backgroundColor: '#fff', boxShadow: '2px 0 5px rgba(0,0,0,0.5)', overflowY: 'auto' }}>
          <ul className="sidebar-menu" style={{ listStyleType: 'none', padding: '10px' }}>
            <li><Link to='/Health'>Natural Health Care</Link></li>
            <li><Link to='/Food'>Natural Food Products</Link></li>
            <li><Link to='/Medicine'>Ayurvedic Medicine</Link></li>
            <li><Link to='/Health care'>Herbal Home Care</Link></li>
            <li><Link to='/NaturalPersonalCare'>Natural Personal Care</Link></li>
            <li><Link to='/Publication'>Patanjali Publication</Link></li>
            <li><Link to='/ Nutraceuticals'>Nutraceuticals</Link></li>
            <li><Link to='/Paridhan'>Paridhan</Link></li>
            <li><Link to='/category/copperware'>Copperware</Link></li>
            <li><Link to='/category/dairy-frozen-items'>Dairy & Frozen Items</Link></li>
            <li><Link to='/category/stationery'>Stationery</Link></li>
            <li><Link to='/category/organic-agri-products'>Organic Agri Products</Link></li>
            <li><Link to='/About'>About us</Link></li>
            <li><Link to='/category/swadeshi-samridhi-card'>Swadeshi Samridhi Card</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
}
