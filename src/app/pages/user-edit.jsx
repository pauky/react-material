/**
 * 用户编辑
 * @type {*|exports|module.exports}
 */

const React = require('react');
let { TextField, RaisedButton, DatePicker, TimePicker, Styles } = require('material-ui');
const Layout = require('app/components/layout');
require('style/pages/user-edit.less');

class LaunchParty extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <div className="user-edit-page text-center">
          <div>
            <TextField
              hintText="用户名"
              floatingLabelText="用户名" />
          </div>
          <div>
            <TextField
              className="description text-left"
              hintText="一句话介绍"
              floatingLabelText="一句话介绍"
              multiLine={true} />
          </div>
          <div>
            <TextField
              hintText="学校"
              floatingLabelText="学校"/>
          </div>
          <div className="enrollment-date">
            <DatePicker
              hintText="入学日期" />
          </div>
          <div>
            <TextField
              hintText="工作"
              floatingLabelText="工作"/>
          </div>

          <div className="action-btns">
            <RaisedButton label="保存" secondary={true} />
          </div>
        </div>
      </Layout>
    );
  }

}
module.exports = LaunchParty;

