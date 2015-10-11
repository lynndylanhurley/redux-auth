import React, { PropTypes } from "react";
import { Glyphicon } from "react-bootstrap";
import Immutable from "immutable";

class ErrorList extends React.Component {
  static propTypes = {
    errors: PropTypes.object
  }

  static defaultProps = {
    errors: Immutable.fromJS([])
  }

  renderErrorList () {
    let errorCount = this.props.errors.size;

    if (errorCount > 0) {
      // pluralize message
      let errorWord = "error";
      errorWord += (errorCount === 1) ? "" : "s";

      return (
        <div className="has-error">
          <p>Please correct the following {errorWord}:</p>
          {this.props.errors.map(err => {
            return <p><Glyphicon glyph="exclamation-sign" /> {err}</p>;
          })}
        </div>
      );
    } else {
      return (
        <p>
          There was an error processing this form. Please check each field and
          try again.
        </p>
      );
    }
  }

  render () {
    return (
      <div className="auth-error-message">
        {this.renderErrorList()}
      </div>
    );
  }
}

export default ErrorList;

