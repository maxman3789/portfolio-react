import React from "react";

export default function Portfolio() {
  const works = [
    {
      title: "COVID-19 Test Locator",
      src: "https://user-images.githubusercontent.com/96030343/150022024-58560706-7ff6-4e61-9ae9-e73a3fd384c6.png",
      alt: "COVID-19 Test Locator Project From Boot Camp",
      hoverText: "COVID-19 Test Locator - Collaborative Project",
      deployed: "https://maxman3789.github.io/Covid-19-Test-Locator/",
      github: "https://github.com/maxman3789/Covid-19-Test-Locator",
    },
    {
      title: "Hospital Management",
      src: "https://user-images.githubusercontent.com/96030343/154400395-eda48030-94e2-4196-9164-5a77a5ab2044.png",
      alt: "Hospital Management Project",
      hoverText: "Hospital Management - Collaborative Project",
      deployed: "https://lit-crag-12323.herokuapp.com/",
      github: "https://github.com/maxman3789/Hospital-Management-System",
    },
    {
      title: "E-Commerce Back End with SQL",
      src: "https://postfreaks.com/wp-content/uploads/2021/08/sql.png",
      alt: "E-Commerce SQL Example",
      hoverText: "E-Commerce Back End SQL Example",
      deployed: "#",
      github: "https://github.com/maxman3789/ECommerce-Back-End/",
    },
    {
      title: "Weather Forecast Dashboard",
      src: "https://user-images.githubusercontent.com/96030343/149252816-9627e207-ace8-4fa9-8fdd-cbd2bc64dbef.png",
      alt: "Five day weather forecast",
      hoverText: "Weather Forecast",
      deployed: "https://maxman3789.github.io/weather-dashboard/index.html",
      github: "https://github.com/maxman3789/weather-dashboard",
    },
    {
      title: "JavaScript Code Quiz",
      src: "https://user-images.githubusercontent.com/96030343/148316169-4c893a91-048e-4338-8eda-691746cb719f.png",
      alt: "JavaScript Code Quiz",
      hoverText: "JavaScript Code Quiz",
      deployed: "https://maxman3789.github.io/Code-Quiz/",
      github: "https://github.com/maxman3789/Code-Quiz",
    },
    {
      title: "Progressive Web App - Text Editor",
      src: "https://user-images.githubusercontent.com/96030343/156115353-b7554bee-a77f-460f-afb6-80d615a0e0e2.png",
      alt: "Progressive Web App Text Editor",
      hoverText: "Progressive Web App - Text Editor",
      deployed: "https://limitless-bayou-58239.herokuapp.com/",
      github: "https://github.com/maxman3789/PWA-Text-Editor",
    },
  ];

  const apps = [
      {
        title: "iPip",
        src: "https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/c5/2e/e7/c52ee78d-91cf-ab59-bbb0-8fb806116903/AppIcon-1x_U007emarketing-0-7-0-85-220.png/314x0w.png",
        alt: "iPip App Store",
        hoverText: "iPip",
        deployed: "https://apps.apple.com/us/app/ipip/id1545026670?platform=iphone",
      },

      {
        title: "SNHD Protocols",
        src: "https://is2-ssl.mzstatic.com/image/thumb/Purple115/v4/e8/48/aa/e848aaf0-9048-c1af-47ed-05480b62ae57/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/640x0w.webp",
        alt: "SNHD Protocols App Store",
        hoverText: "SNDH Protocols",
        deployed: "https://apps.apple.com/us/app/snhd-protocols/id455484052",
      },

      {
        title: "Trading Card Maker",
        src: "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/ef/2e/6e/ef2e6eee-373e-4a64-c4f2-ecc2186b05ca/AppIcon-1x_U007emarketing-0-7-0-85-220.png/492x0w.png",
        alt: "Trading Card Maker App Store",
        hoverText: "Trading Card Maker",
        deployed: "https://apps.apple.com/us/app/trading-card-maker/id908554607",
      }
  ];

  return (
    <div>

      <h1>My Work - Including this Website</h1>
      <section className="projectCards">
        {works.map((work, i) => {
          console.log(work.src);
          return (
            <a
              key={i}
              href={work.github}
              target="_blank"
              className="card"
              rel="noreferrer"
            >
              <img className="image" src={work.src} alt={work.alt} />

              <div className="overlay">
                <div className="hoverText">{work.hoverText}</div>
              </div>
              <figcaption>{work.title}</figcaption>
            </a>
          );
        })}
      </section>

            <h1>Mobile Apps</h1>
      <section className="projectCards">
        {apps.map((work, i) => {
          console.log(work.src);
          return (
            <a
              key={i}
              href={work.github}
              target="_blank"
              className="card"
              rel="noreferrer"
            >
              <img className="image" src={work.src} alt={work.alt} />

              <div className="overlay">
                <div className="hoverText">{work.hoverText}</div>
              </div>
              <figcaption>{work.title}</figcaption>
            </a>
          );
        })}
      </section>

    </div>
  );
}