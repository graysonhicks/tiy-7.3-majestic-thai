var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');
var luhn = require('luhn');
var parsley = require('parsleyjs');


var CartComponent = require('./cart.jsx').CartComponent;

var CheckoutComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  getInitialState: function(){
    return{
      cartCollection: this.props.cartCollection,
      total: this.props.cartCollection.total().toFixed(2)
    }
  },
  removeItem: function(item){
    this.props.cartCollection.remove(item);
    this.setState({
      cartCollection: this.props.cartCollection
    });
  },
  handlePayOnline: function(e){
    e.preventDefault();
    $('#credit-card-form-container').slideToggle();
  },
  handleSubmit: function(e){
    e.preventDefault();
    var order = new this.props.orderCollection.model();
    var customerData = $('#checkout-form-id').serializeArray();
    customerData = customerData.reduce(function(acum, i) {
    acum[i.name] = i.value;
    return acum;
    }, {});
    var json = this.props.cartCollection.toJSON(); // trying to add array of objects, each obj is order w/ price and dish
    var orderInfo = json.map(function(order){
      var serverOrder = {
        dish: order.dish,
        price: order.price
      }
      return serverOrder;
    });
    _.extend(order.attributes, customerData);
    _.extend(order.attributes, orderInfo);
    order.save();
    Backbone.history.navigate("confirm", {trigger: true});
  },
  handleReturn: function(e){
    e.preventDefault();
    Backbone.history.navigate("menu", {trigger: true});
    $('#menuModal').modal();
  },
  render: function(){
    return (
      <div className="modal fade checkout-modal-container" id="checkoutModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content checkout-modal-content">
            <div className="modal-header">
              <button type="button" className="close" onClick={this.handleReturn} data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="myModalLabel">Checkout</h4>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-8">
                  <form className="checkout-form" id="checkout-form-id" onSubmit={this.handleSubmit} >
                    <div className="form-group">
                      <label htmlFor="checkout-name">Name:</label>
                      <input type="text" name="name" className="form-control" id="checkout-name" placeholder="Name"  />
                    </div>
                    <div className="form-group">
                      <label htmlFor="checkout-email">Email:</label>
                      <input type="email" name="email" className="form-control" id="checkout-email" placeholder="Email" />
                    </div>
                    <div className="form-group checkout-radio-row row">
                      <div className="radio delivery-radio col-md-4">
                        <label>
                          <input type="radio" name="delivery" id="gridRadios1" value="true" defaultChecked />
                          Delivery
                        </label>
                      </div>
                      <div className="radio takeout-radio col-md-4">
                        <label>
                          <input type="radio" name="takeout" id="gridRadios2" value="true" />
                          Take-Out
                        </label>
                      </div>
                      <div className="col-md-4 pay-online-btn-container">
                        <button type="button" onClick={this.handlePayOnline} className="btn btn-success pull-right">Pay Online</button>
                      </div>
                    </div>
                    <div className="form-group" id="credit-card-form-container">
                      <div className="credit-card-group">
                        <div className="form-group">
                          <label htmlFor="card-number">Card Number:</label>
                          <input id="card-number" maxLength="16" name="ccnumber" className="form-control" type="text" />
                        </div>
                        <div className="form-group" id="cvc-container">
                          <label htmlFor="cvc">CVC:</label>
                          <input type="text" name="cvcnumber" maxLength="3" id="cvc" className="form-control" />
                        </div>
                        <div className="form-group" id="exp-container">
                          <label htmlFor="cvc">Expiration (MM/YYYY):</label>
                            <input type="text" size="2" id="expmonth" maxLength="2" name="expmonth" className="form-control"/>
                            <span> / </span>
                            <input type="text" size="4" id="expyear" maxLength="4" name="expyear" className="form-control"/>
                        </div>
                      </div>
                    </div>
                    <fieldset className="form-group">
                      <label htmlFor="comments">Comments:</label>
                      <textarea className="form-control" id="comments" rows="3" placeholder="Apartment? Extra spicy? Let us know."></textarea>
                    </fieldset>
                  </form>
                </div>
                <div className="col-md-4">
                  <CartComponent collection={this.state.cartCollection} removeItem={this.removeItem}/>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="row">
                <div className="col-md-9 order-total-column checkout-order-total-column">
                  <span>Order Total: ${this.state.total}</span>
                </div>
                <div className="col-md-3 checkout-footer-btn-container">
                  <button type="button" className="btn btn-default checkout-return-btn" onClick={this.handleReturn} data-dismiss="modal">Go Back</button>
                  <button type="submit" form="checkout-form-id" className="btn btn-success place-order-btn">Place Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = {
  CheckoutComponent: CheckoutComponent
}
