import React from 'react';
import { shallow } from '../setup/setupEnzyme';
import App from '../../src/components/App.jsx';

beforeEach(() => {
});

describe('<App />', () => {
  const wrapper = shallow(<App />);
  it('renders the component', () => {
    expect(wrapper).toBeDefined();
  });
});
