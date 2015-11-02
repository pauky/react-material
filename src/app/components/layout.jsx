/**
 * 页面框架模块
 * @type {*|exports|module.exports}
 */

const React = require('react');
const AppTopBar = require('./app-top-bar');
const AppFooter = require('./app-footer');
const {
  Styles,
  } = require('material-ui');
const ThemeManager = Styles.ThemeManager;
const DefaultRawTheme = Styles.LightRawTheme;

const Layout = React.createClass({

  contextTypes : {
    muiTheme: React.PropTypes.object,
  },

  //for passing default theme context to children
  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  getChildContext () {
    return {
      muiTheme: this.state.muiTheme,
    };
  },

  getInitialState () {
    return {
      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme),
    };
  },

  componentWillReceiveProps (nextProps, nextContext) {
    let newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
    this.setState({muiTheme: newMuiTheme});
  },

  render() {

    return (
      <div>
        <AppTopBar />
          <div className="container" style={{"maxWidth": "960px", "margin": "64px auto 0 auto"}}>
            {this.props.children}
          </div>
        <AppFooter />
      </div>
    );
  },

});

module.exports = Layout;
