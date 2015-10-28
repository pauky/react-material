let React = require('react');
let { AppBar, FlatButton } = require('material-ui');
let IconButton = require('icon-button');
let ActionHome = require('svg-icons/action/home');
const IconMenu = require('menus/icon-menu');
const MenuItem = require('menus/menu-item');
const MoreVertIcon = require('svg-icons/navigation/more-vert');

class AppTopBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppBar
        title="Pauky"
        iconElementLeft={<IconButton><ActionHome /></IconButton>}
        iconElementRight={
          <IconMenu iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
          }>
            <MenuItem primaryText="Home" href="/#/" />
            <MenuItem primaryText="Sign In" href="/#/signIn" />
            <MenuItem primaryText="Sign up" href="/#/signUp"/>
          </IconMenu>
      } />
    );
  }

}
module.exports = AppTopBar;
