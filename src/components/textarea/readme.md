# v-textarea



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute        | Description                                                                                                                                                                                | Type                                                                                  | Default      |
| ---------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- | ------------ |
| `autocapitalize` | `autocapitalize` | The textarea's autocaptialize attribute.                                                                                                                                                   | `string`                                                                              | `undefined`  |
| `autocomplete`   | `autocomplete`   | The textarea's autocomplete attribute.                                                                                                                                                     | `string`                                                                              | `undefined`  |
| `autocorrect`    | `autocorrect`    | The textarea's autocorrect attribute.                                                                                                                                                      | `string`                                                                              | `undefined`  |
| `autofocus`      | `autofocus`      | The textarea's autofocus attribute.                                                                                                                                                        | `boolean`                                                                             | `undefined`  |
| `disabled`       | `disabled`       | Set to true to disable the textarea.                                                                                                                                                       | `boolean`                                                                             | `false`      |
| `helpText`       | `help-text`      | The textarea's help text. Alternatively, you can use the help-text slot.                                                                                                                   | `string`                                                                              | `''`         |
| `inputmode`      | `inputmode`      | The textarea's inputmode attribute.                                                                                                                                                        | `"decimal" \| "email" \| "none" \| "numeric" \| "search" \| "tel" \| "text" \| "url"` | `undefined`  |
| `invalid`        | `invalid`        | This will be true when the control is in an invalid state. Validity is determined by props such as `required`, `minlength`, and `maxlength` using the browser's constraint validation API. | `boolean`                                                                             | `false`      |
| `label`          | `label`          | The textarea's label. Alternatively, you can use the label slot.                                                                                                                           | `string`                                                                              | `''`         |
| `maxlength`      | `maxlength`      | The maximum length of input that will be considered valid.                                                                                                                                 | `number`                                                                              | `undefined`  |
| `minlength`      | `minlength`      | The minimum length of input that will be considered valid.                                                                                                                                 | `number`                                                                              | `undefined`  |
| `name`           | `name`           | The textarea's name attribute.                                                                                                                                                             | `string`                                                                              | `''`         |
| `placeholder`    | `placeholder`    | The textarea's placeholder text.                                                                                                                                                           | `string`                                                                              | `undefined`  |
| `readonly`       | `readonly`       | Set to true for a readonly textarea.                                                                                                                                                       | `boolean`                                                                             | `false`      |
| `required`       | `required`       | The textarea's required attribute.                                                                                                                                                         | `boolean`                                                                             | `undefined`  |
| `resize`         | `resize`         | Controls how the textarea can be resized.                                                                                                                                                  | `"auto" \| "none" \| "vertical"`                                                      | `'vertical'` |
| `rows`           | `rows`           | The number of rows to display by default.                                                                                                                                                  | `number`                                                                              | `4`          |
| `size`           | `size`           | The textarea's size.                                                                                                                                                                       | `"large" \| "medium" \| "small"`                                                      | `'medium'`   |
| `spellcheck`     | `spellcheck`     | The textarea's spellcheck attribute.                                                                                                                                                       | `boolean`                                                                             | `undefined`  |
| `value`          | `value`          | The textarea's value attribute.                                                                                                                                                            | `string`                                                                              | `''`         |


## Events

| Event      | Description                               | Type               |
| ---------- | ----------------------------------------- | ------------------ |
| `v-blur`   | Emitted when the control loses focus.     | `CustomEvent<any>` |
| `v-change` | Emitted when the control's value changes. | `CustomEvent<any>` |
| `v-focus`  | Emitted when the control gains focus.     | `CustomEvent<any>` |
| `v-input`  | Emitted when the control receives input.  | `CustomEvent<any>` |


## Methods

### `removeFocus() => Promise<void>`

Removes focus fromt the textarea.

#### Returns

Type: `Promise<void>`



### `reportValidity() => Promise<boolean>`

Checks for validity and shows the browser's validation message if the control is invalid.

#### Returns

Type: `Promise<boolean>`



### `select() => Promise<void>`

Selects all the text in the input.

#### Returns

Type: `Promise<void>`



### `setCustomValidity(message: string) => Promise<void>`

Sets a custom validation message. If `message` is not empty, the field will be considered invalid.

#### Returns

Type: `Promise<void>`



### `setFocus(options?: FocusOptions) => Promise<void>`

Sets focus on the textarea.

#### Returns

Type: `Promise<void>`



### `setRangeText(replacement: string, start: number, end: number, selectMode?: 'select' | 'start' | 'end' | 'preserve') => Promise<void>`

Replaces a range of text with a new string.

#### Returns

Type: `Promise<void>`



### `setSelectionRange(selectionStart: number, selectionEnd: number, selectionDirection?: 'forward' | 'backward' | 'none') => Promise<void>`

Sets the start and end positions of the text selection (0-based).

#### Returns

Type: `Promise<void>`




## Slots

| Slot          | Description                                                      |
| ------------- | ---------------------------------------------------------------- |
| `"help-text"` | Help text that describes how to use the input.                   |
| `"label"`     | The textarea's label. Alternatively, you can use the label prop. |


## Shadow Parts

| Part             | Description                                                     |
| ---------------- | --------------------------------------------------------------- |
| `"base"`         | The component's base wrapper.                                   |
| `"form-control"` | The form control that wraps the label, textarea, and help text. |
| `"help-text"`    | The textarea help text.                                         |
| `"label"`        | The textarea label.                                             |
| `"textarea"`     | The textarea control.                                           |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
