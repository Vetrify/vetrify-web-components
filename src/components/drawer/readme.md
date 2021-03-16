# v-drawer

Drawer

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                                                                                                                                                                     | Type                                     | Default   |
| ----------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | --------- |
| `contained` | `contained` | By default, the drawer slides out of its containing block (usually the viewport). To make the drawer slide out of its parent element, set this prop and add `position: relative` to the parent. | `boolean`                                | `false`   |
| `label`     | `label`     | The drawer's label as displayed in the header. You should always include a relevant label even when using `no-header`, as it is required for proper accessibility.                              | `string`                                 | `''`      |
| `noHeader`  | `no-header` | Removes the header. This will also remove the default close button, so please ensure you provide an easy, accessible way for users to dismiss the drawer.                                       | `boolean`                                | `false`   |
| `open`      | `open`      | Indicates whether or not the drawer is open. You can use this in lieu of the show/hide methods.                                                                                                 | `boolean`                                | `false`   |
| `placement` | `placement` | The direction from which the drawer will open.                                                                                                                                                  | `"bottom" \| "left" \| "right" \| "top"` | `'right'` |


## Events

| Event               | Description                                                                                                                                                                                            | Type               |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| `v-after-hide`      | Emitted after the drawer closes and all transitions are complete.                                                                                                                                      | `CustomEvent<any>` |
| `v-after-show`      | Emitted after the drawer opens and all transitions are complete.                                                                                                                                       | `CustomEvent<any>` |
| `v-hide`            | Emitted when the drawer closes. Calling `event.preventDefault()` will prevent it from being closed.                                                                                                    | `CustomEvent<any>` |
| `v-initial-focus`   | Emitted when the drawer opens and the panel gains focus. Calling `event.preventDefault()` will prevent focus and allow you to set it on a different element in the drawer, such as an input or button. | `CustomEvent<any>` |
| `v-overlay-dismiss` | Emitted when the overlay is clicked. Calling `event.preventDefault()` will prevent the drawer from closing.                                                                                            | `CustomEvent<any>` |
| `v-show`            | Emitted when the drawer opens. Calling `event.preventDefault()` will prevent it from being opened.                                                                                                     | `CustomEvent<any>` |


## Methods

### `hide() => Promise<void>`

Hides the drawer

#### Returns

Type: `Promise<void>`



### `show() => Promise<void>`

Shows the drawer

#### Returns

Type: `Promise<void>`




## Slots

| Slot       | Description                                                                    |
| ---------- | ------------------------------------------------------------------------------ |
|            | The drawer's content.                                                          |
| `"footer"` | The drawer's footer, usually one or more buttons representing various options. |
| `"label"`  | The drawer's label. Alternatively, you can use the label prop.                 |


## Shadow Parts

| Part             | Description                                                      |
| ---------------- | ---------------------------------------------------------------- |
| `"base"`         | The component's base wrapper.                                    |
| `"body"`         | The drawer body.                                                 |
| `"close-button"` | The close button.                                                |
| `"footer"`       | The drawer footer.                                               |
| `"header"`       | The drawer header.                                               |
| `"overlay"`      | The overlay.                                                     |
| `"panel"`        | The drawer panel (where the drawer and its content is rendered). |
| `"title"`        | The drawer title.                                                |


## CSS Custom Properties

| Name     | Description                                                                                                                                                                           |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--size` | The preferred size of the drawer. This will be applied to the drawer's width or height depending on its `placement`. Note that the drawer will shrink to accommodate smaller screens. |


## Dependencies

### Depends on

- [v-icon-button](../icon-button)

### Graph
```mermaid
graph TD;
  v-drawer --> v-icon-button
  v-icon-button --> v-icon
  style v-drawer fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
