import React from 'react'; 
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'; 
import calculate from '../logic/calculate'; 

const obj = {total: '0', next: null, operation: null}

describe('calculate', () => {
  it('render witout crashing', () => {
    console.log(calculate);  
  });
  it('should return an object where total next and operation is null', () =>{
    const actual = calculate(obj, 'AC');
    expect(actual).toEqual({total: null, next: null, operation: null});
  });
})