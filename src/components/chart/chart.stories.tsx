import markdown from './readme.md';
//import { eventHandles, action } from '../../../.storybook/helpers/custom-action';
import { eventHandles } from '../../../.storybook/helpers/custom-action';

const customEvents = ['clicked'];
const events = ['mouseover', 'click', ...eventHandles(customEvents)];

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'My First dataset',
        backgroundColor: '#000',
        borderColor: '#333',
        data: [
            1,4,6,3,8,9,4
        ],
        fill: false,
    }, {
        label: 'My Second dataset',
        fill: false,
        backgroundColor: '#000',
        borderColor: '#666',
        data: [
            6,4,7,5,9,1,2
        ],
    }]
};


const options = {
    responsive: true,
    title: {
        display: true,
        text: 'Chart.js Line Chart'
    },
    tooltips: {
        mode: 'index',
        intersect: false,
    },
    hover: {
        mode: 'nearest',
        intersect: true
    },
    scales: {
        xAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Month'
            }
        }],
        yAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Value'
            }
        }]
    }
};

const args = {
  chartType: 'line',
  data: data,
  options: options,
  height: 100,
  width: 100
};

// https://storybook.js.org/docs/react/essentials/controls#annotation
const argTypes = {
  chartType:{
    description: 'Icon name',
    control: { type: 'select', options: ['line', 'bar' , 'horizontalBar' , 'radar' , 'doughnut' , 'polarArea' , 'bubble' , 'pie' , 'scatter'] }
  },
  height:{
    description: '',
    control:{
      type: "number"
    }
  },
  width:{
    description: '',
    control:{
      type: "number"
    }
  },
  data:{
    description: 'data',
    control:{
      type: 'object'
    }
  },
  options:{
    description: '',
    control:{
      type: 'object'
    }
  },
};

// https://storybook.js.org/docs/react/writing-stories/parameters
export default {
  title: 'Components/Charts/Chart',
  component: 'v-chart',
  parameters: {
    notes: {markdown},
    actions: {
      handles: events,
    },
  },
};


const BasicTemplate = (
  {
    chartType,
    data,
    options,
    height,
    width
  }) =>  `
  <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
<div class="d-flex flex-column-fluid">
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <v-card show-header="true" show-footer="false" heading="Chart" subheading="asdf">
        <v-chart id="my-one" height="${height}" width="${width}" chart-type="${chartType}" lazy="true" duration="100" easing="linear"></v-chart>
        </v-card>
      </div>
    </div>
  </div>
</div>
</div>

<script>
alert('ok');
var cmp = document.querySelector('my-one');
cmp.data = "${data}"; 
cmp.options = "${options}";

</script>

`;

export const Basic = BasicTemplate.bind({});

Basic.args = {...args};
Basic.argTypes = {...argTypes};

