var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var OrderModel = Backbone.Model.extend({
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/graysonhicksthai/'
});

var OrderCollection = Backbone.Collection.extend({

  url: 'http://tiny-lasagna-server.herokuapp.com/collections/graysonhicksthai/',
  model: OrderModel
});

  module.exports = {
    OrderCollection: OrderCollection,
  }
