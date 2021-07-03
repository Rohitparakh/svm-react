import PropTypes from "prop-types";
import React, { useEffect, Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { multilanguage, loadLanguages } from "redux-multilanguage";
import { connect } from "react-redux";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";
import ReactGa from 'react-ga';
// home pages
const HomeElectronics = lazy(() => import("./pages/home/HomeElectronics"));

// shop pages
const ShopGridFilter = lazy(() => import("./pages/shop/ShopGridFilter"));

// Collection pages
const AllCollections = lazy(() => import("./pages/collection/AllCollections"));
const Collection = lazy(() => import("./pages/collection/Collection"));

// product pages
const Product = lazy(() => import("./pages/shop-product/Product"));

// other pages
const About = lazy(() => import("./pages/other/About"));
const Search = lazy(() => import("./pages/other/Search"));
const Contact = lazy(() => import("./pages/other/Contact"));
const Faq = lazy(() => import("./pages/other/Faq"));
const PrivacyPolicy = lazy(() => import("./pages/other/PrivacyPolicy"));
const DeliveryFeedback = lazy(() => import("./pages/other/DeliveryFeedback"));
const ThankDelivery = lazy(() => import("./pages/other/ThankDelivery"));
const Compare = lazy(() => import("./pages/other/Compare"));
const NotFound = lazy(() => import("./pages/other/NotFound"));

const App = props => {
  useEffect(() => {
    props.dispatch(
      loadLanguages({
        languages: {
          en: require("./translations/english.json"),
          fn: require("./translations/french.json"),
          de: require("./translations/germany.json")
        }
      })
    );
  });
  
    //For Google Analytics
  useEffect(()=>{ReactGa.initialize('UA-193556016-1')},[]);
  
  return (
    <ToastProvider placement="bottom-left">
      <BreadcrumbsProvider>
        <Router>
          <ScrollToTop>
            <Suspense
              fallback={
                <div className="flone-preloader-wrapper">
                  <div className="flone-preloader">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              }
            >
              <Switch>
                {/* Homepage */}
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/"}
                  component={HomeElectronics}
                />


                {/* Shop pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/shop"}
                  component={ShopGridFilter}
                />
                  
                {/* Collection page */}
              
                <Route
                  exact path={process.env.PUBLIC_URL + "/collections/all"}
                  render={routeProps => (
                    <AllCollections {...routeProps} key={routeProps.match.params.id} />
                  )}
                />

                <Route
                  path={process.env.PUBLIC_URL + "/collections/:catName"}
                  render={routeProps => (
                    <Collection {...routeProps} key={routeProps.match.params.id} />
                  )}
                />

                {/* Shop product pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/product/:id"}
                  render={routeProps => (
                    <Product {...routeProps} key={routeProps.match.params.id} />
                  )}
                />
                
                {/* Other pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/search/:query"}
                  render={routeProps => (
                    <Search {...routeProps} key={routeProps.match.params.query} />
                  )}
                  />
                
                <Route
                  path={process.env.PUBLIC_URL + "/about"}
                  component={About}
                />
                 <Route
                  path={process.env.PUBLIC_URL + "/delivery-feedback/:num"}
                  render={routeProps => (
                    <DeliveryFeedback {...routeProps} key={routeProps.match.params.num} />
                  )}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/thank-delivery"}
                  component={ThankDelivery}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/contact"}
                  component={Contact}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/faq"}
                  component={Faq}
                />
                 <Route
                  path={process.env.PUBLIC_URL + "/support-policy"}
                  component={PrivacyPolicy}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/compare"}
                  component={Compare}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/not-found"}
                  component={NotFound}
                />

                <Route exact component={NotFound} />
              </Switch>
            </Suspense>
          </ScrollToTop>
        </Router>
      </BreadcrumbsProvider>
    </ToastProvider>
  );
};

App.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(multilanguage(App));
