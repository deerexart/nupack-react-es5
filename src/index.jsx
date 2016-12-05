import React from 'react';
import ReactDOM from 'react-dom';

var CalculateMarkup = React.createClass({
  getInitialState: function () {
    return { initialinput:0, withJobMarkUp:0, isFoodState:false };
  },

  handleInitialCost: function(e) {
    //sets state based on input#initial-cost
    this.setState({ initialinput: e.target.value,
                    withJobMarkUp: (parseFloat(e.target.value)
                                   * 0.05
                                   + parseFloat(e.target.value))
                    });

  },
  handleFood: function(e){
  this.setState({ isFoodState: ! this.state.isFoodState})
},
handleClick: function() {

  var jobMarkup = this.state.initialinput * 0.05;
  var startRate = this.state.initialinput;
  var flatRate = parseFloat(jobMarkup) + parseFloat(startRate);

    if (this.state.isFoodState === true){
    var isFood = .13 * flatRate;
    }
    else{ var isFood =  0; }


  var finalCostCalculation = function(){
    var finalCost =
    parseFloat(isFood)


   return finalCost;
  }
  var finalCostCalculated = finalCostCalculation();
  this.setState({

    foodMarkupCost: isFood,

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
          <input id="isFood" type="checkbox" checked={this.state.isFood}  onChange={this.handleFood}  />
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
        <p>Food Markup: {this.state.foodMarkupCost} </p>

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
