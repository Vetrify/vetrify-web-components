# v-icon-button



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                                                        | Type      | Default     |
| ---------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `disabled` | `disabled` | Set to true to disable the button.                                                                                                                                                 | `boolean` | `false`     |
| `label`    | `label`    | A description that gets read by screen readers and other assistive devices. For optimal accessibility, you should always include a label that describes what the icon button does. | `string`  | `undefined` |
| `library`  | `library`  | The name of a registered custom icon library.                                                                                                                                      | `string`  | `undefined` |
| `name`     | `name`     | The name of the icon to draw.                                                                                                                                                      | `string`  | `undefined` |
| `src`      | `src`      | An external URL of an SVG file.                                                                                                                                                    | `string`  | `undefined` |


## Shadow Parts

| Part     | Description                   |
| -------- | ----------------------------- |
| `"base"` | The component's base wrapper. |


## Dependencies

### Used by

 - [v-alert](../alert)
 - [v-dialog](../dialog)
 - [v-drawer](../drawer)
 - [v-select](../select)
 - [v-tab](../tab)
 - [v-tab-group](../tab-group)
 - [v-tag](../tag)

### Depends on

- [v-icon](../icon)

### Graph
```mermaid
graph TD;
  v-icon-button --> v-icon
  v-alert --> v-icon-button
  v-dialog --> v-icon-button
  v-drawer --> v-icon-button
  v-select --> v-icon-button
  v-tab --> v-icon-button
  v-tab-group --> v-icon-button
  v-tag --> v-icon-button
  style v-icon-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
