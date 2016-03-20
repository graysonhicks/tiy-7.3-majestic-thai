var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var IndexComponent = require('./components/index.jsx').IndexComponent;
var MenuComponent = require('./components/menu.jsx').MenuComponent;
var HoursComponent = require('./components/hours.jsx').HoursComponent;
var CheckoutComponent = require('./components/checkout.jsx').CheckoutComponent;
var ConfirmComponent = require('./components/confirm.jsx').ConfirmComponent;
var AboutComponent = require('./components/about.jsx').AboutComponent;
var LocationComponent = require('./components/location.jsx').LocationComponent;
var AdminLoginComponent = require('./components/admin-login.jsx').AdminLoginComponent;

var OrderCollection = require('./models/order.js').OrderCollection;
var orderCollection = new OrderCollection();
var CartCollection = require('./models/cart.js').CartCollection;
var cartCollection = new CartCollection();
var MenuCollection = require('./models/menu.js').MenuCollection;
var menuCollection = new MenuCollection();
var menu = require('./models/menuinfo.js').menu;
menuCollection.add(menu);

var Router = Backbone.Router.extend({
  routes: {
   '': 'indexLoad',
   'menu': 'menuLoad',
   'hours': 'hoursLoad',
   'checkout': 'checkOutLoad',
   'confirm': 'confirmLoad',
   'location': 'locationLoad',
   'about': 'aboutLoad',
   'admin': 'adminLoad'
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
    $('#menuModal').modal();
  },
  hoursLoad: function(){
    ReactDOM.render(
      React.createElement(HoursComponent),
      document.getElementById('main-container')
    );
    $('#hoursModal').modal();
  },
  locationLoad: function(){
    ReactDOM.render(
      React.createElement(LocationComponent),
      document.getElementById('main-container')
    );
    $('#locationModal').modal();
  },
  checkOutLoad: function(){
    console.log('checkout');
    ReactDOM.render(
      React.createElement(CheckoutComponent, {
        cartCollection: cartCollection,
        orderCollection: orderCollection
      }),
      document.getElementById('main-container')
    );
    $('#checkoutModal').modal();
  },
  confirmLoad: function(){
    ReactDOM.render(
      React.createElement(ConfirmComponent),
      document.getElementById('main-container')
    );
    $('#confirmModal').modal();
  },
  aboutLoad: function(){
    ReactDOM.render(
      React.createElement(AboutComponent),
      document.getElementById('main-container')
    );
    $('#aboutModal').modal();
  },
  adminLoad: function(){
    ReactDOM.render(
      React.createElement(AdminLoginComponent),
      document.getElementById('main-container')
    );
    $('#adminLoginModal').modal();
  }
});

module.exports = new Router();
