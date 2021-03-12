export default {
  title: 'Elements/Menu/Menu',
};

export const Basic = () => `<v-menu style="max-width: 200px; border: solid 1px var(--v-panel-border-color); border-radius: var(--v-border-radius-medium);">
<v-menu-item value="undo">Undo</v-menu-item>
<v-menu-item value="redo">Redo</v-menu-item>
<v-menu-divider></v-menu-divider>
<v-menu-item value="cut">Cut</v-menu-item>
<v-menu-item value="copy">Copy</v-menu-item>
<v-menu-item value="paste">Paste</v-menu-item>
<v-menu-item value="delete">Delete</v-menu-item>
</v-menu>
`;
