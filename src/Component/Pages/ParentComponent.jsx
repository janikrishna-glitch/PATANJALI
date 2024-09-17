import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn next" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn prev" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};

const ParentComponent = () => {
  const [healthItems, setHealthItems] = useState([]);
  const [count, setCount] = useState(0);
  const history = useNavigate();

  useEffect(() => {
    // Fetch health items data from JSON Server
    axios.get("http://localhost:3000/healthItems")
      .then((response) => {
        setHealthItems(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the health items data!", error);
      });
  }, []);

  const increment = () => {
    setCount(count + 1);
  };

  const handleItemClick = (item) => {
    history.push(`/health/${item.id}`, { item });
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
      <Slider {...settings}>
        {healthItems.map((item) => (
          <div key={item.id} className="box" onClick={() => handleItemClick(item)}>
            <div className="Health mtop">
              <div className="img">
                <span className="discount">{item.discount}</span>
                <img src={item.cover} alt={item.name} />
                <div className="Health-like">
                  <label>{count}</label> <br />
                  <i className="fa-regular fa-heart" onClick={increment}></i>
                </div>
              </div>
              <div className="Health-details">
                <h3>{item.name}</h3>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price">
                  <h4>{item.price}</h4>
                  <h1>Buy now</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ParentComponent;
