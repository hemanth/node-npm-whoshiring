#!/usr/bin/env node
'use strict';
var whosHiring = require("./index"),
	toShow,
	Table = require('easy-table')

whosHiring(function(err, jobs) {
	if (!err) {
		toShow = jobs.map(function(job) {
			return {
				company: job.name,
				url: job.url,
				isHiring: job.hiring ? 'YES' : 'NO'
			};
		});
		var t = new Table
		toShow.forEach(function(job) {
		  t.cell('Company', job.company)
		  t.cell('URL', job.url)
		  t.cell('Vacant?',job.isHiring)
		  t.newRow()
		})
		console.log(t.toString())
	} else {
		throw new Error(err);
	}
});
