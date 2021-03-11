export default {
  title: 'Vetrify/Icons/IconButton',
};

export const Basic = () => `<v-icon-button name="caret-up-square" style="height:4rem; width:4rem"></v-icon-button>`;


export const Tooltip= () => `<v-tooltip content="Settings">
<v-icon-button name="gear" label="Settings" style="height:4rem; width:4rem"></v-icon-button>
</v-tooltip>
`;


export const Disabled = () => `<v-icon-button name="Tools/Tools" label="Settings" disabled  style="height:4rem; width:4rem"></v-icon-button>`;