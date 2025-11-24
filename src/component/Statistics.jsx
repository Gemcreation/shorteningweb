

const Statistics = () => {
    const stats = [
      {
        title: "Brand Recognition",
        text: "Boost your brand recognition with each click. Branded links help instill confidence in your content.",
      },
      {
        title: "Detailed Records",
        text: "Gain insights into who is clicking your links. Knowing when and where people engage helps inform decisions.",
      },
      {
        title: "Fully Customizable",
        text: "Improve brand awareness and content discoverability through customizable links.",
      },
    ];

    return(
        <section className="statistics">
          <h2>Advanced Statistics</h2>
          <p>Track how your links are performing across the web.</p>
    
          <div className="cards">
            {stats.map((stat, i) => (
              <div className="card" key={i}>
                <h3>{stat.title}</h3>
                <p>{stat.text}</p>
              </div>
            ))}
          </div>
        </section>
    );
}

export default Statistics;