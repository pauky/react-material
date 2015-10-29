/**
 * 页面框架模块
 * @type {*|exports|module.exports}
 */

const React = require('react');
const AppTopBar = require('./app-top-bar');

const Layout = React.createClass({

  render() {

    return (
      <div>
        <AppTopBar />
        {this.props.children}
      </div>
    );
  },

});

module.exports = Layout;
