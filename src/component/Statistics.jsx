

const Statistics = () => {
    const stats = [
      {
        title: "Brand Recognition",
        text: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
      },
      {
        title: "Detailed Records",
        text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      },
      {
        title: "Fully Customizable",
        text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
      },
    ];

    return(
        <section className="statistics">
          <div className="texts">
            <h2>Advanced Statistics</h2>
            <p>Track how your links are performing across the web with<br /> our advanced statistics dashboard.</p>
          </div>
    
          {/* <div className="cards">
            {stats.map((stat, i) => (
              <div className="card" key={i}>
                <h3>{stat.title}</h3>
                <p>{stat.text}</p>
              </div>
            ))}
          </div> */}
          {/*  */}
          <div className="cards">
            <div className="card1" >
              <h3>Brand Recognition</h3>
              <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
            </div>
            <div className="card2" >
              <h3>Detailed Records</h3>
              <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
            </div>
            <div className="card3" >
              <h3>Fully Customizable</h3>
              <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
            </div>
          </div>
        </section>
    );
}

export default Statistics;