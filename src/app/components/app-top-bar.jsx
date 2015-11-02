/**
 * 首页头部
 * @type {*|exports|module.exports}
 */

let React = require('react');
import { Link } from 'react-router';
let { AppBar, FlatButton, LeftNav, IconMenu, MenuItem } = require('material-ui');
let IconButton = require('icon-button');
let ActionHome = require('svg-icons/action/home');
const MoreVertIcon = require('svg-icons/navigation/more-vert');

require('style/components/app-top-bar.less');

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
      { type: MenuItem.Types.LINK, payload: '/#/signIn', text: '登录' },
      { type: MenuItem.Types.LINK, payload: '/#/launchParty', text: '发布聚会' },
      { type: MenuItem.Types.SUBHEADER, text: 'Pauky' },
    ];

    return (
      <div className="app-top-bar">
        <AppBar
          className="app-bar"
          title={<Link href="/#/" className="site-title">Pauky</Link>}
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
