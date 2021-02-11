import React, { useState } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

const Services = () => {
  const state = [
    {
      icon: <FaCocktail />,
      title: "free cocktails",
      info: "Ullamcorper dis velit sollicitudin. Ante augue class odio! Ac at!",
    },
    {
      icon: <FaHiking />,
      title: "Endless hiking",
      info: "Ullamcorper dis velit sollicitudin. Ante augue class odio! Ac at!",
    },
    {
      icon: <FaShuttleVan />,
      title: "free shuttle",
      info: "Ullamcorper dis velit sollicitudin. Ante augue class odio! Ac at!",
    },
    {
      icon: <FaBeer />,
      title: "strongest beer",
      info: "Ullamcorper dis velit sollicitudin. Ante augue class odio! Ac at!",
    },
  ];

  const [services] = useState(state);

  return (
    <section className="services">
      <Title title="services"></Title>
      <div className="services-center">
        {services.map((item, index) => {
          return (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
