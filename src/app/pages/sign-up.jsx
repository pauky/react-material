/** In this file, we create a React component which incorporates components provided by material-ui */

const React = require('react');
let { TextField, RaisedButton, FlatButton } = require('material-ui');
const Layout = require('app/components/layout');

class SignUp extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <div className="sign-in-form text-center">
          <TextField
            hintText="邮箱"
            floatingLabelText="邮箱" /><br/>
          <TextField
            hintText="用户名"
            floatingLabelText="用户名" /><br/>
          <TextField
            hintText="密码"
            floatingLabelText="密码"
            type="password" /><br/>
          <TextField
            hintText="再次确认密码"
            floatingLabelText="再次确认密码"
            type="password" /><br/>
          <RaisedButton label="注册" secondary={true} />
          <div>
            <FlatButton label="去登录" secondary={true} linkButton={true} href="/#/signIn" />
          </div>
        </div>
      </Layout>
    );
  }

}
module.exports = SignUp;

