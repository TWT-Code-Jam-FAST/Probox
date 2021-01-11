import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/neat.css';

import React from "react";

import dynamic from 'next/dynamic';

const CodeMirror = dynamic(() => {
  import("codemirror/mode/javascript/javascript.js");
  import("codemirror/addon/edit/closebrackets.js");

  return import('react-codemirror');
}, {ssr: false});

import helper from "../helper/helper";

export default class CodeInterface extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: `console.log("Hello, world!");`};
    this.props.updateCode(this.state.value);
  }

  updateCode(value) {
    this.setState({value: value});
    this.props.updateCode(this.state.value);
  }

  render() {
    return (
      <>
        {CodeMirror && <CodeMirror
          value={this.state.value}
          options={helper.initOptions}
          onChange={this.updateCode.bind(this)}
        />}
      </>
    );
  }
}