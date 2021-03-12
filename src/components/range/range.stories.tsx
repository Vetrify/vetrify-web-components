export default {
  title: 'Elements/Form/Range',
};

export const Basic = () => `<v-range min="0" max="100" step="1"></v-range>`;

export const Disabled = () => `<v-range min="0" max="100" step="1" disabled></v-range>`;

export const Tooltip = () => `<v-range min="0" max="100" step="1" tooltip="bottom"></v-range>`;

export const TooltipDisabled = () => `<v-range min="0" max="100" step="1" tooltip="none"></v-range>`;

// export const CustomTooltipFormat = () => `<v-range min="0" max="100" step="1" class="range-with-custom-formatter"></v-range>

// <script>
//   const range = document.querySelector('.range-with-custom-formatter');
//   range.tooltipFormatter = value => `Total - ${value}%`;
// </script>
// `;

export const Labels = () => `<v-range label="Volume" min="0" max="100"></v-input>`;

export const HelpText = () => `<v-range 
label="Volume" 
help-text="Controls the volume of the current song."
min="0"
max="100"
></v-input>
`;



