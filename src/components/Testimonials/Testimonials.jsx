import React from "react";
import { reviews } from "../../constants/data";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import "./Testimonials.css";
import { sliderSettings } from "../../constants/common";

const Testimonials = () => {
  return (
    <div className="testimonials section-padding">
      <div className="testimonials-heading">
        <h3 className="h3-text">
          Why People Love <br /> Crema
        </h3>
      </div>
      <Swiper {...sliderSettings}>
        <SliderButtons />
        {reviews.map((review, index) => {
          return (
            <SwiperSlide key={index}>
              <TestimonialCard
                key={index}
                name={review.name}
                text={review.text}
                image={review.image}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flex-center testimonials-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
