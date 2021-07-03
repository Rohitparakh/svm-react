import React, { Fragment , useState , useEffect} from 'react'
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import {connect} from 'react-redux'
import {useParams,Link} from 'react-router-dom'
import PropTypes from "prop-types";
import ShopProducts from '../../wrappers/product/ShopProducts';
import Paginator from 'react-hooks-paginator';
import { getSortedProducts } from '../../helpers/product';
import ShopTopbarFilter from '../../wrappers/product/ShopTopbarFilter';
import ReactGa from 'react-ga';

const Search=({location, products})=>{

  //For Google Analytics
  useEffect(()=>{ReactGa.pageview(window.location.pathname + window.location.search);
  });

  //   const { pathname } = location;
    // const {query}=useParams();
    const [layout, setLayout] = useState('grid three-column');
    const [sortType, setSortType] = useState('');
    const [sortValue, setSortValue] = useState('');
    const [filterSortType, setFilterSortType] = useState('');
    const [filterSortValue, setFilterSortValue] = useState('');
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);
    const [sortedProducts, setSortedProducts] = useState([]);

    const pageLimit = 15;
    const {pathname} = location;

    const getLayout = (layout) => {
        setLayout(layout)
    }

    const getSortParams = (sortType, sortValue) => {
        setSortType(sortType);
        setSortValue(sortValue);
    }

    const getFilterSortParams = (sortType, sortValue) => {
        setFilterSortType(sortType);
        setFilterSortValue(sortValue);
    }

    useEffect(() => {
        let sortedProducts = getSortedProducts(products, sortType, sortValue);
        const filterSortedProducts = getSortedProducts(sortedProducts, filterSortType, filterSortValue);
        sortedProducts = filterSortedProducts;
        setSortedProducts(sortedProducts);
        setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
    }, [offset, products, sortType, sortValue, filterSortType, filterSortValue ]);

        return(
            <Fragment>
            <MetaTags>
            <title>LG | Search | SVM Electronics</title>
              <meta
                name="description"
                content="Search page of SVM Electronics( LG )."
              />
            </MetaTags>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
              Search 
            </BreadcrumbsItem>
            <LayoutOne headerTop="visible">
              {/* breadcrumb */}
              <Breadcrumb />
             <div className="shop-area pt-95 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                {/* shop topbar filter */}
                                {products.length!=0?<>
                                <ShopTopbarFilter getLayout={getLayout}
                                                  getFilterSortParams={getFilterSortParams}
                                                  productCount={sortedProducts.length}
                                                  sortedProductCount={currentData.length}
                                                  products={products}
                                                  getSortParams={getSortParams}/>

                                {/* shop page content default */}
                                <ShopProducts layout={layout} products={currentData} />

                                {/* shop product pagination */}
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
                                </>
                      :
                      <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-attention"></i>
                    </div>
                    <div className="item-empty-area__text">
                      No items found<br />{" "}
                      <Link to={process.env.PUBLIC_URL + "/shop"}>
                        View Other Products
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
                      }
                            </div>
                        </div>
                    </div>
                </div>
</LayoutOne>
</Fragment>
    )


}

Search.propTypes = {
    location: PropTypes.object,
    products: PropTypes.arrayOf(PropTypes.object)
  };

const mapStateToProps = (state, ownProps) => {
    const searchQuery = ownProps.match.params.query.toLowerCase();
    return {
    
      products: state.productData.products.filter(
        single => {
          
          return single.category.indexOf(searchQuery) >= 0 || single.tag.indexOf(searchQuery) >= 0 || single.name.toLowerCase().includes(searchQuery)
        
        }
      )
    };
  };

export default connect(mapStateToProps)(Search)