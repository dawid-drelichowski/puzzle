/* global Sandbox */

describe('Drag And Drop', function() {
    describe('Sandbox', function() {
        describe('#trigger', function() {
            it('should return Sandbox', function() {
                expect((new Sandbox()).trigger('test.event')).to.be.instanceof(Sandbox);
            });
        });
        describe('#on', function() {
            it('should return Sandbox', function() {
                expect((new Sandbox()).on('test.event')).to.be.instanceof(Sandbox);
            });
        });
    });
});