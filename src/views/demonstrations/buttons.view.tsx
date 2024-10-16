import React from "react";  
import Button from '../../components/forms/button/button.component';

const AppButtonContainer = () => {
  return (
    <div className="app-container">
      <hr />
      <h1>Button Component Demonstration</h1>
       
      <h2>PURE BUTTONS</h2>
      <Button theme="outlined-primary" className="m-1">Primary Outlined Button</Button>
      <Button theme="primary" className="m-1">Primary Button</Button><br/>
      <Button theme="outlined-secondary" className="m-1">Secondary Outlined Button</Button>
      <Button theme="secondary" className="m-1">Secondary Button</Button><br/>
      <Button theme="outlined-info" className="m-1">Info Outlined Button</Button>
      <Button theme="info" className="m-1">Info Button</Button><br/>
      <Button theme="outlined-success" className="m-1">Success Outlined Button</Button>
      <Button theme="success" className="m-1">Success Button</Button><br/>
      <Button theme="outlined-danger" className="m-1">Danger Outlined Button</Button>
      <Button theme="danger" className="m-1">Danger Button</Button><br/>
      <Button theme="outlined-warning" className="m-1">Warning Outlined Button</Button>
      <Button theme="warning" className="m-1">Warning Button</Button><br/>
      
      <h2>ICONED BUTTONS</h2>
      <Button theme="outlined-primary" className="m-1" icon="thumb_up">Primary Outlined Button</Button>
      <Button theme="primary" className="m-1" icon="thumb_up">Primary Button</Button><br/>
      <Button theme="outlined-secondary" className="m-1" icon="favorite_border">Secondary Outlined Button</Button>
      <Button theme="secondary" className="m-1" icon="favorite_border">Secondary Button</Button><br/>
      <Button theme="outlined-info" className="m-1" icon="thumb_up">Info Outlined Button</Button>
      <Button theme="info" className="m-1" icon="thumb_up">Info Button</Button><br/>
      <Button theme="outlined-success" className="m-1" icon="favorite_border">Success Outlined Button</Button>
      <Button theme="success" className="m-1" icon="favorite_border">Success Button</Button><br/>
      <Button theme="outlined-danger" className="m-1" icon="thumb_up">Danger Outlined Button</Button>
      <Button theme="danger" className="m-1" icon="thumb_up">Danger Button</Button><br/>
      <Button theme="outlined-warning" className="m-1" icon="thumb_up">Warning Outlined Button</Button>
      <Button theme="warning" className="m-1" icon="thumb_up">Warning Button</Button><br/>
      
      <h2>BADGED BUTTONS</h2>
      <Button theme="outlined-primary" className="m-1" badgeValue="5">Primary Outlined Button</Button>
      <Button theme="primary" className="m-1" badgeValue="5">Primary Button</Button><br/>
      <Button theme="outlined-secondary" className="m-1" badgeValue="5">Secondary Outlined Button</Button>
      <Button theme="secondary" className="m-1" badgeValue="5">Secondary Button</Button><br/>
      <Button theme="outlined-info" className="m-1" badgeValue="5">Info Outlined Button</Button>
      <Button theme="info" className="m-1" badgeValue="5">Info Button</Button><br/>
      <Button theme="outlined-success" className="m-1" badgeValue="5">Success Outlined Button</Button>
      <Button theme="success" className="m-1" badgeValue="5">Success Button</Button><br/>
      <Button theme="outlined-danger" className="m-1" badgeValue="5">Danger Outlined Button</Button>
      <Button theme="danger" className="m-1" badgeValue="5">Danger Button</Button><br/>
      <Button theme="outlined-warning" className="m-1" badgeValue="5">Warning Outlined Button</Button>
      <Button theme="warning" className="m-1" badgeValue="5">Warning Button</Button><br/>
    </div>
  );
}

export default AppButtonContainer;
