define(['sandbox', 'draggable', 'dropzone', 'result'], function(Sandbox, Draggable, Dropzone, Result) {
    'use strict';

    var document = window.document,
        sandbox = new Sandbox(),
        draggable,
        dropzone;

    if (!sandbox.dragAndDropSupported()) {
        window.alert('Sorry! Your browser is too old to support this puzzle game. Please upgrade it.');
        return;
    }

    draggable = document.querySelectorAll('[draggable]');
    dropzone = document.querySelectorAll('[data-valid]');

    new Result(sandbox, draggable.length, {
        progress: document.querySelector('[data-in-progress]'),
        count: document.querySelector('[data-count]'),
        done: document.querySelector('[data-done]')
    });

    [].forEach.call(draggable, function(element) {
        new Draggable(sandbox, element);
    });

    [].forEach.call(dropzone, function(element) {
        new Dropzone(sandbox, element);
    });

});