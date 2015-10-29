/**
 * 模块容器
 * @type {*|exports|module.exports}
 */

const React = require('react');
const Router = require('react-router');
const { AppCanvas } = require('material-ui');

const Master = React.createClass({

  render() {

    return (
      <div>
        {this.props.children}
      </div>
    );
  },

});

module.exports = Master;
