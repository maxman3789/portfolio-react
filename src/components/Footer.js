import React from "react";
import { BsGithub, BsLinkedin, BsStackOverflow } from "react-icons/bs";

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
    {
      href: "",
      img: <BsStackOverflow />,
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
    </footer>
  );
}

export default Footer;