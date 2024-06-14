import React, { useRef } from "react";
import avatar from "../../../images/avatar-02.jpg";
import "./ProfileFristSection.css";
import data  from "../../../../data.json";
import classNames from 'classnames';
import { MdOutlineEdit } from "react-icons/md";
import PopUp from "../../../PopUp/PopUp";

const ProfileFristSection = () => {
  const modalButtonRef = useRef(null);

  const handleIconClick = () => {
    if (modalButtonRef.current) {
      modalButtonRef.current.click();
    }
  };
  const { ProfileFristSectionData } = data;
  const icons = [
    <MdOutlineEdit />
  ]
  return (
    <>
      <section className="ProfileFristSection px-3">
        <div className="container ProfileFristSectioncontainer">
          <div className="row">
            <div className="col-lg-7 d-flex  bg-white">
              <div className="image mt-4">
                <img className="img-fluid rounded-pill" src={avatar} alt="" />
              </div>
              <div className="text-main-rapo px-3 mt-4">
                <div className="name-txt ">
                  <h3>John Doe</h3>
                  <p className="text-muted">UI/UX Design Team</p>
                </div>
                <div className="small-txt">
                  <p className="text-muted">Web Designer</p>
                </div>
                <div className="info-txt">
                  <h6 className="text-dark">Employee ID : CLT-0001</h6>
                  <p className="text-muted">Date of Join : 1st Jan 2013</p>
                </div>
                <div className="button mb-5">
                  <button type="button" className="btn ProfileFristSection-btn">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-5 line bg-white">
              <div className="text-main-rapo mt-3">
                {ProfileFristSectionData.map((item, index) => (
                  <div
                    key={index}
                    className="info-txt-rapo d-flex align-items-center"
                  >
                    <div className="info-txt-rapo-h4 d-flex">
                      <h6 className="text-dark">{item.heading}</h6>
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
                        <p className={classNames({ 'no-margin': index === 5 && item.image })}>
                          {item.text}
                        </p>
                        {item.icon ? (
                          <a  className="icon" onClick={handleIconClick}>
                          {icons[index]}
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
        <PopUp ref={modalButtonRef} />
      </section>
    </>
  );
};

export default ProfileFristSection;