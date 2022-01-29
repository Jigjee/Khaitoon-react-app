import React from "react";
import "./Banner.css";

let bannerData = {
  title: "Khaitoon landing page",
  desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed perferendis maxime quos molestias quasi error animi laborum quam voluptate tenetur. Velit molestiae libero tempora debitis cumque nihil laboriosam illum animi?",
};

function Banner() {
  return (
    <div className="banner-bg">
      <div className="container">
        <div className="banner-con">
          <div className="banner-text">
            <h1>{bannerData.title}</h1>
            <p>{bannerData.desc}</p>
            <a href="#" className="banner-btn">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
