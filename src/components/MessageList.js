import React, { Component } from "react";
import MessageItem from "./MessageItem";
export class MessageList extends Component {
  render() {
    return this.props.messages.map(messageItem => (
      <MessageItem
        userID={messageItem.userID}
        content={messageItem.content}
        time={messageItem.time}
      />
    ));
  }
}

export default MessageList;
