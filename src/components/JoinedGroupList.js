import React, { Component } from "react";
import JoinedGroupItem from "./JoinedGroupItem";

export class JoinedGroupList extends Component {
  render() {
    return this.props.joinedGroups.map(groupItem => (
      <JoinedGroupItem
        groupID={groupItem.groupID}
        enterGroup={this.props.enterGroup}
      />
    ));
  }
}

export default JoinedGroupList;
