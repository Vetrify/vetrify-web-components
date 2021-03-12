export default {
  title: 'Elements/Menu/MenuLabel',
};

export const Basic = () => `<v-menu
style="max-width: 200px; border: solid 1px var(--v-panel-border-color); border-radius: var(--v-border-radius-medium);"
>
<v-menu-label>Fruits</v-menu-label>
<v-menu-item value="apple">Apple</v-menu-item>
<v-menu-item value="banana">Banana</v-menu-item>
<v-menu-item value="orange">Orange</v-menu-item>
<v-menu-divider></v-menu-divider>
<v-menu-label>Vegetables</v-menu-label>
<v-menu-item value="broccoli">Broccoli</v-menu-item>
<v-menu-item value="carrot">Carrot</v-menu-item>
<v-menu-item value="zucchini">Zucchini</v-menu-item>
</v-menu>
`;
