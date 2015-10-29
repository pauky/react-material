/**
 * 聚会列表子项
 * @type {*|exports|module.exports}
 */

const React = require('react');
const AppTopBar = require('./app-top-bar');
let {
  Avatar,
  Card,
  CardActions,
  CardExpandable,
  CardHeader,
  CardMedia,
  CardText,
  CardTitle,
  FlatButton,
  } = require('material-ui');

class PartyCard extends React.Component {

  render() {

    return (
      <div className="party-card">
        <Card>
          <CardHeader
            title="Title"
            subtitle="Subtitle"
            avatar={<Avatar style={{color:'red'}}>A</Avatar>}/>
          <CardMedia>
            <img src="http://lorempixel.com/600/337/nature/"/>
          </CardMedia>
          <CardTitle title="Title" subtitle="Subtitle"/>
        </Card>
      </div>
    );
  }

};

module.exports = PartyCard;
