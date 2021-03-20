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
  title: 'Components/WordCloud',
  component: 'v-word-cloud',
  parameters: {
    notes: {markdown},
    actions: {
      handles: events,
    },
  },
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SLOTTED HEADER
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const BasicTemplate = (
  {
    words
  }) =>  `<v-word-cloud>${words}</v-word-cloud>`;

export const Basic = BasicTemplate.bind({});

Basic.args = {...args};
Basic.argTypes = {...argTypes};


