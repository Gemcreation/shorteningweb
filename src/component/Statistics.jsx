
import React from "react";
import iconBrandRecognition from "../assets/images/icon-brand-recognition.svg";
import iconDetailedRecords from "../assets/images/icon-detailed-records.svg";
import iconFullyCustomizable from "../assets/images/icon-fully-customizable.svg";

const Statistics = () => {
  const stats = [
    {
      id: "card1",
      icon: iconBrandRecognition,
      title: "Brand Recognition",
      text: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    },
    {
      id: "card2",
      icon: iconDetailedRecords,
      title: "Detailed Records",
      text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      id: "card3",
      icon: iconFullyCustomizable,
      title: "Fully Customizable",
      text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];

  return (
    <section className="statistics" id="features">
      <div className="texts">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with<br /> our
          advanced statistics dashboard.
        </p>
      </div>

      <div className="cards">
        {stats.map((stat, index) => (
          <div className={`card ${stat.id}`} key={stat.id}>
            <div className="icon-container">
              <img src={stat.icon} alt={stat.title} />
            </div>
            <h3>{stat.title}</h3>
            <p>{stat.text}</p>
          </div>
        ))}
        <div className="connecting-line"></div>
      </div>
    </section>
  );
};

export default Statistics;