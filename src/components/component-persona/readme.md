# v-persona



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute        | Description | Type                 | Default     |
| ---------------- | ---------------- | ----------- | -------------------- | ----------- |
| `gender`         | `gender`         |             | `"female" \| "male"` | `undefined` |
| `name`           | `name`           |             | `string`             | `undefined` |
| `title`          | `title`          |             | `string`             | `undefined` |
| `transformation` | `transformation` |             | `string`             | `undefined` |


## Dependencies

### Depends on

- [v-avatar](../avatar)
- [v-persona-brief](../persona-brief)
- [v-info-brief](../info-brief)

### Graph
```mermaid
graph TD;
  v-persona --> v-avatar
  v-persona --> v-persona-brief
  v-persona --> v-info-brief
  v-avatar --> v-icon
  style v-persona fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
