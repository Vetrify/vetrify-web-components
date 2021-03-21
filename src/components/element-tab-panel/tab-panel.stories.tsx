export default {
  title: 'Elements/Tabs/TabPanel',
};

export const Basic = () => `<v-tab-group>
<v-tab slot="nav" panel="general">General</v-tab>
<v-tab slot="nav" panel="custom">Custom</v-tab>
<v-tab slot="nav" panel="advanced">Advanced</v-tab>
<v-tab slot="nav" panel="disabled" disabled>Disabled</v-tab>

<v-tab-panel name="general">This is the general tab panel.</v-tab-panel>
<v-tab-panel name="custom">This is the custom tab panel.</v-tab-panel>
<v-tab-panel name="advanced">This is the advanced tab panel.</v-tab-panel>
<v-tab-panel name="disabled">This is a disabled tab panel.</v-tab-panel>
</v-tab-group>
`;
