import React from 'react';
import './Categories.css';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div className="categories">
            <div className="categories-header" style={{  }}>
                <hr />
                <i className="fa fa-filter"></i>
                <h3>Select Categories</h3>
            </div>

            <div className="item" style={{ justifyContent: 'normal' }}>
            <div className="ct1 category-item">
            <ul>
                <li>
                    <img src="https://www.patanjaliayurved.net/media/images/health-care-icon.webp" alt='' />
                    <Link  to='/Health'  className="category-link" 
                        style={{listStyle:'none',textDecoration:'none',color:'#000'}} > Health
                    </Link>
                </li>
            </ul>
        </div>

                <div className="ct2 category-item">
                    <ul>
                        <li>
                            <img src="https://www.patanjaliayurved.net/media/images/natural-personal-care.webp" alt='' />
                            <Link to='/NaturalPersonalCare' className="category-link" style={{listStyle:'none',textDecoration:'none',color:'#000'}}>Natural Personal Care</Link>
                        </li>
                    </ul>
                </div>

                <div className="ct3 category-item">
                    <ul>
                        <li>
                            <img src="https://www.patanjaliayurved.net/media/images/medicine-icon.webp" alt='' />
                            <Link to='/Medicine' className="category-link" style={{listStyle:'none',textDecoration:'none',color:'#000'}}>Medicine</Link>
                        </li>
                    </ul>
                </div>

                <div className="ct4 category-item">
                    <ul>
                        <li>
                            <img src="https://www.patanjaliayurved.net/media/images/naturals-icon.webp" alt='' />
                            <Link to='/Nutraceuticals' className="category-link" style={{listStyle:'none',textDecoration:'none',color:'#000'}}>Nutraceuticals</Link>
                        </li>
                    </ul>
                </div>

                <div className="ct5 category-item">
                    <ul>
                        <li>
                            <img src="https://www.patanjaliayurved.net/media/images/paridhan-icon.webp" alt='' />
                            <Link to='/Paridhan' className="category-link" style={{listStyle:'none',textDecoration:'none',color:'#000'}}>Paridhan</Link>
                        </li>
                    </ul>
                </div>

                <div className="ct6 category-item">
                    <ul>
                        <li>
                            <img src="https://www.patanjaliayurved.net/media/images/publication-icon.webp" alt='' />
                            <Link to='/Publication' className="category-link" style={{listStyle:'none',textDecoration:'none',color:'#000'}}>Publication</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Categories;





