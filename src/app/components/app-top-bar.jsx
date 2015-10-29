/**
 * 首页头部
 * @type {*|exports|module.exports}
 */

let React = require('react');
let { AppBar, FlatButton, LeftNav, IconMenu, MenuItem } = require('material-ui');
let IconButton = require('icon-button');
let ActionHome = require('svg-icons/action/home');
const MoreVertIcon = require('svg-icons/navigation/more-vert');

class AppTopBar extends React.Component {

  constructor(props) {
    super(props);
    this._showLeftNavClick = this._showLeftNavClick.bind(this);
    this.state = {
      isDocked: false,
    };
  }

  render() {
    let menuItems = [
      { type: MenuItem.Types.LINK, payload: '/#/', text: 'Home' },
      { type: MenuItem.Types.LINK, payload: '/#/signIn', text: 'SignIn' },
      { type: MenuItem.Types.LINK, payload: '/#/signUp', text: 'SignUp' },
      { type: MenuItem.Types.SUBHEADER, text: 'Pauky' },
    ];

    return (
      <div className="app-top-bar">
        <AppBar
          title=""
          onLeftIconButtonTouchTap={this._showLeftNavClick.bind(this)}
           />
        <LeftNav ref="leftNav" docked={false} menuItems={menuItems} />
      </div>
    );
  }

  _showLeftNavClick() {
    this.refs.leftNav.toggle();
  }

}
module.exports = AppTopBar;
