var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var IndexComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleMenuClick: function(e){
      e.preventDefault();
      Backbone.history.navigate("menu", {trigger: true});
      $('#menuModal').modal();
  },
  handleHoursClick: function(e){
      e.preventDefault();
      Backbone.history.navigate("hours", {trigger: true});
      $('#hoursModal').modal();
    },
  render: function(){
          return (
      <header>
        <h1>Sukho Thai</h1>
        <h3>Greenvilles Premier Thai Restaurant</h3>
        <button href="#" onClick={this.handleMenuClick} className="btn btn-dark btn-lg main-menu-button">Menu</button>
        <button href="#" onClick={this.handleHoursClick} className="btn btn-dark btn-lg hours-button">Hours</button>
      </header>
    )
  }
});

module.exports = {
  IndexComponent: IndexComponent
}
