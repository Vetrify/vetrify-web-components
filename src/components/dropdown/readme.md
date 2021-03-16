# v-dropdown



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute         | Description                                                                                                                                | Type                                                                                                                                                                 | Default          |
| ------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| `closeOnSelect`     | `close-on-select` | Determines whether the dropdown should hide when a menu item is selected.                                                                  | `boolean`                                                                                                                                                            | `true`           |
| `containingElement` | --                | The dropdown will close when the user interacts outside of this element (e.g. clicking).                                                   | `HTMLElement`                                                                                                                                                        | `undefined`      |
| `distance`          | `distance`        | The distance in pixels from which to offset the panel away from its trigger.                                                               | `number`                                                                                                                                                             | `2`              |
| `hoist`             | `hoist`           | Enable this option to prevent the panel from being clipped when the component is placed inside a container with `overflow: auto\|scroll`.  | `boolean`                                                                                                                                                            | `false`          |
| `open`              | `open`            | Indicates whether or not the dropdown is open. You can use this in lieu of the show/hide methods.                                          | `boolean`                                                                                                                                                            | `false`          |
| `placement`         | `placement`       | The preferred placement of the dropdown panel. Note that the actual placement may vary as needed to keep the panel inside of the viewport. | `"bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"` | `'bottom-start'` |
| `skidding`          | `skidding`        | The distance in pixels from which to offset the panel along its trigger.                                                                   | `number`                                                                                                                                                             | `0`              |


## Events

| Event          | Description                                                                                           | Type               |
| -------------- | ----------------------------------------------------------------------------------------------------- | ------------------ |
| `v-after-hide` | Emitted after the dropdown closes and all transitions are complete.                                   | `CustomEvent<any>` |
| `v-after-show` | Emitted after the dropdown opens and all transitions are complete.                                    | `CustomEvent<any>` |
| `v-hide`       | Emitted when the dropdown closes. Calling `event.preventDefault()` will prevent it from being closed. | `CustomEvent<any>` |
| `v-show`       | Emitted when the dropdown opens. Calling `event.preventDefault()` will prevent it from being opened.  | `CustomEvent<any>` |


## Methods

### `hide() => Promise<void>`

Hides the dropdown panel

#### Returns

Type: `Promise<void>`



### `reposition() => Promise<void>`

Forces the dropdown's menu to reposition.

#### Returns

Type: `Promise<void>`



### `show() => Promise<void>`

Shows the dropdown panel

#### Returns

Type: `Promise<void>`




## Slots

| Slot        | Description                                             |
| ----------- | ------------------------------------------------------- |
|             | The dropdown's content.                                 |
| `"trigger"` | The dropdown's trigger, usually a `<v-button>` element. |


## Shadow Parts

| Part        | Description                                          |
| ----------- | ---------------------------------------------------- |
| `"base"`    | The component's base wrapper.                        |
| `"panel"`   | The panel that gets shown when the dropdown is open. |
| `"trigger"` | The container that wraps the trigger.                |


## Dependencies

### Used by

 - [v-color-picker](../color-picker)
 - [v-select](../select)

### Graph
```mermaid
graph TD;
  v-color-picker --> v-dropdown
  v-select --> v-dropdown
  style v-dropdown fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
