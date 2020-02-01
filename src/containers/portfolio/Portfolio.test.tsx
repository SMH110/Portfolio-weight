import configureMockStore from "redux-mock-store";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ConnectedPortfolio from "./Portfolio";
import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

Enzyme.configure({ adapter: new Adapter() });

describe.only("Portfolio Component", () => {
  describe("Connected Portfolio Component", () => {
    function setup() {
      const mockStore = configureMockStore();
      const store = mockStore({ portfolio: [1] });
      const wrapper = render(
        <Provider store={store}>
          <ConnectedPortfolio />
        </Provider>
      );

      return wrapper;
    }

    it("Should inject portfolio state in the component as expected", async () => {
      const wrapper = setup();
      // let prop =
      // expect(prop).toBeTruthy()
    });
  });
});
