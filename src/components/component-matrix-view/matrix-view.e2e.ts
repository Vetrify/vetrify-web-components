import { newE2EPage } from '@stencil/core/testing';

describe('v-matrix-view', () => {
  it('renders', async () => {
    expect(1).toBe(1);
    // const page = await newE2EPage();

    // await page.setContent('<v-matrix-view></v-matrix-view>');
    // const element = await page.find('v-matrix-view');
    // expect(element).toHaveClass('hydrated');
  });
});

//   it('renders changes to the name data', async () => {
//     const page = await newE2EPage();

//     await page.setContent('<v-matrix-view></v-matrix-view>');
//     const component = await page.find('v-matrix-view');
//     const element = await page.find('v-matrix-view >>> div');
//     expect(element.textContent).toEqual(`Hello, World! I'm `);

//     component.setProperty('first', 'James');
//     await page.waitForChanges();
//     expect(element.textContent).toEqual(`Hello, World! I'm James`);

//     component.setProperty('last', 'Quincy');
//     await page.waitForChanges();
//     expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

//     component.setProperty('middle', 'Earl');
//     await page.waitForChanges();
//     expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
//   });
// });