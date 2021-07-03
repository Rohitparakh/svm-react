import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import MetaTags from "react-meta-tags";
import Paginator from "react-hooks-paginator";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import { getSortedProducts } from "../../helpers/product";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import ShopTopbarFilter from "../../wrappers/product/ShopTopbarFilter";
import ShopProducts from "../../wrappers/product/ShopProducts";
import { useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import collections from '../../data/collections.json'
import ReactGa from 'react-ga'

const Collection = ({ location, products }) => {
  
 //For Google Analytics
 useEffect(()=>{ReactGa.pageview(window.location.pathname + window.location.search);
 });

  let {catName}=useParams();
  
  const [layout, setLayout] = useState("grid three-column");
  const [sortType, setSortType] = useState('');
  const [sortValue, setSortValue] = useState('');
  const [filterSortType, setFilterSortType] = useState('');
  const [filterSortValue, setFilterSortValue] = useState('');
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  const pageLimit = 15;
  const { pathname } = location;

  const getLayout = layout => {
    setLayout(layout);
  };

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
}


let collection=collections.filter((val,i)=>{
  return val.category[0].toLowerCase()==catName.toLowerCase()
})


// const collectionProducts = getSortedProducts(products, "category", catName)

useEffect(()=>{
 setSortType('category');
 setSortValue(catName);
},[])

useEffect(() => {
  setSortValue(catName);  
}, [catName])

useEffect(() => {
    let sortedProducts = getSortedProducts(products, sortType, sortValue);
    const filterSortedProducts = getSortedProducts(
      sortedProducts,
      filterSortType,
      filterSortValue
    );
    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);
    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
    console.log({filterSortType})
    console.log({filterSortValue})

  }, [catName, offset, products, sortType, sortValue, filterSortType, filterSortValue,location]);
  return (
    <Fragment>
      <MetaTags>
        <title>LG | {filterSortValue} | SVM Electronics</title>
        <meta
          name="description"
          content="Shop page of SVM LG."
        />
      </MetaTags>

      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        View Collection
      </BreadcrumbsItem>

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        {collection[0]?collection[0].description?
        <div className="pt-30 ml-30 mr-30">
          <center>
          <h3 style={{fontSize:" 1em",fontWeight: "500",textTransform: "uppercase"}}>Description</h3>
          <p style={{fontSize:" 0.9em"}}>{collection[0].description}</p>
          </center>
        </div>:null:null}
        <div className="shop-area pt-95 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* shop topbar default */}
                {sortedProducts.length==0?<div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-attention"></i>
                    </div>
                    <div className="item-empty-area__text">
                      No items found in this collection. <br />{" "}
                      <Link to={process.env.PUBLIC_URL + "/collections/all"}>
                        View Other Collections
                      </Link>
                    </div>
                  </div>
                </div>
              </div>:
                  <>
                <ShopTopbarFilter
                  getLayout={getLayout}
                  getFilterSortParams={getFilterSortParams}
                  productCount={sortedProducts.length}
                  sortedProductCount={currentData.length}
                  products={products}
                  getSortParams={getSortParams}           
                />
                <ShopProducts layout={layout} products={currentData} />
                    
                
                <div className="pro-pagination-style text-center mt-30">
                  <Paginator
                    totalRecords={sortedProducts.length}
                    pageLimit={pageLimit}
                    pageNeighbours={2}
                    setOffset={setOffset}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    pageContainerClass="mb-0 mt-0"
                    pagePrevText="«"
                    pageNextText="»"
                  />
                </div>
</>}
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Collection.propTypes = {
  location: PropTypes.object,
  products: PropTypes.array
};

const mapStateToProps = state => {
  return {
    products: state.productData.products
  };
};

export default connect(mapStateToProps)(Collection);
