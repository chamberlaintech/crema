import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="section-padding about">
      <div className="about-heading">
        <h2 className="h2-text">Welcome to crema</h2>
        <p className="p-text">
          Where every sip tells a story, and every bite is a little piece of
          happiness.
        </p>
      </div>
      <div className="about-content">
        <div className="about-content-item">
          <h3 className="h3-text">Our Journey</h3>
          <p className="p-text">
            Crema started as a dream—a dream to bring people together over the
            universal love of coffee and freshly baked delights. It all began in
            2022 when our founder decided to turn a lifelong passion for
            artisanal coffee and pastries into a cozy café for the community.
            Inspired by the rustic charm of European coffee houses and the
            vibrant café culture of CoffeeVille Crema was designed to be more
            than just a place to grab coffee. It’s a space where stories are
            shared, friendships are forged, and memories are made.
          </p>
        </div>
        <div className="about-content-item">
          <h3 className="h3-text">Our Philosophy</h3>
          <p className="p-text">
            At Crema, we believe that a good cup of coffee is more than just a
            drink—it’s an experience. That’s why we go the extra mile to source
            only the finest beans from sustainable farms around the world. Each
            cup is brewed with care, precision, and love, ensuring that you
            taste the richness and depth in every sip. But our passion doesn’t
            stop at coffee. Our bakery is a labor of love, with every pastry and
            loaf baked fresh daily using high-quality, locally sourced
            ingredients. Sustainability is at the heart of what we do. From
            eco-friendly packaging to supporting ethical coffee growers, we’re
            committed to making choices that are good for both the planet and
            our community.
          </p>
        </div>
        <div className="about-content-item">
          <h3 className="h3-text">Meet the Crema Team</h3>
          <p className="p-text">
            Behind every great café is a team of passionate individuals who
            bring it to life. At Crema, our baristas are artists, carefully
            crafting each coffee to perfection. Our bakers are storytellers,
            pouring their creativity into every pastry and loaf that comes out
            of our ovens. Together, we’re a family dedicated to serving you the
            best coffee and baked goods in town.
          </p>
        </div>
        <div className="about-content-item">
          <h3 className="h3-text">Why Crema is Different</h3>
          <p className="p-text">
            We’re not just a café; we’re a community hub. Whether it’s hosting
            local events, featuring artwork from neighborhood artists, or simply
            providing a welcoming space for you to relax and unwind, Crema is
            all about connection. We want you to feel at home here—whether
            you’re savoring your favorite latte, catching up with friends, or
            finding a quiet moment of peace in your busy day.
          </p>
        </div>
        <div className="about-content-item">
          <h3 className="h3-text">Our Space</h3>
          <p className="p-text">
            Step into Crema, and you’ll be greeted by the aroma of freshly
            brewed coffee and the warm glow of our cozy interiors. Designed with
            a mix of rustic charm and modern elegance, our café features
            comfortable seating, natural lighting, and a touch of greenery to
            create the perfect environment for work, conversation, or simply
            enjoying a moment to yourself.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
