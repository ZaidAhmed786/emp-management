import React from "react";
import avatar from "../images/avatar-02.jpg";
import "./ProfileFristSection.css";
import { ProfileFristSectionData } from "../Context";

const ProfileFristSection = () => {
  return (
    <>
      <section className="ProfileFristSection bg-dark">
        <div className="container ProfileFristSectioncontainer">
          <div className="row">
            <div className="col-lg-7 d-flex mt-2">
              <div className="image">
                <img className="img-fluid rounded-pill" src={avatar} alt="" />
              </div>
              <div className="text-main-rapo px-3">
                <div className="name-txt">
                  <h3>John Doe</h3>
                  <p>UI/UX Design Team</p>
                </div>
                <div className="small-txt">
                  <p>Web Designer</p>
                </div>
                <div className="info-txt">
                  <h6>Employee ID : CLT-0001</h6>
                  <p>Date of Join : 1st Jan 2013</p>
                </div>
                <div className="button mb-5">
                  <button type="button" className="btn ProfileFristSection-btn">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-5 line">
              <div className="text-main-rapo mt-3">
                {ProfileFristSectionData.map((item, index) => (
                  <div
                    key={index}
                    className="info-txt-rapo d-flex align-items-center"
                  >
                    <div className="info-txt-rapo-h4 d-flex">
                      <h6>{item.heading}</h6>
                    </div>
                    <div className="d-grid text-main-rap">
                      <div className="image-txt-rapo d-flex">
                        {item.image ? (
                          <img
                            className="small-img rounded-pill px-2"
                            src={item.image}
                            alt=""
                          />
                        ) : null}
                        <a href="#">{item.textlink}</a>
                        <p>{item.text}</p>
                        {item.icon ? (
                          <a href="#" className="icon">
                            {item.icon}
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileFristSection;
