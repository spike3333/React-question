import React, { useEffect, useState } from "react";
import "./traffic.css";

const Traffic = () => {

  const trafficData = {
    red: {
      isActive: false,
      color: "red",
      timeout: 5000,
      next: "yellow",
    },

    yellow: {
      isActive: false,
      color: "yellow",
      timeout: 2000,
      next: "green",
    },

    green: {
      isActive: false,
      color: "green",
      timeout: 7000,
      next: "red",
    },
  };

  const [isActive, setIsActive] = useState(true);
  const [currentLight, setCurrentLight] = useState(trafficData.red);
  const [visibleLight, setVisibleLight] = useState("red");

  useEffect(() => {
    if (isActive) {
        const timeoutId = setTimeout(() => {
          const nextLightData = currentLight.next;
          setCurrentLight(trafficData[currentLight.next]);
          setVisibleLight(currentLight.next)

        }, currentLight.timeout); 
    console.log("timeoutId",timeoutId)
        return () => clearTimeout(timeoutId); // Clean up the timeout
      }
  }, [currentLight]);

  return (
    <div className="traffic_container">
        <input type="text"></input>
    <div
      className="red_light"
      style={{ backgroundColor: "red", opacity: visibleLight === "red" ? 1 : 0.1 }}
    ></div>
    <div
      className="yellow_light"
      style={{ backgroundColor: "yellow", opacity: visibleLight === "yellow" ? 1 : 0.1}}
    ></div>
    <div
      className="green_light"
      style={{ backgroundColor: "green", opacity: visibleLight === "green" ? 1 : 0.1}}
    ></div>
  </div>
  );
};

export default Traffic;