/**
 * 首页尾部
 * @type {*|exports|module.exports}
 */

let React = require('react');

class AppFooter extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="app-footer">
        <p>这是Footer</p>
      </div>
    );
  }

}
module.exports = AppFooter;
