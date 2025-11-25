
import React, { useState } from "react";

const ShortenLink = () => {
  const [link, setLink] = useState("");
  const [shortLinks, setShortLinks] = useState([]);
  
  // Simulate shortening
  const handleShorten = () => {
    if (link.trim() === "") 
    return alert("Please add a link");
  
    const fakeShort = "https://rel.link/" + Math.random().toString(36).substring(7);
    setShortLinks([...shortLinks, { original: link, short: fakeShort }]);
    setLink("");
  };

    return(
      <div className="shorten">
        {/* the Input Field */}
        <div className="shorten-box">
          <input type="text" placeholder="Shorten a link here..." value={link} 
          onChange={(e) => setLink(e.target.value)} />
          <button onClick={handleShorten}>Shorten It!</button>
        </div>
    
        {/* for Displaying shortened links paste insde the input*/}
        <div className="short-links">
          {shortLinks.map((item, index) => (
          <div className="link-card" key={index}>
              <p className="original">{item.original}</p>
              <div className="short-side">
                <a href={item.short}>{item.short}</a>
                <button onClick={() => navigator.clipboard.writeText(item.short)} >
                  Copy
                </button>
              </div>
          </div>
          ))}
        </div>
      </div>
    );
}

export default ShortenLink;