import React from 'react'
import { shallow } from 'enzyme'

import Button from '../components/Button/Button'
import Display from '../components/Display/Display'
import App from '../App'

describe('<Button />', () => {
  it('renders without crashing and matches the snapshot', () => {
    const button = shallow(<Button />)
    expect(button).toMatchSnapshot()
  })

  describe('Props Object', () => {
    describe('<Button wide/>', () => {
      it('should have the class of "component-button wide"', () => {
        const wrapper = shallow(<Button wide />)
        expect(wrapper.find('.component-button')).toHaveLength(1)
        expect(wrapper.find('.wide')).toHaveLength(1)
      })

      describe('<Button orange/>', () => {
        it('should have the class of "component-button orange"', () => {
          const orangeBtn = shallow(<Button orange />)
          expect(orangeBtn.find('.component-button')).toHaveLength(1)
          expect(orangeBtn.find('.orange')).toHaveLength(1)
        })
      })
    })
  })

  it('should return a truthy value when pressed', () => {
    const mock = jest.fn()
    const wrapper = shallow(<Button name='6' clickHandler={mock} />)
  
    wrapper.find('button').simulate('click')
 
    expect(mock).toHaveBeenCalled()
    expect(mock).toHaveBeenCalledWith('6')
  })
})
