import React, { Component } from "react";

export class MessageItem extends Component {
  render() {
    return (
      <div className="messageDiv">
        <div>
          <span> ClientID: </span>
          <span> {this.props.clientID}</span>
          <div style={{ float: "right" }}>
            <span> Sent At: </span>
            <span> {this.props.time}</span>
          </div>
        </div>

        <span> {this.props.content}</span>
      </div>
    );
  }
}

export default MessageItem;
