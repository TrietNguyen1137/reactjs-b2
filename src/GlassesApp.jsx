import React, { Component } from "react";
import dataGlasses from "./dataGlasses.json";
import "./GlassesApp.css";

export default class GlassesApp extends Component {
  state = {
    currentGlasses: dataGlasses[0],
  };

  handleChangeGlasses = (newGlasses) => {
    this.setState({
      currentGlasses: newGlasses,
    });
  };

  render() {
    const { id, name, price, desc, url } = this.state.currentGlasses;

    return (
      <div
        className="glasses-app position-relative"
        style={{
          minHeight: "100vh",
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/glassesImage/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h3 className="text-center text-white py-4 bg-dark opacity-75">
          TRY GLASSES APP ONLINE
        </h3>

        <div className="container my-5">
          <div className="row text-center justify-content-center mb-5">
            {/* Mẫu bên trái */}
            <div className="col-md-5 mb-4">
              <div className="model-container d-inline-block position-relative shadow">
                <img
                  src="/glassesImage/model.jpg"
                  alt="model"
                  width="300"
                  className="rounded"
                />
                <img src={url} alt={name} className="glasses-overlay" />
                <div className="glasses-info text-start p-3 rounded-bottom">
                  <h5 className="text-primary fw-bold mb-1">
                    {name} - ${price}
                  </h5>
                  <p className="text-white small m-0">{desc}</p>
                </div>
              </div>
            </div>

            {/* Mẫu bên phải */}
            <div className="col-md-5 mb-4">
              <img
                src="/glassesImage/model.jpg"
                alt="model-right"
                width="300"
                className="rounded shadow"
              />
            </div>
          </div>

          {/* Danh sách nút chọn kính */}
          <div className="bg-white p-4 rounded shadow">
            <div className="row g-3">
              {dataGlasses.map((glasses) => (
                <div key={glasses.id} className="col-4 col-sm-3 col-md-2">
                  <button
                    className={`btn btn-outline-secondary p-2 w-100 ${
                      id === glasses.id ? "border-primary border-2" : ""
                    }`}
                    onClick={() => this.handleChangeGlasses(glasses)}
                  >
                    <img
                      src={glasses.url}
                      alt={glasses.name}
                      className="img-fluid"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
