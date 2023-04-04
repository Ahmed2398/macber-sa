import React from "react";
import "./OurWorks.css";
const OurWorks = ({id, title,description, img}) => {
  return (
    <>
              <img src={img} style={{width:"100%"}} className="rounded" />
              <div className="mb-3 work-text">
                <h4 className="text-uppercase text-left text-muted  text-uppercase">
                 {title}
                </h4>
                <span className="text-capitalize text-box-work">
                {description}
                </span>
              </div>
    </>
  );
};

export default OurWorks;
