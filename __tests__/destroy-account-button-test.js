jest.autoMockOff();

describe("DestroyAccountButton", () => {
  var TestUtils,
      ReactDOM,
      React,
      DestroyAccountButton,
      genStore,
      mockAction,
      sinon;

  [
    "../src/views/bootstrap/DestroyAccountButton"
  ].forEach((requirePath) => {
    beforeEach(() => {
      TestUtils = require("react-addons-test-utils");
      ReactDOM = require("react-dom");
      React = require("react");
      DestroyAccountButton = require(requirePath);
      ({genStore} = require("../test/helper"));
    });

    it(`${requirePath} passes props to button`, () => {
      let store = genStore();
      let destroyBtn = TestUtils.renderIntoDocument(
        <DestroyAccountButton store={store} style={{color: "red"}}>
          <span className="content-override">content override</span>
        </DestroyAccountButton>
      );

      let btnEl = TestUtils.findRenderedDOMComponentWithTag(destroyBtn, "button");

      // was content overridden?
      expect(TestUtils.findRenderedDOMComponentWithClass(destroyBtn, "content-override"));

      // was style overridden?
      if (requirePath.match(/bootstrap/)) {
        expect(btnEl.getAttribute("style")).toBe("color:red;");
      }
    });

    it(`${requirePath} sends request to server upon click`, () => {
      jest.setMock()
    });
  });
});
