'use strict';
const copyjs = function (str, options = { reSelect: true, html: false, copyFromSelector: false }) {
	const sel = window.getSelection();
	const selection = { start: { index: sel.anchorOffset, node: sel.anchorNode }, end: { index: sel.focusOffset, node: sel.focusNode } };
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
			selectorRange.selectNodeContents(document.querySelector(str));
			selectorSel.addRange(selectorRange);
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
		const reSelection = window.getSelection();
		reSelection.removeAllRanges();
		var range = document.createRange();
		range.setStart(selection.start.node, selection.start.index);
		range.setEnd(selection.end.node, selection.end.index);
		reSelection.addRange(range);
	}
	return true;
}
