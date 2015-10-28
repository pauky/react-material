/** In this file, we create a React component which incorporates components provided by material-ui */

const React = require('react');
const Layout = require('app/components/layout');
const PartyCard = require('app/components/party-card');

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Layout />
        <div style={{width: "960px", "margin": "80px auto 0 auto"}}>
          <PartyCard />
          <PartyCard />
          <PartyCard />
        </div>
      </div>
    );
  }

}
module.exports = Home;

