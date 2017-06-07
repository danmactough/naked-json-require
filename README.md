# naked-json-require

[![Greenkeeper badge](https://badges.greenkeeper.io/danmactough/naked-json-require.svg)](https://greenkeeper.io/)
Single function to "require" json file that lacks an extension

## Usage

```js
var json = require("naked-json-require");
var config = json("./path/to/some/json");
```

## Why?

Generally, you can simply `require` any json file. But in node, if you try to do
that with a json file that doesn't have a `.json` file extension, it will fail
with the error:

```
SyntaxError: Unexpected token :
```

This is because the node module loader assumes that a file without an extension
is a `.js` file, and tries to use the `.js` module loader. See:
https://github.com/nodejs/node/blob/master/lib/module.js#L354
