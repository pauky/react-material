/**
 * 页面框架模块
 * @type {*|exports|module.exports}
 */

const React = require('react');
const AppTopBar = require('./app-top-bar');
const AppFooter = require('./app-footer');

const Layout = React.createClass({

  render() {

    return (
      <div>
        <AppTopBar />
          <div className="container" style={{"maxWidth": "960px", "margin": "80px auto 0 auto"}}>
            {this.props.children}
          </div>
        <AppFooter />
      </div>
    );
  },

});

module.exports = Layout;
