import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const categories = [
  'Natural Health Care',
  'Natural Food Products',
  'Ayurvedic Medicine',
  'Herbal Home Care',
  'Natural Personal Care',
  'Patanjali Publication',
  'Nutraceuticals',
  'Paridhan',
  'Credit Card',
  'Swadeshi Samridhi Card'
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>All Categories</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={`/categories/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
