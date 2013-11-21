define(function() {
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
    };
    
    Sandbox.prototype.on = function (event, callback) {
        if (!this.callbacks[event]) {
            this.callbacks[event] = [];
        }
        this.callbacks[event].push(callback);
        return this;
    };
    
    Sandbox.prototype.dragAndDropSupported = function() { //taken from modernizr.com
        var div = window.document.createElement('div');
        return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);
    };
    
    return Sandbox;
});