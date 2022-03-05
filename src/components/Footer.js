import React from "react";
import { BsGithub, BsLinkedin, BsStackOverflow, BsMailbox2 } from "react-icons/bs";

function Footer() {
  const socials = [
    {
      href: "https://github.com/maxman3789",
      img: <BsGithub />,
    },
    {
      href: "https://www.linkedin.com/in/maxwell-scheller-73a349138/",
      img: <BsLinkedin />,
    },
    // {
    //   href: "",
    //   img: <BsStackOverflow />,
    // },
    {
        href: "mailto:maxman3789@aol.com",
        img: <BsMailbox2 />,
      },
  ];
  return (
    <footer>
      <div className="footerContainer">
          
        {socials.map((element, i) => {
          return (
            <a href={element.href} target="_blank" rel="noreferrer" key={i}>
              {element.img}
            </a>
          );
        })}
      </div>
      <div><br></br>
              Copyright 2022, Maxwell Scheller
          </div>
    </footer>
  );
}

export default Footer;