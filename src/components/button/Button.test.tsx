import * as React from "react";
import { Button } from "./Button";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

const setup = props => {
  return shallow(<Button {...props} />);
};
describe("Button Component", () => {
  it("Should render button component without error", () => {
    let wrapper = setup({ name: "Click me" });

    expect(wrapper.find("button").text()).toEqual("Click me");
  });

  it("Should props onClick function when clicked", () => {
    let onClick = jest.fn();
    let wrapper = setup({ name: "Click me", onClick });
    let button = wrapper.find("button");

    button.simulate("click");

    expect(onClick).toHaveBeenCalled();
  });
});
