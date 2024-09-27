import React from "react";
import Map from "../Components/Map/Map";
import Topbar from "../Components/Topbar/Topbar";
import Navbar from "../Components/Navbar/Navbar";
import Pageheader from "../Components/Pageheader/Pageheader";

export default function Mapp() {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <Pageheader />
      <h1 style={{ textAlign: "center", paddingBottom: "20px" }}>
        Google Maps Distance Calculation
      </h1>
      <Map />
    </div>
  );
}
