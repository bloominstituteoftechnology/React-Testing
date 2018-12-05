import React from 'react'
import calculate from '../logic/calculate.js'
import {shallow} from 'enzyme'
import App from '../App.js'

describe('calculate function test suite', () => {

    it('should return object with all values equalling null', () => {
        const wrapper = shallow(<App />)
        const instance = wrapper.instance()
        expect(calculate(instance.state, 'AC')).toEqual({total: null, next: null, operation: null})
    })


})