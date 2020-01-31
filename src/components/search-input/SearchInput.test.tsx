import React from "react";
import SearchInput, { ISearchInputProps } from "./SearchInput";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

function setup(props: ISearchInputProps) {
  return mount(<SearchInput {...props} />);
}
describe("Search Input Component", () => {
  it("Should display props value as expected", () => {
    const wrapper = setup({
      type: "text",
      value: "Test value",
      onChange: _ => {}
    });

    let input = wrapper.find("input").getDOMNode<HTMLInputElement>().value;
    expect(input).toEqual("Test value");
  });

  it("Should call props onChange handler when input changes as expected", done => {
    let onChangeSpy = jest.fn(text => {});
    const wrapper = setup({
      type: "text",
      value: "Test value",
      onChange: onChangeSpy,
      debounceTime: 1
    });

    wrapper.find("input").simulate("change");
    setTimeout(() => {
      let calls = onChangeSpy.mock.calls.length;
      let args = onChangeSpy.mock.calls[0];

      expect(calls).toEqual(1);
      expect(args[0]).toEqual("Test value");

      done();
    }, 10);
  });
});
