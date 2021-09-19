'use strict';
const copyjs = function (str, options = { reSelect: true, html: false, copyFromSelector: false }) {
	class Reselect {
    		init() {
        		this.selectionOptions = {
            			start: {
                			index: window.getSelection().anchorOffset,
                			node: window.getSelection().anchorNode
            			},
            			end: {
                			index: window.getSelection().focusOffset,
                			node: window.getSelection().focusNode
            			}
        		};
			return true;
    		}
    		reselect() {
			if(!this.selectionOptions.start.node)
				return false;
        		const newSelection = window.getSelection();
        		newSelection.removeAllRanges();
        		const range = document.createRange();
        		range.setStart(this.selectionOptions.start.node, this.selectionOptions.start.index);
        		range.setEnd(this.selectionOptions.end.node, this.selectionOptions.end.index);
        		newSelection.addRange(range);
			return true;
    		}
	}
	const reselect = new Reselect();
	reselect.init();
	if (options.copyFromSelector) {
		if (!options.html) {
			const copyjs_textarea = document.createElement("textarea");
			document.body.append(copyjs_textarea);
			const target = document.querySelector(str);
			copyjs_textarea.value = target.tagName === "TEXTAREA" || target.tagName === "INPUT"
				? target.value
				: target.innerText;
			copyjs_textarea.select();
			document.execCommand("copy");
			copyjs_textarea.remove();
		} else {
			const selectorSel = window.getSelection();
			selectorSel.removeAllRanges();
			const selectorRange = document.createRange();
			const tag = document.querySelector(str).tagName;
			if(tag === "INPUT" || tag === "TEXTAREA") {
				document.querySelector(str).select();
			} else {
				selectorRange.selectNodeContents(document.querySelector(str));
				selectorSel.addRange(selectorRange);
			}
			document.execCommand("copy");
		}
	}
	else if (options.html) {
		const copyjs_div = document.createElement("div");
		document.body.append(copyjs_div);
		copyjs_div.innerHTML = str;
		const htmlSel = window.getSelection();
		htmlSel.removeAllRanges();
		const htmlRange = document.createRange();
		htmlRange.selectNodeContents(copyjs_div);
		htmlSel.addRange(htmlRange);
		document.execCommand("copy");
		copyjs_div.remove();
	}
	else {
		const copyjs_textarea = document.createElement("textarea");
		document.body.append(copyjs_textarea);
		copyjs_textarea.value = str;
		copyjs_textarea.select();
		document.execCommand("copy");
		copyjs_textarea.remove();
	}
	if (options.reSelect) {
		reselect.reselect();
	}
	return true;
}
