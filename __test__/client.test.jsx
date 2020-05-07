/* eslint-disable import/extensions */
import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../client/src/index.jsx';
import Steps from '../client/src/components/steps.jsx';
import Videos from '../client/src/components/videos.jsx';

describe('Client Testing: App', () => {
  it('App should render without throwing an error', () => {
    expect(shallow(<App />).contains(<div classId="app"></div>)).toBe(true);
});

// const wrapper = shallow(<Foo />);
