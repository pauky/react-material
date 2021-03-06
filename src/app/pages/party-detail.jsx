/**
 * 聚会详情页
 * @type {*|exports|module.exports}
 */

const React = require('react');
const Layout = require('app/components/layout');
let {
  Avatar,
  Checkbox,
  IconButton,
  List,
  ListDivider,
  ListItem,
  Styles,
  TextField,
  Toggle,
  RaisedButton,
  } = require('material-ui');
let MapsPlace = require('svg-icons/maps/place');
let ActionHome = require('svg-icons/action/home');
let Paging = require('components/paging');
import { Link } from 'react-router';
let { Colors } = Styles;

require('style/pages/party-detail.less');

class PartyDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mapStatus: 'hidden',
      hasMap: false
    };
  }

  componentDidMount() {
  }

  _showMap() {
    let _self = this;
    let party = {};

    if (!_self.state.mapStatus) {
      return _self.setState({
        mapStatus: 'hidden',
        hasMap: true
      });
    }
    if (_self.state.hasMap) {
      return _self.setState({
        mapStatus: '',
        hasMap: true
      });
    }
    require.ensure([], () => {
      let BaiduMap = require('components/baidu-map.js');
      new BaiduMap(
        {
          map: 'map', // 必须为id
          resPanel: '#searchResultPanel',
          input: 'suggestId'
        },
        {
          city: party.city || '',
          address: '广州市华南师范大学',
          coordinate: {
            lng: party.coordinate && party.coordinate[0],
            lat: party.coordinate && party.coordinate[1]
          }
        },
        function (res) {
          console.log(res);
          _self.setState({
            mapStatus: '',
            hasMap: true
          });
        });
    });
  }

  // 改变页码的回调
  _changePage(pageNum) {
    console.log(pageNum+' page');
  }

  render() {
    let imageAvatar = <Link to={`/user/123`}><Avatar src="http://material-ui.com/images/uxceo-128.jpg" /></Link>;
    return (
      <Layout>
        <div className="party-detail-page">
          <div className="party-detail">
            <h1 className="title text-center">This is Title</h1>
            <div className="time">
              <span>时间：</span>
              <span>2015-10-20 10:00</span>
            </div>
            <div className="address">
              <span className="address-des">
                <span>地点：</span>
                <span>广州市华南师范大学</span>
              </span>
              <input className="hidden" id="suggestId" />
              <MapsPlace className="maps-place" onClick={this._showMap.bind(this)} />
              <div className={this.state.mapStatus+' map'} id="map"></div>
            </div>
            <div className="content">
              <p>This is The Party Content</p>
            </div>
            <div className="publisher">
              <List subheader="发布者：">
                <ListItem
                  href="/#/user/123"
                  leftAvatar={<Avatar src="http://material-ui.com/images/ok-128.jpg" />}
                  primaryText="Brunch this weekend?"
                  secondaryText={
                  <p>
                    <span style={{color: Colors.darkBlack}}>Brendan Lim</span> --
                    I&apos;ll be in your neighborhood this weekend.
                  </p>
                } />
              </List>
            </div>
            <div className="participants">
              <List subheader="参与者：">
                <ListItem
                  href="/#/user/123"
                  leftAvatar={<Avatar src="http://material-ui.com/images/ok-128.jpg" />}
                  primaryText="Brunch this weekend?"
                  secondaryText={
                  <p>
                    <span style={{color: Colors.darkBlack}}>Brendan Lim</span> --
                    I&apos;ll be in your neighborhood this weekend.
                  </p>
                } />
                <ListDivider inset={true} />
                <ListItem
                  href="/#/user/123"
                  leftAvatar={<Avatar src="http://material-ui.com/images/uxceo-128.jpg" />}
                  primaryText="Oui oui"
                  secondaryText={
                  <p>
                    <span style={{color: Colors.darkBlack}}>Grace Ng</span> --
                    Do you have Paris recommendations?
                  </p>
                } />
                <ListDivider inset={true} />
                <ListItem
                  href="/#/user/123"
                  leftAvatar={<Avatar src="http://material-ui.com/images/kerem-128.jpg" />}
                  primaryText="Birthday gift"
                  secondaryText={
                  <p>
                    <span style={{color: Colors.darkBlack}}>Kerem Suer</span> --
                    Do you have any ideas on what I
                  </p>
                } />
                <ListDivider inset={true} />
                <ListItem
                  href="/#/user/123"
                  leftAvatar={<Avatar src="http://material-ui.com/images/raquelromanp-128.jpg" />}
                  primaryText="Recipe to try"
                  secondaryText={
                  <p>
                    <span style={{color: Colors.darkBlack}}>Raquel Parrado</span> --
                    We should eat this: grated cheese
                  </p>
                } />
                <ListDivider inset={true} />
                <ListItem
                  href="/#/user/123"
                  leftAvatar={<Avatar src="http://material-ui.com/images/chexee-128.jpg" />}
                  primaryText="Giants game"
                  secondaryText={
                  <p>
                    <span style={{color: Colors.darkBlack}}>Chelsea Otakan</span> --
                    Any interest in seeing the Giants
                  </p>
                } />
              </List>
              <Paging
                className="text-right"
                onChange={this._changePage.bind(this)}
                currentPage={1}
                totalItems={30}
                pageSize={10}
                showSize={7} />
            </div>
          </div>

          <div className="comments-list">
            <List subheader="评论">
              <div className="add-comment">
                <TextField
                  className="comment-input"
                  hintText="有什么看法吗？"
                  multiLine={true} />
                <RaisedButton label="发表评论" secondary={true} className="publish-btn"/>
              </div>
              <ListItem
                leftAvatar={imageAvatar}
                disabled={true}
                primaryText="Brunch this weekend?"
                secondaryText={
                  <p>
                    123
                  </p>
                  }
                />
              <ListItem
                leftAvatar={imageAvatar}
                disabled={true}
                primaryText="Brunch this weekend?"
                secondaryText={
                  <p>
                    Do you have Paris recommendations?Grace Ng--Do you have Paris recommendati
                  </p>
                  }
                />
              <ListItem
                leftAvatar={imageAvatar}
                disabled={true}
                primaryText="Brunch this weekend?"
                secondaryText={
                  <p>
                    Do you have Paris recom
                  </p>
                  }
                />
              <ListItem
                leftAvatar={imageAvatar}
                disabled={true}
                primaryText="Brunch this weekend?"
                secondaryText={
                  <p>
                    Do you have Paris recommendations?Grace Ng--Do you have Paris recommendations?--Do you have Paris recommendations?Grace Ng--Do you have Paris recommendations?
                  </p>
                  }
                />
            </List>
          </div>
        </div>
      </Layout>
    );
  }

}
module.exports = PartyDetail;

