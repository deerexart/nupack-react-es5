import React from 'react';
import ReactDOM from 'react-dom';

var CalculateMarkup = React.createClass({
  getInitialState: function () {
    return { initialinput:0, withJobMarkUp:0 };
  },

  handleInitialCost: function(e) {
    //sets state based on input#initial-cost
    this.setState({ initialinput: e.target.value,
                    withJobMarkUp: (parseFloat(e.target.value)
                                   * 0.05
                                   + parseFloat(e.target.value))
                    });

  },
  render: function() {
    return (

      <div>

        <label >Initial Cost </label>
        <input id="initial-cost" type="number" onChange={ this.handleInitialCost }  />
        <h3>With Job Markup: {this.state.withJobMarkUp}</h3>


        <label ># of People </label>
        <input id="noOfPeople" type="number" placeholder="no of people" />
        <ul>
          <li>
          Is Food
          <input id="isFood" type="checkbox"  />
          </li>

          <li>
          Is Electronics
          <input id="isElectronic" type="checkbox"   />
          </li>

        <li>
        Is Pharm
          <input id="isPharm" type="checkbox"   />
          </li>
        </ul>



        <p> Job Markup: </p>
        <p> People Markup: </p>
        <p>Food Markup: </p>

        <p>Electronics Markup: </p>

        <p>With Pharm Markup: </p>

        <h2>Final Cost: </h2>

        <input
          type="button"
          value="Calculate Cost"
          onClick={this.handleClick}
        />
      </div>

    );
  }
});
ReactDOM.render(
  <CalculateMarkup />,
  document.getElementById('app')
);
