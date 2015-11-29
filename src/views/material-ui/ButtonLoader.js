import React, { PropTypes } from "react";
import { RaisedButton } from "material-ui"
import {ActionFavorite} from "material-ui/lib/svg-icons";
import Colors from "material-ui/lib/styles/colors";
import Spinner from "react-loader";

class ButtonLoader extends React.Component {
  static propTypes = {
    icon: PropTypes.func,
    loading: PropTypes.bool,
    spinConfig: PropTypes.object,
    spinColorDark: PropTypes.string,
    spinColorLight: PropTypes.string,
    spinColorDisabled: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func.isRequired,
    style: PropTypes.object
  }

  static defaultProps = {
    icon: ActionFavorite,
    loading: false,
    spinConfig: {
      lines: 10,
      length: 4,
      width: 2,
      radius: 3
    },
    spinColorDark: Colors.darkBlack,
    spinColorLight: Colors.darkWhite,
    spinColorDisabled: Colors.minBlack,
    children: <span>Submit</span>,
    style: {}
  }

  handleClick (ev) {
    ev.preventDefault();
    this.props.onClick();
  }

  getColor () {
    if (this.props.disabled) {
      return this.props.spinColorDisabled;
    } else if (this.props.primary || this.props.secondary) {
      return this.props.spinColorLight;
    } else {
      return this.props.spinColorDark;
    }
  }

  renderIcon () {
    let icon,
        color = this.getColor();

    if (this.props.loading) {
      icon = <Spinner ref="spinner" {...this.props.spinConfig} color={color} loaded={false} />;
    } else {
      if (typeof(this.props.icon) === "object") {
        icon = this.props.icon;
      } else {
        icon = <this.props.icon color={color} style={{width: 15, height: 15}} />;
      }
    }

    return (
      <span style={{
        width: 15,
        height: 15,
        position: "absolute",
        left: 10,
        top: 10
      }}>
        {icon}
      </span>
    );
  }

  render () {
    let color = this.getColor();

    return (
      <RaisedButton
        onClick={this.handleClick.bind(this)}
        label={<span style={{paddingLeft: 15, color}}>{this.props.children}</span>}
        labelPosition="after"
        labelColor={color}
        {...this.props}
        disabled={this.props.disabled || this.props.loading}>
        {this.renderIcon()}
      </RaisedButton>
    );
  }
}

export default ButtonLoader;
