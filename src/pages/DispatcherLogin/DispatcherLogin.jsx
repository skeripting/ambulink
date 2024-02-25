import React from "react";
import "./DispatcherLogin.scss";
import GradientBackground from "../../components/GradientBackground/GradientBackground";
import FlipbookLayout from "../../components/FlipbookLayout/FlipbookLayout";
import TextField from "../../components/TextField/TextField";
import TextButton from "../../components/TextButton/TextButton";
import { useNavigate } from "react-router-dom";

function DispatcherLogin() {
  const navigate = useNavigate();
  return (
    <>
      <GradientBackground>
        <FlipbookLayout
          left={<img src="/ambulancestaff.png"></img>}
          right={
            <div className="dispatcher-right">
              <h1>Dispatcher Login</h1>
              <p className="subtitle-text">Please login to continue</p>
              <div className="inputs">
                <TextField
                  placeholder="Enter email address"
                  type="text"
                ></TextField>
                <TextField
                  placeholder="Enter password"
                  type="password"
                ></TextField>
              </div>
              <TextButton
                onClick={() => {
                  navigate("/welcome-dispatcher");
                }}
              ></TextButton>
              <a href="/patient-login">I am a Patient</a>
              <a href="/ambulance-login">I drive an Ambulance</a>
            </div>
          }
        ></FlipbookLayout>
      </GradientBackground>
    </>
  );
}

export default DispatcherLogin;
