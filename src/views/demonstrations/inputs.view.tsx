import React from "react";  
import TextField from "../../components/forms/text-field/text-field.component";

const AppTextFieldContainer = () => {
    const customValidationFunction = (value: string) => {
        return value.length >= 5;
    };
    
    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        console.log("Input focused:", e.target.value);
    };
    
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        console.log("Input blurred:", e.target.value);
    };
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Input changed:", e.target.value);
    };
    return (
        <div className="app-container"> 
        <hr />
            <h2> Text Field  Demonstration</h2>
            <TextField 
                label="Company" 
                labelPosition="inline" 
                textAlign="left" 
                labelAlign="left" 
                placeholder="Enter your company name"
                icon="search"
                validationText="This field is required"
                validationPattern={/^[A-Za-z\s]+$/}  // Only letters and spaces
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
            >
            </TextField>
                <br />
            <TextField 
                label="Username"  
                labelAlign="left" 
                textAlign="left" 
                placeholder="Enter your company name" 
                icon="search"
                validationText="Username must be at least 5 characters long"
                validationFunction={customValidationFunction}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
            >
            </TextField>
                <br />
            <TextField 
                label="Company"  
                labelAlign="center" 
                textAlign="center" 
                placeholder="Enter your company name" 
                icon="search"
                validationText="This field is required"
                validationPattern={/^[A-Za-z\s]+$/}  // Only letters and spaces
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                >
            </TextField>
                <br />
            <TextField 
                label="Username"  
                labelAlign="right" 
                textAlign="right" 
                placeholder="Enter your company name" 
                icon="search"
                validationText="Username must be at least 5 characters long"
                validationFunction={customValidationFunction}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
            >
            </TextField>
                <br /> 
        </div>
    );
}

export default AppTextFieldContainer;
