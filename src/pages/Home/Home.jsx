import React from "react";
import Hero from "../../components/Hero/Hero";
import Specialties from "../../components/Specialties/Specialties";
import AboutCTA from "../../components/AboutCTA/AboutCTA";
import CTA from "../../components/CTA/CTA";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Specialties />
      <AboutCTA />
      <CTA />
      <Testimonials />
    </>
  );
};

export default Home;
