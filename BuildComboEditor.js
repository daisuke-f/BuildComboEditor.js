'use strict';

function BuildComboEditor(data, comboOptions) {
    return function(args) {
        // TextEditor constructor
        Slick.Editors.Text.call(this, args);

        // Convert TextEditor to combobox
        this.input = args.container.getElementsByClassName('editor-text')[0];
        this.combo = new PlainCombobox(this.input, data, comboOptions);

        // override destroy method to dispose combobox assets.
        this.destroy = function () {
            this.combo.dispose();
            this.input.parentNode.removeChild(this.input);
        };
    };
}