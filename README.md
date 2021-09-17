# CopyJS

A lightweight library to copy text to the clipboard.



## Installation

```sh
npm i copy_js
```

Or in the browser:

**Regular**

```html
<script src="https://cdn.jsdelivr.net/gh/codingjlu/copyjs/copy.min.js"></script>
```

**Module**

```html
<script src="https://cdn.jsdelivr.net/gh/codingjlu/copyjs/copy.min.mjs"></script>
```

*Remove the `.min` in the URL for development.*



## Usage

Simple.

```js
copyjs("Text to copy", ?options);
```



## Options

All boolean values inside the `options` object.

`reSelect`: After copy, select (highlight) text that user was originally highlighting before copy. Default is `true`.

`html`: Copy HTML to clipboard instead of plain text; e.g. `copyjs('<h1 style="color:red;background-color:black;">Hello, world!</h1>', { html: true })`. Default is `false`.

**Result**:

![h1-example](h1-example.png)



`copyFromSelector`: Copy text from an HTML element with a selector. E.g.:

```html
<p id="p" style="color:red">
    Hello, world!
</p>
```

```js
copyjs("#p", { html: true, copyFromSelector: true });
```

**Result**:

![p-example](p-example.png)



## License

MIT License

Copyright (c) 2020 codingjlu

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
