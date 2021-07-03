import React,{Fragment} from "react";
import { Link } from "react-router-dom";
import { LightgalleryItem } from "react-lightgallery";

const ImageSliderSingle = ({ data, sliderClass }) => {
  return (
        //   <div key={data.id} style={{position:"relative",marginRight:"5px"}}>
    <div className={`single-image ${sliderClass ? sliderClass : ""}`}>
    <LightgalleryItem
    group="any"
    src={process.env.PUBLIC_URL + data.image}
  >
    <button>
      <i className="pe-7s-expand1"></i>
    </button>
  </LightgalleryItem>
        <img src={process.env.PUBLIC_URL + data.image} alt="" />
        {/* <div style={{marginRight:'1px'}}>{data.id}</div> */}
    </div>
    // </div>
  );
};

export default ImageSliderSingle;
