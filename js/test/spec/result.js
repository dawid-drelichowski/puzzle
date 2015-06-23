define(['sandbox', 'result', 'html!fixture/result.html'], function(Sandbox, Result, resultFixture) {
    'use strict';

    describe('Result', function() {
        var draggableCount = 3,
            element,
            progressElement,
            countElement,
            doneElement,
            sandbox,
            result;

        beforeEach(function() {
            element = document.body.appendChild(resultFixture.firstChild.cloneNode(true));
            progressElement = document.querySelector('[data-in-progress]');
            countElement = document.querySelector('[data-count]');
            doneElement = document.querySelector('[data-done]');
            sandbox = new Sandbox();
            result = new Result(sandbox, draggableCount, {
                progress: progressElement,
                count: countElement,
                done: doneElement
            });
        });

        afterEach(function() {
            document.body.removeChild(element);
        });

        describe('#updateMessage', function() {
            it('should return Result', function() {
                expect(result.updateMessage()).to.be.instanceof(Result);
            });

            it('progress should be visible and draggable count decreased when called once', function() {
                result.updateMessage();
                expect(progressElement.classList.contains('hidden')).to.be.false;
                expect(parseInt(countElement.textContent, 10)).is.eq(draggableCount - 1);
            });

            it('done should be visible and progress hidden when called three times', function() {
                result.updateMessage();
                result.updateMessage();
                result.updateMessage();
                expect(progressElement.classList.contains('hidden')).to.be.true;
                expect(doneElement.classList.contains('hidden')).to.be.false;
            });
        });
    });
});