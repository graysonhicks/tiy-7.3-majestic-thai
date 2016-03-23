var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');


var HoursComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleReturn: function(e){
    e.preventDefault();
    Backbone.history.navigate("", {trigger: true});
  },
  render: function(){
    return (
      <div className="modal fade hours-modal-container" id="hoursModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-sm">
          <div className="modal-content hours-modal-content">
            <div className="modal-header">
              <button type="button" className="close" onClick={this.handleReturn} data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Operating Hours</h4>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6 col-xs-6">
                  <ul className="list-group days-list">
                    <li className="list-group-item hours-item">
                      <span>Sunday</span>
                    </li>
                    <li className="list-group-item hours-item">
                      <span>Monday</span>
                    </li>
                    <li className="list-group-item hours-item">
                      <span>Tuesday</span>
                    </li>
                    <li className="list-group-item hours-item">
                      <span>Wednesday</span>
                    </li>
                    <li className="list-group-item hours-item">
                      <span>Thursday</span>
                    </li>
                    <li className="list-group-item hours-item">
                      <span>Friday</span>
                    </li>
                    <li className="list-group-item hours-item">
                      <span>Saturday</span>
                    </li>
                  </ul>
              </div>
              <div className="col-md-6 col-xs-6">
                <ul className="list-group">
                  <li className="list-group-item hours-item">
                    <span>Closed</span>
                  </li>
                  <li className="list-group-item hours-item">
                    <span>11:00 - 10:00</span>
                  </li>
                  <li className="list-group-item hours-item">
                    <span>11:00 - 10:00</span>
                  </li>
                  <li className="list-group-item hours-item">
                    <span>11:00 - 10:00</span>
                  </li>
                  <li className="list-group-item hours-item">
                    <span>11:00 - 10:00</span>
                  </li>
                  <li className="list-group-item hours-item">
                    <span>11:00 - 12:00</span>
                  </li>
                  <li className="list-group-item hours-item">
                    <span>11:00 - 12:00</span>
                  </li>
                </ul>
              </div>
            </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default hours-close-btn" onClick={this.handleReturn} data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      )
    }
  });

    module.exports = {
      HoursComponent: HoursComponent
    }
