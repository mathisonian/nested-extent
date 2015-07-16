var d3 = require('d3-arrays');
var _ = require('lodash');

var nestedExtent = function(arrays, map) {
    var max = d3.max(arrays, function(arr) {
        return d3.max(_.map(arr, map));
    });
    var min = d3.min(arrays, function(arr) {
        return d3.min(_.map(arr, map));
    });

    return [min, max];
};