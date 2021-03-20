export default {
  title: 'Elements/Tabs/TabGroup',
};
const argTypes = {
  placement:{
    description: 'Status',
    control:{
      type: 'select',
        options: ['top' , 'bottom' , 'left' , 'right' ]
    }
  },

}

const args = {
  placement: 'top',
}

const BasicTemplate = ({placement}) => `<v-tab-group placement="${placement}" >
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
export const Basic = BasicTemplate.bind({});
Basic.args = args;
Basic.argTypes = argTypes;

// export const ClosableTabls = () => `<v-tab-group class="tabs-closable">
// <v-tab slot="nav" panel="general">General</v-tab>
// <v-tab slot="nav" panel="closable-1" closable>Closable 1</v-tab>
// <v-tab slot="nav" panel="closable-2" closable>Closable 2</v-tab>
// <v-tab slot="nav" panel="closable-3" closable>Closable 3</v-tab>

// <v-tab-panel name="general">This is the general tab panel.</v-tab-panel>
// <v-tab-panel name="closable-1">This is the first closable tab panel.</v-tab-panel>
// <v-tab-panel name="closable-2">This is the second closable tab panel.</v-tab-panel>
// <v-tab-panel name="closable-3">This is the third closable tab panel.</v-tab-panel>
// </v-tab-group>

// <script>
// const tabGroup = document.querySelector('.tabs-closable');

// tabGroup.addEventListener('v-close', async event => {
//   const tab = event.target;
//   const panel = tabGroup.querySelector(`v-tab-panel[name="${tab.panel}"]`);

//   // Show the previous tab if the tab is currently active
//   if (tab.active) {
//     tabGroup.show(tab.previousElementSibling.panel);
//   }

//   // Remove the tab + panel
//   tab.remove();
//   panel.remove();
// });
// </script>
// `;

const ScrollingTabsTemplate = ({placement}) => `<v-tab-group placement="${placement}">
<v-tab slot="nav" panel="tab-1">Tab 1</v-tab>
<v-tab slot="nav" panel="tab-2">Tab 2</v-tab>
<v-tab slot="nav" panel="tab-3">Tab 3</v-tab>
<v-tab slot="nav" panel="tab-4">Tab 4</v-tab>
<v-tab slot="nav" panel="tab-5">Tab 5</v-tab>
<v-tab slot="nav" panel="tab-6">Tab 6</v-tab>
<v-tab slot="nav" panel="tab-7">Tab 7</v-tab>
<v-tab slot="nav" panel="tab-8">Tab 8</v-tab>
<v-tab slot="nav" panel="tab-9">Tab 9</v-tab>
<v-tab slot="nav" panel="tab-10">Tab 10</v-tab>
<v-tab slot="nav" panel="tab-11">Tab 11</v-tab>
<v-tab slot="nav" panel="tab-12">Tab 12</v-tab>
<v-tab slot="nav" panel="tab-13">Tab 13</v-tab>
<v-tab slot="nav" panel="tab-14">Tab 14</v-tab>
<v-tab slot="nav" panel="tab-15">Tab 15</v-tab>
<v-tab slot="nav" panel="tab-16">Tab 16</v-tab>
<v-tab slot="nav" panel="tab-17">Tab 17</v-tab>
<v-tab slot="nav" panel="tab-18">Tab 18</v-tab>
<v-tab slot="nav" panel="tab-19">Tab 19</v-tab>
<v-tab slot="nav" panel="tab-20">Tab 20</v-tab>

<v-tab-panel name="tab-1">Tab panel 1</v-tab-panel>
<v-tab-panel name="tab-2">Tab panel 2</v-tab-panel>
<v-tab-panel name="tab-3">Tab panel 3</v-tab-panel>
<v-tab-panel name="tab-4">Tab panel 4</v-tab-panel>
<v-tab-panel name="tab-5">Tab panel 5</v-tab-panel>
<v-tab-panel name="tab-6">Tab panel 6</v-tab-panel>
<v-tab-panel name="tab-7">Tab panel 7</v-tab-panel>
<v-tab-panel name="tab-8">Tab panel 8</v-tab-panel>
<v-tab-panel name="tab-9">Tab panel 9</v-tab-panel>
<v-tab-panel name="tab-10">Tab panel 10</v-tab-panel>
<v-tab-panel name="tab-11">Tab panel 11</v-tab-panel>
<v-tab-panel name="tab-12">Tab panel 12</v-tab-panel>
<v-tab-panel name="tab-13">Tab panel 13</v-tab-panel>
<v-tab-panel name="tab-14">Tab panel 14</v-tab-panel>
<v-tab-panel name="tab-15">Tab panel 15</v-tab-panel>
<v-tab-panel name="tab-16">Tab panel 16</v-tab-panel>
<v-tab-panel name="tab-17">Tab panel 17</v-tab-panel>
<v-tab-panel name="tab-18">Tab panel 18</v-tab-panel>
<v-tab-panel name="tab-19">Tab panel 19</v-tab-panel>
<v-tab-panel name="tab-20">Tab panel 20</v-tab-panel>
</v-tab-group>
`;


export const ScrollingTabs = ScrollingTabsTemplate.bind({});
ScrollingTabs.args = {placement:"top"};
ScrollingTabs.argTypes = argTypes;
