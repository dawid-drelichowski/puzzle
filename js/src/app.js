define(['sandbox', 'draggable', 'dropzone'], function(Sandbox, Draggable, Dropzone) {
    'use strict';
    
    var document = window.document,
        sandbox = new Sandbox(),
        draggable,
        dropzone;
    
    if (!sandbox.dragAndDropSupported()) {
        window.alert('Sorry! Your browser is too old to support this puzzle game. Please upgrade it.');
        return;
    }
    
    draggable = document.querySelectorAll('[draggable="true"]');
    dropzone = document.querySelectorAll('.dropzone');
        
    [].forEach.call(draggable, function(element) {
        new Draggable(sandbox, element);
    });
    
    [].forEach.call(dropzone, function(element) {
        new Dropzone(sandbox, element);
    });
    
});