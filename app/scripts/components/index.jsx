var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var IndexComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleClick: function(e){
      e.preventDefault();
      Backbone.history.navigate("menu", {trigger: true});
      $('#menuModal').modal();
  },
  render: function(){
          return (
      <header>
        <h1>Sukho Thai</h1>
        <h3>Greenville's Premier Thai Restaurant</h3>
        <button href="#" onClick={this.handleClick} className="btn btn-dark btn-lg main-menu-button">Menu</button>
      </header>
    )
  }
});

module.exports = {
  IndexComponent: IndexComponent
}
