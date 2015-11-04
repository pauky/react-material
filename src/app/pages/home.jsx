/**
 * 首页
 * @type {*|exports|module.exports}
 */

const React = require('react');
const Layout = require('app/components/layout');
const PartyCard = require('app/components/party-card');
const HotPartiesList = require('components/hot-parties-list');
let Paging = require('components/paging');
require('style/pages/home.less');

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-page">
        <Layout>
          <div className="right-bar">
            <HotPartiesList />
          </div>
          <div className="party-cards-list">
            <PartyCard />
            <PartyCard />
            <PartyCard />
            <PartyCard />
            <PartyCard />
          </div>
          <Paging
            onChange={this.changePage.bind(this)}
            currentPage={1}
            totalItems={200}
            pageSize={10}
            showSize={7} />
        </Layout>
      </div>
    );
  }

  changePage(pageNum) {
    console.log(pageNum+' page');
  }

}
module.exports = Home;

