import React, { PropTypes } from "react";
import Auth from "j-toker";
import ButtonLoader from "../../../../src/views/ButtonLoader";
import { connect } from "react-redux";
import { requestTest } from "../../actions/request-test-buttons";

@connect(({auth, demoButtons}) => {
  return {
    signedIn: auth.getIn(["user", "isSignedIn"]),
    demoButtons
  };
})
class RequestTestButton extends React.Component {
  static propTypes = {
    path: PropTypes.string.isRequired
  }

  handleClick () {
    let url = Auth.getConfig().apiUrl + this.props.path;
    this.props.dispatch(requestTest(url, this.props.path));
  }

  render () {
    let text = "Will Fail",
        bsStyle = "danger",
        glyph = "remove",
        loading = this.props.demoButtons.getIn(["buttons", this.props.path, "loading"]);

    if (this.props.signedIn) {
      text = "Should Succeed";
      bsStyle = "success";
      glyph = "ok";
    }

    return (
      <ButtonLoader {...this.props}
                    loading={loading}
                    type="button"
                    glyph={glyph}
                    onClick={this.handleClick.bind(this)}
                    bsStyle={bsStyle}>
        {text}
      </ButtonLoader>
    );
  }
}

export default RequestTestButton;
