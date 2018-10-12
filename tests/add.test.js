const assert = require("assert");
const Router = require("../src/js/router");


describe("Router", () => {
  it("should exist", () => {
    assert.ok(Router);
  });
});

describe("Router detect mode method", () => {
  beforeEach(function() {
    var router = new Router();
  });
  it("should exist", () => {
    assert.ok(router.setUrlMode);
  });
});
