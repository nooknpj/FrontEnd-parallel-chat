import React, { Component } from "react";

export class MessageItem extends Component {
  render() {
    return (
      <div className="messageDiv">
        <div style={messageHeaderStyle}>
          <span style={{ marginLeft: "10px" }}> ClientID: </span>
          <span> {this.props.userID}</span>
          <div style={{ float: "right", marginRight: "10px" }}>
            <span> Sent At: </span>
            <span> {this.props.time}</span>
          </div>
        </div>

        <span>{this.props.content}</span>
      </div>
    );
  }
}

const messageHeaderStyle = {
  backgroundColor: "#56B7E6",
  marginLeft: "-10px",
  marginRight: "-10px"
};

export default MessageItem;
