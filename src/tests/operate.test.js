import operate from '../logic/operate'

describe('operate', () => {
  it('should add 4 with 4 to equal 8', () => {
    expect(operate('4', '4', '+')).toEqual('8')
  })

  it('should subtract 8 from 16 to equal 8', () => {
    expect(operate('16', '8', '-')).toEqual('8')
  })

  it('should multiply 4 with 2 to equal 8', () => {
    expect(operate('4', '2', 'x')).toEqual('8')
  })

  it('should divide 32 by 4 to equal 8', () => {
    expect(operate('32', '4', '÷')).toEqual('8')
  })

  it('should throw an error with unrecognized operator', () => {
    expect(() => operate('8', '8', '?')).toThrow()
  })
})
