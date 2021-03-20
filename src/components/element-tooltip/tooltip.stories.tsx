export default {
  title: 'Elements/Tooltip',
  component: 'v-card',
};


const args = {
  content: "This is an avatar",
  placement: 'top-start',
  disabled: false,
  distance: 2,
  skidding: 0
};

const argTypes = {
  content:{
    description: 'Content',
    control:{
      type: "text"
    }
  },
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
  disabled:{
    description: 'Disabled',
    control:{
      type: "boolean"
    }
  },
  placement:{
    description: 'Placement',
    control:{
      type: 'select',
        options: ['top' , 'top-start' , 'top-end' , 'right' , 'right-start' , 'right-end' , 'bottom' , 'bottom-start' , 'bottom-end' , 'left' , 'left-start' , 'left-end']
    }
  },
};


const HtmlTemplate = ({content, placement, skidding, distance, disabled}) => `
<div style="margin:300px 0px 0px 300px">
    <v-tooltip content="${content}" skidding="${skidding}" distance="${distance}" disabled="${disabled}" placement="${placement}">
    <div slot="content">I'm not <strong>just</strong> a tooltip, I'm a <em>tooltip</em> with HTML!</div>
    <v-button>Hover me</v-button>
    </v-tooltip>
</div>
`;

export const Html  = HtmlTemplate.bind({});
Html.args = args;
Html.argTypes = argTypes;



const ClickTriggerTemplate = ({content, placement, skidding, distance, disabled}) => `
<div style="margin:300px 0px 0px 300px">
<v-tooltip content="${content}" skidding="${skidding}" distance="${distance}" disabled="${disabled}" placement="${placement}" trigger="click">
  <v-button>Click to Toggle</v-button>
  </v-tooltip>
</div>
`;

export const ClickTrigger  = ClickTriggerTemplate.bind({});
ClickTrigger.args = args;
ClickTrigger.argTypes = argTypes;

export const ManualTriggerTemplate = ({content, placement, skidding, distance, disabled}) => `<v-button style="margin-right: 4rem;">Toggle Manually</v-button>

<v-tooltip content="${content}" skidding="${skidding}" distance="${distance}" disabled="${disabled}" placement="${placement}" trigger="manual" class="manual-tooltip">
  <v-avatar></v-avatar>
</v-tooltip>

<script>
  const tooltip = document.querySelector('.manual-tooltip');
  const toggle = tooltip.previousElementSibling;

  toggle.addEventListener('click', () => (tooltip.open = !tooltip.open));
</script>`;
export const ManualTrigger  = ManualTriggerTemplate.bind({});
ManualTrigger.args = args;
ManualTrigger.argTypes = argTypes;

export const NoArrowsTemplate = ({content, skidding, distance, disabled}) => `<div style="--v-tooltip-arrow-size: 0;margin:300px 0px 0px 300px">
<v-tooltip content="${content}" skidding="${skidding}" distance="${distance}" disabled="${disabled}" >
  <v-button>Above</v-button>
</v-tooltip>

<v-tooltip content="${content}" skidding="${skidding}" distance="${distance}" disabled="${disabled}" placement="bottom">
  <v-button>Below</v-button>
</v-tooltip>
</div>`;
export const NoArrows  = NoArrowsTemplate.bind({});
NoArrows.args = args;
NoArrows.argTypes = {
  content:{
    description: 'Content',
    control:{
      type: "text"
    }
  },
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
  disabled:{
    description: 'Disabled',
    control:{
      type: "boolean"
    }
  }
};
export const Basic = () => `<div class="tooltip-placement-example">
<div class="tooltip-placement-example-row">
  <v-tooltip content="top-start" placement="top-start">
    <v-button></v-button>
  </v-tooltip>

  <v-tooltip content="top" placement="top">
    <v-button></v-button>
  </v-tooltip>

  <v-tooltip content="top-end" placement="top-end">
    <v-button></v-button>
  </v-tooltip>
</div>

<div class="tooltip-placement-example-row">
  <v-tooltip content="left-start" placement="left-start">
    <v-button></v-button>
  </v-tooltip>

  <v-tooltip content="right-start" placement="right-start" style="margin-left: 400px;">
    <v-button></v-button>
  </v-tooltip>
</div>

<div class="tooltip-placement-example-row">
  <v-tooltip content="left" placement="left">
    <v-button></v-button>
  </v-tooltip>

  <v-tooltip content="right" placement="right">
    <v-button></v-button>
  </v-tooltip>
</div>

<div class="tooltip-placement-example-row">
  <v-tooltip content="left-end" placement="left-end">
    <v-button></v-button>
  </v-tooltip>

  <v-tooltip content="right-end" placement="right-end">
    <v-button></v-button>
  </v-tooltip>
</div>

<div class="tooltip-placement-example-row">
  <v-tooltip content="bottom-start" placement="bottom-start">
    <v-button></v-button>
  </v-tooltip>

  <v-tooltip content="bottom" placement="bottom">
    <v-button></v-button>
  </v-tooltip>

  <v-tooltip content="bottom-end" placement="bottom-end">
    <v-button></v-button>
  </v-tooltip>
</div>
</div>

<style>
.tooltip-placement-example {
  width: 250px;
}

.tooltip-placement-example-row:after {
  content: '';
  display: table;
  clear: both;
}

.tooltip-placement-example v-button {
  float: left;
  width: 2.5rem;
  margin-right: 0.25rem;
  margin-bottom: 0.25rem;
}

.tooltip-placement-example [placement='top-start'] v-button,
.tooltip-placement-example [placement='bottom-start'] v-button {
  margin-left: calc(40px + 0.25rem);
}

.tooltip-placement-example [placement^='right'] v-button {
  margin-left: calc((40px * 3) + (0.25rem * 3));
}
</style>`;
