var nestedExtend = require('..');
var expect = require('expect.js');
var _ = require('lodash');

describe('nested-extent', function() {
    it('should find the extent of an array of arrays', function() {
        var arrs = _.map(_.range(10), function() {
            return _.range(20);
        });

        var extent = nestedExtend(arrs, function(d) {
            return d;
        });

        expect(extent).to.be.an('array');
        expect(extent[0]).to.eql(0);
        expect(extent[1]).to.eql(19);   

    });
});