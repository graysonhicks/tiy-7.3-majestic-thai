var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var update = require("react-addons-update");
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');
var google = require('react-google-maps');
var ScriptjsLoader = require("react-google-maps/lib/async/ScriptjsLoader");
var GoogleMap = google.GoogleMap;
var GoogleMapLoader = google.GoogleMapLoader;

var SimpleMap = React.createClass({
  render: function(){
    return (
      <section style={{height: "100%"}}>
      <GoogleMapLoader
        containerElement={
          <div
            {...this.props}
            style={{
              height: "100%",
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            defaultZoom={16}
            defaultCenter={{lat: 34.851636, lng: -82.39862}}
            >
          </GoogleMap>
        }
      />
    </section>
    );
  }
});


var LocationComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleReturn: function(e){
    e.preventDefault();
    Backbone.history.navigate("", {trigger: true});
  },
  render: function(){
  return (
    <div className="modal fade location-modal-container" id="locationModal" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-lg">
        <div className="modal-content location-modal-content">
          <div className="modal-header">
            <button type="button" className="close" onClick={this.handleReturn} data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title">Our Location</h4>
          </div>
          <div className="modal-body location-modal-body">
            <SimpleMap />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default location-close-btn" onClick={this.handleReturn} data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    )
  }
});


module.exports = {
  LocationComponent: LocationComponent
}
