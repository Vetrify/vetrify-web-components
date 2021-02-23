export default {
    title: 'MyComponent'
}

export const Basic = () => `<my-component first="stencil" middle="storybook" last="typescript"></my-component>`

Basic.args = { 
    first: 'stencil', 
    middle:'storybook',
    last: 'typescript'}
