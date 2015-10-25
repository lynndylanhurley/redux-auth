jest.autoMockOn();
jest.dontMock("../src/views/bootstrap/ButtonLoader");
describe("ButtonLoader", () => {
  var TestUtils,
      ReactDOM,
      React,
      ButtonLoader;

  [
    "../src/views/bootstrap/ButtonLoader"
  ].forEach((requirePath) => {
    beforeEach(() => {
      TestUtils = require("react-addons-test-utils");
      ReactDOM = require("react-dom");
      React = require("react");
      ButtonLoader = require(requirePath);
    });

    it("passes props to button", () => {
      let iconOverride = <span className="icon-override">icon override</span>;
      let clickFn = jest.genMockFn();

      let buttonLoader = TestUtils.renderIntoDocument(
        <ButtonLoader
          className="class-override"
          icon={iconOverride}
          style={{color: "red"}}
          type="submit"
          onClick={clickFn}
          bsSize="large">
          <span className="content-override">content override</span>
        </ButtonLoader>
      );

      // was icon overridden?
      expect(TestUtils.findRenderedDOMComponentWithClass(buttonLoader, "icon-override"));

      // was content overridden?
      expect(TestUtils.findRenderedDOMComponentWithClass(buttonLoader, "content-override"));

      let btnEl = TestUtils.findRenderedDOMComponentWithTag(buttonLoader, "button");

      // were class and style overridden?
      if (requirePath.match(/bootstrap/)) {
        expect(btnEl.getAttribute("class")).toBe("class-override btn btn-lg btn-default")
        expect(btnEl.getAttribute("style")).toBe("color:red;");
      }

      // was type overridden?
      expect(btnEl.getAttribute("type")).toBe("submit");

      // was onClick defined?
      TestUtils.Simulate.click(btnEl);
      expect(clickFn.mock.calls.length).toBe(1);
    });

    it("disables the button", () => {
      let clickFn = jest.genMockFn();

      let buttonLoader = TestUtils.renderIntoDocument(
        <ButtonLoader disabled={true} onClick={clickFn} />
      );

      let btnEl = TestUtils.findRenderedDOMComponentWithTag(buttonLoader, "button");

      // was onClick defined?
      TestUtils.Simulate.click(btnEl);
      expect(clickFn.mock.calls.length).toBe(0);
    });

    it("shows spinner while loading", () => {
      let buttonLoader = TestUtils.renderIntoDocument(
        <ButtonLoader
          onClick={() => {}}
          loading={true}
          spinColorDark="purple"
          spinColorLight="pink" />
      );

      expect(buttonLoader.refs.spinner);
      expect(buttonLoader.refs.spinner.props.color).toBe("purple");
    });

    it("changes spinner color according to bsStyle", () => {
      let buttonLoader = TestUtils.renderIntoDocument(
        <ButtonLoader
          onClick={() => {}}
          loading={true}
          bsStyle="primary"
          spinColorDark="purple"
          spinColorLight="pink" />
      );

      expect(buttonLoader.refs.spinner.props.color).toBe("pink");
    });
  });
});
