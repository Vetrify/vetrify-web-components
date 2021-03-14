export default {
  title: 'Elements/Menu/MenuItem',
};

export const Basic = () => `<v-menu
style="max-width: 200px; border: solid 1px var(--v-panel-border-color); border-radius: var(--v-border-radius-medium);"
>
<v-menu-item>Option 1</v-menu-item>
<v-menu-item>Option 2</v-menu-item>
<v-menu-item>Option 3</v-menu-item>
<v-menu-divider></v-menu-divider>
<v-menu-item checked>Checked</v-menu-item>
<v-menu-item disabled>Disabled</v-menu-item>
<v-menu-divider></v-menu-divider>
<v-menu-item>
  Prefix Icon
  <v-icon slot="prefix" name="gift"></v-icon>
</v-menu-item>
<v-menu-item>
  Suffix Icon
  <v-icon slot="suffix" name="heart"></v-icon>
</v-menu-item>
</v-menu>
`;
