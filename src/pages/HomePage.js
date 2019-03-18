import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import MessageList from "../components/MessageList";

export class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      messageContent: "",
      currentClientID: "3",
      messages: [
        {
          clientID: "1",
          time: "12.00",
          content: "Hello"
        },
        {
          clientID: "2",
          time: "12.01",
          content: "Hi"
        },
        {
          clientID: "2",
          time: "12.01",
          content:
            "sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
        },
        {
          clientID: "1",
          time: "13.00",
          content:
            "sdasdsssssssssssssssssssssssssssssssssssssssssssssssssssssadasdsadsadasdasdsssssssssssssssssssssssssssssssssssssssssssssssssssss"
        },
        {
          clientID: "2",
          time: "12.01",
          content: "Hi"
        },
        {
          clientID: "2",
          time: "12.01",
          content: "Hi"
        },
        {
          clientID: "2",
          time: "12.01",
          content: "Hi"
        },
        {
          clientID: "2",
          time: "12.01",
          content: "Hi"
        },
        {
          clientID: "2",
          time: "12.01",
          content: "Hi"
        },
        {
          clientID: "2",
          time: "12.01",
          content: "Hi"
        }
      ]
    };
  }

  onFormChange = e => {
    this.state[e.target.id] = e.target.value;
    console.log(this.state);
  };

  onSendMessageClick = () => {
    var messageContent = this.state.messageContent;
    if (messageContent == "") return;

    var messageContentForm = this.refs.messageContentFormRef;
    let currentTime = new Date().toLocaleString();

    let msg = {
      clientID: this.state.currentClientID,
      content: messageContent,
      time: currentTime
    };

    this.state.messages.push(msg);
    console.log(this.state);

    this.setState({
      messageContent: ""
    });

    messageContentForm.value = "";
    // doSomething
  };

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "row", minWidth: "100vh" }}>
        <div className="leftDiv">
          <p>left div</p>
        </div>

        <div className="rightDiv">
          <div className="groupHeader">
            <span>GroupID : </span>
            <span> This.state.groupID </span>

            <div style={{ marginLeft: "auto" }}>
              <Button
                variant="primary"
                type="submit"
                onClick={this.onSubmitLoginClick}
                style={{
                  marginLeft: "20px",
                  marginRight: "10px",
                  backgroundColor: "red",
                  border: "red"
                }}
              >
                Exit
              </Button>

              <Button
                variant="primary"
                type="submit"
                onClick={this.onSubmitLoginClick}
                style={{
                  backgroundColor: "red",
                  border: "red"
                }}
              >
                Leave Group
              </Button>
            </div>
          </div>

          <div className="chatBox">
            <div className="messageArea">
              <MessageList messages={this.state.messages} />
            </div>

            <div className="sendMessageArea">
              <Form.Control
                id="messageContent"
                type="text"
                placeholder=""
                onChange={this.onFormChange}
                style={{ marginLeft: "1px", height: "auto" }}
                ref="messageContentFormRef"
              />

              <Button
                variant="primary"
                type="send"
                onClick={this.onSendMessageClick}
                style={{ marginLeft: "5px", float: "right" }}
              >
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
