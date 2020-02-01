import React from "react";
import SearchInput, { ISearchInputProps } from "./SearchInput";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Subject } from "rxjs";

Enzyme.configure({ adapter: new Adapter() });

function setup(props: ISearchInputProps) {
  return mount(<SearchInput {...props} />);
}
describe("Search Input Component", () => {
  let props: ISearchInputProps;

  beforeEach(() => {
    props = {
      type: "text",
      value: "Test value",
      onChange: _ => {},
      clear$: new Subject()
    };
  });
  it("Should display props value as expected", () => {
    const wrapper = setup(props);

    let input = wrapper.find("input").getDOMNode<HTMLInputElement>().value;
    expect(input).toEqual("Test value");
  });

  it("Should call props onChange handler when input changes as expected", done => {
    let onChangeSpy = jest.fn(text => {});
    props = {
      ...props,
      onChange: onChangeSpy,
      debounceTime: 1
    };
    const wrapper = setup(props);

    wrapper.find("input").simulate("change");
    setTimeout(() => {
      let calls = onChangeSpy.mock.calls.length;
      let args = onChangeSpy.mock.calls[0];
      expect(calls).toEqual(1);
      expect(args[0]).toEqual("Test value");

      done();
    }, 10);
  });

  it("Should allow clearing from outside", done => {
    let onChangeSpy = jest.fn(text => {});
    let clear$ = new Subject<void>();
    props = {
      ...props,
      onChange: onChangeSpy,
      debounceTime: 1,
      clear$: clear$
    };
    const wrapper = setup(props);

    
    let input = wrapper.find("input").getDOMNode<HTMLInputElement>().value;
    expect(input).toEqual("Test value");
    clear$.next();
    setTimeout(() => {
      input = wrapper.find("input").getDOMNode<HTMLInputElement>().value;
      expect(input).toEqual("");

      done();
    }, 10);
  });
});
