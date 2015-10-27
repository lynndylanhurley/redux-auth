import React from "react";
import TestUtils from "react-addons-test-utils";
import sinon from "sinon";
import jsdom from "mocha-jsdom";
import {expect} from "chai";

describe("ButtonLoader", () => {

  jsdom();

  var ButtonLoader;

  [
    "../../src/views/bootstrap/ButtonLoader"
  ].forEach((requirePath) => {
    beforeEach(() => {
      ButtonLoader = require(requirePath);
    });

    it("passes props to button", () => {
      let iconOverride = <span className="icon-override">icon override</span>;
      let clickFn = sinon.spy();

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
        expect(btnEl.getAttribute("class")).to.equal("class-override btn btn-lg btn-default")
        expect(btnEl.getAttribute("style")).to.equal("color:red;");
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
          spinColorLight="pink" />
      );

      expect(buttonLoader.refs.spinner.props.color).to.equal("pink");
    });
  });
});
