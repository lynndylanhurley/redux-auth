import React, { PropTypes } from "react";
import { Input, Glyphicon } from "react-bootstrap";
import Immutable from "immutable";

class AuthInput extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    errors: PropTypes.object
  }

  static defaultProps = {
    label: "",
    value: null,
    errors: Immutable.fromJS([])
  }

  handleInput (ev) {
    this.props.onChange(ev.target.value);
  }

  renderErrorList () {
    if (this.props.errors.size) {
      return (
        <div className='auth-error-message has-error'>
          {this.props.errors.map((err, i) => {
            return <p className="control-label" key={i}>
              <Glyphicon glyph="exclamation-sign" /> {this.props.label} {err}
            </p>;
          })}
          <br />
        </div>
      );
    } else {
      return <span />;
    }
  }

  render () {
    return (
      <div>
        <Input {...this.props}
               bsStyle={(this.props.errors.size) ? "error" : null}
               onChange={this.handleInput.bind(this)} />
        {this.renderErrorList()}
      </div>
    );
  }
}

export default AuthInput;
