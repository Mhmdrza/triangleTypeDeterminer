import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import enzyme from 'enzyme'

describe('web app ui', ()=>{
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  let wrapper, instance;
  beforeEach(() => {
    wrapper = enzyme.shallow(<App />);
    instance = wrapper.instance()
  });
  it('sides input will be updated on change', ()=>{
    jest.useRealTimers()
    const input = wrapper.find('[name="side1"]')
    const side1Value = instance.state.side1
    expect(input.get(0).props.value).toBe(side1Value)
    expect(side1Value).not.toBe(2)
    input.simulate('change', {target:{type:'number',name:'side1',value:2}})
    expect(instance.state.side1).toBe(2)
  })
  it('will call typeFetcher on input change', () => {
    const spy = jest.spyOn(instance, 'typeFetcher'); 
    const input1 = wrapper.find('[name="side1"]')
    expect(spy).not.toBeCalled()
    input1.simulate('change', { target: { value: '5' } })
    expect(spy).toHaveBeenCalled()
  });
  it('will call endpoint with new parameters on input change', () => {
    global.fetch = jest.fn(() => new Promise(resolve => resolve()));
    const input1 = wrapper.find('[name="side1"]')
    const side1Value = instance.state.side1
    const side2Value = instance.state.side2
    const side3Value = instance.state.side3
    expect(fetch).not.toBeCalled()
    expect(side1Value).not.toBe(99)
    input1.simulate('change', {target:{type:'number',name:'side1',value:99}})
    wrapper.update()
    expect(fetch).toHaveBeenCalledWith(`/typeDeterminer?side1=${99}&side2=${side2Value}&side3=${side3Value}`)
  });
})
