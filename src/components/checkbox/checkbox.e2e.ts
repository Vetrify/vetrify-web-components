import { newE2EPage } from '@stencil/core/testing';

describe('<v-checkbox>', () => {
  it('should emit v-focus when gaining focus', async () => {
    const page = await newE2EPage({
      html: `
        <v-checkbox>Checkbox</v-checkbox>
      `,
    });
    const checkbox = await page.find('v-checkbox');
    const slFocus = await checkbox.spyOnEvent('v-focus');

    await checkbox.click();

    expect(slFocus).toHaveReceivedEventTimes(1);
  });

  it('should emit v-blur when losing focus', async () => {
    const page = await newE2EPage({
      html: `
        <v-checkbox>Checkbox</v-checkbox>
        <button>Native Button</button>
      `,
    });
    const checkbox = await page.find('v-checkbox');
    const nativeButton = await page.find('button');
    const slBlur = await checkbox.spyOnEvent('v-blur');

    await checkbox.click();
    await nativeButton.click();

    expect(slBlur).toHaveReceivedEventTimes(1);
  });

  it('should emit v-focus when calling setFocus()', async () => {
    const page = await newE2EPage({
      html: `
        <v-checkbox>Checkbox</v-checkbox>
      `,
    });
    const checkbox = await page.find('v-checkbox');
    const slFocus = await checkbox.spyOnEvent('v-focus');

    await checkbox.callMethod('setFocus');

    expect(slFocus).toHaveReceivedEventTimes(1);
  });

  it('should emit v-blur when calling removeFocus()', async () => {
    const page = await newE2EPage({
      html: `
        <v-checkbox>Checkbox</v-checkbox>
      `,
    });
    const checkbox = await page.find('v-checkbox');
    const slBlur = await checkbox.spyOnEvent('v-blur');

    await checkbox.callMethod('setFocus');
    await checkbox.callMethod('removeFocus');

    expect(slBlur).toHaveReceivedEventTimes(1);
  });

  it('should emit v-change when checked state changes via click', async () => {
    const page = await newE2EPage({
      html: `
        <v-checkbox>Checkbox</v-checkbox>
      `,
    });
    const checkbox = await page.find('v-checkbox');
    const slChange = await checkbox.spyOnEvent('v-change');

    await checkbox.click();

    expect(slChange).toHaveReceivedEventTimes(1);
  });

  it('should emit v-change when setting checked attribute', async () => {
    const page = await newE2EPage({
      html: `
        <v-checkbox>Checkbox</v-checkbox>
      `,
    });
    const checkbox = await page.find('v-checkbox');
    const slChange = await checkbox.spyOnEvent('v-change');

    checkbox.setAttribute('checked', '');
    await page.waitForChanges();

    expect(slChange).toHaveReceivedEventTimes(1);
  });

  it('should emit v-change when removing checked attribute', async () => {
    const page = await newE2EPage({
      html: `
        <v-checkbox checked>Checkbox</v-checkbox>
      `,
    });
    const checkbox = await page.find('v-checkbox');
    const slChange = await checkbox.spyOnEvent('v-change');

    checkbox.removeAttribute('checked');
    await page.waitForChanges();

    expect(slChange).toHaveReceivedEventTimes(1);
  });

  it('should emit v-change when setting checked property to true', async () => {
    const page = await newE2EPage({
      html: `
        <v-checkbox>Checkbox</v-checkbox>
      `,
    });
    const checkbox = await page.find('v-checkbox');
    const slChange = await checkbox.spyOnEvent('v-change');

    checkbox.setProperty('checked', true);
    await page.waitForChanges();

    expect(slChange).toHaveReceivedEventTimes(1);
  });

  it('should emit v-change when setting checked property to false', async () => {
    const page = await newE2EPage({
      html: `
      <v-checkbox checked>Checkbox</v-checkbox>
      <button>Native Button</button>
      `,
    });
    const checkbox = await page.find('v-checkbox');
    const slChange = await checkbox.spyOnEvent('v-change');

    checkbox.setProperty('checked', false);
    await page.waitForChanges();

    expect(slChange).toHaveReceivedEventTimes(1);
  });
});
