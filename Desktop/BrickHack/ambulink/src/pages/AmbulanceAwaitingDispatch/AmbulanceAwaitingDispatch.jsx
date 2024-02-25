import React, { useState } from "react";
import "./AmbulanceAwaitingDispatch.scss";
import GradientBackground from "../../components/GradientBackground/GradientBackground";
import FlipbookLayout from "../../components/FlipbookLayout/FlipbookLayout";

function AmbulanceAwaitingDispatch() {
  const AWAITING_DISPATCH_STATE = 0;
  const SHOWING_MAP_STATE = 1;
  const [state, setState] = useState(1);
  const [patient, setPatient] = useState("Sally");
  const [cause, setCause] = useState("Labor");
  const [address, setAddress] = useState("123 Test Avenue");

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
            left={<img src="/ambulance.png"></img>}
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
