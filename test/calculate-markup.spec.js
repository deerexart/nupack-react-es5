
import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import  CalculateMarkup  from '../src/component.jsx';



describe('<CalculateMarkup />', () => {
// Does component exist?
  it('should have 1 div with class markup-calculator', () => {
      const wrapper = mount(<CalculateMarkup/>);
      expect(wrapper.find('.markup-calculator').length).to.equal(1);

  });
  /* checking existence annd if things are defined within component */

  it('should have 9 children', () => {
      const wrapper = mount(<CalculateMarkup/>);
      expect(wrapper.children().length).to.equal(13);

  });
  it('should have 3 checkboxes', () =>{
    const wrapper = mount(<CalculateMarkup />);
    expect(wrapper.find('input[type="checkbox"]')).to.have.length(3);
  });
  it('should have 2 number inputs', ()=>{
    const wrapper = mount(<CalculateMarkup />);
    expect(wrapper.find('input[type="number"]')).to.have.length(2);
  });
  it('should have a button', () => {
    const wrapper = mount(<CalculateMarkup />);
    expect(wrapper.find('button')).to.have.length(1);
  });
  it('should have three h3 tags', () => {
    const wrapper = mount(<CalculateMarkup/>);
    expect(wrapper.find('h3')).to.have.length(1);
  })
  it('should have states for inital input, withJobMarkup, noOfPeople', () =>{
    const wrapper = mount(<CalculateMarkup/>);
    expect(wrapper.state().initialinput).to.be.defined;
    expect(wrapper.state().withJobMarkup).to.be.defined;
    expect(wrapper.state().noOfPeople).to.be.defined;

  });
  /* ###################### STATE AND FUNCTION TESTS ###################### */

  // Testing package price fn/state before any markups
  it('Test initial input state.. should be 0, on change should be 1299.99', ()=>{

      const wrapper = mount(<CalculateMarkup  />);
      const initialInputSimulate = wrapper.find('input#initial-cost');
      const changedInput = {target:{value:1299.99}};
      const initialInputState = wrapper.state('initialinput');

      expect(initialInputState).to.equal(0);
      initialInputSimulate.simulate('change', changedInput);
      expect(wrapper.state('initialinput')).to.equal(1299.99);
  });
  /* TESTS handleInitialCost  */

  it('Should start off as 0, handleInitialCost should update jobmark up based on updated input value ', ()=>{

    const wrapper = shallow(<CalculateMarkup  />);
    const handleInitialCost = wrapper.find('input#initial-cost')
    const initialInputState = wrapper.state('initialinput');
    const initialJobState = wrapper.state('withJobMarkUp');
    const updatePeople = {target:{value:3}};
    const updateInput = {target:{value:1299.99}};

    expect(initialInputState).to.equal(0 );
    expect(initialJobState).to.equal(0);
    wrapper.instance().handleInitialCost(updateInput);
    expect(wrapper.state('initialinput')).to.equal(1299.99);
    expect(wrapper.state('withJobMarkUp')).to.equal(1364.9895);

  })

  //Testing number of people handler update & initial state
  it('Test handlePeople state.. should be 0, on change should be 3', ()=>{

      const wrapper = shallow(<CalculateMarkup  />);
      const handlePeople = wrapper.find('input#noOfPeople');
      const changedInput = {target:{value:3}};
      const initialPeopleState = wrapper.state('people');
      //actually simulate event
      expect(initialPeopleState).to.equal(0);
      handlePeople.simulate('change', changedInput);
      expect(wrapper.state('people')).to.equal(3);
  });

  /* ####################### CHECKBOX TESTS #######################   */


      it('should be defined for isFood, isPharm, isElectronics', () =>{

        const wrapper = mount(<CalculateMarkup/>);
        expect(wrapper.state().isFood).to.be.defined;
        expect(wrapper.state().isElectronics).to.be.defined;
        expect(wrapper.state().isPharm).to.be.defined;
      })
      it('should have states of false for isFood, isPharm, isElectronics', () =>{
        const wrapper = mount(<CalculateMarkup/>);
        const isFoodState = wrapper.state('isFoodState');

        expect(wrapper.state('isFoodState')).to.be.false;
        expect(wrapper.state('isElectronicState')).to.be.false;
        expect(wrapper.state('isPharmState')).to.be.false;
      })

      /* Checkbox breakdown tests */

      /// FOOD BOOLEAN & STATE CHECK
      // this test now seems redundant... seeing as the next one uses simulate and this just sets a new state...
      // Keep it for reference anyway because it's the only place I use 'let' in these tests

          it('testing food checkbox boolean to be false, and update to be true ... ', () =>{
          const wrapper = mount(<CalculateMarkup />);
          wrapper.setState({ isFoodState: false });

         let checkbox = wrapper.find({ type: 'checkbox', id:'isFood' });
         expect(checkbox.props().checked).to.equal(false);
         wrapper.setState({isFoodState:true});
         expect(checkbox.props().checked).to.equal(true);

      });
      it('checking check box function & states: isFood:false/isFoodMarkup:0.  When state of isFood===true, isFoodMarkup===.13', ()=>{

          const wrapper = shallow(<CalculateMarkup  />);
          const foodCheck = wrapper.find('input#isFood');
          const isFoodCheckState = wrapper.state('isFoodState');
          const isFoodMarkupState = wrapper.state('isFood');
          const changeFoodState = true;

          expect(isFoodCheckState).to.equal(false);
          expect(isFoodMarkupState).to.equal(0);

          foodCheck.simulate('change', changeFoodState);

          expect(wrapper.state('isFoodState')).to.equal(true);
          expect(wrapper.state('isFood')).to.equal(.13);

      });

});
