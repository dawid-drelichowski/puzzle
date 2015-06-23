define(function() {
    'use strict';

    function Result(sandbox, draggableCount, elements) {
        var self = this;
        this.sandbox = sandbox;
        this.draggableCount = draggableCount;
        this.elements = elements;
        sandbox.on('dropzone.dropped', function() {
            self.updateMessage.apply(self, arguments);
        });
    }

    Result.prototype.updateMessage = function() {
        var classList = this.elements.done.classList;
        this.draggableCount--;

        if (this.draggableCount === 0) {
            if (classList) {
                this.elements.progress.classList.add('hidden');
                classList.remove('hidden');
            }
            return this;
        }
        this.elements.count.textContent = this.draggableCount;
        return this;
    };

    return Result;
});