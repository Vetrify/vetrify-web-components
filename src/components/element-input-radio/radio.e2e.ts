import { newE2EPage } from '@stencil/core/testing';

describe('<v-radio>', () => {
  it('should emit v-focus when gaining focus', async () => {
    const page = await newE2EPage({
      html: `
        <v-radio>Radio</v-radio>
      `,
    });
    const radio = await page.find('v-radio');
    const vFocus = await radio.spyOnEvent('v-focus');

    await radio.click();

    expect(vFocus).toHaveReceivedEventTimes(1);
  });

  it('should emit v-blur when losing focus', async () => {
    const page = await newE2EPage({
      html: `
        <v-radio>Radio</v-radio>
        <button>Button</button>
        `,
    });
    const radio = await page.find('v-radio');
    const button = await page.find('button');
    const vBlur = await radio.spyOnEvent('v-blur');

    await radio.click();
    await button.click();

    expect(vBlur).toHaveReceivedEventTimes(1);
  });

  it('should emit v-focus when calling setFocus()', async () => {
    const page = await newE2EPage({
      html: `
        <v-radio>Radio</v-radio>
      `,
    });
    const radio = await page.find('v-radio');
    const vFocus = await radio.spyOnEvent('v-focus');

    await radio.callMethod('setFocus');

    expect(vFocus).toHaveReceivedEventTimes(1);
  });

  it('should emit v-blur when calling removeFocus()', async () => {
    const page = await newE2EPage({
      html: `
        <v-radio>Radio</v-radio>
      `,
    });
    const radio = await page.find('v-radio');
    const vBlur = await radio.spyOnEvent('v-blur');

    await radio.callMethod('setFocus');
    await radio.callMethod('removeFocus');

    expect(vBlur).toHaveReceivedEventTimes(1);
  });

  it('should emit v-change when checked state changes via click', async () => {
    const page = await newE2EPage({
      html: `
        <v-radio>Radio</v-radio>
      `,
    });
    const radio = await page.find('v-radio');
    const vChange = await radio.spyOnEvent('v-change');

    await radio.click();

    expect(vChange).toHaveReceivedEventTimes(1);
  });

  it('should emit v-change when setting checked attribute', async () => {
    const page = await newE2EPage({
      html: `
        <v-radio>Radio</v-radio>
      `,
    });
    const radio = await page.find('v-radio');
    const vChange = await radio.spyOnEvent('v-change');

    radio.setAttribute('checked', '');
    await page.waitForChanges();

    expect(vChange).toHaveReceivedEventTimes(1);
  });

  it('should emit v-change when removing checked attribute', async () => {
    const page = await newE2EPage({
      html: `
        <v-radio checked>Radio</v-radio>
        <button>Button</button>
      `,
    });
    const radio = await page.find('v-radio');
    const vChange = await radio.spyOnEvent('v-change');

    radio.removeAttribute('checked');
    await page.waitForChanges();

    expect(vChange).toHaveReceivedEventTimes(1);
  });

  it('should emit v-change when setting checked property to true', async () => {
    const page = await newE2EPage({
      html: `
        <v-radio>Radio</v-radio>
      `,
    });
    const radio = await page.find('v-radio');
    const vChange = await radio.spyOnEvent('v-change');

    radio.setProperty('checked', true);
    await page.waitForChanges();

    expect(vChange).toHaveReceivedEventTimes(1);
  });

  it('should emit v-change when setting checked property to false', async () => {
    const page = await newE2EPage({
      html: `
        <v-radio checked>Radio</v-radio>
        <button>Button</button>
      `,
    });
    const radio = await page.find('v-radio');
    const vChange = await radio.spyOnEvent('v-change');

    radio.setProperty('checked', false);
    await page.waitForChanges();

    expect(vChange).toHaveReceivedEventTimes(1);
  });
});
