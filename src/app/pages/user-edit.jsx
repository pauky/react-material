/**
 * 用户编辑
 * @type {*|exports|module.exports}
 */

const React = require('react');
let { TextField, RaisedButton, DatePicker, TimePicker, Styles } = require('material-ui');
const Layout = require('app/components/layout');
const http = require('app/components/http');
require('style/pages/user-edit.less');

class LaunchParty extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    require.ensure([], () => {
      require('cropperjs/dist/cropper.css');
      let Cropper = require('cropperjs');
      let image = document.querySelector('.avatar-wrapper > img');
      let cropper = new Cropper(image, {
        aspectRatio: 1 / 1,
        crop: function(data) {
          console.log(data.x);
          console.log(data.y);
          console.log(data.width);
          console.log(data.height);
          console.log(data.rotate);
          console.log(data.scaleX);
          console.log(data.scaleY);
        },
      });
    });

    http.test()
      .then((res)=>{
          console.log(res);
        })
  }

  render() {
    return (
      <Layout>
        <div className="user-edit-page text-center">
          <div className="avatar-wrapper">
            <img className="avatar" src="http://fengyuanchen.github.io/cropperjs/img/picture.jpg" />
          </div>
          <div>
            <TextField
              hintText="用户名"
              floatingLabelText="用户名" />
          </div>
          <div>
            <TextField
              className="description text-left"
              hintText="一句话介绍"
              floatingLabelText="一句话介绍"
              multiLine={true} />
          </div>
          <div>
            <TextField
              hintText="学校"
              floatingLabelText="学校"/>
          </div>
          <div className="enrollment-date">
            <DatePicker
              hintText="入学日期" />
          </div>
          <div>
            <TextField
              hintText="工作"
              floatingLabelText="工作"/>
          </div>

          <div className="action-btns">
            <RaisedButton label="保存" secondary={true} />
          </div>
        </div>
      </Layout>
    );
  }

}
module.exports = LaunchParty;

