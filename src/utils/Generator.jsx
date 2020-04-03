/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

const Generator = props => BasicComponent =>
  class Adapter extends Component {
    render() {
      return <BasicComponent {...props} {...this.props} />;
    }
  };

export default Generator;
