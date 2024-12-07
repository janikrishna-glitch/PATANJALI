import React from 'react';
import './Slider.css';

export default function Slider() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://www.patanjaliayurved.net/assets/category_image/1697528539naturalfoodproductsBanner.png"
            className="d-block w-100 carousel-image"
            alt="Slide 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://patanjaliglobal.org/public/themes/assets/images/banner-A.webp"
            className="d-block w-100 carousel-image"
            alt="Slide 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://e7.pngegg.com/pngimages/121/121/png-clipart-herbal-patanjali-ayurved-ayurveda-medicine-health-care-vivekanand-retail-herbal.png"
            className="d-block w-100 carousel-image"
            alt="Slide 3"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.patanjalifoods.com/img/slider/new_sld_04.jpg"
            className="d-block w-100 carousel-image"
            alt="Slide 4"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

