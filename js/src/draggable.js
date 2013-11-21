define(function() {
    'use strict';
    
    function Draggable(sandbox, element) {
        var self = this;
        this.sandbox = sandbox;
        
        element.addEventListener('dragstart', function () {
            self.start.apply(self, arguments);
        }, false);
        element.addEventListener('dragleave', function () {
            self.leave.apply(self, arguments);
        }, false);
    }

    Draggable.prototype.start = function(event) {
        var target = event.target;
        
        this.sandbox.trigger('draggable.current', target.getAttribute('data-field'));
        target.classList.add('draggable-current');
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.dropEffect = 'move';
        
        event.dataTransfer.setData('text/plain', '1'); //Firefox effectAllowed and dropEffect bugfix
    };

    Draggable.prototype.leave = function(event) {
        var classList = event.target.classList;
        
        if (classList) {
            classList.remove('draggable-current');
        }
    };
    
    return Draggable;
});