export default {
  title: 'Vetrify/Sketch/MyComponent',
};

export const Basic = () => `test<my-component first="stencil" middle="storybook" last="typescript"></my-component>`;

Basic.args = {
  first: 'stencil',
  middle: 'storybook',
  last: 'typescript',
};
