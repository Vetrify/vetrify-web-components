export default {
  title: 'Elements/Progress/Ring',
};


const StrokeWidthArgs = {
  percentage: 50,
  size: 100,
  strokeWidth: 10,
}
const StrokeWidthArgTypes = {
  percentage:{
    description: 'Percentage',
    control:{
      type: "number"
    }
  },
  size:{
    description: 'Size',
    control:{
      type: "number"
    }
  },
  strokeWidth:{
    description: 'Stroke',
    control:{
      type: "number"
    }
  }
} ;



const BasicTemplate = ({percentage, size, strokeWidth, indicatorColor, trackColor}) => `<v-progress-ring
percentage="${percentage}"
size="${size}"
stroke-width="${strokeWidth}"
style="--track-color: ${indicatorColor}; --indicator-color: ${trackColor};"
></v-progress-ring>
`;

export const Basic = BasicTemplate.bind({});
Basic.args = {
  ...StrokeWidthArgs,
  trackColor: '#ffe2c6',
  indicatorColor:'tomato'
}

Basic.argTypes = {
  ...StrokeWidthArgTypes,
  trackColor: { control: 'color', description:"Track Color" },
  indicatorColor: { control: 'color',  description:"Indicator Color"  }
}


// export const Labels = ( ) => `<v-progress-ring percentage="50" size="200" class="progress-ring-labels" style="margin-bottom: .5rem;">50%</v-progress-ring>

// <br>

// <v-button circle><v-icon name="dash"></v-icon></v-button>
// <v-button circle><v-icon name="plus"></v-icon></v-button>

// <script>
//   const progressRing = document.querySelector('.progress-ring-labels');
//   const subtractButton = progressRing.nextElementSibling.nextElementSibling;
//   const addButton = subtractButton.nextElementSibling;

//   addButton.addEventListener('click', () => {
//     const percentage = Math.min(100, progressRing.percentage + 10);
//     progressRing.percentage = percentage;
//     progressRing.textContent = `${percentage}%`;
//   });

//   subtractButton.addEventListener('click', () => {
//     const percentage = Math.max(0, progressRing.percentage - 10)
//     progressRing.percentage = percentage;
//     progressRing.textContent = `${percentage}%`;
//   });
// </script>
// `;


