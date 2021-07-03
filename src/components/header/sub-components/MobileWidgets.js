import React from "react";

const MobileWidgets = () => {
  return (
    <div className="offcanvas-widget-area">
      <div className="off-canvas-contact-widget">
        <div className="header-contact-info">
          <ul className="header-contact-info__list">
            <li>
              <i className="fa fa-phone"></i>{" "}
              <a href="tel://7299005580">72990 05580 </a>
            </li>
            <br/>
            <li>
            <i className="fa fa-whatsapp"></i>{" "}
            <a target="_blank"  rel="noopener noreferrer" href="https://wa.me/7299005580">Whatsapp here!</a>
            </li>
            <li>
              <i className="fa fa-envelope"></i>{" "}
              <a href="mailto:lg.svmelectronics@gmail.com">lg.svmelectronics@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      {/*Off Canvas Widget Social Start*/}
      <div className="off-canvas-widget-social">
        {/* <a href="//twitter.com" title="Twitter">
          <i className="fa fa-twitter"></i>
        </a> */}
        <a href="//instagram.com/lgexclusivestore" title="Instagram">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="//facebook.com/lgbestshopalwarpet" title="Facebook">
          <i className="fa fa-facebook"></i>
        </a>
        {/* <a href="//pinterest.com" title="Pinterest">
          <i className="fa fa-pinterest"></i>
        </a> */}
      </div>
      {/*Off Canvas Widget Social End*/}
    </div>
  );
};

export default MobileWidgets;
