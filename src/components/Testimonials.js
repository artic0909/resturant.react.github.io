import React from "react";
import ProfilePic from "../Assets/linkedinProfile.png";
import { AiFillStar } from "react-icons/ai";

const Testimonials = () => {
    const iam={
        height:'100px',
        borderRadius:'50%'
    }
  return (
    <div id="testimonials" className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img style={iam} className="iam" src={ProfilePic} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Saklin Mustak</h2>
      </div>
    </div>
  );
};

export default Testimonials;
