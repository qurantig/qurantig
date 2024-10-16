import React from 'react'; 
import Card from '../../components/card/card.component'; 
import Button from '../../components/forms/button/button.component';

const textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const formContent = (
  <form>
    <div className="form-group">
      <label htmlFor="someField">Some Field</label>
      <br></br>
      <input type="text" className="form-control" id="someField" placeholder="Enter some text" />
    </div>
    <div className="form-group">
      <label htmlFor="otherField">Other Field</label>
      <br></br>
      <input type="text" className="form-control" id="otherField" placeholder="Enter other text" />
    </div>
  </form>
);

const CardsView: React.FC = () => {
  return (
    <div>
      <h1>Card components</h1>
      <hr></hr>
      <h2>Card with close button</h2>
      <Card title="Info" cardType="info" content={textContent} CloseButton={true} onClose={() => console.log('Close button clicked')}>
        <Button className="btn-info mr-3 mb-3" icon="save" >Save</Button>
        <Button className="btn-danger " icon="cancel" >Cancel</Button>
      </Card>
      <h2>Card without close button </h2>
      <Card title="Primary" cardType="primary" content={textContent} >
      <Button className="btn-primary mr-3 mb-3" icon="save" >Save</Button>
        <Button className="btn-danger " icon="cancel" >Cancel</Button>
      </Card>
      <h2>Card without any buttons </h2>
      <Card title="secondary" cardType="secondary" content={textContent} >
      </Card>
      <h2>Card with subtitle  </h2>
      <Card title="1" subtitle='سُوْرَۃُ الْفَاتِحَۃِ' cardType="success" content={textContent} >
      </Card>
      <h2>Card with form content  </h2>
      <Card title="Form content"  cardType="warning" content={formContent} CloseButton={true} onClose={() => console.log('Close button clicked')} >
      <Button className="btn-info mr-3 mb-3" icon="save" >Save</Button>
      <Button className="btn-danger " icon="cancel" >Cancel</Button>
      </Card>
    </div>
  );
};
export default CardsView;
 