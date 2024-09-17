import React from "react";
import Slider from "react-slick"; // This should be from react-slick, not your Header
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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

const FlashCard = ({ productItems }) => {
  const navigate = useNavigate();

  // Handle click on a product card to navigate to the details page
  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  // Slider settings
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
        {productItems.map((item) => (
          <div
            key={item.id}
            className="box"
            onClick={() => handleClick(item.id)} // Navigate to product detail on click
          >
            <div className="product mtop">
              <div className="img">
                <span className="discount">{item.discount}% Off</span>
                <img src={item.cover} alt={item.name} />
              </div>
              <div className="product-details">
                <h5>{item.name}</h5>
                <div className="rate">⭐⭐⭐⭐⭐</div>
                <div className="price">
                  <h5>${item.price}.00</h5>
                  <button className="health-care-button">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FlashCard;

