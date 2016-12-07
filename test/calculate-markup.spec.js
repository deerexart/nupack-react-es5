
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


});
