/**
 * 分页
 * @type {*|exports|module.exports}
 */

const React = require('react');
import { Link } from 'react-router';
let { RaisedButton, FlatButton } = require('material-ui');
require('style/components/paging.less');

class Paging extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.props.currentPage || 1
    };
    this.totalPages = Math.ceil(this.props.totalItems/this.props.pageSize); // 总页数
  }

  static propTypes = {
    onChange: React.PropTypes.func,
    className: React.PropTypes.string,
    selectedPage: React.PropTypes.number,
    currentPage: React.PropTypes.number,
    totalItems: React.PropTypes.number,
    pageSize: React.PropTypes.number,
    showSize: React.PropTypes.number
  }

  render() {

    let pageItemStyle = {
      "minWidth": "auto",
      "marginRight": "5px",
      "marginTop": "10px"
    };

    let showPages = []; // 要展示的页码存放的容器
    let pagingList = null;
    let showSize = 0; // 要展示的页码数
    let start = 0; // 要展示的页码的起始位置
    let showSizeHalf = Math.floor(this.props.showSize/2); // 需要展示页数的一半
    if (this.props.totalItems > this.props.pageSize) {

      if (this.props.showSize < this.totalPages) {
        // 当前页数是否大于需要展示页数的一半
        if (this.state.currentPage > showSizeHalf) {
          // 剩下的页数是否大于需要展示页数的一半
          if (this.totalPages - this.state.currentPage >= showSizeHalf) {
            start = this.state.currentPage - showSizeHalf;
          } else {
            start = this.state.currentPage - (this.props.showSize - (this.totalPages - this.state.currentPage)) + 1;
          }
        } else {
          start = 1;
        }
      } else {
        start = 1;
      }
      showSize = this.props.showSize > this.totalPages ? this.totalPages : this.props.showSize;
      for (let i=0; i < showSize; i++) {
        showPages.push(start + i);
      }

      pagingList = showPages.map((item, index) => {
        return (
          <RaisedButton
            className="page-item"
            key={index}
            secondary={item === this.state.currentPage}
            label={item}
            style={pageItemStyle}
            onClick={this._selectPage.bind(this)} />
        )
      });

      pagingList.unshift(<RaisedButton className="page-item" key="pre" label="<" style={pageItemStyle} onClick={this._prePage.bind(this)} />);
      pagingList.push(<RaisedButton className="page-item" key="next" label=">" style={pageItemStyle} onClick={this._nextPage.bind(this)} />);
    }

    return (
      <div className={"paging "+this.props.className}>
        {pagingList}
      </div>
    );

  }

  _selectPage(e) {
    let _self = this;
    let selectedPage = parseInt($(e.target).text(), 10);
    if (_self.state.currentPage === selectedPage) {
      return false;
    }
    _self.setState({
      currentPage: parseInt($(e.target).text(), 10)
    });
    if (this.props.onChange) {
      this.props.onChange(selectedPage);
    }
  }

  _prePage() {
    let _self = this;
    if (this.state.currentPage === 1) {
      return false;
    }
    _self.setState({
      currentPage: Math.max(_self.state.currentPage-1, 0)
    });
    if (this.props.onChange) {
      this.props.onChange(Math.max(_self.state.currentPage-1, 0));
    }
  }

  _nextPage() {
    let _self = this;
    if (this.state.currentPage === _self.totalPages) {
      return false;
    }
    _self.setState({
      currentPage: Math.min(_self.state.currentPage+1, _self.totalPages)
    });
    if (this.props.onChange) {
      this.props.onChange(Math.min(_self.state.currentPage+1, _self.totalPages));
    }
  }

}

module.exports = Paging;
