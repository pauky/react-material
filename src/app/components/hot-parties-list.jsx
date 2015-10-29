/**
 * 聚会列表
 * @type {*|exports|module.exports}
 */

const React = require('react');
let {
  List,
  ListItem,
  } = require('material-ui');

const HotPartiesList = React.createClass({

  render() {

    return (
      <div className="hot-party-list">
        <List subheader="Hot Party">
          <ListItem
            primaryText="Profile photo"
            secondaryText="Change your Google+ profile photo" />
          <ListItem
            primaryText="Show your status"
            secondaryText="Your status is visible to everyone you use with" />
        </List>
      </div>
    );
  },

});

module.exports = HotPartiesList;
