# v-tag



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                              | Type                                                                  | Default     |
| ----------- | ----------- | -------------------------------------------------------- | --------------------------------------------------------------------- | ----------- |
| `clearable` | `clearable` | Set to true to make the tag clearable.                   | `boolean`                                                             | `false`     |
| `pill`      | `pill`      | Set to true to draw a pill-style tag with rounded edges. | `boolean`                                                             | `false`     |
| `size`      | `size`      | The tag's size.                                          | `"large" \| "medium" \| "small"`                                      | `'medium'`  |
| `type`      | `type`      | The tag's type.                                          | `"danger" \| "info" \| "primary" \| "success" \| "text" \| "warning"` | `'primary'` |


## Events

| Event     | Description                                 | Type               |
| --------- | ------------------------------------------- | ------------------ |
| `v-clear` | Emitted when the clear button is activated. | `CustomEvent<any>` |


## Slots

| Slot | Description        |
| ---- | ------------------ |
|      | The tag's content. |


## Shadow Parts

| Part             | Description                   |
| ---------------- | ----------------------------- |
| `"base"`         | The component's base wrapper. |
| `"clear-button"` | The clear button.             |
| `"content"`      | The tag content.              |


## Dependencies

### Used by

 - [v-select](../select)

### Depends on

- [v-icon-button](../icon-button)

### Graph
```mermaid
graph TD;
  v-tag --> v-icon-button
  v-icon-button --> v-icon
  v-select --> v-tag
  style v-tag fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
