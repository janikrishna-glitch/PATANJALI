// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import axios from "axios";
// import './DealsandOffer.css'
// import { FaEye, FaHeart } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addToCart } from './CartSlice'; // Assuming you have a CartSlice setup for Redux actions

// // Arrow controls for the slider
// const SampleNextArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <div className="control-btn" onClick={onClick}>
//       <button className="next">
//         <i className="fa fa-long-arrow-alt-right"></i>
//       </button>
//     </div>
//   );
// };

// const SamplePrevArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <div className="control-btn" onClick={onClick}>
//       <button className="prev">
//         <i className="fa fa-long-arrow-alt-left"></i>
//       </button>
//     </div>
//   );
// };

// // Merged FlashCard component with HealthCare features
// const FlashCard = () => {
//   const [healthItems, setHealthItems] = useState([]);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     axios.get('http://localhost:3001/dealsandoffer')
//       .then(response => {
//         setHealthItems(response.data);
//       })
//       .catch(error => {
//         console.error("Error fetching the health care items!", error);
//       });
//   }, []);

//   const handleBuyNowClick = (item) => {
//     // dispatch(addToCart(item)); 
//     navigate('/Payment');
//   };

//   const handleItemClick = (item) => {
//     console.log(item);  
//     navigate(`/health/${item.id}`, { state: { item } });
//   };
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
//     <div className="flashCard">
//       <h1 className="flashCard-title" style={{color:'#212529'}}>Top Deals & Offers</h1>
//       <Slider {...settings} className="deals-slider">
//         {healthItems && healthItems.length > 0 ? (
//           healthItems.map(item => (
//             <div key={item.id} className="box">
//               <div className="product mtop" onClick={() => handleItemClick(item)}>
//                 <div className="img">
//                   <span className="discount">{item.offer}10% Off</span>
//                   <img src={item.image} alt={item.name} className="health-care-image" />
//                 </div>
//                 <div className="product-details">
//                   <h5>{item.name}</h5>
//                   <div className="rate">⭐⭐⭐⭐⭐</div>
//                   <div className="price">
//                     <h5>₹{item.price}.00</h5>
                
//                   </div>

//                   <div className="action-button">
//   <div className="icon-section">
//     <FaEye className="health-care-icon" />
//     <FaHeart className="health-care-icon" />
//   </div>
//   <button className="buy-now-button" onClick={()=> handleBuyNowClick(item)}>Buy Now</button>
// </div>
                 
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No items available.</p>
//         )}
//       </Slider>
//     </div>
//   );
// };

// export default FlashCard;



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

// Arrow controls for the slider
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
    axios.get('https://patanjali-project-1.onrender.com/dealsandoffer')
      .then(response => {
        setHealthItems(response.data);
      })
      .catch(error => {
        console.error("Error fetching the health care items!", error);
      });
  }, []);

  const isLoggedIn = () => {
    // Here, check if the user is logged in.
    // This could be a simple check for a token in localStorage or a Redux state.
    return localStorage.getItem('userToken') !== null;
  };

  const handleBuyNowClick = (item) => {
    if (!isLoggedIn()) {
      // If not logged in, navigate to the login page
      navigate('/login');
    } else {
      // If logged in, add the item to the cart and navigate to the payment page
      dispatch(addToCart(item));
      navigate('/Payment');
    }
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
      <h1 className="flashCard-title" style={{ color: '#212529' }}>Top Deals & Offers</h1>
      <Slider {...settings} className="deals-slider">
        {healthItems && healthItems.length > 0 ? (
          healthItems.map(item => (
            <div key={item.id} className="box">
              <div className="product mtop" onClick={() => handleItemClick(item)}>
                <div className="img">
                  <span className="discount">{item.offer}10% Off</span>
                  <img src={item.image} alt={item.name} className="health-care-image" />
                </div>
                <div className="product-details">
                  <h5>{item.name}</h5>
                  <div className="rate">⭐⭐⭐⭐⭐</div>
                  <div className="price">
                    <h5>₹{item.price}.00</h5>
                  </div>
                  <div className="action-button">
                    <div className="icon-section">
                      <FaEye className="health-care-icon" />
                      <FaHeart className="health-care-icon" />
                    </div>
                    <button className="buy-now-button" onClick={() => handleBuyNowClick(item)}>Buy Now</button>
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
