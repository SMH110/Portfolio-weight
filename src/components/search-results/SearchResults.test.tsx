import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import { SearchResults, ISearchResultsProps } from "./SearchResults";
Enzyme.configure({ adapter: new Adapter() });

function setup(props) {
  return shallow(<SearchResults {...props} />);
}

describe("Search Results Component", () => {
  let props: ISearchResultsProps;
  let select = jest.fn();
  beforeEach(() => {
    props = {
      displayKey: "name",
      keyId: "id",
      select: select,
      results: [
        {
          name: "Tesco",
          id: "1"
        },
        {
          name: "Next",
          id: "2"
        }
      ]
    };
  });

  it("Should display nothing", () => {
    props.results = [];
    let wrapper = setup(props);

    const results = wrapper.find(`[data-test="search-result"]`);

    expect(results.length).toEqual(0);
  });

  it("Should display results as expected", () => {
    let wrapper = setup(props);
    const results = wrapper.find(`[data-test="search-result"]`);
    expect(results.length).toEqual(2);
  });

  it("Should call select handler when search result clicked", () => {
    let wrapper = setup(props);
    const Next = wrapper.find(`[data-test="search-result"]`).at(1)

    Next.simulate('click')
    
    expect(select).toHaveBeenCalledWith(props.results[1])
    
  });
});
