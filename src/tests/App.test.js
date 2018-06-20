import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import Enzyme, {
  shallow
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import Display from '../components/Display/Display';
import Panel from '../components/Panel/Panel';

Enzyme.configure({
  adapter: new Adapter()
});

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( < App / > , div);
  });
  it('should render <Display /> and <Panel /> components', () => {
    const wrapper = shallow( < App / > );
    expect(wrapper.find(Display).length).toEqual(0);
    expect(wrapper.find(Panel).length).toEqual(1);
  });
});