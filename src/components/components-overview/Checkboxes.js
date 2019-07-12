import React from "react";
<<<<<<< HEAD
import { Col, FormCheckbox, Row } from "shards-react";

const Checkboxes = () => (
  <Col sm="12" md="16" className="mb-2" style={{borderStyle:"solid", width:"75vw"}}>
    <strong className="text-muted d-block mb-2" style={{paddingLeft:"-10px"}}>Type</strong>
    <fieldset>
      <Row>
          <label style={{margin:"0 5px 0 10px"}}>Pending</label> <FormCheckbox defaultChecked/>
          <label style={{margin:"0 5px 0 15px"}}>Active</label> <FormCheckbox/>
          <label style={{margin:"0 5px 0 15px"}}>Paused</label> <FormCheckbox/>
          <label style={{margin:"0 5px 0 15px"}}>Canceled</label> <FormCheckbox/>
          <label style={{margin:"0 5px 0 15px"}}>Finished</label><FormCheckbox defaultChecked/>
      </Row>
=======
import { Col, FormCheckbox } from "shards-react";

const Checkboxes = () => (
  <Col sm="12" md="4" className="mb-3">
    <strong className="text-muted d-block mb-2">Checkboxes</strong>
    <fieldset>
      <FormCheckbox>Default</FormCheckbox>
      <FormCheckbox defaultChecked>Checked</FormCheckbox>
      <FormCheckbox disabled>Disabled</FormCheckbox>
      <FormCheckbox disabled defaultChecked>
        Disabled Checked
      </FormCheckbox>
>>>>>>> bbab9812e433693c982449483b7b79aa19a0f177
    </fieldset>
  </Col>
);

export default Checkboxes;
