/**
 * 首页头部
 * @type {*|exports|module.exports}
 */

let React = require('react');
import { Link, History } from 'react-router';
let { AppBar, Mixins, LeftNav, IconMenu, MenuItem } = require('material-ui');
let IconButton = require('icon-button');
let ActionHome = require('svg-icons/action/home');
let NavigationMenu = require('svg-icons/navigation/menu');
let NavigationChevronLeft = require('svg-icons/navigation/chevron-left');
const MoreVertIcon = require('svg-icons/navigation/more-vert');

require('style/components/app-top-bar.less');

class AppTopBar extends React.Component {

  Mixins = [History];

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
          title={<Link to={`/#/`} className="site-title">Pauky</Link>}
          iconElementLeft={<IconButton onClick={this._historyBack.bind(this)}><NavigationChevronLeft /></IconButton>}
          iconElementRight={<IconButton onClick={this._showLeftNavClick.bind(this)}><NavigationMenu /></IconButton>}
          />
        <LeftNav ref="leftNav" docked={false} menuItems={menuItems} />
      </div>
    );
  }

  // show leftNav
  _showLeftNavClick() {
    this.refs.leftNav.toggle();
  }

  // page history back
  _historyBack() {
    history.go(-1);
  }

}
module.exports = AppTopBar;

