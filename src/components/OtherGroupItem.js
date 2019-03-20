import React, { Component } from "react";
import { Button } from "react-bootstrap";

export class OtherGroupItem extends Component {
  render() {
    return (
      <div className="groupItem">
        <span> GroupID</span>
        <span> {this.props.groupID}</span>
        <span> {this.props.groupName}</span>
        <Button
          variant="primary"
          type="submit"
          onClick={this.onExitClick}
          style={{ float: "right", fontSize: "15px", padding: "3px" }}
        >
          Join
        </Button>
      </div>
    );
  }
}

export default OtherGroupItem;
