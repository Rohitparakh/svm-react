import PropTypes from "prop-types";
import React, { useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Rating from '../../components/product/sub-components/ProductRating'


const ProductDescriptionTab = ({ spaceBottomClass, productFullDesc,product, currentModel }) => {
 useEffect(() => {
  // other info loader from string to html
  let info=document.createElement("div");
  info.innerHTML=product.otherInfo; 
  let fullDesc=document.createElement("div");
  fullDesc.innerHTML=productFullDesc; 

  setTimeout(()=>{
  // document.getElementById('info').appendChild(info);
  document.getElementById('fullDesc').appendChild(fullDesc)
},1000)   
 
 }, [])
  
  return (
    <div className={`description-review-area ${spaceBottomClass}`}>
      <div className="container">
        <div className="description-review-wrapper">
       <Tab.Container defaultActiveKey="productReviews">
            <Nav variant="pills" className="description-review-topbar">
              <Nav.Item>
                <Nav.Link eventKey="additionalInfo">
                  Additional Information
                </Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link eventKey="productDescription">Description</Nav.Link>
              </Nav.Item> */}
              <Nav.Item>
                <Nav.Link eventKey="productReviews">Reviews({product.reviews.length})</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="description-review-bottom">
                <Tab.Pane eventKey="additionalInfo">
                  <div className="product-anotherinfo-wrapper">
                    <ul>
                    <li>
                        <span>Model:</span> {currentModel}
                      </li>
                      <li>
                        <span>Weight:</span> {product.weight}
                      </li>
                      <li>
                        <span>Dimensions:</span>{product.dimensions}{" "}
                      </li>
                      <li>
                        <span>Materials:</span> {product.material}
                      </li> 
                      <li>
                      <div className="row"> <div className="col-sm-1"><span>Other Info:</span></div> <div style={{marginLeft:"30px"}} className="other-info col-12 col-sm-12 col-lg-10" id="info"></div>
                      </div></li>
                    </ul>
                  </div>
                </Tab.Pane>
              <Tab.Pane eventKey="productDescription">
               <div id="fullDesc"></div>
                {/* {productFullDesc} */}
              </Tab.Pane>
              <Tab.Pane eventKey="productReviews">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="review-wrapper">
                      {product.reviews.map((val,index)=>{
                        
                        return (
                      
                      <div key={val.id} className="single-review">
                        <div className="review-img">
                          
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              product.image[0]
                            }
                            alt={product.name + " review "+ val.id}
                          />
                        </div>
                        <div className="review-content">
                          <div className="review-top-wrap">
                            <div className="review-left">
                              <div className="review-name">
                                <h4>{val.name}</h4>
                              </div>
                              <div className="review-rating">
                              <Rating ratingValue={parseInt(val.rating)} noOfRatings={null} />
                              </div>
                            </div>
                            {/* <div className="review-left">
                              <button>Reply</button>
                            </div> */}
                          </div>
                          <div className="review-bottom">
                            <p>
                             {val.review}
                            </p>
                          </div>
                        </div>
                      </div>
                      )})}
                      
                    </div>
                  </div>
                  {/* <div className="col-lg-5">
                    <div className="ratting-form-wrapper pl-50">
                      <h3>Add a Review</h3>
                      <div className="ratting-form">
                        <form action="#">
                          <div className="star-box">
                            <span>Your rating:</span>
                            <div className="ratting-star">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="rating-form-style mb-10">
                                <input placeholder="Name" type="text" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="rating-form-style mb-10">
                                <input placeholder="Email" type="email" />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="rating-form-style form-submit">
                                <textarea
                                  name="Your Review"
                                  placeholder="Message"
                                  defaultValue={""}
                                />
                                <input type="submit" defaultValue="Submit" />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div> */}
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

ProductDescriptionTab.propTypes = {
  productFullDesc: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  product:PropTypes.object,
  currentModel:PropTypes.string
};

export default ProductDescriptionTab;
