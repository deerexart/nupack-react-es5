import React from 'react';
import ReactDOM from 'react-dom';

var CalculateMarkup = React.createClass({
  getInitialState: function () {
    return { initialinput:0, withJobMarkUp:0, people:0, isFoodState:false,isPharmState:false, isElectronicState:false };
  },

  handleInitialCost: function(e) {
    //sets state based on input#initial-cost
    this.setState({ initialinput: e.target.value,
                    withJobMarkUp: (parseFloat(e.target.value)
                                   * 0.05
                                   + parseFloat(e.target.value))
                    });

  },
handlePeople: function(e){
    this.setState({ people: e.target.value});
  },
handleFood: function(){
  this.setState({ isFoodState: ! this.state.isFoodState})
},
handleElectronic: function(){
this.setState({ isElectronicState: ! this.state.isElectronicState})
},
handlePharm: function(){
this.setState({ isPharmState: ! this.state.isPharmState})
},

handleClick: function() {

  var jobMarkup = this.state.initialinput * 0.05;
  var startRate = this.state.initialinput;
  var flatRate = parseFloat(jobMarkup)
                 + parseFloat(startRate);
  var people = this.state.people * 0.012;
  var peopleCost = people * flatRate;
  var peopleMarkup = parseFloat(people) * flatRate + flatRate;


    if (this.state.isFoodState === true){
    var isFood = .13 * flatRate;
    }
    else{ var isFood =  0; }

    if (this.state.isElectronicState === true){
    var isElectronic = 0.02 * flatRate;
    }
    else{ var isElectronic =  0; }

    if (this.state.isPharmState === true){
    var isPharm = 0.075 * flatRate;
    }
    else{ var isPharm =  0; }

  var finalCostCalculation = function(){
    var finalCost =
    parseFloat(peopleCost)
    + parseFloat(isFood)
    + parseFloat(isPharm)
    + parseFloat(isElectronic)
    + parseFloat(flatRate)

   return finalCost;
  }
  var finalCostCalculated = finalCostCalculation();

  this.setState({
    jobMarkupRate: jobMarkup,
    peopleMarkupCost: peopleCost,
    foodMarkupCost: isFood,
    electonicMarkupCost: isElectronic,
    pharmMarkupCost: isPharm,
    finalCostEstimate: finalCostCalculated

  });

},

  render: function() {
    return (

      <div>

        <label >Initial Cost </label>
        <input id="initial-cost" type="number" onChange={ this.handleInitialCost }  />
        <h3>With Job Markup: {this.state.withJobMarkUp}</h3>


        <label ># of People </label>
        <input id="noOfPeople" type="number" placeholder="no of people" onChange={this.handlePeople} />

        <ul>
          <li>
          Is Food
          <input id="isFood" type="checkbox" checked={this.state.isFood}  onChange={this.handleFood}  />
          </li>

          <li>
          Is Electronics
          <input id="isElectronic" type="checkbox" checked={this.state.isElectronic}  onChange={this.handleElectronic} />
          </li>

        <li>
        Is Pharm
          <input id="isPharm" type="checkbox" checked={this.state.isPharm}  onChange={this.handlePharm} />
          </li>
        </ul>

        <p> Job Markup:  {this.state.jobMarkupRate } </p>
        <p> With {this.state.people} people Markup Cost: {this.state.peopleMarkupCost} </p>

        <p>Food Markup: {this.state.foodMarkupCost} </p>

        <p>Electronics Markup: {this.state.electonicMarkupCost}</p>

        <p>With Pharm Markup: {this.state.pharmMarkupCost}</p>

        <h2>Final Cost: {this.state.finalCostEstimate}</h2>


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
