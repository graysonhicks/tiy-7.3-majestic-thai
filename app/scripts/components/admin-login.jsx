var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');
var parsley = require('parsleyjs');

var AdminLoginComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleReturn: function(e){
    e.preventDefault();
    Backbone.history.navigate("", {trigger: true});
  },
  validateForm: function(){
    var formTrue = $("#username-form").parsley().validate();
    if(!formTrue || $("#username-input").val() == ""){
      $('#username-submit-button').attr("disabled", true);
    } else {
      $('#username-submit-button').attr("disabled", false);
    }
  },
  handleSubmit: function(e){
    e.preventDefault();
  },
  render: function(){
        return (
    <div className="modal fade admin-login-modal-container" id="adminLoginModal" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-lg">
        <div className="modal-content admin-login-modal-content">
          <div className="modal-header">
            <button type="button" className="close" onClick={this.handleReturn} data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title">Sukho Thai Admin Login</h4>
          </div>
          <div className="modal-body">
                 <p className="welcome-form-caption">Enter your username to login:</p>
                   <form data-validate="parsley" id="username-form" className="input-group" onSubmit={this.handleSubmit}>
                    <input
                      placeholder="EMPLOYEE ID"
                      data-parlsey-type="number"
                      data-parsley-length="[6, 6]"
                      data-parsley-trigger="change"
                      className="form-control"
                      required=""
                      id="username-input"
                      onChange={this.validateForm}
                      data-parsley-error-message="Must be a six digit number!"
                    />
                    <input
                      type="password"
                      data-parsley-trigger="change"
                      required=""
                      className="form-control"
                      id="email-input"
                      onChange={this.validateForm}
                      placeholder="PASSWORD"
                    />
                  </form>
          </div>
          <div className="modal-footer">
            <button type="button"
               form="username-form"
               disabled="true"
               id="username-submit-button"
              className="btn btn-default admin-login-btn"
              >Login</button>
          </div>
        </div>
      </div>
    </div>
      )
    }
  });


module.exports = {
  AdminLoginComponent: AdminLoginComponent
}
