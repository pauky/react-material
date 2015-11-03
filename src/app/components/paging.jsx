/**
 * 分页
 * @type {*|exports|module.exports}
 */

const React = require('react');
import { Link } from 'react-router';
let { RaisedButton, FlatButton } = require('material-ui');
require('style/components/paging.less');

class Paging extends React.Component {

  render() {

    let pageItemStyle = {
      "minWidth": "auto",
      "marginRight": "5px"
    };

    return (
      <div className="paging">
        <RaisedButton className="page-item" label="<" style={pageItemStyle} />
        <RaisedButton className="page-item" label="1" secondary={true} style={pageItemStyle} />
        <RaisedButton className="page-item" label="2" style={pageItemStyle} />
        <RaisedButton className="page-item" label="3" style={pageItemStyle} />
        <RaisedButton className="page-item" label="4" style={pageItemStyle} />
        <RaisedButton className="page-item" label="5" style={pageItemStyle} />
        <RaisedButton className="page-item" label="6" style={pageItemStyle} />
        <RaisedButton className="page-item" label="7" style={pageItemStyle} />
        <RaisedButton className="page-item" label=">" style={pageItemStyle} />
      </div>
    );

  }

}

module.exports = Paging;
