# v-select



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description                                                                                                                                                                                    | Type                             | Default    |
| ---------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------- |
| `clearable`      | `clearable`        | Set to true to add a clear button when the select is populated.                                                                                                                                | `boolean`                        | `false`    |
| `disabled`       | `disabled`         | Set to true to disable the select control.                                                                                                                                                     | `boolean`                        | `false`    |
| `helpText`       | `help-text`        | The select's help text. Alternatively, you can use the help-text slot.                                                                                                                         | `string`                         | `''`       |
| `hoist`          | `hoist`            | Enable this option to prevent the panel from being clipped when the component is placed inside a container with `overflow: auto\|scroll`.                                                      | `boolean`                        | `false`    |
| `invalid`        | `invalid`          | This will be true when the control is in an invalid state. Validity is determined by the `required` prop.                                                                                      | `boolean`                        | `false`    |
| `label`          | `label`            | The select's label. Alternatively, you can use the label slot.                                                                                                                                 | `string`                         | `''`       |
| `maxTagsVisible` | `max-tags-visible` | The maximum number of tags to show when `multiple` is true. After the maximum, "+n" will be shown to indicate the number of additional items that are selected. Set to -1 to remove the limit. | `number`                         | `3`        |
| `multiple`       | `multiple`         | Set to true to enable multiselect.                                                                                                                                                             | `boolean`                        | `false`    |
| `name`           | `name`             | The select's name.                                                                                                                                                                             | `string`                         | `''`       |
| `pill`           | `pill`             | Set to true to draw a pill-style select with rounded edges.                                                                                                                                    | `boolean`                        | `false`    |
| `placeholder`    | `placeholder`      | The select's placeholder text.                                                                                                                                                                 | `string`                         | `''`       |
| `required`       | `required`         | The select's required attribute.                                                                                                                                                               | `boolean`                        | `false`    |
| `size`           | `size`             | The select's size.                                                                                                                                                                             | `"large" \| "medium" \| "small"` | `'medium'` |
| `value`          | `value`            | The value of the control. This will be a string or an array depending on `multiple`.                                                                                                           | `string \| string[]`             | `''`       |


## Events

| Event      | Description                               | Type               |
| ---------- | ----------------------------------------- | ------------------ |
| `v-blur`   | Emitted when the control loses focus.     | `CustomEvent<any>` |
| `v-change` | Emitted when the control's value changes. | `CustomEvent<any>` |
| `v-focus`  | Emitted when the control gains focus.     | `CustomEvent<any>` |


## Methods

### `reportValidity() => Promise<boolean>`

Checks for validity and shows the browser's validation message if the control is invalid.

#### Returns

Type: `Promise<boolean>`



### `setCustomValidity(message: string) => Promise<void>`

Sets a custom validation message. If `message` is not empty, the field will be considered invalid.

#### Returns

Type: `Promise<void>`




## Slots

| Slot          | Description                                                    |
| ------------- | -------------------------------------------------------------- |
|               | The select's options in the form of menu items.                |
| `"help-text"` | Help text that describes how to use the select.                |
| `"label"`     | The select's label. Alternatively, you can use the label prop. |


## Shadow Parts

| Part             | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| `"base"`         | The component's base wrapper.                                |
| `"clear-button"` | The input's clear button, exported from <v-input>.           |
| `"form-control"` | The form control that wraps the label, input, and help text. |
| `"help-text"`    | The select's help text.                                      |
| `"icon"`         | The select's icon.                                           |
| `"label"`        | The select's label.                                          |
| `"menu"`         | The select menu, a <v-menu> element.                         |
| `"tag"`          | The multiselect option, a <v-tag> element.                   |
| `"tags"`         | The container in which multiselect options are rendered.     |


## CSS Custom Properties

| Name           | Description                                                                           |
| -------------- | ------------------------------------------------------------------------------------- |
| `--focus-ring` | The focus ring style to use when the control receives focus, a `box-shadow` property. |


## Dependencies

### Depends on

- [v-tag](../tag)
- [v-dropdown](../dropdown)
- [v-icon-button](../icon-button)
- [v-icon](../icon)
- [v-menu](../menu)

### Graph
```mermaid
graph TD;
  v-select --> v-tag
  v-select --> v-dropdown
  v-select --> v-icon-button
  v-select --> v-icon
  v-select --> v-menu
  v-tag --> v-icon-button
  v-icon-button --> v-icon
  style v-select fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
