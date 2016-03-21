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

  },
  render: function(){
      var newItem = function(item){
        console.log(item);
        return (
        <li className="list-group-item open-orders-items" key={item.get('_id')}>
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
        return (
          <h1>Detail Orders</h1>
          )
        }
      });

var AdminComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getInitialState: function(){
    return{
      orders: this.props.orderCollection,
    }
  },
  removeItem: function(item){
    item.destroy({success: function(){console.log('gone');}});
    // this.setState({
    //   orders: this.props.orderCollection
    // });
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
                      <h4 className="modal-title">Sukho Thai Open Orders</h4>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-3 open-orders-column">
                          <h2 className="admin-headings">Open Orders</h2>
                          <OpenOrdersComponent collection={this.state.orders} />
                        </div>
                        <div className="col-md-9">
                          <h2 className="admin-headings">Order Details</h2>
                          <OrderDetailsComponent collection={this.state.orders} />
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
