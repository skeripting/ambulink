import React from "react";
import "./AmbulanceLogin.scss";
import GradientBackground from "../../components/GradientBackground/GradientBackground";
import FlipbookLayout from "../../components/FlipbookLayout/FlipbookLayout";
import TextField from "../../components/TextField/TextField";
import TextButton from "../../components/TextButton/TextButton";
import { useNavigate } from "react-router-dom";

function AmbulanceLogin() {
  const navigate = useNavigate();
  return (
    <>
      <GradientBackground>
        <FlipbookLayout
          left={<img src="/ambulance.png"></img>}
          right={
            <div className="ambulance-right">
              <h1>Ambulance Login</h1>
              <p className="subtitle-text">Please login to continue</p>
              <div className="inputs">
                <TextField
                  placeholder="Enter driver's license #"
                  type="text"
                  name="license_number"
                ></TextField>
                <TextField
                  placeholder="Enter license plate"
                  type="password"
                  name="license_plate"
                ></TextField>
              </div>
              <TextButton
                onClick={() => {
                  navigate("/ambulance-awaiting-dispatch");
                }}
              ></TextButton>
              <a href="/patient-login">I am a Patient</a>
              <a href="/">I am a Dispatcher</a>
            </div>
          }
        ></FlipbookLayout>
      </GradientBackground>
    </>
  );
}

export default AmbulanceLogin;
