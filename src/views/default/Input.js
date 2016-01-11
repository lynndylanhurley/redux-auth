import React, {PropTypes} from "react";
import Immutable from "immutable";

class AuthInput extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    errors: PropTypes.object
  };

  static defaultProps = {
    label: "",
    value: null,
    errors: Immutable.fromJS([])
  };

  handleInput (ev) {
    this.props.onChange(ev.target.value);
  }

  renderErrorList () {
    if (this.props.errors.size) {
      return (
        <div className='auth-error-message'>
          {this.props.errors.map((err, i) => {
            return (
              <p className="inline-error-item"
                 style={{paddingLeft: "20px", position: "relative", marginBottom: "28px"}}
                 key={i}>
                <i style={{
                  position: "absolute",
                  left: 0,
                  top: 0}}>{"✗"}</i>
                {this.props.label} {err}
              </p>
            );
          })}
        </div>
      );
    } else {
      return null;
    }
  }

  render () {
    return (
      <div>
        <label>{this.props.label}</label>
        <input
          placeholder={this.props.label}
          {...this.props}
          onChange={this.handleInput.bind(this)} />
        {this.renderErrorList()}
      </div>
    );
  }
}

export default AuthInput;
