var React,
    TestUtils,
    sinon,
    expect,
    ButtonLoader;

export default function() {
  describe("ButtonLoader", () => {
    [
      "bootstrap",
      "default",
      "material-ui"
    ].forEach((theme) => {
      var requirePath = `../../src/views/${theme}/ButtonLoader`
      describe(`${theme} theme`, () => {
        beforeEach(() => {
          React          = require("react");
          TestUtils      = require("react-addons-test-utils");
          sinon          = require("sinon");
          ({expect}      = require ("chai"));
          ButtonLoader   = require(requirePath).default;
        });

        it("passes props to button", () => {
          let iconOverride = <span className="icon-override">icon override</span>;
          let clickFn = sinon.spy();

          let buttonLoader = TestUtils.renderIntoDocument(
            <ButtonLoader
              className="class-override"
              icon={iconOverride}
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
            expect(btnEl.getAttribute("class")).to.match(/class-override/);
          }

          // was type overridden?
          expect(btnEl.getAttribute("type")).to.equal("submit");

          // was onClick defined?
          TestUtils.Simulate.click(btnEl);
          expect(clickFn.calledOnce);
        });

        it("disables the button", () => {
          let clickFn = sinon.spy();

          let buttonLoader = TestUtils.renderIntoDocument(
            <ButtonLoader disabled={true} onClick={clickFn} />
          );

          let btnEl = TestUtils.findRenderedDOMComponentWithTag(buttonLoader, "button");

          // was onClick defined?
          TestUtils.Simulate.click(btnEl);
          expect(clickFn.notCalled);
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
          expect(buttonLoader.refs.spinner.props.color).to.equal("purple");
        });

        it("changes spinner color according to bsStyle", () => {
          let buttonLoader = TestUtils.renderIntoDocument(
            <ButtonLoader
              onClick={() => {}}
              loading={true}
              bsStyle="primary"
              spinColorDark="purple"
              spinColorLight="purple" />
          );

          expect(buttonLoader.refs.spinner.props.color).to.match(/purple/);
        });
      });
    });
  });
}
