import React,{useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from "react-responsive-carousel";
import './Cardslider.css';
import { useNavigate } from 'react-router-dom';
function Cardslider  () {
  const navigate=useNavigate();
  const cards = [
    {  role: "Designer" },
    {  role: "Developer" },
    {  role: "Marketer" },
    {  role: "Gamer" },
    { role: "Editor" },
  ];
  const handleclick=()=>{
    navigate('/Student/Jobdetails')
  }
  return (
    <div className="container">
      <div className="filters">
       <h4 id="h">Filters</h4>
       <label htmlFor="Location">Location</label>
       <select name="" id=""></select>
       <label htmlFor="Pay">Pay</label>
       <select name="" id="">
        <option value="">below 1K</option>
        <option value="">1k-5k</option>
        <option value="">above 5k</option>
       </select>
      </div>
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={33.33}
        emulateTouch={true} // Added for better touch device experience
        autoPlay={true} // AutoPlay the carousel
        interval={3000}
      >
        {cards.map((card, index) => (
          <div key={index} className="card-item" >
            <div className="card-link">
              <p className={`badge badge-${card.role.toLowerCase()}`}>{card.role}</p>
              <h2 className="card-title">
              company name
              </h2>
              <p className="w">
                location
              </p>
             <h4 className="aa" onClick={handleclick}>check details</h4>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Cardslider;
