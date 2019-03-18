import React, { Component } from "react";
import { Button } from "react-bootstrap";

export class JoinedGroupItem extends Component {
  onEnterButtonClick = e => {
    let groupID = this.props.groupID;
    this.props.enterGroup(groupID);
  };

  render() {
    return (
      <div className="groupItem">
        <span> GroupID</span>
        <span> {this.props.groupID}</span>
        <Button
          variant="primary"
          type="submit"
          onClick={this.onEnterButtonClick}
          style={{ float: "right", fontSize: "15px", padding: "3px" }}
        >
          Enter
        </Button>
      </div>
    );
  }
}

export default JoinedGroupItem;
