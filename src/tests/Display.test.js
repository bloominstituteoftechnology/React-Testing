import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Display from '../components/Display/Display';

Enzyme.configure({ adapter: new Adapter() });

describe('<Display />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Display />, div);
  });
  it('should render a single div called \'component-display\'', () => {
    const shallowDisplay = shallow(<Display />);
    expect(shallowDisplay.find('.component-display')).toHaveLength(1);
  });
  it('should render whatever value it gets as a prop', () => {
    const shallowDisplay1 = shallow(<Display value={'1'}/>);
    expect(shallowDisplay1.contains(<div>1</div>)).toEqual(true);
    const shallowDisplay2 = shallow(<Display value={'Foo'}/>);
    expect(shallowDisplay2.contains(<div>Foo</div>)).toEqual(true);
  });
});