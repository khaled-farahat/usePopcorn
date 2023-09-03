import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
// import './index.css'
import StarRating from "./StarRating";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    <StarRating maxRating={5} />
  </React.StrictMode>
);
