export default {
  title: 'Elements/Menu/MenuDivider',
};

export const Basic = () => `<v-menu
style="max-width: 200px; border: solid 1px var(--v-panel-border-color); border-radius: var(--v-border-radius-medium);"
>
<v-menu-item value="1">Option 1</v-menu-item>
<v-menu-item value="2">Option 2</v-menu-item>
<v-menu-divider></v-menu-divider>
<v-menu-item value="3">Option 3</v-menu-item>
<v-menu-item value="4">Option 4</v-menu-item>
<v-menu-divider></v-menu-divider>
<v-menu-item value="5">Option 5</v-menu-item>
<v-menu-item value="6">Option 6</v-menu-item>
</v-menu>
`;
