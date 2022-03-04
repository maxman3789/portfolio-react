import React from "react";
import "./style.css";

function Card(props) {
  return (
        <div className='column is-mobile is-half-tablet is-one-third-desktop is-one-third-widescreen is-one-third-fullhd has-text-centered' id="column">
          <div className="card" id="card">
            <div className="card-image">
              <figure className="image is-1by1">
                <img src={props.src} alt={props.alt} />
              </figure>
            </div>

            <div className="card-content">
              <p className="title is-4" id="headline">{props.headline}</p>
            </div>
            <footer className="card-footer">
              <a href={props.demo} target="_blank" className="card-footer-item" id="portBtn">
                Demo
              </a>
              <a href={props.github} target="_blank" className="card-footer-item" id="portBtn">
                GitHub
              </a>
            </footer>
          </div>
        </div>
  );
}

export default Card;