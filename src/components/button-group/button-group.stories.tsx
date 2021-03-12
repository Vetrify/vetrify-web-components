export default {
  title: 'Components/Buttons/ButtonGroup',
};

export const Basic = () => `<v-button-group><v-button>1</v-button><v-button>2</v-button><v-button>3</v-button></v-button-group>`;

export const Sizes = () => `<v-button-group>
<v-button size="small">Left</v-button>
<v-button size="small">Center</v-button>
<v-button size="small">Right</v-button>
</v-button-group>

<br><br>

<v-button-group>
<v-button size="medium">Left</v-button>
<v-button size="medium">Center</v-button>
<v-button size="medium">Right</v-button>
</v-button-group>

<br><br>

<v-button-group>
<v-button size="large">Left</v-button>
<v-button size="large">Center</v-button>
<v-button size="large">Right</v-button>
</v-button-group>
`;

export const Themed = () => `<v-button-group>
<v-button type="primary">Left</v-button>
<v-button type="primary">Center</v-button>
<v-button type="primary">Right</v-button>
</v-button-group>

<br><br>

<v-button-group>
<v-button type="success">Left</v-button>
<v-button type="success">Center</v-button>
<v-button type="success">Right</v-button>
</v-button-group>

<br><br>

<v-button-group>
<v-button type="info">Left</v-button>
<v-button type="info">Center</v-button>
<v-button type="info">Right</v-button>
</v-button-group>

<br><br>

<v-button-group>
<v-button type="warning">Left</v-button>
<v-button type="warning">Center</v-button>
<v-button type="warning">Right</v-button>
</v-button-group>

<br><br>

<v-button-group>
<v-button type="danger">Left</v-button>
<v-button type="danger">Center</v-button>
<v-button type="danger">Right</v-button>
</v-button-group>
`;

export const Pills = () => `<v-button-group>
<v-button size="small" pill>Left</v-button>
<v-button size="small" pill>Center</v-button>
<v-button size="small" pill>Right</v-button>
</v-button-group>

<br><br>

<v-button-group>
<v-button size="medium" pill>Left</v-button>
<v-button size="medium" pill>Center</v-button>
<v-button size="medium" pill>Right</v-button>
</v-button-group>

<br><br>

<v-button-group>
<v-button size="large" pill>Left</v-button>
<v-button size="large" pill>Center</v-button>
<v-button size="large" pill>Right</v-button>
</v-button-group>
`;

export const Dropdown = () => `<v-button-group> 
<v-button>Button</v-button>
<v-button>Button</v-button>
<v-dropdown>
  <v-button slot="trigger" caret>Dropdown</v-button>
  <v-menu>
    <v-menu-item>Item 1</v-menu-item>
    <v-menu-item>Item 2</v-menu-item>
    <v-menu-item>Item 3</v-menu-item>
  </v-menu>
</v-dropdown>
</v-button-group>
`;

export const Split = () => `<v-button-group> 
<v-button type="primary">Save</v-button>
<v-dropdown placement="bottom-end">
  <v-button slot="trigger" type="primary"caret></v-button>
  <v-menu>
    <v-menu-item>Save</v-menu-item>
    <v-menu-item>Save as&hellip;</v-menu-item>
    <v-menu-item>Save all</v-menu-item>
  </v-menu>
</v-dropdown>
</v-button-group>
`;


export const Tooltips = () => `<v-button-group>
<v-tooltip content="I'm on the left">
  <v-button>Left</v-button>
</v-tooltip>

<v-tooltip content="I'm in the middle">
  <v-button>Center</v-button>
</v-tooltip>

<v-tooltip content="I'm on the right">
  <v-button>Right</v-button>
</v-tooltip>
</v-button-group>
`;

export const ToolbarExample = () => `<div class="button-group-toolbar">
<v-button-group label="History">
  <v-tooltip content="Undo">
    <v-button><v-icon name="arrow-counterclockwise"></v-icon></v-button>
  </v-tooltip>
  <v-tooltip content="Redo">
    <v-button><v-icon name="arrow-clockwise"></v-icon></v-button>
  </v-tooltip>
</v-button-group>

<v-button-group label="Formatting">
  <v-tooltip content="Bold">
    <v-button><v-icon name="type-bold"></v-icon></v-button>
  </v-tooltip>
  <v-tooltip content="Italic">
    <v-button><v-icon name="type-italic"></v-icon></v-button>
  </v-tooltip>
  <v-tooltip content="Underline">
    <v-button><v-icon name="type-underline"></v-icon></v-button>
  </v-tooltip>
</v-button-group>

<v-button-group label="Alignment">
  <v-tooltip content="Align Left">
    <v-button><v-icon name="justify-left"></v-icon></v-button>
  </v-tooltip>
  <v-tooltip content="Align Center">
    <v-button><v-icon name="justify"></v-icon></v-button>
  </v-tooltip>
  <v-tooltip content="Align Right">
    <v-button><v-icon name="justify-right"></v-icon></v-button>
  </v-tooltip>
</v-button-group>
</div>

<style>
.button-group-toolbar v-button-group:not(:last-of-type) {
  margin-right: var(--v-spacing-x-small);
}
</style>
`;

