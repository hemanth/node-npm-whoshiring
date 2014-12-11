#!/usr/bin/env node
'use strict';
var whosHiring = require("./index"),
	json_tb = require('json-table'),
	toShow = [];

whosHiring(function(err, jobs) {
	if (!err) {
		jobs.map(function(job) {
			toShow.push({
				Compnay: job.name,
				URL: job.url,
				Hiring: job.hiring
			});
		});
		var json_tb_out = new json_tb(toShow, {
			chars: {
				'top': '═',
				'top-mid': '╤',
				'top-left': '╔',
				'top-right': '╗',
				'bottom': '═',
				'bottom-mid': '╧',
				'bottom-left': '╚',
				'bottom-right': '╝',
				'left': '║',
				'left-mid': '╟',
				'mid': '─',
				'mid-mid': '┼',
				'right': '║',
				'right-mid': '╢',
				'middle': '│'
			}
		}, function(table) {
			table.show();
		});
	} else {
		throw new Error(err);
	}
});
