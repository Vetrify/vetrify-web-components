import { newE2EPage } from '@stencil/core/testing';

describe('<v-select>', () => {
  it('should emit v-focus when gaining focus', async () => {
    const page = await newE2EPage({
      html: `
        <v-select>
          <v-menu-item value="option-1">Option 1</v-menu-item>
          <v-menu-item value="option-2">Option 2</v-menu-item>
          <v-menu-item value="option-3">Option 3</v-menu-item>
        </v-select>
      `
    });
    const select = await page.find('v-select');
    const slFocus = await select.spyOnEvent('v-focus');

    await select.click();

    expect(slFocus).toHaveReceivedEventTimes(1);
  });

  it('should emit v-blur when losing focus', async () => {
    const page = await newE2EPage({
      html: `
        <button>Other Element</button>
        <v-select>
          <v-menu-item value="option-1">Option 1</v-menu-item>
          <v-menu-item value="option-2">Option 2</v-menu-item>
          <v-menu-item value="option-3">Option 3</v-menu-item>
        </v-select>
      `
    });
    const select = await page.find('v-select');
    const button = await page.find('button');
    const slBlur = await select.spyOnEvent('v-blur');

    await select.click();
    await button.click();

    expect(slBlur).toHaveReceivedEventTimes(1);
  });

  it('should emit v-change when a menu item is selected', async () => {
    const page = await newE2EPage({
      html: `
        <v-select>
          <v-menu-item value="option-1">Option 1</v-menu-item>
          <v-menu-item value="option-2">Option 2</v-menu-item>
          <v-menu-item value="option-3">Option 3</v-menu-item>
        </v-select>
      `
    });
    const select = await page.find('v-select');
    const menuItem = await page.find('v-menu-item');
    const slChange = await select.spyOnEvent('v-change');

    await select.click();
    await menuItem.click();

    expect(slChange).toHaveReceivedEventTimes(1);
  });

  it('should change value when menu item selected', async () => {
    const page = await newE2EPage({
      html: `
        <v-select>
          <v-menu-item value="option-1">Option 1</v-menu-item>
          <v-menu-item value="option-2">Option 2</v-menu-item>
          <v-menu-item value="option-3">Option 3</v-menu-item>
        </v-select>
      `
    });
    const select = await page.find('v-select');
    const menuItem = await page.find('v-menu-item');

    expect(await select.getProperty('value')).toBe('');

    await select.click();
    await menuItem.click();

    expect(await select.getProperty('value')).toBe('option-1');
  });
});
