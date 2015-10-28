/** In this file, we create a React component which incorporates components provided by material-ui */

const React = require('react');
const Layout = require('app/components/layout');
const PartyCard = require('app/components/party-card');
const HotPartiesList = require('app/components/hot-parties-list');

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Layout />
        <div className="container" style={{"maxWidth": "960px", "margin": "80px auto 0 auto"}}>
          <div className="right-bar" style={{"float": "right", "maxWidth": "300px"}}>
            <HotPartiesList />
          </div>
          <div className="party-cards-list" style={{"maxWidth": "650px"}}>
            <PartyCard />
            <PartyCard />
            <PartyCard />
          </div>
        </div>
      </div>
    );
  }

}
module.exports = Home;

