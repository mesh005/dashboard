import React from "react";
import {
  InputGroup,
  FormInput,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
<<<<<<< HEAD
  DropdownItem,
  Col,
  Row,
  Container,
  Form,
  ListGroup,
  ListGroupItem,
  Button

} from "shards-react";

import Checkboxes from "../components-overview/Checkboxes";
import CompleteFormExample from "../components-overview/CompleteFormExample";

=======
  DropdownItem
} from "shards-react";

>>>>>>> bbab9812e433693c982449483b7b79aa19a0f177
class DropdownInputGroups extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      dropdown1: false,
      dropdown2: false
    };
  }

  toggle(which) {
    const newState = { ...this.state };
    newState[which] = !this.state[which];
    this.setState(newState);
  }

  render() {
    return (
<<<<<<< HEAD
      <div style={{padding:"2%"}}>
=======
      <div>
        <InputGroup className="mb-3">
          <FormInput />
          <Dropdown
            open={this.state.dropdown1}
            toggle={() => this.toggle("dropdown1")}
            addonType="append"
          >
            <DropdownToggle caret>Dropdown</DropdownToggle>
            <DropdownMenu small right>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </InputGroup>

        <InputGroup className="mb-3">
>>>>>>> bbab9812e433693c982449483b7b79aa19a0f177
          <Dropdown
            open={this.state.dropdown2}
            toggle={() => this.toggle("dropdown2")}
            addonType="prepend"
          >
<<<<<<< HEAD
            <DropdownToggle caret>Options</DropdownToggle>
            <DropdownMenu small>
                <div style={{padding:"3%"}}>
                  <CompleteFormExample/> <br/>
                  <Checkboxes/> <br/>
                     <Button theme="primary" className="mb-2 mr-1" style={{width:"80px"}}>
                       Filter
                     </Button>
                 </div>
            </DropdownMenu >
          </Dropdown>
=======
            <DropdownToggle caret>Dropdown</DropdownToggle>
            <DropdownMenu small>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <FormInput />
        </InputGroup>
>>>>>>> bbab9812e433693c982449483b7b79aa19a0f177
      </div>
    );
  }
}

export default DropdownInputGroups;
