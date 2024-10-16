import React from 'react';
import Checkbox, { CheckboxOption } from '../../components/forms/check-box/check-box.component';  

const AppCheckBoxContainer: React.FC = () => {
  const options: { [key: string]: CheckboxOption } = {
    email: { label: 'Email', theme: 'primary', checked: true },
    phone: { label: 'Phone', theme: 'secondary', checked: true },
    sms: { label: 'SMS', theme: 'success', checked: false },
  };

  const handleCheckboxChange = (value: string, isChecked: boolean) => {
    console.log(`Checkbox ${value} is now ${isChecked ? 'checked' : 'unchecked'}`);
  };

  return (
    <div className="AppCheckBoxContainer">
            <hr />

            <h1>Check box Demonstration</h1>

      <Checkbox 
        options={options}
        onChange={handleCheckboxChange}
        orientation="vertical"
        label="Communication"
        labelPosition="top"
      />
      <br />
      <Checkbox 
        options={options}
        onChange={handleCheckboxChange}
        orientation="horizontal"
        label="Communication"
        labelPosition="top"
      />
    </div>
  );
};

export default AppCheckBoxContainer;
