import { eventHandles } from '../../../.storybook/helpers/custom-action';
import markdown from './readme.md';

const customEvents = ['clicked'];
const events = ['mouseover', 'click', ...eventHandles(customEvents)];

const args = {
  editorType: 'classic',
};

// https://storybook.js.org/docs/react/essentials/controls#annotation
const argTypes = {
  editorType: {
    control: {
      type: 'select',
      options: ['classic', 'inline'],
    },
  },
};

// https://storybook.js.org/docs/react/writing-stories/parameters
export default {
  title: 'Components/Input/Editor',
  component: 'v-editor',
  parameters: {
    notes: {markdown},
    actions: {
      handles: events,
    },
  },
};

const EditorTemplate = (editorType) => `${editorType} Editor<br/><br/><v-editor editor="classic">this is the content. </v-editor>`;

export const Basic = EditorTemplate.bind({});

Basic.args = {...args};
Basic.argTypes = {...argTypes};