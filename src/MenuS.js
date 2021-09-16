import React, { Component } from "react";
import {Button} from 'semantic-ui-react';

export default class menu extends Component {
  render() {
    return (
      <div>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <Button success>Success</Button>
      </div>
    );
  }
}
