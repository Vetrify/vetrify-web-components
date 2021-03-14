export default {
  title: 'Components/ColorPicker',
};

export const Basic = () => `<v-color-picker></v-color-picker>`;

export const Opacity = () => `<v-color-picker opacity></v-color-picker>`;

export const Format = () => `<v-color-picker size="small"></v-color-picker>
<v-color-picker size="medium"></v-color-picker>
<v-color-picker size="large"></v-color-picker>`;

export const Inline = () => `<v-color-picker inline></v-color-picker>`;
