import React, { PropTypes } from "react";
import Spinner from "react-loader";
import extend from "extend";

class ButtonLoader extends React.Component {
  static propTypes = {
    icon: PropTypes.any,
    loading: PropTypes.bool,
    spinConfig: PropTypes.object,
    spinColorDark: PropTypes.string,
    spinColorLight: PropTypes.string,
    spinColorDisabled: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func.isRequired,
    style: PropTypes.object
  };

  static defaultProps = {
    icon: "▸",
    loading: false,
    spinConfig: {
      lines: 10,
      length: 4,
      width: 2,
      radius: 3
    },
    spinColorDark: "#444",
    spinColorLight: "#444",
    spinColorDisabled: "#999",
    children: <span>Submit</span>,
    style: {}
  };

  getColor () {
    if (this.props.disabled) {
      return this.props.spinColorDisabled;
    } else if (this.props.primary || this.props.secondary) {
      return this.props.spinColorLight;
    } else {
      return this.props.spinColorDark;
    }
  }

  handleClick (ev) {
    ev.preventDefault();
    this.props.onClick(ev);
  }

  renderIcon () {
    let icon,
        color = this.getColor();

    if (this.props.loading) {
      icon = (
        <div>
          <Spinner ref="spinner" {...this.props.spinConfig} color={color} loaded={false} />
        </div>
      );
    } else {
      icon = <div color={color} style={{width: 10, height: 10}}>{this.props.icon}</div>;
    }

    return (
      <span style={{
        width: 15,
        height: 15,
        position: "absolute",
        left: 0,
        top: 2
      }}>
        {icon}
      </span>
    );
  }

  render () {
    let color = this.getColor();
    let style = extend({color, paddingLeft: 15, position: "relative"}, this.props.style);

    return (
      <button
        disabled={this.props.disabled || this.props.loading}
        {...this.props}
        style={style}
        onClick={this.handleClick.bind(this)}>
        {this.renderIcon()} {this.props.children}
      </button>
    );
  }
}

export default ButtonLoader;
