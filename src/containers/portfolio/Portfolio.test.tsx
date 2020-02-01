import configureMockStore from "redux-mock-store";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ConnectedPortfolio, { Portfolio, IPortfolioProps } from "./Portfolio";
import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

Enzyme.configure({ adapter: new Adapter() });

describe.only("Portfolio Component", () => {
  describe("Connected Portfolio Component", () => {
    function setup() {
      const mockStore = configureMockStore();
      const store = mockStore({ portfolio: [1] });
      const wrapper = mount(
        <Provider store={store}>
          <ConnectedPortfolio />
        </Provider>
      );

      return wrapper;
    }

    // it("Should inject portfolio state in the component as expected", async () => {
    //   const wrapper = setup();
    //   // let prop =
    //   // expect(prop).toBeTruthy()
    // });

    it("Should render without error", () => {
      let wrapper = setup();
      let portfolioComp = wrapper.find(`[data-test="portfolio-comp"]`);
      expect(portfolioComp.length).toEqual(1);
    });
  });

  describe("Portfolio with Props", () => {
    function setup(props: IPortfolioProps) {
      return shallow(<Portfolio {...props} />);
    }

    let wrapper;
    let stocks: IStock[] = [
      {
        id: 1,
        name: "Tesco"
      },
      {
        id: 2,
        name: "Next"
      },

      {
        id: 3,
        name: "Asos"
      }
    ];
    let portfolio = [];
    beforeAll(() => {
      wrapper = setup({
        portfolio,
        stocks
      });
    });

    it("Should be able to search for stock", done => {
      let searchComp = wrapper.find("SearchInput").dive();

      searchComp.find("input").simulate("change", { target: { value: "Tesco" } });

      setTimeout(() => {
        expect(wrapper.state()["searchText"]).toEqual("Tesco");
        done();
      }, 270);
    });

    it("Should be able to display search results", done => {
      let searchComp = wrapper.find("SearchInput").dive();

      searchComp.find("input").simulate("change", { target: { value: "Tesco" } });
      setTimeout(() => {
        let searchResultsComp = wrapper.find("SearchResults").dive();
        expect(searchResultsComp.length).toEqual(1);
        let result = searchResultsComp.find(".result").first();
        expect(result.text()).toEqual("Tesco");
        done();
      }, 270);
    });
  });
});
