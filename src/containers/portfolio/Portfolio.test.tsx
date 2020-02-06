import configureMockStore from "redux-mock-store";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ConnectedPortfolio, { Portfolio, IPortfolioProps } from "./Portfolio";
import React from "react";
import { Provider } from "react-redux";
import { SearchResults } from "../../components/search-results/SearchResults";
import thunk from "redux-thunk";

Enzyme.configure({ adapter: new Adapter() });

describe.only("Portfolio Component", () => {
  describe("Connected Portfolio Component", () => {
    let props: IPortfolioProps;

    beforeEach(() => {
      props = {
        portfolio: [],
        stocks: [
          {
            id: 1,
            name: "Tesco"
          },

          {
            id: 2,
            name: "Next"
          }
        ]
        ,
        dispatch: jest.fn()
      };
    });
    function setup(storeOptions = props) {
      const mockStore = configureMockStore([thunk]);
      const store = mockStore(storeOptions);

      const wrapper = mount(
        <Provider store={store}>
          <ConnectedPortfolio />
        </Provider>
      );

      return wrapper;
    }

    it("Should inject portfolio state in the component as expected", async () => {
      const wrapper = setup();
      const props = wrapper
        .find(ConnectedPortfolio)
        .at(0)
        .find("Portfolio")
        .at(0)
        .instance().props as IPortfolioProps;

      expect(props.portfolio.length).toEqual(0);
      expect(props.stocks.length).toEqual(2);
    });

    it("Should render without error", () => {
      let wrapper = setup();
      let portfolioComp = wrapper.find(`[data-test="portfolio-comp"]`);
      expect(portfolioComp.length).toEqual(1);
    });

    it("Should add stock to portfolio as expected", async done => {
      const wrapper = setup();

      let searchComp = wrapper.find("SearchInput");
      searchComp.find("input").simulate("change", { target: { value: "Tesco" } });
      setTimeout(() => {
        let searchResultsComp = wrapper.find("SearchResults");
        console.log('searchResultsComp', searchResultsComp.html());
        
        let results = searchResultsComp.find(".result");
        expect(results.length).toEqual(1);

        done();
      }, 200);
    });
  });

  describe("Portfolio with Props", () => {
    function setup(props: IPortfolioProps) {
      return shallow(<Portfolio {...props} />);
    }

    let wrapper: Enzyme.ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
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
        stocks,
        dispatch: jest.fn()
      });
    });

    it("Should be able to search for stock", done => {
      let searchComp = wrapper.find("SearchInput").dive();

      searchComp.find("input").simulate("change", { target: { value: "Tesco" } });

      setTimeout(() => {
        expect(wrapper.state()["searchText"]).toEqual("Tesco");
        done();
      }, 150);
    });

    it("Should be able to display search results", done => {
      let searchComp = wrapper.find("SearchInput").dive();

      searchComp.find("input").simulate("change", { target: { value: "Tesco" } });
      setTimeout(() => {
        let searchResultsComp = wrapper.find("SearchResults").dive();
        expect(searchResultsComp.length).toEqual(1);
        let result = searchResultsComp.find(`[data-test="search-result"]`).first();
        expect(result.text()).toEqual("Tesco");
        done();
      }, 150);
    });

    it("Should be to add stock from search result as expected", done => {
      let searchComp = wrapper.find("SearchInput").dive();

      searchComp.find("input").simulate("change", { target: { value: "Tesco" } });
      setTimeout(() => {
        let searchResultsComp = wrapper.find("SearchResults").dive();
        expect(searchResultsComp.length).toEqual(1);
        let result = searchResultsComp.find(`[data-test="search-result"]`).first();
        // Select Search Result
        result.simulate("click");

        searchComp = wrapper.find("SearchInput").dive();
        expect(wrapper.state()["searchText"]).toEqual("");
        expect(wrapper.state()["searchResults"].length).toEqual(0);
        done();
      }, 150);
    });
  });
});
