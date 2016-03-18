var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');


var CartComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleClick: function(item){
    this.props.removeItem(item);
    this.props.cartTotal();
  },
  render: function(){
    var newItem = function(item){
      return (
      <li className="list-group-item cart-items" key={item.get('cid')}>
        <div className="row cart-row">
          <div className="col-md-8 cart-item-dish">
            <span>{item.get('dish')}</span>
          </div>
          <div className="col-md-4 cart-item-price">
            <span>${item.get('price')} <span className="fa fa-times remove-order-btn" onClick={this.handleClick.bind(this, item)}></span></span>
          </div>
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
