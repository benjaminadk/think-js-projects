import { hello } from './hello-think'

describe('Hello Think', () => {
  test('JavaScript 101', () => {
    expect(hello()).toEqual('Hello Think.')
  })
})
