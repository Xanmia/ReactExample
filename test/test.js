import React from 'react';
import { mount, shallow } from 'enzyme';
import Grouped from '../src/client/app/po';
import {expect} from 'chai';

describe('<Foo />', () => {
  it('renders three `.foo-bar`s', () => {
    const wrapper = shallow(<Grouped/>);
    expect(wrapper.find('Hello React').length).to.equal(3);
  });

  it('renders the title', () => {
    const wrapper = shallow(<Grouped />);
    expect(wrapper.text()).to.contain("Hello");
  });

});