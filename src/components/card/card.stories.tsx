//import markdown from './readme.md';
//import { eventHandles, action } from '../../../.storybook/helpers/custom-action';
import { eventHandles } from '../../../.storybook/helpers/custom-action';

const customEvents = ['clicked'];
const events = ['mouseover', 'click', ...eventHandles(customEvents)];


const args = {
  iconName: '', //Code/Option
  iconLibrary: 'default',
  showHeader: true,
  showFooter: true,
  semiBordered: false,
  bordered: false,
  title: 'title',
  subtitle: 'subtitle'
};

// https://storybook.js.org/docs/react/essentials/controls#annotation
const argTypes = {
  iconName:{
    description: 'Icon name',
    control:{
      type: "text"
    }
  },
  iconLibrary:{
    description: 'Icon library',
    control:{
      type: "text"
    }
  },
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
  title: 'Components/Cards/Card',
  component: 'v-card',
  parameters: {
    //notes: {markdown},
    actions: {
      handles: events,
    },
  },
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SLOTTED HEADER
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const HeaderSlotTemplate = (
  {
    showHeader,
    showFooter,
    semiBordered,
    bordered
  }) =>  `<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
<div class="d-flex flex-column-fluid">
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <v-card 
          show-header="${showHeader}" 
          show-footer="${showFooter}" 
          ${semiBordered && 'semi-bordered '}
          ${bordered && 'bordered'}>

          <div slot="header" class="card-header-slot" >
            <div class="card-title">
              <h3 class="card-label">Basic Card 
              <small>sub title</small></h3>
            </div>
          </div>

          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
          <div slot="footer" class="card-footer-slot">
            footer slot
          </div>
        </v-card>
        <div>&nbsp;</div>

        <div class="card card-custom card--show-header card--show-footer">
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


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// INLINE HEADER
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

const HeaderInlineTemplate = (
  {
    title,
    subtitle,
    iconName,
    iconLibrary,
    showHeader,
    showFooter,
    semiBordered,
    bordered
  }) =>  `<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
<div class="d-flex flex-column-fluid">
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
      <v-card 
          ${title && (`title="${title}"`)}
          ${subtitle && (`subtitle="${subtitle}"`)}
          ${iconName && (`icon-name="${iconName}" `)}
          ${iconName && iconLibrary && (`icon-library=${iconLibrary} `)} 
          show-header="${showHeader}" 
          show-footer="${showFooter}" 
          ${semiBordered && 'semi-bordered '}
          ${bordered && 'bordered'}>

          <div slot="footer" class="card-footer-slot">
            footer slot
          </div>

          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
        </v-card>
        <br />
        
        <div class="card card-custom card--show-header card--show-footer">
        <div class="card-header">
          <div class="card-title">
            <span class="card-icon">
              <i class="alert text-primary"></i>
            </span>
            <h3 class="card-label">Card Icon 
            <small>sub title</small></h3>
          </div>
        </div>
        <div class="card-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</div>
      </div>

      </div> 
    </div>
  </div>
</div>
</div>`;

export const HeaderInline = HeaderInlineTemplate.bind({});

HeaderInline.args = {...args};
HeaderInline.argTypes = {...argTypes};
