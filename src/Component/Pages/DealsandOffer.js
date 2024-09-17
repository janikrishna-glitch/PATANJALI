// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import './DealsandOffer.css';



// const productItems = [
//   {
//     id: 1,
//     discount: 50,
//     cover: "https://www.patanjaliayurved.net/assets/product_images/thumbs/240_240_16912208231.png",
//     name: "Zinc plus",
//     price: 100,
//   },
//   {
//     id: 2,
//     discount: 40,
//     cover: "https://www.patanjaliayurved.net/assets/product_images/thumbs/240_240_16912199231.png",
//     name: "Patanjali Umang",
//     price: 20,
//   },
//   {
//     id: 3,
//     discount: 40,
//     cover: "https://www.patanjaliayurved.net/assets/product_images/thumbs/240_240_1691220538Pfluroescense1.png",
//     name: "floresence",
//     price: 200,
//   },
//   {
//     id: 4,
//     discount: 40,
//     cover: "https://www.patanjaliayurved.net/assets/product_images/thumbs/240_240_1700202042aloeveragel150ml1.png",
//     name: "Alovera facewash",
//     price: 50,
//   },
//   {
//     id: 5,
//     discount: 50,
//     cover: "https://www.patanjaliayurved.net/assets/product_images/thumbs/240_240_17198156391.png",
//     name: "patanjali choice powder",
//     price: 100,
//   },
//   {
//     id: 6,
//     discount: 50,
//     cover: "https://www.patanjaliayurved.net/assets/product_images/thumbs/240_240_16888099051.png",
//     name: "patanjali nuetera",
//     price: 100,
//   },

//   {
//     id: 7,
//     discount: 50,
//     cover: "https://www.patanjaliayurved.net/assets/product_images/thumbs/240_240_1717069051MensCharcoal100g1.png",
//     name: "patanjali facewash",
//     price: 100,
//   },
//   {
//     id: 8,
//     discount: 50,
//     cover: "https://www.patanjaliayurved.net/assets/product_images/thumbs/240_240_16888099051.png",
//     name: "patanjali nuetera",
//     price: 100,
//   },
// ];



// const SampleNextArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <div className='control-btn' onClick={onClick}>
//       <button className='next'>
//         <i className='fa fa-long-arrow-alt-right'></i>
//       </button>
//     </div>
//   );
// };

// const SamplePrevArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <div className='control-btn' onClick={onClick}>
//       <button className='prev'>
//         <i className='fa fa-long-arrow-alt-left'></i>
//       </button>
//     </div>
//   );
// };


// const FlashCard = ({ productItems }) => {
  

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//   };

//   return (

    
//     <div className='flashCard'>
//       <h1 className='flashCard-title'>Top Deals & Offers</h1>
//     <Slider {...settings} className='deals-slider'>
//         {productItems.map((item) => (
//           <div key={item.id} className='box'>
//             <div className='product mtop'>
//               <div className='img'>
//                 <span className='discount'>{item.discount}% Off</span>
//                 <img src={item.cover} alt={item.name} />
//                </div>
//               <div className='product-details'>
//                 <h5>{item.name}</h5>
//                 <div className='rate'>
//                 ⭐⭐⭐⭐⭐
                  
//                 </div>
//                 <div className='price'>
//                   <h5>${item.price}.00</h5>

//                   <button className="health-care-button" >Buy Now</button>

//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// const ParentComponent = () => {
//   const addToCart = (item) => {
//     console.log("Item added to cart:", item);
//   };

//   return (
//     <div>
//       <FlashCard productItems={productItems} addToCart={addToCart} />
//     </div>
//   );
// };

// export default ParentComponent;



import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import './DealsandOffer.css';

import { FaEye, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from './CartSlice'; // Assuming you have a CartSlice setup for Redux actions


const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};

// Merged FlashCard component with HealthCare features
const FlashCard = () => {
  const [healthItems, setHealthItems] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3001/dealsandoffer')
      .then(response => {
        setHealthItems(response.data);
      })
      .catch(error => {
        console.error("Error fetching the health care items!", error);
      });
  }, []);

  const handleBuyNowClick = (item) => {
    dispatch(addToCart(item)); // Add the item to the cart
  };

  const handleItemClick = (item) => {
    navigate(`/health/${item.id}`, { state: { item } });
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="flashCard">
      <h1 className="flashCard-title">Top Deals & Offers</h1>
      <Slider {...settings} className="deals-slider">
        {healthItems && healthItems.length > 0 ? (
          healthItems.map(item => (
            <div key={item.id} className="box">
              <div className="product mtop" onClick={() => handleItemClick(item)}>
                <div className="img">
                  <span className="discount">{item.offer}% Off</span>
                  <img src={item.image} alt={item.name} className="health-care-image" />
                </div>
                <div className="product-details">
                  <h5>{item.name}</h5>
                  <div className="rate">⭐⭐⭐⭐⭐</div>
                  <div className="price">
                    <h5>₹{item.price}.00</h5>
                    <button className="health-care-button" onClick={() => handleBuyNowClick(item)}>Buy Now</button>
                  </div>
                  <div className="health-care-icons">
                    <FaEye className="health-care-icon" />
                    <FaHeart className="health-care-icon" />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No items available.</p>
        )}
      </Slider>
    </div>
  );
};

export default FlashCard;
