import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import calculate from '../logic/calculate';
import axios from 'axios';
import renderer from 'react-test-renderer';

import App from '../App';

jest.mock('../logic/calculate.js'); // gives a fake func to be used later

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', () => {
    it('', () => {
        const tree = renderer.create(<App />).toJSON();

        expect(tree).toMatchSnapshot();
    })
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });
    it('should contain a div with "component-app" className', () => {
        const wrapper = shallow(<App />);

        expect(wrapper.find('.component-app')).toHaveLength(1)
    });
    it('should have the "total" property on the state: ', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.state('total')).toBeTruthy();
    });
    it('should pass the total to the Display component if next if null', () => {
        const root = shallow(<App />);
        const instance = root.instance();

        root.setState({ total: '7', next: null });
        const value = root.find({ value: instance.state.total })
        expect(value.length).toBe(1)
    })
})

describe('handleClick', () => {
    it('should call "calculate" exactly one time', () => {
        // to know how many times a func is called
        // spy  - function in place of original
        // shallow(excludes child component) vs mount(including child component)
        const root = shallow(<App />);
        const instance = root.instance();
        const buttonName = 'plus'
        instance.handleClick(buttonName);

        expect(calculate).toHaveBeenCalledTimes(1);
    })

    it('should call "calculate" passing the state and buttonName', () => {
        const root = shallow(<App />);
        const instance = root.instance();
        const buttonName = 'plus';
        const stateObject = { total: '3', next: null, operation: null };

        root.setState(stateObject)
        instance.handleClick(buttonName);

        expect(calculate).toHaveBeenCalledWith(stateObject, buttonName);
    })

    it('should render the Display and Panel components', () => {
        const root = shallow(<App />);

        const display = root.find('Display');
        const panel = root.find('Panel');

        expect(display.length).toBe(1);
        expect(panel.length).toBe(1);
    });
})

describe('Asynchronous tests', () => {
    it('async using callback', done => {
        // axios.get('https://swapi.co/api/people/').then(res => {
        //     done();
        // })
        // if done is not called, the test will fail
        setTimeout(done, 10); // setTimeout will call done after 1s
    });
    it('async with promises', () => {
        // don't forget the return
        return new Promise(resolve => setTimeout(resolve, 10));
    });
    it('async with async/await', async () => {
        await new Promise(resolve => setTimeout(resolve, 10));
    });

})