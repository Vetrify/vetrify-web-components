//import markdown from './readme.md';
//import { eventHandles, action } from '../../../.storybook/helpers/custom-action';
import { eventHandles } from '../../../.storybook/helpers/custom-action';

const customEvents = ['clicked'];
const events = ['mouseover', 'click', ...eventHandles(customEvents)];

const args = {
  showHeader: true,
  showFooter: true,
  semiBordered: true,
  bordered: true,
  title: 'title',
  subtitle: 'subtitle'
};

// https://storybook.js.org/docs/react/essentials/controls#annotation
const argTypes = {
  title:{
    description: '',
    control:{
      type: "text"
    }
  },
  subtitle:{
    description: '',
    control:{
      type: "text"
    }
  },
  showHeader:{
    description: '',
    control:{
      type: "boolean"
    }
  },
  showFooter:{
    description: '',
    control:{
      type: "boolean"
    }
  },
  semiBordered:{
    description: '',
    control:{
      type: "boolean"
    }
  },
  bordered:{
    description: '',
    control:{
      type: "boolean"
    }
  },

};

// https://storybook.js.org/docs/react/writing-stories/parameters
export default {
  title: 'Vetrify/Cards/Card',
  component: 'v-card',
  parameters: {
    //notes: {markdown},
    actions: {
      handles: events,
    },
  },
};

const HeaderSlotTemplate = (
  {
    title,
    subtitle,
    showHeader,
    showFooter,
    semiBordered,
    bordered
  }) =>  `<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
<div class="d-flex flex-column-fluid">
  <div class="container">
    <div class="row">
      <div class="col-lg-6">

        <v-card  ${showHeader? 'show-header':''} ${showFooter? 'show-footer': ''} ${semiBordered? 'semi-bordered': ''}  ${bordered? 'boardered': ''}>
        <div slot="header" class="card-title" >
          <h3 class="card-label">Basic Card 
          <small>sub title</small></h3>
        </div>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.

          <div slot="footer"> footer</div>

        </v-card>

        
      
        <div class="card card-custom">
          <div class="card-header">
            <div class="card-title">
              <h3 class="card-label">Basic Card 
              <small>sub title</small></h3>
            </div>
          </div>
          <div class="card-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</div>
          <div class="card-footer">footer</div>
          </div>

       
      
          
      </div>
      
    </div>

  </div>
</div>
</div>`;

export const HeaderSlot = HeaderSlotTemplate.bind({});

HeaderSlot.args = {...args};
HeaderSlot.argTypes = {...argTypes};


const HeaderInlineTemplate = (
  {
    title,
    subtitle,
    showHeader,
    showFooter,
    semiBordered,
    bordered
  }) =>  `<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
<div class="d-flex flex-column-fluid">
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <v-card ${title? 'title="' + title + "' ": ''}${subtitle? 'subtitle="' + subtitle + "' ": ''}  ${showHeader? 'show-header':''} ${showFooter? 'show-footer': ''} ${semiBordered? 'semi-bordered': ''}  ${bordered? 'boardered': ''}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
          <div slot="footer"> footer</div>
        </v-card>
      </div> 
    </div>
  </div>
</div>
</div>`;

export const HeaderInline = HeaderInlineTemplate.bind({});

HeaderInline.args = {...args};
HeaderInline.argTypes = {...argTypes};