import { newE2EPage } from '@stencil/core/testing';

describe('<v-color-picker>', () => {
  it('should emit v-show and v-after-show events when opened', async () => {
    const page = await newE2EPage({
      html: `
        <v-color-picker></v-color-picker>
      `,
    });
    const colorPicker = await page.find('v-color-picker');
    const slShow = await colorPicker.spyOnEvent('v-show');
    const slAfterShow = await colorPicker.spyOnEvent('v-after-show');
    const eventHappened = colorPicker.waitForEvent('v-after-show');

    await colorPicker.click();
    await eventHappened;

    expect(slShow).toHaveReceivedEventTimes(1);
    expect(slAfterShow).toHaveReceivedEventTimes(1);
  });

  it('should emit v-hide and v-after-hide events when closed', async () => {
    const page = await newE2EPage({
      html: `
        <v-color-picker></v-color-picker>
      `,
    });
    const colorPicker = await page.find('v-color-picker');
    const slHide = await colorPicker.spyOnEvent('v-hide');
    const slAfterHide = await colorPicker.spyOnEvent('v-after-hide');
    const eventHappened = colorPicker.waitForEvent('v-after-hide');

    await colorPicker.click(); // open
    await colorPicker.click(); // close
    await eventHappened;

    expect(slHide).toHaveReceivedEventTimes(1);
    expect(slAfterHide).toHaveReceivedEventTimes(1);
  });

  it('should emit v-change when value changes with click', async () => {
    const page = await newE2EPage({
      html: `
        <v-color-picker></v-color-picker>
      `,
    });
    const colorPicker = await page.find('v-color-picker');
    const colorPickerPicker = await page.find('v-color-picker >>> .color-picker');
    const slChange = await colorPicker.spyOnEvent('v-change');

    await colorPicker.click();
    await colorPickerPicker.click();

    expect(slChange).toHaveReceivedEventTimes(1);
  });

  it('should change value when clicking the color grid', async () => {
    const page = await newE2EPage({
      html: `
        <v-color-picker></v-color-picker>
      `,
    });
    const colorPicker = await page.find('v-color-picker');
    const colorPickerPicker = await page.find('v-color-picker >>> .color-picker');

    expect(await colorPicker.getProperty('value')).toBe('#ffffff');

    await colorPicker.click();
    await colorPickerPicker.click();

    expect(await colorPicker.getProperty('value')).not.toBe('#ffffff');
  });
});
