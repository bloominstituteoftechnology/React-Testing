import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import operate from '../logic/operate';

describe('<Operate />', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<operate />, div);
    });
});