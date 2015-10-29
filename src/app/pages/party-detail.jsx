/**
 * 登录模块
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
let { Colors } = Styles;

require('style/pages/party-detail.less');

class PartyDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <div className="party-detail-page">
          <div className="party-detail">
            <h1 className="title text-center">This is Title</h1>
            <div className="time">
              <div>时间：</div>
              <div>2015-10-20 10:00</div>
            </div>
            <div className="address">
              <div>地点：</div>
              <div>广州市华南师范大学</div>
            </div>
            <div className="content">
              <p>This is The Party Content</p>
            </div>
            <div className="participants">
              <List subheader="参会人员">
                <ListItem
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
                  leftAvatar={<Avatar src="http://material-ui.com/images/chexee-128.jpg" />}
                  primaryText="Giants game"
                  secondaryText={
                  <p>
                    <span style={{color: Colors.darkBlack}}>Chelsea Otakan</span> --
                    Any interest in seeing the Giants
                  </p>
                } />
              </List>
            </div>
          </div>

          <div className="comments-list">
            <List subheader="评论">
              <div className="add-comment">
                <TextField
                  className="comment-input"
                  hintText="发表下意见吧！"
                  multiLine={true} />
                <RaisedButton label="发表评论" secondary={true} />
              </div>
              <ListItem
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
                leftAvatar={<Avatar src="http://material-ui.com/images/chexee-128.jpg" />}
                primaryText="Giants game"
                secondaryText={
                <p>
                  <span style={{color: Colors.darkBlack}}>Chelsea Otakan</span> --
                  Any interest in seeing the Giants
                </p>
              } />
            </List>
          </div>
        </div>
      </Layout>
    );
  }

}
module.exports = PartyDetail;

