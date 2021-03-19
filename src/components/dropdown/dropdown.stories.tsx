

const args = {
  hoist: false,
  skidding: 1,
  distance: 2
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

};

// https://storybook.js.org/docs/react/writing-stories/parameters
export default {
  title: 'Components/DropDown',
  component: 'v-dropdown',
};


const Basic = ({hoist, skidding, distance}) => {
return `
<v-dropdown hoist="${hoist}" skidding="${skidding}" distance="${distance}">
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
</v-dropdown>`};

export const BasicSlot= Basic.bind({});

BasicSlot.args = {...args};
BasicSlot.argTypes = {...argTypes};
