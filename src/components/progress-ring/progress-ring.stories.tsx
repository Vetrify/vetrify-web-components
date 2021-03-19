export default {
  title: 'Elements/Forms/ProgressRing',
};

const BasicTemplate = ({ percentage}) => `<v-progress-ring percentage="${percentage}"></v-progress-ring>`;
export const Basic = BasicTemplate.bind({});
const basicArgs = {
  percentage: 50
}
const basicArgTypes = {
  percentage:{
    description: 'Percentage',
    control:{
      type: "number"
    }
  }
}
Basic.args = basicArgs;
Basic.argTypes = basicArgTypes;

const SizeTemplate = ({percentage, size}) => `<v-progress-ring percentage="${percentage}" size="${size}"></v-progress-ring>`;

export const Size = SizeTemplate.bind({});
const SizeArgs = {
  percentage: 50,
  size: 200,

}
const SizeArgTypes = {
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
  }
} ;
Size.args = SizeArgs;
Size.argTypes = SizeArgTypes;

const StrokeWidthTemplate = ({percentage, size, strokeWidth}) => `<v-progress-ring percentage="${percentage}" stroke-width="${strokeWidth}" size="${size}"></v-progress-ring>`;

export const StrokeWidth = StrokeWidthTemplate.bind({});
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
StrokeWidth.args = StrokeWidthArgs;
StrokeWidth.argTypes = StrokeWidthArgTypes;


const ColorsTemplate = ({percentage, size, strokeWidth, indicatorColor, trackColor}) => `<v-progress-ring
percentage="${percentage}"
size="${size}"
strokeWidth="${strokeWidth}"
style="--track-color: ${indicatorColor}; --indicator-color: ${trackColor};"
></v-progress-ring>
`;

export const Colors = ColorsTemplate.bind({});
Colors.args = {
  ...StrokeWidthArgs,
  trackColor: '#ffe2c6',
  indicatorColor:'tomato'
}

Colors.argTypes = {
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


