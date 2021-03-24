import markdown from './readme.md';
//import { eventHandles, action } from '../../../.storybook/helpers/custom-action';
import { eventHandles } from '../../../.storybook/helpers/custom-action';

const customEvents = ['clicked'];
const events = ['mouseover', 'click', ...eventHandles(customEvents)];

const args = {
  placeholder: 'Add text...',
  pill: false,
  disabled: false,
  size: '',
  label:'label',
  helpText:'Help Text',
  showPrefixIcon: false,
  showSuffixIcon: false,
  autocapitalize:'',
  autocomplete:'',
  autocorrect:'',
  autofocus: false,
  inputMode: '',
  invalid: false,
  max: '',
  hasMaxlength: false,
  maxlength: 100,
  min: '',
  hasMinlength: false,
  minlength: 10,
  readonly: false,
  required: false,
  spellcheck: false,
  togglePassword: false,
  type: '',
  value: ''

};

// https://storybook.js.org/docs/react/essentials/controls#annotation
const argTypes = {
  placeholder:{
    description: 'Placeholder text for data entry',
    control:{
      type: "text"
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
  },
  type:{
    description: "",
    control:
    {
      type: "select",
      options: ['number' , 'text' , 'email' , 'password' , 'search' , 'tel' , 'url']
    }
  },
  inputmode:{
    description: "",
    control:{
      type: "select",
      options: ['none' , 'text' , 'numeric' , 'decimal' , 'email', 'search' , 'tel' , 'url']
    }
  },
};

// https://storybook.js.org/docs/react/writing-stories/parameters
export default {
  title: 'Elements/Input/Input',
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
    pill,
    disabled,
    size,
    label,
    helpText,
    showPrefixIcon,
    showSuffixIcon,
    autocapitalize,
    autocomplete,
    autocorrect,
    autofocus,
    inputMode,
    invalid,
    max,
    hasMaxlength,
    maxlength,
    min,
    hasMinlength,
    minlength,
    readonly,
    required,
    spellcheck,
    togglePassword,
    type,
    value
   }
) => `<v-input 
  ${placeholder.length > 0 && `placeholder="${placeholder}"`} 
  ${size.length > 0 && `size="${size}"`} 
  ${label.length > 0 && `label="${label}"`} 
  ${helpText.length > 0 && `help-text="${helpText}"`} 
  ${pill && 'pill'} 
  ${disabled && 'disabled'}
  ${autocapitalize.length > 0 && `autocapitalize="${autocapitalize}"`}
  ${autocomplete.length > 0 && `autocomplete="${autocomplete}"`}
  ${autocorrect.length > 0 && `autocorrect="${autocorrect}"`}
  ${autofocus && 'autofocus="true"'}
  ${inputMode.length > 0 && `input-mode="${inputMode}"`}
  ${invalid && `invalid`}
  ${max.length > 0 && `max="${max}"`}
  ${hasMaxlength && `maxlength="${maxlength}"`}
  ${min.length > 0 && `min="${min}"`}
  ${hasMinlength && `minlength="${minlength}"`}
  ${readonly && `readonly`}
  ${required && `required`}
  ${spellcheck && `spellcheck`}
  ${togglePassword && `toggle-password`}
  ${type.length > 0 && `type="${type}"`}
  ${value.length > 0 && `value="${value}"`} >
    ${showPrefixIcon && `<v-icon name="tag" slot="prefix"></v-icon>`}
    ${showSuffixIcon ?? `<v-icon name="tag" slot="suffix"></v-icon>`}
  </v-input>
`;

export const Basic = BasicTemplate.bind({});

Basic.args = {...args};
Basic.argTypes = {...argTypes};

