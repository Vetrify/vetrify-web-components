export default {
  title: 'Elements/Dropdown',
};

export const Basic = () => `<v-dropdown>
<v-button slot="trigger" caret>Dropdown</v-button>
<v-menu>
  <v-menu-item>Dropdown Item 1</v-menu-item>
  <v-menu-item>Dropdown Item 2</v-menu-item>
  <v-menu-item>Dropdown Item 3</v-menu-item>
  <v-menu-divider></v-menu-divider>
  <v-menu-item checked>Checked</v-menu-item>
  <v-menu-item disabled>Disabled</v-menu-item>
  <v-menu-divider></v-menu-divider>
  <v-menu-item>
    Prefix
    <v-icon slot="prefix" name="gift"></v-icon>
  </v-menu-item>
  <v-menu-item>
    Suffix Icon
    <v-icon slot="suffix" name="heart"></v-icon>
  </v-menu-item>
</v-menu>
</v-dropdown>`;
