import markdown from './readme.md';
import { eventHandles } from '../../../.storybook/helpers/custom-action';

const customEvents = ['clicked'];
const events = ['mouseover', 'click', ...eventHandles(customEvents)];

const args = {
  name: 'info-circle'
};

// https://storybook.js.org/docs/react/essentials/controls#annotation
const argTypes = {
  label: {
    description: 'An alternative description to use for accessibility. If omitted, the name or src will be used to generate it.',
    control:{
      type: "text"
    }
  },
  name: {
    description: 'The name of the icon to draw.',
    control:{
      type: "text"
    }
  },
  src: {
    description: 'An external URL of an SVG file.',
    control:{
      type: "text"
    }
  }
};

// https://storybook.js.org/docs/react/writing-stories/parameters
export default {
  title: 'Vetrify/Icons/Icon',
  component: 'v-icon',
  parameters: {
    notes: {markdown},
    actions: {
      handles: events,
    },
  },
};

const Template = (
  {
    name,
    label,
    src
  }) =>
     `${name}:<br /> <v-icon name="${name}" ${label && (`label="${label}" `)}${src && (`src="${src}"`)} style="height:4rem; width:4rem"></v-icon>`;

export const Default = Template.bind({});
Default.args = {...args};
Default.argTypes = {...argTypes};