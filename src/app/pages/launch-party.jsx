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
    this.state = {
      mapStatus: 'hidden'
    };
  }

  componentDidMount() {
    let _self = this;
    let party = {};

    require.ensure([], () => {
      let BaiduMap = require('components/baidu-map.js');
      new BaiduMap(
        {
          map: 'partyMap' // 必须为id
        },
        {
          city: party.city || '',
          address: '',
          coordinate: {
            lng: party.coordinate && party.coordinate[0],
            lat: party.coordinate && party.coordinate[1]
          }
        },
        function (res) {
          _self.setState({
            mapStatus: ''
          });
        });
    });
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
          <div className="party-address">
            <TextField
              id="suggestId"
              hintText="填写聚会地址"
              floatingLabelText="聚会地址"/>
            <div id="searchResultPanel"></div>
          </div>
          <div id="partyMap" className="party-map"></div>
          <div className="action-btns">
            <RaisedButton label="发布聚会" secondary={true} />
          </div>
        </div>
      </Layout>
    );
  }

}
module.exports = LaunchParty;

