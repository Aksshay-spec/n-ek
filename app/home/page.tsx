"use client";

import React from "react";

import HomeSlider from "./HomeSlider";
import TrendingProducts from "./TrendingProducts";
import SkuSection from "./SkuSection";
import AboutSection from "./AboutSection";
import AboutListings from "./AboutListings";
import FmcgSection from "./FmcgSection";
import SeventhSection from "./SeventhSection";
import OurJourney from "./OurJourney";
import PartnerWithUsSection from "./PartnerWithUsSection";
import DistributorBenefitSection from "./DistributorBenefitSection";
import Testimonial from "./Testimonial";
import OurNews from "./OurNews";
import Policies from "./Policies";

const Home: React.FC = () => {
  return (
    <>
      <HomeSlider />
      <TrendingProducts />
      <SkuSection />
      <AboutSection />
      <AboutListings />
      <FmcgSection />
      <SeventhSection />
      <OurJourney />
      <PartnerWithUsSection />
      <DistributorBenefitSection />
      <Testimonial />
      <OurNews />
      <Policies />
    </>
  );
};

export default Home;
