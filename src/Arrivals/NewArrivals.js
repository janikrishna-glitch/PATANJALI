




import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './NewArrivals.css';

const newArrivals = [
  {
    id: 1,
    name: 'Combo Pat. Nutrela Vitamin D2K + B12 (60N+30)',
    image: 'https://www.patanjaliayurved.net/assets/product_images/thumbs/240_240_1722751639omegadailyactivecombo.png', 
    price: '₹360',
    mrp: '₹400',
    weight: '100g',
    rating: 0,
    stock: 'Out of stock',
  },
  {
    id: 2,
    name: 'Combo Pat. Nutrela Daily Active + Omega 3 Softgel (30N+60N)',
    image: 'https://www.patanjaliayurved.net/assets/product_images/thumbs/240_240_1725078845vitamincandzinc.png',
    price: '₹855',
    mrp: '₹950',
    weight: '165g',
    rating: 5,
    stock: 'Buy Now',
  },

  {
       id: 3,
        name: 'Combo Pat. Nutrela Pat.Nut. Vit.C+Zn (Pack of 2)',
         image: 'https://www.patanjaliayurved.net/assets/product_images/thumbs/240_240_17250115851.png',
        price: '₹450',
        mrp: '₹500',
        weight: '110g',
        rating: 4,
        stock: 'Buy Now',
      },
      {
        id: 4,
        name: 'Combo Pat. Nutrela Pat.Nut.Vit.B-Complex (Pack of 2)',
        image: 'https://www.patanjaliayurved.net/assets/product_images/thumbs/240_240_1723612002weightgainchocflavor1.png',
        price: '₹540',
        mrp: '₹600',
        weight: '100g',
        rating: 3,
        stock: 'Out of stock',
      },
      {
        id: 5,
        name: 'KESH KANTI ALOEVERA HAIR CLEANSER',
        image: 'https://www.patanjaliayurved.net/assets/product_images/thumbs/240_240_17250874481.png',
        price: '₹540',
        mrp: '₹600',
        weight: '100g',
        rating: 3,
        stock: 'Out of stock',
      },

      {
        id: 5,
        name: 'Combo khand 1kg (pack of 2)',
        image: 'https://www.patanjaliayurved.net/assets/product_images/thumbs/240_240_1726029829khand.png',
        price: '₹220',
  
        weight: '2kg',
        rating: 3,
        stock: 'Buy now',
      },

      {
        id: 5,
        name: 'Patanjali Soya chunk',
        image: 'https://www.patanjaliayurved.net/assets/product_images/thumbs/240_240_1724144053soyachunks40g1.png',
        price: '₹10',
  
        weight: '40g',
        rating: 3,
        stock: 'Buy now',
      },


      {
        id: 5,
        name: 'Patanjali Amla chandy',
        image: 'https://www.patanjaliayurved.net/assets/product_images/thumbs/240_240_1724148210amlacandy250g1.png',
        price: '₹190',
  
        weight: '250g',
        rating: 3,
        stock: 'Buy now',

      },

      {
        id: 5,
        name: 'KESH KANTI ANTI-DANDRUFF HAIR CLEANSER',
        image: 'https://www.patanjaliayurved.net/assets/product_images/400x500/1725086518ad1.png',
        price: '₹650',
  
        weight: '650ml',
        rating: 3,
        stock: 'Buy now',

      },

      {
        id: 5,
        name: 'PAT.NU GREEN PLANT PROTEIN CHOC FLV',
        image: 'https://www.patanjaliayurved.net/assets/product_images/thumbs/240_240_1722656315GreenPlantProtein500g1.png',
        price: '₹099',
  
        weight: '500g',
        rating: 3,
        stock: 'Buy now',

      }


];

// Custom Arrow components for the slider
const NextArrow = ({ onClick }) => (
  <div className="arrow next" onClick={onClick}>
    &#8250;
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="arrow prev" onClick={onClick}>
    &#8249;
  </div>
);

const NewArrivals = () => {
  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="new-arrivals">
      <h2 className="new-arrivals-title">New Arrivals</h2>

      <Slider {...sliderSettings} className="new-arrivals-slider">
        {newArrivals.map((item) => (
          <div key={item.id} className="arrival-card">
            {/* Use Link to navigate to the details page */}
            <Link to={`/product/${item.id}`}>
              <img src={item.image} alt={item.name} className="arrival-image" />
              <div className="arrival-info">
                <p className="arrival-name" style={{color:'#333'}}>{item.name}</p>
                <p className="arrival-weight">{item.weight}</p>
                <div className="arrival-price">
                  <span className="arrival-price-current">{item.price}</span>
                  <span className="arrival-price-mrp">M.R.P:{item.mrp}</span>
                </div>
                <div className="arrival-rating">
                  {'★'.repeat(item.rating) + '☆'.repeat(5 - item.rating)}
                </div>
                <button className={`arrival-button ${item.stock === 'Out of stock' ? 'out-of-stock' : 'buy-now'}`}>
                  {item.stock}
                </button>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewArrivals;
