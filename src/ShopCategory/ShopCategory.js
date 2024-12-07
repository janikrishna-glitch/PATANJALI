import React, { useEffect, useState } from 'react';
import './Category.css';
import Slider from 'react-slick';
import axios from 'axios'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HealthDetails'

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);

  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://patanjali-project-1.onrender.com/ShopCategory');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    
    fetchCategories();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="category-page">
      <h2 className="category-title"> Shop By Category</h2>
      {categories.length > 0 ? (
        <Slider {...settings} className="category-carousel">
          {categories.map((category) => (
            <div className="category-card" key={category.id}>
              <img
                src={category.image}
                alt={category.name}
                className="category-image"
              />
              <p className="category-name">{category.name}</p>
            </div>
          ))}
        </Slider>
      ) : (
        <p>Loading categories...</p>
      )}

      <div className='img' style={{marginTop: '100px', width: '100%', height: 'auto'}}>
      <img 
        src='https://www.patanjaliayurved.net/media/images/organic-product-baner.jpg' 
        alt='img' 
        style={{width: '100%', height: 'auto'}}
      />
    </div>
    
    </div>
  );
};

export default CategoryPage;



