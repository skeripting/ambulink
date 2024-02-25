import React, { useState } from "react";
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

  const [state, setState] = useState(SELECT_AMBULANCE_STATE);

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
            ></TextField>
            <TextButton text="Next"></TextButton>
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
            <TextButton text="Next"></TextButton>
          </div>
        </div>
      </>
    );
  }
  function SelectAmbulance() {
    return (
      <>
        <h1 className="welcome-text">Select an Ambulance</h1>
        <div className="popup">
          <div className="popup-flex">
            <h1>Available Ambulances in Rochester, NY</h1>
            <div className="available-ambulances">
              <AmbulanceSelection
                licensePlate="GGC1234"
                arrivalTime="5 min"
              ></AmbulanceSelection>
              <AmbulanceSelection
                licensePlate="GGC1234"
                arrivalTime="5 min"
              ></AmbulanceSelection>
              <AmbulanceSelection
                licensePlate="GGC1234"
                arrivalTime="5 min"
              ></AmbulanceSelection>
              <AmbulanceSelection
                licensePlate="GGC1234"
                arrivalTime="5 min"
              ></AmbulanceSelection>
            </div>

            <TextButton text="Next"></TextButton>
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
      </GradientBackground>
    </div>
  );
}

export default WelcomeDispatcher;
