import { useRef } from "react";
import "./App.css";
import RefForm from "./components/RefForm/RefForm";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import StateFullForm from "./components/StateFullForm/StateFullForm";
import Hookform from "./components/Hookform/Hookform";
import ReUseableForm from "./components/ReUseableForm/ReUseableForm";
import GrandPa from "./components/GrandPa/GrandPa";

function App() {
  // const handleSignupSubmit = (data) => {
  //   console.log("Sign up data", data);
  // };
  // const handleUpdateSubmit = (data) => {
  //   console.log("Update data", data);
  // };

  return (
    <>
      <h1>Form Master</h1>
      {/* <GrandPa></GrandPa> */}
      <SimpleForm></SimpleForm>
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <Hookform></Hookform> */}
      {/* <ReUseableForm formTitle={"Sign Up"} handleSubmit={handleSignupSubmit}>
        <div>
          <h1>Sign Up</h1>
          <p>Please sign up</p>
        </div>
      </ReUseableForm>
      <ReUseableForm
        formTitle={"Profile Update"}
        handleSubmit={handleUpdateSubmit}
        submitButtonText="Update"
      >
        <div>
          <h1>Update</h1>
          <p>Always Update</p>
        </div>
      </ReUseableForm> */}
    </>
  );
}

export default App;
