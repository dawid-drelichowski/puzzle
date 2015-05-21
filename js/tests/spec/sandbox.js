define(['sandbox'], function(Sandbox) {
    describe('Sandbox', function() {
        var sandbox;

        beforeEach(function() {
            sandbox = new Sandbox();
        });
        
        describe('#on', function() {
            it('should return Sandbox', function() {
                expect(sandbox.on('test.event')).to.be.instanceof(Sandbox);
            });
        });

        describe('#trigger', function() {
            it('should return Sandbox', function() {
                expect(sandbox.trigger('test.event')).to.be.instanceof(Sandbox);
            });
            
            it('should call callback set in #on', function(done) {
                sandbox.on('test.event', function(data) {
                    expect(data).to.deep.equal({name: 'Patricia'});
                });
                
                sandbox.trigger('test.event', {name: 'Patricia'});
                done();
            });
        });
        describe('#dragAndDropSupported', function() {
            it('should return true', function() {
                expect(sandbox.dragAndDropSupported()).to.be.true;
            });
        });
    });
});