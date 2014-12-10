'use strict';
var assert = require('assert');
var whosHiring = require('./index');

it("should not have an err..", function () {
	whosHiring(function(err, jobs){
		assert.notEqual(err, null);
	});
});