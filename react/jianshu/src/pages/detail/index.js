import React, {PureComponent} from "react";
import {Content, DetailWrapper, Header} from "./style";
import {connect} from "react-redux";
import {actionCreator} from "./store"

class Detail extends PureComponent {
  render() {
    const {title, content} = this.props
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{__html: content}}></Content>
      </DetailWrapper>
    );
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id)
  }
}

const mapState = state => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"])
})

const mapDispatch = dispatch => ({
  getDetail(id) {
    dispatch(actionCreator.getDetail(id))
  }
})

export default connect(mapState, mapDispatch)(Detail)