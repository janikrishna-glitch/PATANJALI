import React from 'react';
import './Slider.css';

export default function Slider() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://www.patanjaliayurved.net/assets/category_image/1697528539naturalfoodproductsBanner.png" className="d-block w-100 carousel-image" alt="Slide 1"/>
        </div>
        <div className="carousel-item">
          <img src="https://www.patanjaliayurved.net/assets/home_slider/1719399524nutrelasoyabanner.jpg" className="d-block w-100 carousel-image" alt="Slide 2"/>
        </div>
        <div className="carousel-item">
          <img src="https://www.patanjaliayurved.net/assets/home_slider/1724329219Copper_Ware_Banner.jpg" className="d-block w-100 carousel-image" alt="Slide 3"/>
        </div>
        <div className="carousel-item">
          <img src="https://www.patanjaliayurved.net/assets/home_slider/1717743145Home_Slider__1_.jpg" className="d-block w-100 carousel-image" alt="Slide 4"/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

