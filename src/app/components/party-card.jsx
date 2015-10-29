/**
 * 聚会列表子项
 * @type {*|exports|module.exports}
 */

const React = require('react');
const AppTopBar = require('./app-top-bar');
require('style/components/party-card.less');
import { Link } from 'react-router';

class PartyCard extends React.Component {

  render() {

    return (
      <div className="party-card">
        <h2 className="title">
          <Link to={`/signIn`}>
            This is Title
          </Link>
        </h2>
        <div className="subtitle">This is Subtitle</div>
        <div className="photo">
          <Link to={`/signIn`}>
            <img src="http://lorempixel.com/600/337/nature/" />
          </Link>
        </div>
        <div className="attend-party-users">
          <span className="item-user">
            <img src="http://material-ui.com/images/uxceo-128.jpg" />
          </span>
          <span className="item-user">
            <img src="http://material-ui.com/images/uxceo-128.jpg" />
          </span>
          <span className="item-user">
            <img src="http://material-ui.com/images/uxceo-128.jpg" />
          </span>
        </div>
      </div>
    );
  }

};

module.exports = PartyCard;
