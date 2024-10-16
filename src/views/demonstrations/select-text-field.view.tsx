
/* import React, { useState } from 'react';  */

import SelectTextField from '../../components/forms/selecct-text-field/selecct-text-field.component';


const AppTextSelectFieldContainer = () => {
  const options = [
    { value: 'us', label: 'US', icon: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg', iconType: 'image' as const },
    { value: 'ca', label: 'CA', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg', iconType: 'image' as const },
    { value: 'phone', label: 'Phone', icon: 'phone', iconType: 'material' as const },
    { value: 'email', label: 'Email', icon: 'email', iconType: 'material' as const },
  ];

  const handleSelect = (value: string) => {
    console.log('Selected:', value);
  };

  const handleInputChange = (value: string) => {
    console.log('Input changed:', value);
  };

  return (
    <div className="app-container"> 
            <hr />

      <h1>Combined Field Demonstration</h1>
  
      <br />
      <SelectTextField
        options={options}
        placeholder="Phone number"
        onSelect={handleSelect}
        onInputChange={handleInputChange}
        className="custom-combined-field"
        label="Contact"
        labelPosition="inline"
        labelAlign="left"
        textAlign="center"
      />
      <br />
      <br />
      <SelectTextField
        options={options}
        placeholder="Phone number"
        onSelect={handleSelect}
        onInputChange={handleInputChange}
        className="custom-combined-field"
        label="Contact Method"
        labelPosition="top"
        labelAlign="center"
        textAlign="center"
      />
    </div> 
  );

};
  
export default AppTextSelectFieldContainer;
