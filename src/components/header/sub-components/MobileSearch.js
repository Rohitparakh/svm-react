import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileSearch = () => {
  const [search,setSearch]=useState('');

  const searchHandler=(e)=>{
  setSearch(e.target.value)
  }

  const closeMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.remove("active");
  };
  return (
    <div className="offcanvas-mobile-search-area">
      <form>
        <input onChange={searchHandler} value={search} type="text" placeholder="Search ..." />
        <Link onClick={closeMobileMenu} to={process.env.PUBLIC_URL + "/search/"+ search}>
        <button type="submit">
          <i className="fa fa-search" />
        </button>
        </Link>
      </form>
    </div>
  );
};

export default MobileSearch;
