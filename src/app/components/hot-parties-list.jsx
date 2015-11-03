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
            href="/#/party/123"
            primaryText="Profile photo"
            secondaryText="Change your Google+ profile photo" />
          <ListItem
            href="/#/party/123"
            primaryText="Show your status"
            secondaryText="Your status is visible to everyone you use with" />
        </List>
      </div>
    );
  },

});

module.exports = HotPartiesList;
