/**
 * 用户详情页
 * @type {*|exports|module.exports}
 */

const React = require('react');
const Layout = require('app/components/layout');
let {
  Avatar,
  } = require('material-ui');
import { Link } from 'react-router';

require('style/pages/user-detail.less');

class PartyDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <div className="user-detail-page">
          <Avatar src="http://material-ui.com/images/chexee-128.jpg" className="avatar" />
        </div>
      </Layout>
    );
  }

}
module.exports = PartyDetail;

