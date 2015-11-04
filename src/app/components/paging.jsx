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
      "marginRight": "5px",
      "marginTop": "10px"
    };

    let currentPage = 1;
    let allPages = [1,2,3,4,5,6,7];
    let pagingList = allPages.map((item, index) => {
      return (
        <RaisedButton
          className="page-item"
          key={index}
          secondary={item === currentPage}
          label={item}
          style={pageItemStyle}
          onClick={this._selectPage.bind(this)} />
      )
    });

    return (
      <div className="paging">
        <RaisedButton className="page-item" label="<" style={pageItemStyle} />
        {pagingList}
        <RaisedButton className="page-item" label=">" style={pageItemStyle} />
      </div>
    );

  }

  _selectPage(e) {
    console.log($(e.target).text());
  }

}

module.exports = Paging;
