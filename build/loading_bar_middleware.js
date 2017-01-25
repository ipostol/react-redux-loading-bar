'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loading_bar_ducks = require('./loading_bar_ducks');

exports.default = function (_ref) {
  var dispatch = _ref.dispatch;
  return function (next) {
    return function (action) {
      if (action.meta) {

        if (action.meta.loading === true) {
          dispatch((0, _loading_bar_ducks.showLoading)());
        } else if (action.meta.loading === false) {
          dispatch((0, _loading_bar_ducks.hideLoading)());
        }
      }

      return next(action);
    };
  };
};