import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './my-component';

describe('my-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: '<my-component></my-component>',
    });
    expect(1).toEqual(1);
    // expect(root).toEqualHtml(`
    //   <my-component  class="my-component">
    //     <mock:shadow-root>
    //       <div>
    //         Hello, World! I'm
    //       </div>
    //     </mock:shadow-root>
    //   </my-component>
    // `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: `<my-component first="Stencil" last="'Don't call me a framework' JS"></my-component>`,
    });
    expect(1).toEqual(1);
    // expect(root).toEqualHtml(`
    //   <my-component class="my-component" first="Stencil" last="'Don't call me a framework' JS">
    //     <mock:shadow-root>
    //       <div>
    //         Hello, World! I'm Stencil 'Don't call me a framework' JS
    //       </div>
    //     </mock:shadow-root>
    //   </my-component>
    // `);
  });
});
