// Customsection.tsx
import React, { Suspense, useEffect, useState } from "react";
import "./Customsection.css";
import save from "../../assets/icon/save.jpg";
import search from "../../assets/icon/search.png";
import radioUnchecked from "../../assets/icon/untick.png";
import radioChecked from "../../assets/icon/tick.png";
import Configure from "../configure/Configure";
import Customize from "../customize/Customize";
import Details from "../details/Details";
import view from "../../assets/icon/view.png";
import arrowback from "../../assets/icon/arrow.png";
import arrowright from "../../assets/icon/arrow-right.png";
import arrowleft from "../../assets/icon/arrow-left.png";
import ThreeDCanvas from "../threed_canvas/ThreeDCanvas";

// TypeScript declaration for 'model-viewer' attribute
// declare module "react" {
//   interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
//     "model-viewer"?: any;
//   }
// }

const Customsection = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const tabs = ["Configure", "Customize", "Details"];
  // const [modelLoaded, setModelLoaded] = useState<boolean>(false);

  // loader //

  // useEffect(() => {
  //   const fakeModelLoading = setTimeout(() => {
  //     setModelLoaded(true);
  //   }, 2000);
  //   return () => clearTimeout(fakeModelLoading);
  // }, []);

  const openTab = (index: number) => {
    setActiveTab(index);
  };

  //tab- next and previous //

  const nextTab = () => {
    setActiveTab((prevTab) => (prevTab + 1) % tabs.length);
  };

  const prevTab = () => {
    setActiveTab((prevTab) => (prevTab - 1 + tabs.length) % tabs.length);
  };

  // model-viewer//

  // const modelViewerElement = modelLoaded ? (
  //   React.createElement("model-viewer", {
  //     src: "model/glove.glb",
  //     "shadow-intensity": "0.4",
  //     "camera-controls": true,
  //     "auto-rotate": true,
  //     "disable-tap": true,
  //   })
  // ) : (
  //   <div className="preloader"> 3D Model Loading...</div>
  // );

  return (
    <div>
      <div className="glove-custom">
        <div className="model-section">
          <div className="canvas-section">
            <div className="glove-back-btn">
              <button>
                <a href="">
                  <img src={arrowback}></img>
                </a>
              </button>
            </div>
            <div className="glove_canvas">
              <Suspense fallback={<div style={{ width: "60%" }}></div>}>
                <ThreeDCanvas />
              </Suspense>
            </div>

            {/* {modelViewerElement} */}
          </div>
          <div className="model-cart-btn">
            <div className="cart-btn-glove">
              <h4>$985</h4>
              <button>Add to cart</button>
            </div>
            <div className="view-icon">
              <img src={view} alt="" />
            </div>
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
              <img src={arrowleft}></img>
              <span>Previous</span>
            </button>
            <button onClick={nextTab} disabled={activeTab === tabs.length - 1}>
              <span>Next</span>
              <img src={arrowright}></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customsection;
