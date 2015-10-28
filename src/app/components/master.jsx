const React = require('react');
const Router = require('react-router');
const { AppCanvas } = require('material-ui');

const Master = React.createClass({

  render() {

    return (
      <AppCanvas>
        {this.props.children}
      </AppCanvas>
    );
  },

});

module.exports = Master;
