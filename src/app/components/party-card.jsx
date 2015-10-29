/**
 * 聚会列表子项
 * @type {*|exports|module.exports}
 */

const React = require('react');
const AppTopBar = require('./app-top-bar');
import { Link } from 'react-router';
require('style/components/party-card.less');

class PartyCard extends React.Component {

  render() {

    return (
      <div className="party-card">
        <h2 className="title">
          <Link to={`/party/123`}>
            This is Title
          </Link>
        </h2>
        <div className="time-and-address">
          <span className="time">时间：2015-10-20 12:00</span>
          <span className="address pull-right">地址：广州市南方医科大学</span>
        </div>
        <div className="subtitle">This is Subtitle</div>
      </div>
    );

  }

}

module.exports = PartyCard;
