import 'bulma/css/bulma.min.css';
import { Form, Icon, Button } from 'react-bulma-components';

export function SubscriberForm() {
    return <form onSubmit={event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formObject = Object.fromEntries(formData.entries());
        console.log(formObject);
    }}>
      <Form.Field>
        <Form.Label>Your name</Form.Label>
        <Form.Control>
          <Form.Input
            color=""
            name="Your name"
          />
          <Icon align="left" size="small">
            <i className="fas fa-user" />
          </Icon>
          <Icon align="right" size="small">
            <i className="fas fa-check" />
          </Icon>
        </Form.Control>
        <Form.Help color="success">Please enter your name</Form.Help>
      </Form.Field>

      <Form.Field>
        <Form.Label>Email or Phone number</Form.Label>
        <Form.Control>
          <Form.Input
            color=" "
            name="email"
          />
          <Icon align="left" size="small">
            <i className="fas fa-envelope" />
          </Icon>
          <Icon align="right" size="small">
            <i className="fas fa-exclamation-triangle" />
          </Icon>
        </Form.Control>
        <Form.Help color="link">Please enter your email or phone number</Form.Help> 
      </Form.Field>

      <Form.Field>
        <Form.Label>Subject</Form.Label>
        <Form.Field kind="group">
          <Form.Control>
            <Form.Select
              name="subject"
            >
              <option value="Booking">Booking</option>
              <option value="Food Review">Food Review</option>
              <option value="Service Critique">Service Critique</option>
              <option value="Other Critique">Other Critique</option>
              <option value="Other">Other</option>
            </Form.Select>
          </Form.Control>
          <Form.Control fullwidth loading>
            <Form.Input placeholder="We would like to hear your thoughts" />
          </Form.Control>
        </Form.Field>
      </Form.Field>

      <Form.Field kind="group">
        <Form.Control>
          <Button color="info">Submit</Button>
        </Form.Control>
        <Form.Control>
          <Button color="danger" colorVariant="">
            Cancel
          </Button>
        </Form.Control>
      </Form.Field>

  

    </form>
}