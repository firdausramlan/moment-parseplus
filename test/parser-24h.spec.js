var moment = require('moment');
require('../parseplus.js');
var expect = require("chai").expect;

describe("24h date parser", function() {

	it("should parse times like `20:42`", function () {
		var date = new Date();
		date.setHours(20);
		date.setMinutes(42);
		date.setSeconds(0);
		date.setMilliseconds(0);
		expect(+moment('20:42')).to.be.closeTo(+date, 100);
	});
	it("should parse times like `20:42`", function () {
		expect(+moment('March 4, 2012 20:42')).to.equal(+new Date(2012,2,4,20,42));
	});
	it("should parse times like `20:42:42`", function () {
		expect(+moment('March 4, 2012 20:42:42')).to.equal(+new Date(2012,2,4,20,42,42));
	});
	it("should parse times like `20:42:42+0000`", function () {
		expect(+moment('4 Mar 2012 20:42:42+0000')).to.equal(+new Date(2012,2,4,20,42,42));
	});
	it("should parse times like `20:42:42+00:00`", function () {
		expect(+moment('4-Mar-2012 20:42:42+00:00')).to.equal(+new Date(2012,2,4,20,42,42));
	});
	it("should parse times like `20:42:42 GMT+0000`", function () {
		expect(+moment('4.3.2012 20:42:42 GMT+0000')).to.equal(+new Date(2012,2,4,20,42,42));
	});
	it("should parse times like `20:42:42 GMT+00:00`", function () {
		expect(+moment('3/4/2012 20:42:42 GMT+00:00')).to.equal(+new Date(2012,2,4,20,42,42));
	});
	it("should fail on times like `moo 20:42:42`", function () {
		expect(moment('moo 20:42:42').isValid()).to.equal(false);
	});

});
