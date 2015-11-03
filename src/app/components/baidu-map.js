/**
 * 百度地图
 * @type {*|exports|module.exports}
 */

'use strict';

let array = require('lodash/object');

class BaiduMap {

  constructor(container, place, cb) {
    let _self = this;
    _self.container = array.assign({}, {
      map: 'l-map', // 必须为id
      resPanel: '#searchResultPanel',
      input: 'suggestId'
    }, container);
    _self.place = array.assign({}, {
      city: '',
      address: '',
      coordinate: []
    }, place);
    this.place = place;
    this.createMap(_self.place, cb);
  }

  createMap(place, cb) {
    let _self = this;
    let script = document.createElement('script');
    script.src = 'http://api.map.baidu.com/api?v=2.0&ak=Kp1RBH12EduqccnW31WybRja&callback=baiduMapCompleted';
    window.baiduMapCompleted = function () {
      // 百度地图API功能
      let map = new BMap.Map(_self.container.map);
      map.centerAndZoom(place.city || '北京', 12);                   // 初始化地图,设置城市和地图级别。
      map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
      map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用

      let ac = new BMap.Autocomplete(    //建立一个自动完成的对象
        {"input" : _self.container.input
          ,"location" : map
        });

      let myValue = place.address ? place.address : '';
      if (myValue) {
        // 如果存在地址，则进入地图初始化，并对输入框进行初始化，因为百度地图插件默认把输入框给清空了
        setPlace();
        setTimeout(function () {
          $('#'+_self.container.input).val(myValue);
        }, 0);
      }
      ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
        let _value = e.item.value;
        myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
        setPlace();
      });

      function setPlace(){
        map.clearOverlays();    //清除地图上所有覆盖物
        function myFun(){
          if (!local.getResults().getPoi(0)) {
            return false;
          }
          let pp = (local.getResults().getPoi(0) && local.getResults().getPoi(0).point) || '';    //获取第一个智能搜索的结果
          local.getResults().getPoi(0).myValue = myValue;
          cb(local.getResults().getPoi(0));
          map.centerAndZoom(pp, 18);
          map.addOverlay(new BMap.Marker(pp));    //添加标注
        }
        let local = new BMap.LocalSearch(map, { //智能搜索
          onSearchComplete: myFun
        });
        local.search(myValue);
      }
    };
    document.getElementsByTagName('body')[0].appendChild(script);
  }

}
module.exports = BaiduMap;
