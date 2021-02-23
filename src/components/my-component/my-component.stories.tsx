export default {
    title: 'MyComponent'
}

export const Basic = (args) => `<my-component first="stencil" middle="storybook" last="typescript"></my-component>`

Basic.args = { 
    first: 'stencil', 
    middle:'storybook',
    last: 'typescript'}
