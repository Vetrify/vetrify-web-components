import markdown from './readme.md';
//import { eventHandles, action } from '../../../.storybook/helpers/custom-action';
import { eventHandles } from '../../../.storybook/helpers/custom-action';

const customEvents = ['clicked'];
const events = ['mouseover', 'click', ...eventHandles(customEvents)];

const args = {
  words: ['subheading']
};

// https://storybook.js.org/docs/react/essentials/controls#annotation
const argTypes = {
  words:{
    description: 'words',
    control:{
      type: "text"
    }
  },
};

// https://storybook.js.org/docs/react/writing-stories/parameters
export default {
  title: 'Components/Charts/Pie',
  component: 'v-pie-chart',
  parameters: {
    notes: {markdown},
    actions: {
      handles: events,
    },
  },
};

const BasicTemplate = (
  {
    
  }) =>  `<v-card heading="Pie Chart" show-footer="false"><v-pie-chart></v-pie-chart></vcard>`;

export const Basic = BasicTemplate.bind({});

Basic.args = {...args};
Basic.argTypes = {...argTypes};


