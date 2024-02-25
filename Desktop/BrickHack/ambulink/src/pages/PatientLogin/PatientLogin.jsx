import React from "react";
import "./PatientLogin.scss";
import GradientBackground from "../../components/GradientBackground/GradientBackground";
import FlipbookLayout from "../../components/FlipbookLayout/FlipbookLayout";
import TextField from "../../components/TextField/TextField";
import TextButton from "../../components/TextButton/TextButton";

function PatientLogin() {
  return (
    <>
      <GradientBackground color="blue">
        <FlipbookLayout
          color="blue"
          left={<img src="/patient.png"></img>}
          right={
            <div className="patient-right">
              <h1>Patient Login</h1>
              <p className="subtitle-text">Please login to continue</p>
              <div className="inputs">
                <TextField
                  placeholder="Enter email address"
                  type="text"
                  color="blue"
                ></TextField>
                <TextField
                  placeholder="Enter password"
                  type="password"
                  color="blue"
                ></TextField>
              </div>
              <TextButton color="blue"></TextButton>
              <a href="/">I am a Dispatcher</a>
              <a href="/ambulance-login">I drive an Ambulance</a>
            </div>
          }
        ></FlipbookLayout>
      </GradientBackground>
    </>
  );
}

export default PatientLogin;
