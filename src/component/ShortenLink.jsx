import React, { useState, useEffect } from "react";

const ShortenLink = () => {
  const [link, setLink] = useState("");
  const [shortLinks, setShortLinks] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  // Load shortened links from localStorage on component mount
  useEffect(() => {
    const savedLinks = localStorage.getItem("shortenedLinks");
    if (savedLinks) {
      try {
        setShortLinks(JSON.parse(savedLinks));
      } catch (error) {
        console.error("Error loading saved links:", error);
      }
    }
  }, []);

  // Save shortened links to localStorage whenever it changes
  useEffect(() => {
    if (shortLinks.length > 0) {
      localStorage.setItem("shortenedLinks", JSON.stringify(shortLinks));
    }
  }, [shortLinks]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validate input
    if (link.trim() === "") {
      setError("Please add a link");
      return;
    }

    // Basic URL validation and format
    let formattedUrl = link.trim();
    
    // Add protocol if missing
    if (!formattedUrl.match(/^https?:\/\//i)) {
      formattedUrl = `https://${formattedUrl}`;
    }

    // Validate URL format
    try {
      new URL(formattedUrl);
    } catch {
      setError("Please add a valid link");
      return;
    }

    setLoading(true);

    try {
      // Call Clean URI API
      const response = await fetch("https://cleanuri.com/api/v1/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ url: formattedUrl }),
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error || "Failed to shorten link. Please try again.");
      } else if (data.result_url) {
        const newLink = {
          original: formattedUrl,
          short: data.result_url,
        };
        setShortLinks([newLink, ...shortLinks]);
        setLink("");
        setError("");
      } else {
        setError("Failed to shorten link. Please try again.");
      }
    } catch (err) {
      setError("Failed to shorten link. Please check your connection and try again.");
      console.error("Error shortening link:", err);
    } finally {
      setLoading(false);
    }
  };

  // Handle copy to clipboard
  const handleCopy = async (shortUrl, index) => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopiedIndex(index);
      setTimeout(() => {
        setCopiedIndex(null);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = shortUrl;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        setCopiedIndex(index);
        setTimeout(() => {
          setCopiedIndex(null);
        }, 2000);
      } catch (fallbackErr) {
        console.error("Fallback copy failed:", fallbackErr);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="shorten">
      {/* the Input Field */}
      <div className="toMargin">
        <form className="shorten-box" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Shorten a link here..."
              value={link}
              onChange={(e) => {
                setLink(e.target.value);
                setError("");
              }}
              className={error ? "error" : ""}
            />
            {error && <span className="error-message">{error}</span>}
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Shortening..." : "Shorten It!"}
          </button>
        </form>
      </div>

      {/* for Displaying shortened links */}
      <div className="short-links">
        {shortLinks.map((item, index) => (
          <div className="link-card" key={index}>
            <p className="original">{item.original}</p>
            <div className="short-side">
              <a href={item.short} target="_blank" rel="noopener noreferrer">
                {item.short}
              </a>
              <button
                onClick={() => handleCopy(item.short, index)}
                className={copiedIndex === index ? "copied" : ""}
              >
                {copiedIndex === index ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortenLink;