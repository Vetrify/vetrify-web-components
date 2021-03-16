# v-menu



<!-- Auto Generated Below -->


## Events

| Event      | Description                           | Type                                           |
| ---------- | ------------------------------------- | ---------------------------------------------- |
| `v-select` | Emitted when a menu item is selected. | `CustomEvent<{ item: HTMLVMenuItemElement; }>` |


## Methods

### `typeToSelect(key: string) => Promise<void>`

Initiates type-to-select logic, which automatically selects an option based on what the user is currently typing.
The key passed will be appended to the internal query and the selection will be updated. After a brief period, the
internal query is cleared automatically. This method is intended to be used with the keydown event. Useful for
enabling type-to-select when the menu doesn't have focus.

#### Returns

Type: `Promise<void>`




## Slots

| Slot | Description                                                               |
| ---- | ------------------------------------------------------------------------- |
|      | The menu's content, including menu items, menu dividers, and menu labels. |


## Shadow Parts

| Part     | Description                   |
| -------- | ----------------------------- |
| `"base"` | The component's base wrapper. |


## Dependencies

### Used by

 - [v-select](../select)

### Graph
```mermaid
graph TD;
  v-select --> v-menu
  style v-menu fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
