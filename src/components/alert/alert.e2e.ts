import { newE2EPage } from '@stencil/core/testing';

describe('<v-alert>', () => {
  it('should open when the open attribute is set', async () => {
    const page = await newE2EPage({
      html: `
        <v-alert>This is an alert</v-alert>
      `,
    });
    const alert = await page.find('v-alert');
    const base = await page.find('v-alert >>> .alert');
    const vShow = await alert.spyOnEvent('v-show');
    const vAfterShow = await alert.spyOnEvent('v-after-show');

    expect(await base.isVisible()).toBe(false);

    const showEventHappened = alert.waitForEvent('v-after-show');
    alert.setAttribute('open', '');
    await page.waitForChanges();
    await showEventHappened;

    expect(await base.isVisible()).toBe(true);
    expect(vShow).toHaveReceivedEventTimes(1);
    expect(vAfterShow).toHaveReceivedEventTimes(1);
  });

  it('should close when the open attribute is removed', async () => {
    const page = await newE2EPage({
      html: `
        <v-alert open>This is an alert</v-alert>
      `,
    });
    const alert = await page.find('v-alert');
    const base = await page.find('v-alert >>> .alert');
    const vHide = await alert.spyOnEvent('v-hide');
    const vAfterHide = await alert.spyOnEvent('v-after-hide');

    expect(await base.isVisible()).toBe(true);

    const hideEventHappened = alert.waitForEvent('v-after-hide');
    alert.removeAttribute('open');
    await page.waitForChanges();
    await hideEventHappened;

    expect(await base.isVisible()).toBe(false);
    expect(vHide).toHaveReceivedEventTimes(1);
    expect(vAfterHide).toHaveReceivedEventTimes(1);
  });

  it('should open with the show() method', async () => {
    const page = await newE2EPage({
      html: `
        <v-alert>This is an alert</v-alert>
      `,
    });
    const alert = await page.find('v-alert');
    const base = await page.find('v-alert >>> .alert');
    const vShow = await alert.spyOnEvent('v-show');
    const vAfterShow = await alert.spyOnEvent('v-after-show');

    expect(await base.isVisible()).toBe(false);

    const showEventHappened = alert.waitForEvent('v-after-show');
    await alert.callMethod('show');
    await showEventHappened;

    expect(await base.isVisible()).toBe(true);
    expect(vShow).toHaveReceivedEventTimes(1);
    expect(vAfterShow).toHaveReceivedEventTimes(1);
  });

  it('should close with the hide() method', async () => {
    const page = await newE2EPage({
      html: `
        <v-alert open>This is an alert</v-alert>
      `,
    });
    const alert = await page.find('v-alert');
    const base = await page.find('v-alert >>> .alert');
    const vHide = await alert.spyOnEvent('v-hide');
    const vAfterHide = await alert.spyOnEvent('v-after-hide');

    expect(await base.isVisible()).toBe(true);

    const hideEventHappened = alert.waitForEvent('v-after-hide');
    await alert.callMethod('hide');
    await hideEventHappened;

    expect(await base.isVisible()).toBe(false);
    expect(vHide).toHaveReceivedEventTimes(1);
    expect(vAfterHide).toHaveReceivedEventTimes(1);
  });
});
