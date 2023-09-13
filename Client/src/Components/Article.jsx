import React from "react";

const article = () => {
  return (
    <div>
      <div className="card w-96 bg-base-100 m-5 mt-10 shadow-2xl image-full">
        <figure>
          <img
            src="https://cms.thedigitalacademy.co.za/uploads/IMG_20191021_113701_7bf3607384.jpg"
            alt="Digital Aacademy"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Professionals ready to elevate your business to the next level</h2>
          <p className="">We assist companies in identifying and acquiring top talent through various means such as passive sourcing, nurturing potential candidates, and referral recruitment.</p>
        </div>
      </div>
      <div className="card-actions justify-center">
        <button className="btn btn-neutral rounded-full h-32 w-32">Hire Candidate</button>
      </div>
    </div>
  );
};

export default article;
