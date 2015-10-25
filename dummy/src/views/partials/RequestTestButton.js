import React, { PropTypes } from "react";
import {Glyphicon} from "react-bootstrap";
import {ButtonLoader} from "../../../../src/views/bootstrap";
import {connect} from "react-redux";
import {requestTest} from "../../actions/request-test-buttons";
import {getApiUrl} from "../../../../src/utils/session-storage";

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
    let url = getApiUrl() + this.props.path;
    this.props.dispatch(requestTest(url, this.props.path));
  }

  render () {
    let text    = "Will Fail",
        bsStyle = "danger",
        glyph   = <Glyphicon glyph="remove" />,
        loading = this.props.demoButtons.getIn(["buttons", this.props.path, "loading"]);

    if (this.props.signedIn) {
      text    = "Should Succeed";
      bsStyle = "success";
      glyph   = <Glyphicon glyph="ok" />;
    }

    return (
      <ButtonLoader {...this.props}
                    loading={loading}
                    type="button"
                    icon={glyph}
                    onClick={this.handleClick.bind(this)}
                    bsStyle={bsStyle}>
        {text}
      </ButtonLoader>
    );
  }
}

export default RequestTestButton;
