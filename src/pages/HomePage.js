import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import MessageList from "../components/MessageList";
import JoinedGroupList from "../components/JoinedGroupList";
import OtherGroupList from "../components/OtherGroupList";

export class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      groupID: "u1231231",
      messageContent: "",
      userID: "3",
      joinedGroups: joinedGroupsMockUp,
      otherGroups: otherGroupsMockUp,
      messages: messagesMockUp
    };
  }

  componentDidMount() {
    this.setState({
      userID: localStorage.getItem("userID")
    });
  }

  onLogoutClick = () => {
    localStorage.setItem("userID", "-1");
    console.log("logouttt");
    window.location.href = "/";
  };

  enterGroup = e => {
    this.setState({
      groupID: e
    });
  };

  onCreateGroup = e => {
    this.props.socket.emit("createGroup");
  };

  onExitClick = e => {
    this.setState({
      groupID: "-1"
    });
    console.log(this.state);
  };

  onLeaveGroupClick = e => {
    //this.enterGroup(5555);
    console.log(this.state);
  };

  onFormChange = e => {
    this.state[e.target.id] = e.target.value;
    console.log(this.state);
  };

  onSendMessageClick = () => {
    var messageContent = this.state.messageContent;
    if (messageContent === "") return;

    var messageContentForm = this.refs.messageContentFormRef;
    let currentTime = new Date().toLocaleString();

    // msgs that will be sent to backend will not contain timeStamp
    let msg = {
      userID: this.state.userID,
      content: messageContent,
      time: currentTime
    };

    this.state.messages.push(msg);
    console.log(this.state);

    this.setState({
      messageContent: ""
    });

    messageContentForm.value = "";

    let messageArea = this.refs.messageAreaRef;
    messageArea.scrollTop = messageArea.scrollHeight + 20;
    // doSomething
  };

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "row", minWidth: "100vh" }}>
        <div className="leftDiv">
          <div className="clientInfo">
            <span> userID: </span>
            <span> {this.state.userID}</span>

            <Button
              variant="primary"
              type="submit"
              onClick={this.onLogoutClick}
              style={{
                marginLeft: "20px",
                marginRight: "10px",
                backgroundColor: "red",
                border: "red",
                float: "right"
              }}
            >
              Log Out
            </Button>
          </div>

          <div className="createGroupDiv">
            <Button
              variant="primary"
              type="submit"
              onClick={this.onCreateGroup}
              style={{ marginLeft: "10px" }}
            >
              Create Group
            </Button>
          </div>
          <p
            style={{
              marginLeft: "10px",
              marginRight: "10px",
              marginTop: "10px",

              borderRadius: "5px",
              backgroundColor: "#8fd6bd"
            }}
          >
            Joined groups
          </p>
          <div className="joinedGroupsDiv">
            <JoinedGroupList
              joinedGroups={this.state.joinedGroups}
              enterGroup={this.enterGroup}
            />
          </div>
          <p
            style={{
              marginLeft: "10px",
              marginRight: "10px",
              marginTop: "10px",
              borderRadius: "5px",
              backgroundColor: "#FE8F1D"
            }}
          >
            Other Groups
          </p>
          <div className="otherGroupsDiv">
            <OtherGroupList otherGroups={this.state.otherGroups} />
          </div>
        </div>

        {this.state.groupID == "-1" ? (
          <div className="rightDiv">
            <p style={{ fontSize: "50px", marginLeft: "20px" }}>
              {" "}
              Enter joined groups to start chatting. You can also join or create
              new groups.
            </p>
          </div>
        ) : (
          <div className="rightDiv">
            <div className="groupHeader">
              <span>GroupID : </span>
              <span style={{ marginLeft: "10px" }}> {this.state.groupID} </span>

              <div style={{ marginLeft: "auto" }}>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={this.onExitClick}
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
                  onClick={this.onLeaveGroupClick}
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
              <div className="messageArea" ref="messageAreaRef">
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
        )}
      </div>
    );
  }
}

const joinedGroupsMockUp = [
  {
    groupID: "11111"
  },
  {
    groupID: "22222"
  },
  {
    groupID: "3333"
  }
];

const otherGroupsMockUp = [
  {
    groupID: "99999"
  },
  {
    groupID: "88888"
  },
  {
    groupID: "88888"
  },
  {
    groupID: "88888"
  },
  {
    groupID: "88888"
  },
  {
    groupID: "88888"
  }
];

const messagesMockUp = [
  {
    userID: "1",
    time: "12.00",
    content: "Hello"
  },
  {
    userID: "2",
    time: "12.01",
    content: "Hi"
  },
  {
    userID: "2",
    time: "12.01",
    content:
      "sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
  },
  {
    userID: "1",
    time: "13.00",
    content:
      "sdasdsssssssssssssssssssssssssssssssssssssssssssssssssssssadasdsadsadasdasdsssssssssssssssssssssssssssssssssssssssssssssssssssss"
  },
  {
    userID: "2",
    time: "12.01",
    content: "Hi"
  },
  {
    userID: "2",
    time: "12.01",
    content: "Hi"
  },
  {
    userID: "2",
    time: "12.01",
    content: "Hi"
  },
  {
    userID: "2",
    time: "12.01",
    content: "Hi"
  },
  {
    userID: "2",
    time: "12.01",
    content: "Hi"
  },
  {
    userID: "2",
    time: "12.01",
    content: "Hi"
  }
];

export default HomePage;
