import React from "react";
import "./style.css";

function About() {
  return (
    // <!-- ABOUT ME  -->
    <section className="section">
    <div className="container has-text-centered">
    <div className="columns is-centered is-multiline">
    <div className='column is-8' id="column">
                  <h1>Meet Max S., That Guy On The Web</h1>
              <img
                src="https://maxman3789.github.io/Portfolio-February/assets/images/IMG_5315.jpeg"
                className="figure-img img-fluid rounded"
                id="about-me-image"
                alt="meet max"
              />
                <p id="about-me">
                Max S. was born in San Diego, CA some time in the 20th century. Max has a fascination with technology and always willing to venture into new areas.
                  He has a degree in Information Systems from the University of Nevada, Reno. Some of the fields he has worked in include 
                  Hospitality, Debt Collecting, Ambulance Services, Web Development, Marketing, Surveillance, E-Commerce, Manufacturing, Data Analysis,
                  and Ship Building. Another venture of Max is App Development under the name "samscheller.com", which started as a partnership with his brother.
                </p>

                <p>Outside of being a Tech Professional and a hard worker, he likes Photography with Retrograde devices.
                      Max developed an online persona called <a href="http://thatguywithagameboycamera.com" target="_window">"That Guy With A Game Boy Camera"</a> where
                      he takes and posts photos with a Nintendo Game Boy Camera. This led to an interview with the LATimes on an article about <a href="https://www.latimes.com/entertainment/herocomplex/la-et-hc-nintendo-game-boy-anniversary-20190421-story.html" target="_window">Game Boys at 30 years old</a>.
                      Max has spoken at conventions on Retro Gaming relevance, and even spoke at Comic-Con: Special Edition in 2021.</p>

                <p>Max has made a Documentary about his apprecation for the video game Fallout: New Vegas titled, <a href="https://www.youtube.com/watch?v=ABuu8ryZpV8" target="_window">Las-New: A Fallout Snow Globe Road Trip</a>.
                    It was a kind of movie only he could make.
                  </p>
                <div className="buttons are-medium is-centered">
                <a className="button" id="linkedin" href="https://www.linkedin.com/in/maxwell-scheller-73a349138/" target="_blank" >LinkedIn</a>
                <a className="button" id="github" href="https://github.com/maxman3789" target="_blank">GitHub</a>
                </div>
            </div>
            </div>
          </div> 
        </section>
    );
}

export default About;