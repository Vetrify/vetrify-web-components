export default {
  title: 'Elements/ProgressBar',
  component: 'v-card',
};


const args = {
  percentage: 50,
  indeterminate: false,
  height: 10

};

const argTypes = {
  percentage:{
    description: 'Percentage',
    control:{
      type: "number"
    }
  },
  height:{
    description: 'Percentage',
    control:{
      type: "number"
    }
  },
  indeterminate:{
    description: 'Indeterminate',
    control:{
      type: "boolean"
    }
  }
};

export const Labels = ({percentage}) => `<v-progress-bar percentage="50" class="progress-bar-labels">50%</v-progress-bar>

<br>

<v-button circle><v-icon name="dash"></v-icon></v-button>
<v-button circle><v-icon name="plus"></v-icon></v-button>

<script>
  const progressBar = document.querySelector('.progress-bar-labels');
  const subtractButton = progressBar.nextElementSibling.nextElementSibling;
  const addButton = subtractButton.nextElementSibling;

  addButton.addEventListener('click', () => {
    const percentage = Math.min(100, progressBar.percentage + 10);
    progressBar.percentage = percentage;
    progressBar.textContent = percentage + "%";
  });

  subtractButton.addEventListener('click', () => {
    const percentage = Math.max(0, progressBar.percentage - 10)
    progressBar.percentage = percentage;
    progressBar.textContent = percentage + "%";
  });
</script>
`;


 const IndeterminateTemplate = ({percentage, indeterminate, height}) => `<v-progress-bar percentage="${percentage}" indeterminate="${indeterminate}" style="--height: ${height}px;"></v-progress-bar>
`;

export const Indeterminate = IndeterminateTemplate.bind({});
Indeterminate.args = {...args, indeterminate: true};
Indeterminate.argTypes = argTypes;
