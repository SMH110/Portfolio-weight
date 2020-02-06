import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import PortfolioItem, { IPortfolioItemProps } from "./portfolio-item";
Enzyme.configure({ adapter: new Adapter() });

function setup(props: any = {}) {
  return shallow(<PortfolioItem {...props} />);
}

describe("Portfolio item", () => {
  let props: IPortfolioItemProps;
  let removeFn
  let onChange = jest.fn();

  beforeEach(() => {

    removeFn   = jest.fn();
    props = {
      item: { id: 1, name: "Tesco", weight: 0 },
      onRemove: removeFn,
      onWeightChange: onChange
    };
  });

  it("Should display item name", () => {
    let component = setup(props);
    let name = component.find(".name").text();
    expect(name).toBe(props.item.name);
  });
  it("Should display item weighting", () => {
    let component = mount(<PortfolioItem {...props} />)
    let weight = component.find("input").getDOMNode<HTMLInputElement>().value;
    expect(weight).toEqual(props.item.weight.toString());
  });

  it("Should call props onRemove func", () => {
    let component = setup(props);
    let remove = component.find(".remove");

    remove.simulate('click');
    
    expect(removeFn).toHaveBeenCalledWith(props.item)
  });
});
