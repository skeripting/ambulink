import React, { useState } from "react";
import "./WelcomePatient.scss";
import GradientBackground from "../../components/GradientBackground/GradientBackground";
import FlipbookLayout from "../../components/FlipbookLayout/FlipbookLayout";
import Map from "../../components/Map/Map";
import { Helmet } from "react-helmet";

function WelcomePatient() {
  const [patient, setPatient] = useState("Sally");
  const [cause, setCause] = useState("Labor");
  const [address, setAddress] = useState("123 Test Avenue");

  return (
    <div className="welcome-patient">
      <GradientBackground color="blue">
        <FlipbookLayout
          color="blue"
          left={
            <div className="map-container">
              <Helmet>
                <link
                  rel="stylesheet"
                  href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
                  integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
                  crossorigin=""
                />
                <script
                  src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
                  integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
                  crossorigin=""
                ></script>
              </Helmet>
              <Map></Map>
            </div>
          }
          right={
            <div className="ambulance-right">
              <h1>{"The Ambulance is on its way"}</h1>
              <h2>Dispatcher's Instructions</h2>
              <ul>
                <li>Lie down or sit propped up</li>
                <li>Try to stay calm</li>
                <li>Practice deep breathing</li>
                <li>Keep your front door unlocked so rescue can get in</li>
              </ul>
            </div>
          }
        ></FlipbookLayout>
      </GradientBackground>
    </div>
  );
}

export default WelcomePatient;
