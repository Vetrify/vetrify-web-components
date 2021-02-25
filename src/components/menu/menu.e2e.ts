import { newE2EPage } from '@stencil/core/testing';

describe('<v-menu>', () => {
  it('should emit v-select when a menu item is selected', async () => {
    const page = await newE2EPage({
      html: `
        <v-menu>
          <v-menu-item value="1">Item 1</v-menu-item>
          <v-menu-item value="2">Item 2</v-menu-item>
          <v-menu-item value="3">Item 3</v-menu-item>
        </v-menu>
      `
    });
    const menu = await page.find('v-menu');
    const menuItem = await page.find('v-menu-item');
    const menuItemEl = await page.$eval('v-menu-item', el => el);
    const slSelect = await menu.spyOnEvent('v-select');

    await menuItem.click();

    expect(slSelect).toHaveReceivedEventTimes(1);
    expect(slSelect).toHaveReceivedEventDetail({
      item: menuItemEl
    });
  });
});
