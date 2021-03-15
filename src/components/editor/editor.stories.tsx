import { eventHandles } from '../../../.storybook/helpers/custom-action';

const customEvents = ['clicked'];
const events = ['mouseover', 'click', ...eventHandles(customEvents)];


const args = {
  editor: 'inline',
};

// https://storybook.js.org/docs/react/essentials/controls#annotation
const argTypes = {
  editor:{
    description: 'editor type',
    control: {

   
    type: 'text'
  }
    // control: {
    // type: 'select',
    //   options: ['classic', 'inline'],
    // }
  },
};

// https://storybook.js.org/docs/react/writing-stories/parameters
export default {
  title: 'Components/Editor',
  component: 'v-editor',
  parameters: {
    //notes: {markdown},
    actions: {
      handles: events,
    },
  },
};

const EditorTemplate = () => `Inline Editor<br/><v-editor editor="inline" content="asfd">this is the content</v-editor>`;

export const Basic = EditorTemplate.bind({});

Basic.args = {...args};
Basic.argTypes = {...argTypes};