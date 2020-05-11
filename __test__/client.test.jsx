/* eslint-disable import/extensions */
import React from 'react';
import render from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import App from '../client/src/index.jsx';
import Steps from '../client/src/components/steps.jsx';
import Videos from '../client/src/components/videos.jsx';

describe('Client Testing: App', () => {
  it('renders the inner Counter', () => {
    const wrapper = mount(<App />);

  });
});

// const wrapper = shallow(<Foo />);
