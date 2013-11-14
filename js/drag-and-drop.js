 (function(document) {
    'use strict';
    
    function Sandbox() {
        this.callbacks = {};   
    }
    
    Sandbox.prototype.trigger = function() {
        var args = [].slice.call(arguments, 0),
            event = args.shift();

        if (this.callbacks[event]) {
            this.callbacks[event].forEach(function(data) {
                data.apply(this, args);
            });
        }
        return this;
    }
    
    Sandbox.prototype.on = function (event, callback) {
        if (!this.callbacks[event]) {
            this.callbacks[event] = [];
        }
        this.callbacks[event].push(callback);
        return this;
    }
    
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
    }

    Draggable.prototype.leave = function(event) {
        var classList = event.target.classList;
        
        if (classList) {
            classList.remove('draggable-current');
        }
    }
    
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
    }
    
    Dropzone.prototype.drop = function(event) {
        var target = event.target,
            element; 

        if (this.draggableCurrent === target.getAttribute('data-valid')) {
            element = document.querySelector('[data-field="' + this.draggableCurrent + '"]'); 
            target.appendChild(element);
        }
    }
    
    var sandbox = new Sandbox(),
        draggable = document.querySelectorAll('[draggable="true"]'),
        dropzone = document.querySelectorAll('.dropzone');
        
    [].forEach.call(draggable, function(element) {
        new Draggable(sandbox, element);
    });
    
    [].forEach.call(dropzone, function(element) {
        new Dropzone(sandbox, element);
    });
                
})(document);