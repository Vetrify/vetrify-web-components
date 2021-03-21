export default {
  title: 'Elements/Progress/Spinner',
};

export const Basic = () => `<v-spinner></v-spinner>`;

export const Size = () => `<v-spinner></v-spinner>
<v-spinner style="font-size: 2rem;"></v-spinner>
<v-spinner style="font-size: 3rem;"></v-spinner>`;

export const StrokeWidth = () => `<v-spinner style="font-size: 2rem; --stroke-width: 6px;"></v-spinner>`;

export const Color = () => `<v-spinner style="font-size: 2rem; --indicator-color: tomato;"></v-spinner>`;
