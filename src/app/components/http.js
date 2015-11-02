/**
 * http模块
 * @type {*|exports|module.exports}
 */

'use strict';

require('zepto/src/zepto');
require('zepto/src/event');
require('zepto/src/ajax');
require('zepto/src/callbacks');
require('zepto/src/deferred');

class Http {

  test(kk) {
    let _data = {
      url: '//maps.googleapis.com/maps/api/geocode/json',
      data: {
        log: kk,
      },
    };
    return $.ajax(_data);
  }


}
module.exports = new Http();
