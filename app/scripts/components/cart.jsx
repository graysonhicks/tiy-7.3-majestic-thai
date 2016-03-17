var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');


var CartComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    return (
      <div>
        <h4>Your Order</h4>
        <div className="order-btn-container">
          <button type="button" className="btn btn-success order-btn">Order</button>
        </div>
      </div>
    )
  }
});

  module.exports = {
    CartComponent: CartComponent
  }
