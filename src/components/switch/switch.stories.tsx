export default {
  title: 'Elements/Switch',
};

export const Basic = () => `<v-switch>Switch</v-switch>`;

export const Checked = () => `<v-switch checked>Checked</v-switch>`;

export const Disabled = () => `<v-switch disabled>Disabled</v-switch>`;

export const CustomSize = () => `<v-switch style="--width: 80px; --height: 32px; --thumb-size: 26px;"></v-switch>`;
