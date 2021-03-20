# v-checkbox



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description                                                                                               | Type      | Default     |
| --------------- | --------------- | --------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `checked`       | `checked`       | Set to true to draw the checkbox in a checked state.                                                      | `boolean` | `false`     |
| `disabled`      | `disabled`      | Set to true to disable the checkbox.                                                                      | `boolean` | `false`     |
| `indeterminate` | `indeterminate` | Set to true to draw the checkbox in an indeterminate state.                                               | `boolean` | `false`     |
| `invalid`       | `invalid`       | This will be true when the control is in an invalid state. Validity is determined by the `required` prop. | `boolean` | `false`     |
| `name`          | `name`          | The checkbox's name attribute.                                                                            | `string`  | `undefined` |
| `required`      | `required`      | Set to true to make the checkbox a required field.                                                        | `boolean` | `false`     |
| `value`         | `value`         | The checkbox's value attribute.                                                                           | `string`  | `undefined` |


## Events

| Event      | Description                                       | Type               |
| ---------- | ------------------------------------------------- | ------------------ |
| `v-blur`   | Emitted when the control loses focus.             | `CustomEvent<any>` |
| `v-change` | Emitted when the control's checked state changes. | `CustomEvent<any>` |
| `v-focus`  | Emitted when the control gains focus.             | `CustomEvent<any>` |


## Methods

### `removeFocus() => Promise<void>`

Removes focus from the checkbox.

#### Returns

Type: `Promise<void>`



### `reportValidity() => Promise<boolean>`

Checks for validity and shows the browser's validation message if the control is invalid.

#### Returns

Type: `Promise<boolean>`



### `setCustomValidity(message: string) => Promise<void>`

Sets a custom validation message. If `message` is not empty, the field will be considered invalid.

#### Returns

Type: `Promise<void>`



### `setFocus(options?: FocusOptions) => Promise<void>`

Sets focus on the checkbox.

#### Returns

Type: `Promise<void>`




## Slots

| Slot | Description           |
| ---- | --------------------- |
|      | The checkbox's label. |


## Shadow Parts

| Part                   | Description                                      |
| ---------------------- | ------------------------------------------------ |
| `"base"`               | The component's base wrapper.                    |
| `"checked-icon"`       | The container the wraps the checked icon.        |
| `"control"`            | The checkbox control.                            |
| `"indeterminate-icon"` | The container that wraps the indeterminate icon. |
| `"label"`              | The checkbox label.                              |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
