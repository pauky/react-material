/** In this file, we create a React component which incorporates components provided by material-ui */

const React = require('react');
const Layout = require('app/components/layout');
const Main = require('app/components/main');

class SignIn extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Main />
      </Layout>
    );
  }

}
module.exports = SignIn;

