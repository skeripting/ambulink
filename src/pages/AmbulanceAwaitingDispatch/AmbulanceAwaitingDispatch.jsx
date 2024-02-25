import React, { useState } from "react";
import "./AmbulanceAwaitingDispatch.scss";
import GradientBackground from "../../components/GradientBackground/GradientBackground";
import FlipbookLayout from "../../components/FlipbookLayout/FlipbookLayout";
import Map from "../../components/Map/Map";
import { Helmet } from "react-helmet";

function AmbulanceAwaitingDispatch() {
  const AWAITING_DISPATCH_STATE = 0;
  const SHOWING_MAP_STATE = 1;
  const [state, setState] = useState(1);
  const [patient, setPatient] = useState("Sally");
  const [cause, setCause] = useState("Labor");
  const [address, setAddress] = useState(localStorage.getItem("address"));

  return (
    <>
      <GradientBackground>
        {state == AWAITING_DISPATCH_STATE && (
          <FlipbookLayout
            left={<img src="/ambulance.png"></img>}
            right={
              <div className="ambulance-right">
                <h1>Awaiting Dispatch</h1>
                <p className="subtitle-text">
                  Waiting for a dispatcher to dispatch this Ambulance..
                </p>
              </div>
            }
          ></FlipbookLayout>
        )}
        {state == SHOWING_MAP_STATE && (
          <FlipbookLayout
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
                <p>Go to</p>
                <h1>{address}</h1>
                <p className="subtitle-text">
                  to treat <strong>{patient}</strong> with{" "}
                  <strong>{cause}</strong>
                </p>
              </div>
            }
          ></FlipbookLayout>
        )}
      </GradientBackground>
    </>
  );
}

export default AmbulanceAwaitingDispatch;
