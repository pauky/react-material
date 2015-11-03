/**
 * 发布聚会
 * @type {*|exports|module.exports}
 */

const React = require('react');
let { TextField, RaisedButton, DatePicker, TimePicker, Styles } = require('material-ui');
const Layout = require('app/components/layout');
require('style/pages/launch-party.less');

class LaunchParty extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <div className="launch-party-page text-center">
          <div>
            <TextField
              hintText="填写聚会名"
              floatingLabelText="聚会名" />
          </div>
          <div>
            <TextField
              className="subtitle text-left"
              hintText="填写聚会简介"
              floatingLabelText="聚会简介"
              multiLine={true} />
          </div>
          <div>
            <TextField
              className="description text-left"
              hintText="填写聚会详细描述"
              floatingLabelText="聚会详细描述"
              multiLine={true} />
          </div>
          <div>
            <TextField
              hintText="填写聚会地址"
              floatingLabelText="聚会地址"/>
          </div>
          <div className="party-date">
            <DatePicker
              hintText="聚会日期" />
          </div>

          <div>
            <TimePicker
              ref="picker24hr"
              format="24hr"
              hintText="聚会具体时间"
              autoOk={true} />
          </div>

          <div>
            <TextField
              hintText="人数（不包括自己）"
              floatingLabelText="人数（不包括自己）"/>
          </div>
          <div className="action-btns">
            <RaisedButton label="发布聚会" secondary={true} />
          </div>
        </div>
      </Layout>
    );
  }

}
module.exports = LaunchParty;

