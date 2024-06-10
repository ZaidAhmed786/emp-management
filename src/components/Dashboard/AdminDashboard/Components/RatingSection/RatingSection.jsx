import React, { useState } from "react";
import "./RatingSection.css";
import { RatingSectionData } from "../../Content";

const RatingSection = () => {
  const [progress, setProgress] = useState(70);

  const handleDrag = (e) => {
    const rect = e.target.parentNode.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newProgress = Math.min(
      100,
      Math.max(0, (offsetX / rect.width) * 100)
    );
    setProgress(newProgress);
  };

  const handleMouseDown = (e) => {
    document.addEventListener("mousemove", handleDrag);
    document.addEventListener(
      "mouseup",
      () => {
        document.removeEventListener("mousemove", handleDrag);
      },
      { once: true }
    );
  };

  return (
    <section className="bg-white pb-5">
      <div className="container" style={{paddingTop: '20px'}}>
        <div className="row">
          {RatingSectionData.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12 ">
              <div className="rating-content-main-rapo p-4 bg-white">
                <div className="rating-heading-mini-txt-rapo d-flex justify-content-between">
                  <h6 className="text-dark">{item.topheading}</h6>
                  <p 
                    style={{
                      color: item.minitext.startsWith("+") ? "green" : "red",
                    }}
                  >
                    {item.minitext}
                  </p>
                </div>
                <div className="rating-heading-rapo">
                  <h3 className="text-dark">{item.heading}</h3>
                </div>
                <div className="progress-bar-txt-rapo">
                  <div
                    className="progress-bar-container"
                    onMouseDown={handleMouseDown}
                  >
                    <div
                      className="progress-bar-fill bg-orange"
                      style={{ width: `${progress}%` }}
                    ></div>
                    <div
                      className="progress-bar-handle"
                      style={{ left: `${progress}%` }}
                    ></div>
                  </div>
                  <p className="text-dark">{item.shortinfo}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RatingSection;
