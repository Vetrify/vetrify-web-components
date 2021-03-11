import { html } from 'lit-html';

import markdown from './readme.md';
//import { eventHandles, action } from '../../../.storybook/helpers/custom-action';
import { eventHandles } from '../../../.storybook/helpers/custom-action';

var customEvents = ['clicked'];
var events = ['mouseover', 'click', ...eventHandles(customEvents)];

var args = {
  placement: 'right',
  label: 'label',
  noHeader: false
};

// https://storybook.js.org/docs/react/essentials/controls#annotation
var argTypes = {
  placement: {
    control: {
      type: 'select',
      options: ['left', 'top', 'bottom', 'right'],
    },
  },
  label:{
    control:{
      type: "text"
    }
  },
  noHeader:{
    control:{
      type: "boolean"
    }
  }
};

// https://storybook.js.org/docs/react/writing-stories/parameters
export default {
  title: 'Components/Drawer',
  component: 'v-drawer',
  parameters: {
    notes: {markdown},
    actions: {
      handles: events,
    },
  },
};

var Template = (
  {
    placement,
    label,
    noHeader
  }) =>
     html`<v-drawer label="Drawer" label="${label}" placement="${placement}" no-header="${noHeader}" class="drawer-overview">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     <v-button slot="footer" type="primary">Close</v-button>
   </v-drawer>
   
   <v-button>Open Drawer</v-button>
   
   <script>
     (() => {
       var drawer = document.querySelector('.drawer-overview');
       var openButton = drawer.nextElementSibling;
       var closeButton = drawer.querySelector('v-button[type="primary"]');
   
       openButton.addEventListener('click', () => drawer.show());
       closeButton.addEventListener('click', () => drawer.hide());
     })();
   </script>
`;

export const Default = Template.bind({});

Default.args = {...args};
Default.argTypes = {...argTypes};


var ContainedTemplate = (
  {
    placement,
    label,
    noHeader
  }) =>
     html`
     <div style="position: relative; border: solid 2px #000; height: 300px; padding: 1rem; margin-bottom: 1rem;">
     
     <v-drawer label="Drawer" label="${label}" placement="${placement}" contained no-header="${noHeader}" class="drawer-overview">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     <v-button slot="footer" type="primary">Close</v-button>
   </v-drawer>
   
   <v-button>Open Drawer</v-button>
   
   <script>
     (() => {
       var drawer = document.querySelector('.drawer-overview');
       var openButton = drawer.nextElementSibling;
       var closeButton = drawer.querySelector('v-button[type="primary"]');
   
       openButton.addEventListener('click', () => drawer.show());
       closeButton.addEventListener('click', () => drawer.hide());
     })();
   </script>
   </div>
`;

export const Contained = ContainedTemplate.bind({});

Contained.args = {...args};
Contained.argTypes = {...argTypes};


