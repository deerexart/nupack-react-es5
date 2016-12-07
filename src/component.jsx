import React from 'react';
// import ReactDOM from 'react-dom';

var CalculateMarkup = React.createClass({
  getInitialState: function () {
    return { initialinput:0, withJobMarkUp:0, people:0, isFoodState:false,isPharmState:false, isElectronicState:false, isFood:0, isPharm:0, isElectronic:0 };
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
  if (this.state.isFoodState === true){
  this.setState({ isFoodState: ! this.state.isFoodState,
                  isFood: 0
                })
              }
  if(this.state.isFoodState === false){
    this.setState({ isFoodState: ! this.state.isFoodState,
                    isFood: .13
                  })
              }
},
handleElectronic: function(){

  if (this.state.isElectronicState === true){
  this.setState({ isElectronicState: ! this.state.isElectronicState,
                  isElectronic: 0
                })
              }
  if(this.state.isElectronicState === false){
    this.setState({ isElectronicState: ! this.state.isElectronicState,
                    isElectronic: .02
                  })
              }
},
handlePharm: function(){
  if (this.state.isPharmState === true){
  this.setState({ isPharmState: ! this.state.isPharmState,
                  isPharm: 0
                })
              }
  if(this.state.isPharmState === false){
    this.setState({ isPharmState: ! this.state.isPharmState,
                    isPharm: .075
                  })
              }
},

handleClick: function() {

  var jobMarkup = this.state.initialinput * 0.05;
  var startRate = this.state.initialinput;
  var flatRate = parseFloat(jobMarkup)
                 + parseFloat(startRate);
  var people = this.state.people * 0.012;
  var peopleCost = people * flatRate;
  var peopleMarkup = parseFloat(people) * flatRate + flatRate;
  var isFood = this.state.isFood * flatRate;
  var isElectronic = this.state.isElectronic * flatRate;
  var isPharm = this.state.isPharm * flatRate;


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

      <div className="markup-calculator">

        <label >Initial Cost </label>
        <input id="initial-cost" type="number" onChange={ this.handleInitialCost }  />
        <h3>With Job Markup: {this.state.withJobMarkUp}</h3>


        <label ># of People </label>
        <input id="noOfPeople" type="number" placeholder="no of people" onChange={this.handlePeople} />

        <ul>
          <li>
          Is Food
          <input id="isFood" type="checkbox" checked={this.state.isFoodState}  onChange={this.handleFood}  />
          </li>

          <li>
          Is Electronics
          <input id="isElectronic" type="checkbox" checked={this.state.isElectronicState}  onChange={this.handleElectronic} />
          </li>

        <li>
        Is Pharm
          <input id="isPharm" type="checkbox" checked={this.state.isPharmState}  onChange={this.handlePharm} />
          </li>
        </ul>

        <p> Job Markup:  {this.state.jobMarkupRate } </p>
        <p> With {this.state.people} people Markup Cost: {this.state.peopleMarkupCost} </p>

        <p>Food Markup: {this.state.foodMarkupCost} </p>

        <p>Electronics Markup: {this.state.electonicMarkupCost}</p>

        <p>With Pharm Markup: {this.state.pharmMarkupCost}</p>

        <h2>Final Cost: {this.state.finalCostEstimate}</h2>


        <button
          type="button"
          value="Calculate Cost"
          onClick={this.handleClick}
        >Calculate </button>
      </div>

    );
  }
});
export default CalculateMarkup;
