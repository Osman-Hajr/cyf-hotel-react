import React from "react";
const TouristInfoCard = () => (
  <div className="row">
    <div className="card">
      <img
        src="https://glasgowtourismandvisitorplan.com/media/1960/university-of-glasgow.jpg?center=0.78021978021978,0.437956204379562&mode=crop&width=866&height=434&upscale=false"
        className="card-img-top"
        alt=""
      />
      <div className="card-body">
        <a
          href="https://peoplemakeglasgow.com/"
          className="btn btn-primary"
          target="_blank"
        >
          Visit Glasgow
        </a>
      </div>
    </div>
    <div className="card">
      <img
        src="https://assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdbimgs%2FMediaCity%20nav.jpg&action=FeaturedItems3x2"
        alt=""
        className="card-img-top"
      />
      <div className="card-body">
        <a
          href="https://www.visitmanchester.com/"
          target="_blank"
          className="btn btn-primary"
        >
          Visit Greater Manchester
        </a>
      </div>
    </div>
    <div className="card">
      <img
        src="https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg"
        className="card-img-top"
        alt=""
      />
      <div className="card-body">
        <a
          href="https://www.visitlondon.com/"
          target="_blank"
          className="btn btn-primary"
        >
          Visit London
        </a>
      </div>
    </div>
  </div>
);
export default TouristInfoCard;
