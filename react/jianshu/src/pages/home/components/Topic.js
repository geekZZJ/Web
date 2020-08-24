import React, {Component} from "react";
import {connect} from "react-redux";
import {TopicItem, TopicWrapper} from "../style";

class Topic extends Component {
  render() {
    const {topicList} = this.props
    return (
      <TopicWrapper>
        {
          topicList.map(item => {
            return (
              <TopicItem key={item.get("id")}>
                <img className="topic-pic"
                     src={item.get("imgUrl")}
                     alt={item.get("title")}/>
                {item.get("title")}
              </TopicItem>
            )
          })
        }
      </TopicWrapper>
    );
  }
}

const mapState = (state) => ({
  topicList: state.getIn(['home', 'topicList'])
})

export default connect(mapState, null)(Topic)