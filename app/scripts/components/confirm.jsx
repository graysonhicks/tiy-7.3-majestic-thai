var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var ConfirmComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleReturn: function(e){
    e.preventDefault();
    $('.modal-backdrop').hide();
    Backbone.history.navigate("", {trigger: true});
  },
  render: function(){
    return (
      <div className="modal fade confirm-modal-container" id="confirmModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content confirm-modal-content">
            <div className="modal-header">
              <button type="button" className="close" onClick={this.handleReturn} data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Order Confirmation</h4>
            </div>
            <div className="modal-body">
              <h4>Thanks for your order!</h4>
              <p>It has been received and you should receive a confirmation email shortly.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default confirm-close-btn" onClick={this.handleReturn} data-dismiss="modal">Go Back Home</button>
            </div>
          </div>
        </div>
      </div>
      )
    }
  });



module.exports = {
  ConfirmComponent: ConfirmComponent
}
