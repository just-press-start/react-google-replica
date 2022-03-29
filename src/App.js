import { useState } from "react";
import "./App.css";

export default function App() {
  const [height, setHeight] = useState(100);
  return (
    <div class="box">
      <div class="inner-box item-0">
        <p>image here</p>
      </div>
      <div class="search-flex-item"></div>
      <div class="search-button-flex-item"></div>
      <div class="search-result-flex-item">
        Try
        <hr style={{ width: "80%", margin: "auto" }} />
      </div>
    </div>
  );
}