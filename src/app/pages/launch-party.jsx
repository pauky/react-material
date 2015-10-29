/**
 * 发布聚会
 * @type {*|exports|module.exports}
 */

const React = require('react');
let { TextField, RaisedButton } = require('material-ui');
const Layout = require('app/components/layout');

class LaunchParty extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <div className="launch-party-page text-center">
          <TextField
            hintText="填写聚会名"
            floatingLabelText="聚会名" />
          <TextField
            className="description text-left"
            hintText="填写聚会简介"
            floatingLabelText="聚会简介"
            multiLine={true} />
          <TextField
            hintText="人数（不包括自己）"
            floatingLabelText="人数（不包括自己）"/>
          <div>
            <RaisedButton label="发布聚会" secondary={true} />
          </div>
        </div>
      </Layout>
    );
  }

}
module.exports = LaunchParty;

