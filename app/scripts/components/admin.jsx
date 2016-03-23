var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');
var parsley = require('parsleyjs');

var OpenOrdersComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleClick: function(orderId){
    $(this).addClass("active");
    this.props.setCurrentOrder(orderId);
  },
  render: function(){
      var newItem = function(item){
        var orderId = item.cid;
        return (
        <li className="list-group-item open-orders-items" onClick={this.handleClick.bind(this, orderId)} key={item.cid}>
          <div className="row open-orders-row">
            <div className="col-md-12 cart-item-dish">
              <h4>{item.attributes.customer.name}</h4>
              <h5>Total Due: ${item.attributes.totalPrice}</h5>
            </div>
          </div>
        </li>
      )
      }
      return (
        <div>
          <ul className="list-group open-orders-list">
            {(this.props.collection).map(newItem.bind(this))}
          </ul>
        </div>
      )
        }
      });

var OrderDetailsComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  render: function(){
    var mapOrders = function(item){
        var mapDishes = function(order){
          return (
            <li className="list-group-item order-details-dishes">
              {order.dish}
            </li>
          )
        }
        return(
          <div>
            <h2 className="order-details-name">
              <span className="order-details-for">for: </span>{item.attributes.customer.name}
            </h2>
            <span></span>
            <ul className="list-group">
              {(item.attributes.orders.map(mapDishes.bind(this)))}
            </ul>
            <div className="customer-comments">{item.attributes.customer.comments}</div>
            <h4>Total Due: ${item.attributes.totalPrice}</h4>
            <button type="button" className="btn btn-success btn-lg order-details-complete-btn btn-block">Complete!</button>
          </div>
        )
      }
    var filterOrders = function(item){
      return item.cid == this.props.currentOrder
    }
    return (
      <div className="detailed-order">
        {(this.props.collection.filter(filterOrders.bind(this)).map(mapOrders.bind(this)))}
      </div>
    )
  }
});

var AdminComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  componentWillMount: function(){
    this.props.orderCollection.fetch();
  },
  getInitialState: function(){
    return{
      orders: this.props.orderCollection,
      currentOrder: this.props.orderCollection.first.cid
    }
  },
  removeItem: function(item){
    item.destroy({success: function(){console.log('gone');}});
    // this.setState({
    //   orders: this.props.orderCollection
    // });
  },
  setCurrentOrder: function(orderId){
    this.setState({"currentOrder": orderId});
  },
  handleReturn: function(e){
    e.preventDefault();
    Backbone.history.navigate("", {trigger: true});
  },
  render: function(){
        return (
              <div className="modal fade admin-login-modal-container" id="adminModal" tabIndex="-1" role="dialog">
                <div className="modal-dialog admin-modal-dialog modal-lg">
                  <div className="modal-content admin-login-modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" onClick={this.handleReturn} data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                      <h4 className="modal-title">Sukho Thai Open Orders</h4>
                    </div>
                    <div className="modal-body admin-modal-body">
                      <div className="row">
                        <div className="col-md-3 open-orders-column">
                          <h2 className="admin-headings">Open Orders</h2>
                          <OpenOrdersComponent setCurrentOrder={this.setCurrentOrder} collection={this.state.orders} />
                        </div>
                        <div className="col-md-9">
                          <h2 className="admin-headings">Order Details</h2>
                          <OrderDetailsComponent currentOrder={this.state.currentOrder} collection={this.state.orders} />
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button"
                        onClick={this.handleReturn}
                        data-dismiss="modal"
                         id="admin-logout"
                        className="btn btn-danger admin-logout-btn"
                        >Logout</button>
                    </div>
                  </div>
                </div>
              </div>
          )
        }
      });

module.exports = {
  AdminComponent: AdminComponent
}
