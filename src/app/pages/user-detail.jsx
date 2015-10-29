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
        <div className="user-detail-page text-center">
          <Avatar src="http://material-ui.com/images/chexee-128.jpg" className="avatar" />
          <p className="username">Pauky</p>
          <p className="school">南方医科大学</p>
          <p className="word">北京品途天下科技有限公司-广研所-web前端开发工程师</p>
          <p className="description">我是一只IT小小鸟，不知疲倦飞呀飞...</p>
        </div>
      </Layout>
    );
  }

}
module.exports = PartyDetail;

