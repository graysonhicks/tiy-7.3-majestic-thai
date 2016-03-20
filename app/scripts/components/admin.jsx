var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');
var parsley = require('parsleyjs');

var OpenOrdersComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleClick: function(item){
    this.props.removeItem(item);
  },
  render: function(){
      var newItem = function(item){
        console.log(item);
        return (
        <li className="list-group-item open-orders-items" key={item.get('cid')}>
          <div className="row open-orders-row">
            <div className="col-md-8 cart-item-dish">
              <span>Dish</span>
            </div>
            <div className="col-md-4 cart-item-price">
              <span>$9.99 <span className="fa fa-times remove-order-btn" onClick={this.handleClick.bind(this, item)}></span></span>
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
        return (
          <h1>Detail Orders</h1>
          )
        }
      });

var AdminComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getInitialState: function(){
    return{
      orders: this.props.orderCollection
    }
  },
  removeItem: function(item){
    this.props.collection.remove(item);
    this.setState({
      orders: this.props.orderCollection
    });
  },
  handleReturn: function(e){
    e.preventDefault();
    Backbone.history.navigate("", {trigger: true});
  },
  render: function(){
    console.log(this.state.orders.fetch());
        return (
              <div className="modal fade admin-login-modal-container" id="adminModal" tabIndex="-1" role="dialog">
                <div className="modal-dialog admin-modal-dialog modal-lg">
                  <div className="modal-content admin-login-modal-content">
                    <div className="modal-header">
                      <button type="button" className="close" onClick={this.handleReturn} data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                      <h4 className="modal-title">Sukho Thai Admin Login</h4>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-3 open-orders-column">
                          <h2 className="admin-headings">Open Orders</h2>
                          <OpenOrdersComponent collection={this.state.orders} removeItem={this.removeItem} />
                        </div>
                        <div className="col-md-9">
                          <h2 className="admin-headings">Order Details</h2>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button"
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
