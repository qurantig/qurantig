/* import React, { useState } from 'react'; */
/* import TextField from "../../components/forms/text-field/text-field.component"; */
import SelectField from '../../components/forms/select-field/select-field.component';


const AppSelectFieldContainer = () => {

 /*   const [selectedCountry, setSelectedCountry] = useState<string>('');
    const [selectedCity, setSelectedCity] = useState<string>('');
 */
    const handleSelect = (value: string) => {
     /*  setSelectedCountry(value); */
    };
    const handleSelectCity = (value: string) => {
       /*  setSelectedCity(value); */
      }; 

  

    return (   
        <div className="app-container"> 
        <hr />
        <h1>Select  Field Demonstration </h1>
       
        <SelectField
        options={['USA', 'Canada', 'Mexico']}
        onSelect={handleSelect}
        placeholder="Select a country" 
        className="custom-select"
        label="Country"
        labelPosition="top"
        labelAlign="center"
        textAlign="left"
      />
        <br />
        <br />
        <SelectField
        options={['New York', 'Toronto', 'Mexico City']}
        onSelect={handleSelectCity}
        placeholder="Select a city"
        className="custom-select-city"
        label="City"
        labelPosition="inline"
        labelAlign="left"
        textAlign="left"
        placeholderAlign="left"
      />
        </div> 
       
      
    );

};
  
export default AppSelectFieldContainer;
