var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');


var CartComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    var newItem = function(item){
      return (
      <li className="list-group-item" key={item.get('cid')}>
        <div className="row">
          <span className="cart-item-dish col-md-9">{item.get('dish')}</span>
          <span className="cart-item-price col-md-3">${item.get('price')}</span>
        </div>
      </li>
    )
    }
    return (
      <div>
        <h4>Your Order</h4>
        <ul className="list-group cart-order-list">
          {(this.props.collection).map(newItem.bind(this))}
        </ul>
      </div>
    )
  }
});

  module.exports = {
    CartComponent: CartComponent
  }
