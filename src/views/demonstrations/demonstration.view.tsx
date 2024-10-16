import React  from "react";
import AppToggleButtonContainer from "./toggle.button.view";
import AppCheckBoxContainer from "./checkbox.view";
import AppTextSelectFieldContainer from "./select-text-field.view";
import AppSelectFieldContainer from "./select.view";
import AppTextFieldContainer from "./inputs.view";
import AppButtonContainer from "./buttons.view";
 

const DemonstrationView = () =>{
 
  return ( 
      <div className="container"> 
        <AppToggleButtonContainer />
        <AppCheckBoxContainer />
        <AppTextSelectFieldContainer />
        <AppSelectFieldContainer />
        <AppTextFieldContainer />
        <AppButtonContainer />
      </div> 
  );
}

export default DemonstrationView;
