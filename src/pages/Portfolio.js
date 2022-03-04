import React from "react";
import Card from "../components/Card/index";
import Info from "../components/projects.json";
import "./style.css";

function Portfolio() {
  return (
    <div>
      <section className="section" id="section">
        <div className="container has-text-centered">
          <h1 id="portfolioHeadline">Check out Max's Projects!</h1>
          <div className="columns is-centered is-multiline">
            {Info.map((data) => {
              return (
                <Card
                  key={data.id}
                  src={data.src}
                  alt={data.alt}
                  headline={data.headline}
                  demo={data.demo}
                  github={data.github}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;