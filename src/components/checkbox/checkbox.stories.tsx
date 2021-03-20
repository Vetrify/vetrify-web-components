export default {
  title: 'Elements/Form/Checkbox',
};



const argTypes = {
  checked:{
    description: 'Status',
    control:{
      type: 'boolean',
    }
  },
  disabled:{
    description: 'Status',
    control:{
      type: 'boolean',
    }
  },
  indeterminate:{
    description: 'Status',
    control:{
      type: 'boolean',
    }
  },
}

const BasicTemplate = ({checked, indeterminate, disabled}) => `<v-checkbox ${checked && 'checked'} ${indeterminate && 'indeterminate'} ${disabled && 'disabled'}>Checkbox</v-checkbox>`;
export const Basic =  BasicTemplate.bind({});
Basic.args = {
  checked: false,
  disabled: false,
  indeterminate:false
}
Basic.argTypes = argTypes;
