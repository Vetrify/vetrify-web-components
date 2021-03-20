

const args = {
  hoist: false,
  skidding: 1,
  distance: 2,
  placement: 'bottom-start'
};

// https://storybook.js.org/docs/react/essentials/controls#annotation
const argTypes = {
  skidding:{
    description: 'Skidding',
    control:{
      type: "number"
    }
  },
  distance:{
    description: 'Distance',
    control:{
      type: "number"
    }
  },
  hoist:{
    description: 'Hoisting',
    control:{
      type: "boolean"
    }
  },
  placement: {
    description: 'Placement',
    control: {
      type: "select",
      options: ['top' , 'top-start' , 'top-end' , 'bottom' , 'bottom-start' , 'bottom-end' , 'right' , 'right-start' , 'right-end' , 'left' , 'left-start' , 'left-end']
    }
  }

};

// https://storybook.js.org/docs/react/writing-stories/parameters
export default {
  title: 'Elements/Input/DropDown',
  component: 'v-dropdown',
};


const Basic = ({hoist, skidding, distance, placement}) => {
return `
<div style="margin:300px 0px 0px 200px">

<v-dropdown hoist="${hoist}" skidding="${skidding}" distance="${distance}" placement="${placement}">
<v-button slot="trigger" caret>Dropdown</v-button>
<v-menu>
  <v-menu-item>Dropdown Item 1</v-menu-item>
  <v-menu-item>Dropdown Item 2</v-menu-item>
  <v-menu-item>Dropdown Item 3</v-menu-item>
  <v-menu-divider></v-menu-divider>
  <v-menu-item checked>Checked</v-menu-item>
  <v-menu-item disabled>Disabled</v-menu-item>
  <v-menu-divider></v-menu-divider>
  <v-menu-item>
    Prefix
    <v-icon slot="prefix" name="gift"></v-icon>
  </v-menu-item>
  <v-menu-item>
    Suffix Icon
    <v-icon slot="suffix" name="heart"></v-icon>
  </v-menu-item>
</v-menu>
</v-dropdown>
</div>`};

export const BasicSlot= Basic.bind({});

BasicSlot.args = {...args};
BasicSlot.argTypes = {...argTypes};

//When you change the hoist to true you would see the dropdown else you won't be able to see the options
const HoistTemplate = ({hoist, skidding, distance, placement}) => {
return `
<div style="margin:300px 0px 0px 200px;overflow:scroll">

<v-dropdown hoist="${hoist}" skidding="${skidding}" distance="${distance}" placement="${placement}">
<v-button slot="trigger" caret>Dropdown</v-button>
<v-menu>
  <v-menu-item>Dropdown Item 1</v-menu-item>
  <v-menu-item>Dropdown Item 2</v-menu-item>
  <v-menu-item>Dropdown Item 3</v-menu-item>
  <v-menu-divider></v-menu-divider>
  <v-menu-item checked>Checked</v-menu-item>
  <v-menu-item disabled>Disabled</v-menu-item>
  <v-menu-divider></v-menu-divider>
  <v-menu-item>
    Prefix
    <v-icon slot="prefix" name="gift"></v-icon>
  </v-menu-item>
  <v-menu-item>
    Suffix Icon
    <v-icon slot="suffix" name="heart"></v-icon>
  </v-menu-item>
</v-menu>
</v-dropdown>
</div>`};

export const Hoist= HoistTemplate.bind({});

Hoist.args = {...args};
Hoist.argTypes = {...argTypes};
