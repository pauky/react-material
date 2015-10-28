/** In this file, we create a React component which incorporates components provided by material-ui */

const React = require('react');
const Layout = require('app/components/layout');

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Layout />
      </div>
    );
  }

}
module.exports = Home;

