export default {
  title: 'Vetrify/Badge',
};

export const Basic = () => `<v-badge>Badge</v-badge>`;

export const Types = () =>
  `<v-badge type="primary">Primary</v-badge>
<v-badge type="success">Success</v-badge>
<v-badge type="info">Info</v-badge>
<v-badge type="warning">Warning</v-badge>
<v-badge type="danger">Danger</v-badge>`;

export const Pills = () => `<v-badge type="primary" pill>Primary</v-badge>
<v-badge type="success" pill>Success</v-badge>
<v-badge type="info" pill>Info</v-badge>
<v-badge type="warning" pill>Warning</v-badge>
<v-badge type="danger" pill>Danger</v-badge>
`;

export const Pulsating = () => `<div class="badge-pulse">
<v-badge type="primary" pill pulse>1</v-badge>
<v-badge type="success" pill pulse>1</v-badge>
<v-badge type="info" pill pulse>1</v-badge>
<v-badge type="warning" pill pulse>1</v-badge>
<v-badge type="danger" pill pulse>1</v-badge>
</div>

<style>
.badge-pulse v-badge:not(:last-of-type) {
  margin-right: 1rem;
}
</style>
`;

export const WithButtons = () => `<v-button>
Requests
<v-badge pill>30</v-badge>
</v-button>

<v-button style="margin-left: 1rem;">
Warnings
<v-badge type="warning" pill>8</v-badge>
</v-button>

<v-button style="margin-left: 1rem;">
Errors
<v-badge type="danger" pill>6</v-badge>
</v-button>
`;

export const WithMenuItems = () => `<v-menu style="max-width: 240px; border: solid 1px var(--v-panel-border-color); border-radius: var(--v-border-radius-medium);">
<v-menu-label>Messages</v-menu-label>
<v-menu-item>Comments <v-badge slot="suffix" pill>4</v-badge></v-menu-item>
<v-menu-item>Replies <v-badge slot="suffix" pill>12</v-badge></v-menu-item>
</v-menu>
`;
