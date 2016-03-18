var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var IndexComponent = require('./components/index.jsx').IndexComponent;
var MenuComponent = require('./components/menu.jsx').MenuComponent;

var CartCollection = require('./models/cart.js').CartCollection;
var cartCollection = new CartCollection();
var MenuCollection = require('./models/menu.js').MenuCollection;
var menuCollection = new MenuCollection();
var menu = require('./models/menuinfo.js').menu;
menuCollection.add(menu);

var Router = Backbone.Router.extend({
  routes: {
   '': 'indexLoad',
   'menu': 'menuLoad'
  },
  indexLoad: function(){
    ReactDOM.render(
      React.createElement(IndexComponent),
      document.getElementById('main-container')
    );
  },
  menuLoad: function(){
    ReactDOM.render(
      React.createElement(MenuComponent, {
        collection: menuCollection,
        cartCollection: cartCollection
      }),
      document.getElementById('main-container')
    );
  }
});

module.exports = new Router();
