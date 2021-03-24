import markdown from './readme.md';
//import { eventHandles, action } from '../../../.storybook/helpers/custom-action';
import { eventHandles } from '../../../.storybook/helpers/custom-action';

const customEvents = ['clicked'];
const events = ['mouseover', 'click', ...eventHandles(customEvents)];

const args = {
  placeholder: 'Add text...',
  disabled: false,
  size: '',
  label:'label',
  helpText:'Help Text',
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
  title: 'Elements/Input/TextArea',
  component: 'v-textarea',
  parameters: {
    notes: {markdown},
    actions: {
      handles: events,
    },
  },
};

const BasicTemplate =  (
  { placeholder,
    disabled,
    size,
    label,
    helpText,
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
) => `

<v-textarea 
  ${placeholder.length > 0 && `placeholder="${placeholder}"`} 
  ${size.length > 0 && `size="${size}"`} 
  ${label.length > 0 && `label="${label}"`} 
  ${helpText.length > 0 && `help-text="${helpText}"`} 
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
  ${value.length > 0 && `value="${value}"`}
  >
  </v-textarea>
`;

export const Basic = BasicTemplate.bind({});

Basic.args = {...args};
Basic.argTypes = {...argTypes};

