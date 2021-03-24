import markdown from './readme.md';
//import { eventHandles, action } from '../../../.storybook/helpers/custom-action';
import { eventHandles } from '../../../.storybook/helpers/custom-action';

const customEvents = ['clicked'];
const events = ['mouseover', 'click', ...eventHandles(customEvents)];

const args = {
  placeholder: 'Pick...',
  clearable: false,
  pill: false,
  disabled: false,
  multiple: false,
  size: '',
  label:'label',
  helpText:'Help Text'

};

// https://storybook.js.org/docs/react/essentials/controls#annotation
const argTypes = {
  placeholder:{
    description: 'Placeholder text for data entry',
    control:{
      type: "text"
    }
  },
  clearable:{
    description:"",
    control:{
      type: "boolean"
    }
  },
  pill:{
    description:"",
    control:{
      type: "boolean"
    }
  },
  disabled:{
    description:"",
    control:{
      type: "boolean"
    }
  },
  multiple:{
    description:"",
    control:{
      type: "boolean"
    }
  },
  size:{
    description:"",
    control:
    {
      type: "select",
      options:  ['', 'small', 'medium', 'large'],
    }
  },
  label:{
    description: "",
    control:{
      type: "text"
    }
  },
  helpText:{
    description: "",
    control:{
      type: "text"
    }
  }
};

// https://storybook.js.org/docs/react/writing-stories/parameters
export default {
  title: 'Elements/Input/Select',
  component: 'v-select',
  parameters: {
    notes: {markdown},
    actions: {
      handles: events,
    },
  },
};

const BasicTemplate =  (
  { placeholder,
    clearable,
    pill,
    disabled,
    multiple, 
    size,
    label,
    helpText }
) => `<v-select 
  ${placeholder.length > 0 && `placeholder="${placeholder}"`} 
  ${size.length > 0 && `size="${size}"`} 
  ${label.length > 0 && `label="${label}"`} 
  ${helpText.length > 0 && `help-text="${helpText}"`} 
  ${clearable && 'clearable'}  
  ${pill && 'pill'} 
  ${disabled && 'disabled'}  
  ${multiple && 'multiple'} 
  >
<v-menu-label>Group 1</v-menu-label>
<v-menu-item value="option-1">Option 1</v-menu-item>
<v-menu-item value="option-2">Option 2</v-menu-item>
<v-menu-item value="option-3">Option 3</v-menu-item>
<v-menu-divider></v-menu-divider>
<v-menu-label>Group 2</v-menu-label>
<v-menu-item value="option-4">Option 4</v-menu-item>
<v-menu-item value="option-5">Option 5</v-menu-item>
<v-menu-item value="option-6">Option 6</v-menu-item>
</v-select>
`;

export const Basic = BasicTemplate.bind({});

Basic.args = {...args};
Basic.argTypes = {...argTypes};

