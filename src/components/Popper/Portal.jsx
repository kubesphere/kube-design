import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Portal extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
    };
    this.el = document.createElement('div');
  }

  componentDidMount() {
    this.setState({ mounted: true }, () => {
      document.body.appendChild(this.el);
    });
  }

  componentWillUnmount() {
    if (document.body && document.body.contains(this.el)) {
      document.body.removeChild(this.el);
    }
  }

  render() {
    const { children } = this.props;
    const { mounted } = this.state;
    if (mounted) {
      return ReactDOM.createPortal(children, this.el);
    }
    return null;
  }
}

export default Portal;
