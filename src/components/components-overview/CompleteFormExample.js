import React from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  FormCheckbox,
  FormSelect,
  Button
} from "shards-react";

const CompleteFormExample = () => (
<<<<<<< HEAD
  <ListGroup flush style={{borderStyle:"solid"}}>
=======
  <ListGroup flush>
>>>>>>> bbab9812e433693c982449483b7b79aa19a0f177
    <ListGroupItem className="p-3">
      <Row>
        <Col>
          <Form>
            <Row form>
<<<<<<< HEAD

                <Col md="10" className="form-group" style={{marginBottom:"1%"}}>
                    <label htmlFor="Status">Generic</label>
                </Col>

                <Col md="5" className="form-group">
                    <label htmlFor="Status">Status:</label>
                    <FormInput
                        id="Status"
                        type="text"
                        style={{borderStyle:"dashed"}}
                    />
              </Col>

              <Col md="5">
                <label htmlFor="Name/DNI/Mail">Name/DNI/Mail:</label>
                <FormInput
                  id="Name/DNI/Mail"
                  type="text"
                  style={{borderStyle:"dashed"}}
                />
              </Col>

            </Row>
=======
              <Col md="6" className="form-group">
                <label htmlFor="feEmailAddress">Email</label>
                <FormInput
                  id="feEmailAddress"
                  type="email"
                  placeholder="Email"
                />
              </Col>
              <Col md="6">
                <label htmlFor="fePassword">Password</label>
                <FormInput
                  id="fePassword"
                  type="password"
                  placeholder="Password"
                />
              </Col>
            </Row>

            <FormGroup>
              <label htmlFor="feInputAddress">Address</label>
              <FormInput id="feInputAddress" placeholder="1234 Main St" />
            </FormGroup>

            <FormGroup>
              <label htmlFor="feInputAddress2">Address 2</label>
              <FormInput
                id="feInputAddress2"
                placeholder="Apartment, Studio or Floor"
              />
            </FormGroup>

            <Row form>
              <Col md="6" className="form-group">
                <label htmlFor="feInputCity">City</label>
                <FormInput id="feInputCity" />
              </Col>
              <Col md="4" className="form-group">
                <label htmlFor="feInputState">State</label>
                <FormSelect id="feInputState">
                  <option>Choose...</option>
                  <option>...</option>
                </FormSelect>
              </Col>
              <Col md="2" className="form-group">
                <label htmlFor="feInputZip">Zip</label>
                <FormInput id="feInputZip" />
              </Col>
              <Col md="12" className="form-group">
                <FormCheckbox>
                  {/* eslint-disable-next-line */}I agree with your{" "}
                  <a href="#">Privacy Policy</a>.
                </FormCheckbox>
              </Col>
            </Row>
            <Button type="submit">Create New Account</Button>
>>>>>>> bbab9812e433693c982449483b7b79aa19a0f177
          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
);

export default CompleteFormExample;
