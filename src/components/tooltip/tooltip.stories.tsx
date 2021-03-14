export default {
  title: 'Elements/Tooltip',
};

export const Html = () => `<v-tooltip>
<div slot="content">I'm not <strong>just</strong> a tooltip, I'm a <em>tooltip</em> with HTML!</div>
<v-button>Hover me</v-button>
</v-tooltip>
`;

export const ClickTrigger = () => `<v-tooltip content="Click again to dismiss" trigger="click">
<v-button>Click to Toggle</v-button>
</v-tooltip>
`;

export const ManualTrigger = () => `<v-button style="margin-right: 4rem;">Toggle Manually</v-button>

<v-tooltip content="This is an avatar" trigger="manual" class="manual-tooltip">
  <v-avatar></v-avatar>
</v-tooltip>

<script>
  const tooltip = document.querySelector('.manual-tooltip');
  const toggle = tooltip.previousElementSibling;

  toggle.addEventListener('click', () => (tooltip.open = !tooltip.open));
</script>`;

export const NoArrows = () => `<div style="--v-tooltip-arrow-size: 0;">
<v-tooltip content="This is a tooltip">
  <v-button>Above</v-button>
</v-tooltip>

<v-tooltip content="This is a tooltip" placement="bottom">
  <v-button>Below</v-button>
</v-tooltip>
</div>`;

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
