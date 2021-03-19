export default {
  title: 'Elements/Form/Checkbox',
};



const argTypes = {
  status:{
    description: 'Status',
    control:{
      type: 'select',
        options: ['checked' , 'indeterminate' , 'disabled' ]
    }
  },
}

const BasicTemplate = ({status}) => `<v-checkbox ${status}>Checkbox</v-checkbox>`;
export const Basic =  BasicTemplate.bind({});
Basic.args = {
  status: ''
}
Basic.argTypes = argTypes;
const CheckedTemplate = ({status}) => `<v-checkbox ${status}>Checked</v-checkbox>`;
export const Checked = CheckedTemplate.bind({})
Checked.args = {
  status:'checked'
}
Checked.argTypes = argTypes;
const IndeterminateTemplate = ({status}) => `<v-checkbox ${status}>Indeterminate</v-checkbox>`;
export const Indeterminate = IndeterminateTemplate.bind({})
Indeterminate.args = {
  status:'indeterminate'
}
Indeterminate.argTypes = argTypes;
const DisabledTemplate = ({status}) => `<v-checkbox ${status}>Disabled</v-checkbox>`;
export const Disabled = DisabledTemplate.bind({})
Disabled.args = {
  status:'disabled'
}
Disabled.argTypes = argTypes;
