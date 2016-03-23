window.jQuery = $ = require('jquery');
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');
var bootstrap = require('bootstrap-sass/assets/javascripts/bootstrap.js');
var router = require('./router.js');

$(function(){
  Backbone.history.start();
});
