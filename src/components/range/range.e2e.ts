import { newE2EPage } from '@stencil/core/testing';

describe('<v-range>', () => {
  it('should emit v-focus when gaining focus', async () => {
    const page = await newE2EPage({
      html: `
        <v-range min="0" max="100" step="1"></v-range>
      `,
    });
    const range = await page.find('v-range');
    const slFocus = await range.spyOnEvent('v-focus');

    await range.click();

    expect(slFocus).toHaveReceivedEventTimes(1);
  });

  it('should emit v-blur when losing focus', async () => {
    const page = await newE2EPage({
      html: `
        <v-range min="0" max="100" step="1"></v-range>
        <button>Other Element</button>
      `,
    });
    const range = await page.find('v-range');
    const button = await page.find('button');
    const slBlur = await range.spyOnEvent('v-blur');

    await range.click();
    await button.click();

    expect(slBlur).toHaveReceivedEventTimes(1);
  });

  it('should emit v-focus when setFocus() is called', async () => {
    const page = await newE2EPage({
      html: `
        <v-range min="0" max="100" step="1"></v-range>
      `,
    });
    const range = await page.find('v-range');
    const slFocus = await range.spyOnEvent('v-focus');

    await range.callMethod('setFocus');

    expect(slFocus).toHaveReceivedEventTimes(1);
  });

  it('should emit v-blur when removeFocus() is called', async () => {
    const page = await newE2EPage({
      html: `
        <v-range min="0" max="100" step="1"></v-range>
      `,
    });
    const range = await page.find('v-range');
    const slBlur = await range.spyOnEvent('v-blur');

    await range.callMethod('setFocus');
    await range.callMethod('removeFocus');

    expect(slBlur).toHaveReceivedEventTimes(1);
  });

  it('should emit v-change when value changes with click', async () => {
    const page = await newE2EPage({
      html: `
        <v-range min="0" max="100" step="1"></v-range>
      `,
    });
    const range = await page.find('v-range');
    const slChange = await range.spyOnEvent('v-change');

    await range.click();

    expect(slChange).toHaveReceivedEventTimes(1);
  });

  it('should sync value when changed with click', async () => {
    const page = await newE2EPage({
      html: `
        <v-range min="0" max="100" step="1"></v-range>
      `,
    });
    const range = await page.find('v-range');

    await range.click();

    expect(await range.getProperty('value')).toBe(50);
  });
});
