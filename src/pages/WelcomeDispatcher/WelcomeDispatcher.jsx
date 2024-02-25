import React, { useRef, useState } from "react";
import "./WelcomeDispatcher.scss";
import GradientBackground from "../../components/GradientBackground/GradientBackground";
import FlipbookLayout from "../../components/FlipbookLayout/FlipbookLayout";
import TextField from "../../components/TextField/TextField";
import TextButton from "../../components/TextButton/TextButton";
import SelectBox from "../../components/SelectBox/SelectBox";
import AmbulanceSelection from "../../components/AmbulanceSelection/AmbulanceSelection";

function WelcomeDispatcher() {
  const ENTER_ADDRESS_STATE = 0;
  const SELECT_DISPATCH_REASON_STATE = 1;
  const SELECT_AMBULANCE_STATE = 2;
  const AMBULANCE_ON_WAY_STATE = 3;

  const addressTextBox = useRef(null);
  const [state, setState] = useState(ENTER_ADDRESS_STATE);
  const [address, setAddress] = useState("");
  const [reason, setReason] = useState();
  const [selectedAmbulanceLicensePlate, setSelectedAmbulanceLicensePlate] =
    useState("GGC1234");

  function EnterAddress() {
    return (
      <>
        <h1 className="welcome-text">Welcome, Dispatcher</h1>
        <div className="popup">
          <div className="popup-flex">
            <h1>Enter an address to dispatch to</h1>
            <p className="caption">This is the address of the patient.</p>
            <TextField
              placeholder="Enter an address"
              className="popup-placeholder"
              id="enter-address"
              ref={addressTextBox}
            ></TextField>
            <TextButton
              text="Next"
              onClick={(event) => {
                event.preventDefault();

                setAddress(addressTextBox.current.value);
                localStorage.setItem("address", addressTextBox.current.value);
                setState(state + 1);
              }}
            ></TextButton>
          </div>
        </div>
      </>
    );
  }
  function SelectDispatchReason() {
    return (
      <>
        <h1 className="welcome-text">Welcome, Dispatcher</h1>
        <div className="popup">
          <div className="popup-flex">
            <h1>Select the dispatch reason</h1>
            <p className="caption">What is the patient going through?</p>
            <SelectBox
              text="Select dispatch reason"
              className="popup-placeholder"
            >
              <option value="labor">Patient in labor</option>
              <option value="chestPain">
                Severe chest pain (suspected heart attack)
              </option>
              <option value="breathingDifficulties">
                Difficulty breathing (asthma attack, COPD exacerbation)
              </option>
              <option value="uncontrolledBleeding">
                Uncontrolled bleeding
              </option>
              <option value="severeAllergicReaction">
                Severe allergic reaction (anaphylaxis)
              </option>
              <option value="strokeSymptoms">
                Stroke symptoms (sudden numbness, confusion, trouble speaking)
              </option>
              <option value="majorTrauma">
                Major trauma (from car accidents, falls, etc.)
              </option>
              <option value="severeBurns">Severe burns</option>
              <option value="poisoningOverdose">Poisoning or overdose</option>
              <option value="highFeverConvulsions">
                High fever with convulsions (seizures)
              </option>
              <option value="choking">Choking</option>
              <option value="drowning">Drowning or near-drowning</option>
              <option value="hypothermiaFrostbite">
                Hypothermia or frostbite
              </option>
              <option value="heatstroke">
                Heatstroke or severe heat exhaustion
              </option>
              <option value="electricShock">
                Electric shock or lightning strike
              </option>
              <option value="severeHeadache">
                Sudden severe headache (possible aneurysm)
              </option>
              <option value="suicidalBehaviors">
                Suicidal thoughts or behaviors
              </option>
              <option value="violentInjuries">
                Violent injuries (stabbing, gunshot wounds)
              </option>
              <option value="pregnancyComplications">
                Pregnancy complications (aside from labor)
              </option>
              <option value="diabeticEmergency">
                Diabetic emergency (severe hypoglycemia or ketoacidosis)
              </option>
            </SelectBox>
            <TextButton
              text="Next"
              onClick={() => {
                setState(state + 1);
              }}
            ></TextButton>
          </div>
        </div>
      </>
    );
  }

  function SelectAmbulance() {
    const availableAmbulances = [
      {
        licensePlate: "GGC1234",
        arrivalTime: "5 min",
      },
      {
        licensePlate: "GGC4321",
        arrivalTime: "10 min",
      },
    ];
    return (
      <>
        <h1 className="welcome-text">Select an Ambulance</h1>
        <div className="popup">
          <div className="popup-flex">
            <h1>Available Ambulances in Rochester, NY</h1>
            <div className="available-ambulances">
              {availableAmbulances.map((v) => (
                <AmbulanceSelection
                  licensePlate={v.licensePlate}
                  arrivalTime={v.arrivalTime}
                  selected={selectedAmbulanceLicensePlate == v.licensePlate}
                  onClick={() => {
                    console.log("clicked");
                    console.log(v.licensePlate);
                    setSelectedAmbulanceLicensePlate(v.licensePlate);
                  }}
                ></AmbulanceSelection>
              ))}
            </div>

            <TextButton
              text="Next"
              onClick={() => {
                setState(state + 1);
              }}
            ></TextButton>
          </div>
        </div>
      </>
    );
  }
  function AmbulanceOnWay() {
    return (
      <>
        <h1 className="welcome-text">Ambulance Deployed</h1>
        <div className="popup">
          <div className="popup-flex">
            <h1>Ambulance {selectedAmbulanceLicensePlate} is on its way!</h1>
            <div className="ambulance-logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="265"
                height="265"
                viewBox="0 0 265 265"
              >
                <image
                  id="ambulance"
                  width="265"
                  height="265"
                  href="data:image/png;base64,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"
                />
              </svg>
              <p>
                Dispatched {selectedAmbulanceLicensePlate} to {address}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="welcome-dispatcher">
      {" "}
      <GradientBackground>
        {" "}
        {state === ENTER_ADDRESS_STATE && <EnterAddress></EnterAddress>}
        {state === SELECT_DISPATCH_REASON_STATE && (
          <SelectDispatchReason></SelectDispatchReason>
        )}
        {state === SELECT_AMBULANCE_STATE && (
          <SelectAmbulance></SelectAmbulance>
        )}
        {state === AMBULANCE_ON_WAY_STATE && <AmbulanceOnWay></AmbulanceOnWay>}
      </GradientBackground>
    </div>
  );
}

export default WelcomeDispatcher;
