import { newE2EPage } from '@stencil/core/testing';

describe('<v-switch>', () => {
  it('should emit v-focus when gaining focus', async () => {
    const page = await newE2EPage({
      html: `
        <v-switch>Switch</v-switch>
      `,
    });
    const switchEl = await page.find('v-switch');
    const slFocus = await switchEl.spyOnEvent('v-focus');

    await switchEl.click();

    expect(slFocus).toHaveReceivedEventTimes(1);
  });

  it('should emit v-blur when losing focus', async () => {
    const page = await newE2EPage({
      html: `
        <v-switch>Switch</v-switch>
        <button>Native Button</button>
      `,
    });
    const switchEl = await page.find('v-switch');
    const nativeButton = await page.find('button');
    const slBlur = await switchEl.spyOnEvent('v-blur');

    await switchEl.click();
    await nativeButton.click();

    expect(slBlur).toHaveReceivedEventTimes(1);
  });

  it('should emit v-focus when calling setFocus()', async () => {
    const page = await newE2EPage({
      html: `
        <v-switch>Switch</v-switch>
      `,
    });
    const switchEl = await page.find('v-switch');
    const slFocus = await switchEl.spyOnEvent('v-focus');

    await switchEl.callMethod('setFocus');

    expect(slFocus).toHaveReceivedEventTimes(1);
  });

  it('should emit v-blur when calling removeFocus()', async () => {
    const page = await newE2EPage({
      html: `
        <v-switch>Switch</v-switch>
      `,
    });
    const switchEl = await page.find('v-switch');
    const slBlur = await switchEl.spyOnEvent('v-blur');

    await switchEl.callMethod('setFocus');
    await switchEl.callMethod('removeFocus');

    expect(slBlur).toHaveReceivedEventTimes(1);
  });

  it('should emit v-change when checked state changes via click', async () => {
    const page = await newE2EPage({
      html: `
        <v-switch>Switch</v-switch>
      `,
    });
    const switchEl = await page.find('v-switch');
    const slChange = await switchEl.spyOnEvent('v-change');

    await switchEl.click();

    expect(slChange).toHaveReceivedEventTimes(1);
  });

  it('should emit v-change when setting checked attribute', async () => {
    const page = await newE2EPage({
      html: `
        <v-switch>Switch</v-switch>
      `,
    });
    const switchEl = await page.find('v-switch');
    const slChange = await switchEl.spyOnEvent('v-change');

    switchEl.setAttribute('checked', '');
    await page.waitForChanges();

    expect(slChange).toHaveReceivedEventTimes(1);
  });

  it('should emit v-change when removing checked attribute', async () => {
    const page = await newE2EPage({
      html: `
        <v-switch checked>Switch</v-switch>
      `,
    });
    const switchEl = await page.find('v-switch');
    const slChange = await switchEl.spyOnEvent('v-change');

    switchEl.removeAttribute('checked');
    await page.waitForChanges();

    expect(slChange).toHaveReceivedEventTimes(1);
  });

  it('should emit v-change when setting checked property to true', async () => {
    const page = await newE2EPage({
      html: `
        <v-switch>Switch</v-switch>
      `,
    });
    const switchEl = await page.find('v-switch');
    const slChange = await switchEl.spyOnEvent('v-change');

    switchEl.setProperty('checked', true);
    await page.waitForChanges();

    expect(slChange).toHaveReceivedEventTimes(1);
  });

  it('should emit v-change when setting checked property to false', async () => {
    const page = await newE2EPage({
      html: `
      <v-switch checked>Switch</v-switch>
      <button>Native Button</button>
      `,
    });
    const switchEl = await page.find('v-switch');
    const slChange = await switchEl.spyOnEvent('v-change');

    switchEl.setProperty('checked', false);
    await page.waitForChanges();

    expect(slChange).toHaveReceivedEventTimes(1);
  });
});
