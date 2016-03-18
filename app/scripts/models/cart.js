var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var CartCollection = Backbone.Collection.extend({
    total: function() {
        var addItems = function(memo, item) {
          return memo + item.get('price');
        }
      return this.reduce(addItems, 0);
    }
});

  module.exports = {
    CartCollection: CartCollection,
  }
