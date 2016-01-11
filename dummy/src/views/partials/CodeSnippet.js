import React, { PropTypes } from "react";
import hljs from "highlight.js";
import $ from "jquery";

class CodeSnippet extends React.Component {
  static propTypes = {
    language: PropTypes.string,
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    language: "javascript"
  };

  state = {
    code: <span />
  };

  highlight ($target, rawCode) {
    let code = rawCode
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/  +/g, " ")
    .replace(/±/g, " ");
    let el = $(`<code class="${this.props.language}">${code}</code>`)[0];
    hljs.highlightBlock(el);
    $target.append(el);
  }

  componentDidMount() {
    let $target = $(this.refs.target);
    this.highlight($target, this.props.children);
  }

  componentDidUpdate () {
    let $target = $(this.refs.target);
    $target.html("");
    this.highlight($target, this.props.children);
  }

  render () {
    return (
      <div className='code-snippet'>
        <label>Code</label>
        <pre ref="target" />
      </div>
    );
  }
}

export default CodeSnippet;
