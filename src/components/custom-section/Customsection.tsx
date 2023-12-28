// Customsection.tsx
import React, { useEffect, useState } from "react";
import "./Customsection.css";
import save from "../../assets/icon/save.png";
import search from "../../assets/icon/search.png";
import radioUnchecked from "../../assets/icon/untick.png";
import radioChecked from "../../assets/icon/tick.png";
import Configure from "../configure/Configure";
import Customize from "../customize/Customize";
import Details from "../details/Details";

// TypeScript declaration for 'model-viewer' attribute
declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    "model-viewer"?: any;
  }
}

const Customsection = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const tabs = ["Configure", "Customize", "Details"];
  const [modelLoaded, setModelLoaded] = useState<boolean>(false);

  // loader //

  useEffect(() => {
    const fakeModelLoading = setTimeout(() => {
      setModelLoaded(true);
    }, 2000);
    return () => clearTimeout(fakeModelLoading);
  }, []);

  const openTab = (index: number) => {
    setActiveTab(index);
  };

  // tab- next and previous //

  const nextTab = () => {
    setActiveTab((prevTab) => (prevTab + 1) % tabs.length);
  };

  const prevTab = () => {
    setActiveTab((prevTab) => (prevTab - 1 + tabs.length) % tabs.length);
  };

  // model-viewer//

  const modelViewerElement = modelLoaded ? (
    React.createElement("model-viewer", {
      src: "model/glove.glb",
      "shadow-intensity": "0.4",
      "camera-controls": true,
      "auto-rotate": true,
      "disable-tap": true,
    })
  ) : (
    <div className="preloader"> 3D Model Loading...</div>
  );

  return (
    <div>
      <div className="glove-custom">
        <div className="model-section">
          <div className="canvas-section">
            <div className="glove-back-btn">
              <button>
                <a href="">Back</a>
              </button>
            </div>
            {modelViewerElement}
          </div>
          <div className="model-cart-btn">
            <h4>$985</h4>
            <button>Add to cart</button>
          </div>
        </div>
        <div className="custom-section">
          <div className="search-section">
            <div className="custom-search">
              <input
                className="search-input"
                type="text"
                placeholder="Search"
              />
              <img src={search} alt="Search" />
            </div>
            <div className="custom-save">
              <img src={save} alt="Save" />
            </div>
            <div></div>
          </div>

          <div className="tab">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`tablabel ${activeTab === index ? "active" : ""}`}
                onClick={() => openTab(index)}
              >
                <img
                  src={activeTab === index ? radioChecked : radioUnchecked}
                  alt="Radio"
                />
                <span>{tab}</span>
              </div>
            ))}
          </div>

          <div className={`tabcontent ${activeTab === 0 ? "active" : ""}`}>
            <Configure />
          </div>

          <div className={`tabcontent ${activeTab === 1 ? "active" : ""}`}>
            <Customize />
          </div>

          <div className={`tabcontent ${activeTab === 2 ? "active" : ""}`}>
            <Details />
          </div>

          <div className="navigation-buttons">
            <button onClick={prevTab} disabled={activeTab === 0}>
              Previous
            </button>
            <button onClick={nextTab} disabled={activeTab === tabs.length - 1}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customsection;