
export default {
  title: 'Elements/ProgressInfo',
  component: 'v-progress-info',
};
const args = {
  label: 'Progress',
  percentage: 90,
  color:"red"
}

const argTypes = {
  label: {
    description:'Label',
    control:  {
      type:"text"
    }
  },
  percentage: {
    description:'Percentage',
    control:  {
      type:"number"
    }
  },
  color:{
    description:'Color',
    control:  {
      type:"color"
    }
  }
}
const ProgressInfoTemplate = ({label, percentage, color}) => {
  return `
  <div style="width:200px">
    <v-progress-info label="${label}" percentage="${percentage}" color="${color}"/>
  </div>
  `
}


export const ProgressInfo = ProgressInfoTemplate.bind({});
ProgressInfo.args = args;
ProgressInfo.argTypes = argTypes;
