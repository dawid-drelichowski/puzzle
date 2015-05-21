define(function() {
    'use strict';

    function Dropzone(sandbox, element) {
        var self = this;
        this.draggableCurrent = 0;

        sandbox.on('draggable.current', function(field){
            self.draggableCurrent = field;
        });
        element.addEventListener('dragover', function () {
            self.over.apply(self, arguments);
        }, false);
        element.addEventListener('drop', function () {
            self.drop.apply(self, arguments);
        }, false);
    }

    Dropzone.prototype.over = function(event) {
        if (this.draggableCurrent === event.target.getAttribute('data-valid')) {
            event.preventDefault();
        }
    };

    Dropzone.prototype.drop = function(event) {
        var target = event.target,
            element; 

        if (this.draggableCurrent === target.getAttribute('data-valid')) {
            element = window.document.querySelector('[data-field="' + this.draggableCurrent + '"]');
            target.appendChild(element);
        }
    };
    return Dropzone;
});