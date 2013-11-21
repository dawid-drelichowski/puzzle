define(['chai', 'sandbox'], function(chai, Sandbox) {
    describe('Sandbox', function() {
        describe('#trigger', function() {
            it('should return Sandbox', function() {
                chai.expect((new Sandbox()).trigger('test.event')).to.be.instanceof(Sandbox);
            });
        });
        describe('#on', function() {
            it('should return Sandbox', function() {
                chai.expect((new Sandbox()).on('test.event')).to.be.instanceof(Sandbox);
            });
        });
    });
});