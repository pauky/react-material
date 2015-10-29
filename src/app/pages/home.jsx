/**
 * 首页
 * @type {*|exports|module.exports}
 */

const React = require('react');
const Layout = require('app/components/layout');
const PartyCard = require('app/components/party-card');
const HotPartiesList = require('app/components/hot-parties-list');
require('style/pages/home.less');

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-page">
        <Layout>
          <div className="right-bar" style={{"float": "right", "maxWidth": "300px"}}>
            <HotPartiesList />
          </div>
          <div className="party-cards-list" style={{"maxWidth": "650px"}}>
            <PartyCard />
            <PartyCard />
            <PartyCard />
          </div>
        </Layout>
      </div>
    );
  }

}
module.exports = Home;

