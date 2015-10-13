import React, { PropTypes } from "react";
import Auth from "j-toker";
import ButtonLoader from "../../auth/views/ButtonLoader";
import { connect } from "react-redux";
import $ from "jquery";

@connect(({auth}) => {
  return {signedIn: auth.getIn(["user", "isSignedIn"])};
})
class RequestTestButton extends React.Component {
  static propTypes = {
    path: PropTypes.string.isRequired
  }

  handleClick () {
    let url = Auth.getConfig().apiUrl + this.props.path;
    console.log("@-->request url", url);
    $.ajax({url});
  }

  render () {
    let text = "Will Fail",
        bsStyle = "danger",
        glyph = "remove";

    if (this.props.signedIn) {
      text = "Should Succeed";
      bsStyle = "success";
      glyph = "ok";
    }

    return (
      <ButtonLoader {...this.props}
                    loading={false}
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

