import React from "react";
import Hero from "../components/Hero";
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
      <Hero>
        <Banner title='luxurious rooms' subtitle='deluxe rooms starting at $299'/>
      </Hero>
      hello from home page
    </div>
  );
};

export default Home;
