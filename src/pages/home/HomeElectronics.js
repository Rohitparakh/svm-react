import React, { useEffect, Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../../layouts/LayoutTwo";
import HeroSliderThree from "../../wrappers/hero-slider/HeroSliderThree";
import CategoryOneSlider from "../../wrappers/category/CategoryOneSlider";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import TabProductThree from "../../wrappers/product/TabProductThree";
import BannerThree from "../../wrappers/banner/BannerThree";
import TestimonialOne from "../../wrappers/testimonial/TestimonialOne";
import FeatureIcon from "../../wrappers/feature-icon/FeatureIcon";
import ReactGa from 'react-ga';
const HomeElectronics = () => {
 
 //For Google Analytics
 useEffect(()=>{ReactGa.pageview(window.location.pathname + window.location.search);
 });
  
  return (
    <Fragment>
      <MetaTags>
        <title>LG | SVM Electronics</title>
        
        <meta
          name="description"
          content="Biggest LG retail store in Chennai"
        />
      </MetaTags>
      <LayoutTwo>
        {/* hero slider */}
        <HeroSliderThree />

        {/* category slider */}
        <CategoryOneSlider spaceBottomClass="pb-95" />

        {/* section title with text */}
        <SectionTitleWithText spaceBottomClass="pb-90" />

        {/* tab product */}
        <TabProductThree spaceBottomClass="pb-40" category="electronics" />

{/* Featured Icons */}
        <FeatureIcon spaceTopClass="pt-40" spaceBottomClass="pb-60" />


        {/* banner */}
        <BannerThree spaceBottomClass="pb-100" />

        {/* testimonial */}
        <TestimonialOne
          spaceTopClass="pt-100"
          spaceBottomClass="pb-95"
          spaceLeftClass="ml-70"
          spaceRightClass="mr-70"
          bgColorClass="bg-gray-3"
        />

        {/* brand logo slider */}
        {/* <BrandLogoSliderOne spaceBottomClass="pb-95" spaceTopClass="pt-100" /> */}

        {/* blog featured */}
        {/* <BlogFeaturedTwo spaceBottomClass="pb-55" /> */}
      </LayoutTwo>
    </Fragment>
  );
};

export default HomeElectronics;
