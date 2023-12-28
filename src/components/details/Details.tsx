import "./Details.css";

const Details = () => {
  return (
    <div className="detail-wrapper">
      <div className="details-sec">
        <div>
          <details>
            <summary>Thumb Logo or Thumb Graphic</summary>
            <div className="details-logo-section">
              <div className="detail-inner">
                <div className="details-main-btn">
                  <button>color1</button>
                </div>
              </div>
              <div className="detail-inner">
                <div className="details-main-btn">
                  <button>color2</button>
                </div>
              </div>
              <div className="detail-inner">
                <div className="details-main-btn">
                  <button>color3</button>
                </div>
              </div>
              <div className="detail-inner">
                <div className="details-main-btn">
                  <button>color4</button>
                </div>
              </div>
              <div className="detail-inner">
                <div className="details-main-btn">
                  <button>color5</button>
                </div>
              </div>
            </div>
          </details>
        </div>
        <hr></hr>

        <div>
          <details>
            <summary>Thumb Text</summary>
            <div>
              <div className="detail-inner">
                <div>
                  <input
                    className="details-input"
                    type="text"
                    placeholder="Enter your text"
                    maxLength={50}
                  />
                </div>
              </div>
            </div>
          </details>
        </div>
        <hr></hr>

        <div>
          <details>
            <summary>Pinky Text</summary>
            <div>
              <div className="detail-inner">
                <div>
                  <input
                    className="details-input"
                    type="text"
                    placeholder="Enter your text"
                  />
                </div>
              </div>
            </div>
          </details>
        </div>
        <hr></hr>

        <div>
          <details>
            <summary>Flag by State</summary>
            <div className="details-flag-state">
              <div className="detail-inner">
                <div className="details-main-btn">
                  <button>color1</button>
                </div>
              </div>
              <div className="detail-inner">
                <div className="details-main-btn">
                  <button>color1</button>
                </div>
              </div>
              <div className="detail-inner">
                <div className="details-main-btn">
                  <button>color1</button>
                </div>
              </div>
              <div className="detail-inner">
                <div className="details-main-btn">
                  <button>color1</button>
                </div>
              </div>
              <div className="detail-inner">
                <div className="details-main-btn">
                  <button>color1</button>
                </div>
              </div>
            </div>
          </details>
        </div>
        <hr></hr>

        <div>
          <details>
            <summary>Flag by Country</summary>
            <div className="details-flag-country">
              <div className="detail-inner">
                <div className="details-main-btn">
                  <button>color1</button>
                </div>
              </div>
              <div className="detail-inner">
                <div className="details-main-btn">
                  <button>color1</button>
                </div>
              </div>
              <div className="detail-inner">
                <div className="details-main-btn">
                  <button>color1</button>
                </div>
              </div>
              <div className="detail-inner">
                <div className="details-main-btn">
                  <button>color1</button>
                </div>
              </div>
              <div className="detail-inner">
                <div className="details-main-btn">
                  <button>color1</button>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>

      <div className="details-btn">
        <button>Apply</button>
      </div>
      <br></br>
    </div>
  );
};

export default Details;
