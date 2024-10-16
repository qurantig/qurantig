import React from 'react';
import ToggleButton from '../../components/forms/toggle-button/toggle-button.component';

const AppToggleButtonContainer: React.FC = () => {
  return (
    <div className="app-container">
      <hr />
      <h1>Toggle Button Demonstration </h1>

      <ToggleButton label="Allow Marketing" theme="primary" classNames="custom-class" labelPosition="left" />
      <ToggleButton label="Enable Notifications" theme="secondary" labelPosition="right" />
      <ToggleButton label="Info Mode" theme="info" labelPosition="top" />
      <ToggleButton label="Success Mode" theme="success" labelPosition="left" />
      <ToggleButton label="Warning Mode" theme="warning" labelPosition="right" />
      <ToggleButton label="Danger Mode" theme="danger" labelPosition="top" />
    </div>
  );
}

export default AppToggleButtonContainer;
