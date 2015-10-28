/** In this file, we create a React component which incorporates components provided by material-ui */

const React = require('react');
let { TextField, RaisedButton, FlatButton } = require('material-ui');
const Layout = require('app/components/layout');

class SignIn extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <div className="sign-in-form text-center">
          <TextField
            hintText="邮箱或用户名"
            floatingLabelText="账号" /><br/>
          <TextField
            hintText="密码"
            floatingLabelText="密码"
            type="password" /><br/>
          <RaisedButton label="登录" secondary={true} />
          <div>
            <FlatButton label="去注册" secondary={true} linkButton={true} href="/#/signUp" />
          </div>
        </div>
      </Layout>
    );
  }

}
module.exports = SignIn;

