var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var CartCollection = Backbone.Collection.extend({});

  module.exports = {
    CartCollection: CartCollection,
  }
