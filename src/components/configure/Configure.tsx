import React, { useState } from "react";
import "./Configure.css";
import arrowdown from "../../assets/icon/down-arrow.jpg";
import arrowup from "../../assets/icon/up-arrow.png";

interface ConfigureProps {}

const Configure: React.FC<ConfigureProps> = () => {
  const [activeButtons, setActiveButtons] = useState({
    set1: null as number | null,
    set2: null as number | null,
    set3: null as number | null,
    set4: null as number | null,
    set5: null as number | null,
    set6: null as number | null,
    set7: null as number | null,
  });

  const [visibleButtons, setVisibleButtons] = useState(4); // Initial number of visible buttons

  const handleButtonClick = (set: string, index: number) => {
    setActiveButtons((prev) => ({ ...prev, [set]: index }));
  };

  const handleViewMoreClick = () => {
    // Increase the number of visible buttons
    setVisibleButtons((prev) => prev + 6);
  };

  const handleViewLessClick = () => {
    // Decrease the number of visible buttons to the initial number
    setVisibleButtons(6);
  };

  const webbingOptions = [
    "I web",
    "I web with Logo",
    "I web with spiral lacing",
    "E Web",
    "H web",
    "Laced H web",
    "Laced H web",
  ];

  return (
    <div>
      <div className="configure-section">
        <h2>Position</h2>
        <div className="configure-btn">
          {[
            "Infield",
            "Outfield",
            "Pitcher",
            "HLPro Model",
            "U Palm overlay",
            "Crown Tip",
            "Pro Japanese Model",
            "Japanese Preferred Model",
            "Palmless Overlay Model",
          ].map((position, index) => (
            <div key={index} className="config-single-btn">
              <button
                onClick={() => handleButtonClick("set1", index)}
                style={{
                  backgroundColor:
                    activeButtons.set1 === index ? "#333" : "transparent",
                  color: activeButtons.set1 === index ? "white" : "black",
                }}
              >
                {position}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="configure-section">
        <h2>Leather Type</h2>
        <div className="configure-btn">
          {["Japanese Kip", "American Kip"].map((option, index) => (
            <div key={index} className="config-single-btn">
              <button
                onClick={() => handleButtonClick("set2", index)}
                style={{
                  backgroundColor:
                    activeButtons.set2 === index ? "#333" : "transparent",
                  color: activeButtons.set2 === index ? "white" : "black",
                }}
              >
                {option}
              </button>
            </div>
          ))}
        </div>
      </div>
      <br></br>
      <hr></hr>

      <div className="configure-section">
        <h2>Webbing Type</h2>
        <div className="configure-btn">
          {webbingOptions.slice(0, visibleButtons).map((option, index) => (
            <div key={index} className="config-single-btn">
              <button
                onClick={() => handleButtonClick("set3", index)}
                style={{
                  backgroundColor:
                    activeButtons.set3 === index ? "#333" : "transparent",
                  color: activeButtons.set3 === index ? "white" : "black",
                }}
              >
                {option}
              </button>
            </div>
          ))}
        </div>
        {visibleButtons < webbingOptions.length ? (
          <div className="config-view-more">
            <a onClick={handleViewMoreClick}>
              View More <img src={arrowdown}></img>
            </a>
          </div>
        ) : (
          <div className="config-view-less">
            <a onClick={handleViewLessClick}>
              View Less<img src={arrowup}></img>
            </a>
          </div>
        )}
      </div>
      <br></br>
      <hr></hr>

      <div className="configure-section">
        <h2>Welting Type</h2>
        <div className="configure-btn">
          {["Single", "Dual"].map((option, index) => (
            <div key={index} className="config-single-btn">
              <button
                onClick={() => handleButtonClick("set4", index)}
                style={{
                  backgroundColor:
                    activeButtons.set4 === index ? "#333" : "transparent",
                  color: activeButtons.set4 === index ? "white" : "black",
                }}
              >
                {option}
              </button>
            </div>
          ))}
        </div>
      </div>
      <br></br>
      <hr></hr>

      <div className="configure-section">
        <h2>Throw</h2>
        <div className="configure-btn">
          {["RHT", "LHT"].map((option, index) => (
            <div key={index} className="config-single-btn">
              <button
                onClick={() => handleButtonClick("set5", index)}
                style={{
                  backgroundColor:
                    activeButtons.set5 === index ? "#333" : "transparent",
                  color: activeButtons.set5 === index ? "white" : "black",
                }}
              >
                {option}
              </button>
            </div>
          ))}
        </div>
      </div>
      <br></br>
      <hr></hr>

      <div className="configure-section">
        <h2>Pocket</h2>
        <div className="configure-btn">
          {["Medium", "Shallow"].map((option, index) => (
            <div key={index} className="config-single-btn">
              <button
                onClick={() => handleButtonClick("set6", index)}
                style={{
                  backgroundColor:
                    activeButtons.set6 === index ? "#333" : "transparent",
                  color: activeButtons.set6 === index ? "white" : "black",
                }}
              >
                {option}
              </button>
            </div>
          ))}
        </div>
      </div>
      <br></br>
      <hr></hr>

      <div className="configure-section">
        <h2>Size</h2>
        <div className="configure-btn">
          {["9.5", "13"].map((option, index) => (
            <div key={index} className="config-single-btn">
              <button
                onClick={() => handleButtonClick("set7", index)}
                style={{
                  backgroundColor:
                    activeButtons.set7 === index ? "#333" : "transparent",
                  color: activeButtons.set7 === index ? "white" : "black",
                }}
              >
                {option}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Configure;
