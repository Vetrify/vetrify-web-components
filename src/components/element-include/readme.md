# v-include

Includes give you the power to embed external HTML files into the page.

Included files are asynchronously requested using window.fetch(). Requests are cached, so the same file can be included multiple times, but only one request will be made.

The included content will be inserted into the <sl-include> element's default slot so it can be easily accessed and styled through the light DOM.

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                                                                                                         | Type                                   | Default     |
| -------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ----------- |
| `allowScripts` | `allow-scripts` | Allows included scripts to be executed. You must ensure the content you're including is trusted, otherwise this option can lead to XSS vulnerabilities in your app! | `boolean`                              | `false`     |
| `mode`         | `mode`          | The fetch mode to use.                                                                                                                                              | `"cors" \| "no-cors" \| "same-origin"` | `'cors'`    |
| `src`          | `src`           | The location of the HTML file to include.                                                                                                                           | `string`                               | `undefined` |


## Events

| Event     | Description                                                   | Type                                |
| --------- | ------------------------------------------------------------- | ----------------------------------- |
| `v-error` | Emitted when the included file fails to load due to an error. | `CustomEvent<{ status?: number; }>` |
| `v-load`  | Emitted when the included file is loaded.                     | `CustomEvent<any>`                  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
