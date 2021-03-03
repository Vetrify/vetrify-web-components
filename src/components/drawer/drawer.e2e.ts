import { newE2EPage } from '@stencil/core/testing';

describe('<v-drawer>', () => {
  it('should open when the open attribute added', async () => {
    const page = await newE2EPage({
      html: `
        <v-drawer>This is a drawer.</v-drawer>
      `,
    });
    const drawer = await page.find('v-drawer');
    const base = await page.find('v-drawer >>> .drawer');
    const vShow = await drawer.spyOnEvent('v-show');
    const vAfterShow = await drawer.spyOnEvent('v-after-show');

    expect(await base.isVisible()).toBe(false);

    const showEventHappened = drawer.waitForEvent('v-after-show');
    drawer.setAttribute('open', '');
    await page.waitForChanges();
    await showEventHappened;

    expect(await base.isVisible()).toBe(true);
    expect(vShow).toHaveReceivedEventTimes(1);
    expect(vAfterShow).toHaveReceivedEventTimes(1);
  });

  it('should close when the open attribute is removed', async () => {
    const page = await newE2EPage({
      html: `
        <v-drawer open>This is a drawer.</v-drawer>
      `,
    });
    const drawer = await page.find('v-drawer');
    const base = await page.find('v-drawer >>> .drawer');
    const vHide = await drawer.spyOnEvent('v-hide');
    const vAfterHide = await drawer.spyOnEvent('v-after-hide');

    expect(await base.isVisible()).toBe(true);

    const hideEventHappened = drawer.waitForEvent('v-after-hide');
    drawer.removeAttribute('open');
    await page.waitForChanges();
    await hideEventHappened;

    expect(await base.isVisible()).toBe(false);
    expect(vHide).toHaveReceivedEventTimes(1);
    expect(vAfterHide).toHaveReceivedEventTimes(1);
  });

  it('should open when the show() method is called', async () => {
    const page = await newE2EPage({
      html: `
        <v-drawer>This is a drawer.</v-drawer>
      `,
    });
    const drawer = await page.find('v-drawer');
    const base = await page.find('v-drawer >>> .drawer');
    const vShow = await drawer.spyOnEvent('v-show');
    const vAfterShow = await drawer.spyOnEvent('v-after-show');

    expect(await base.isVisible()).toBe(false);

    const showEventHappened = drawer.waitForEvent('v-after-show');
    await drawer.callMethod('show');
    await showEventHappened;

    expect(await base.isVisible()).toBe(true);
    expect(vShow).toHaveReceivedEventTimes(1);
    expect(vAfterShow).toHaveReceivedEventTimes(1);
  });

  it('should close when the hide() method is called', async () => {
    const page = await newE2EPage({
      html: `
        <v-drawer open>This is a drawer.</v-drawer>
      `,
    });
    const drawer = await page.find('v-drawer');
    const base = await page.find('v-drawer >>> .drawer');
    const vHide = await drawer.spyOnEvent('v-hide');
    const vAfterHide = await drawer.spyOnEvent('v-after-hide');

    expect(await base.isVisible()).toBe(true);

    const hideEventHappened = drawer.waitForEvent('v-after-hide');
    await drawer.callMethod('hide');
    await hideEventHappened;

    expect(await base.isVisible()).toBe(false);
    expect(vHide).toHaveReceivedEventTimes(1);
    expect(vAfterHide).toHaveReceivedEventTimes(1);
  });

  it('should emit v-overlay-dismiss when the overlay is clicked', async () => {
    const page = await newE2EPage({
      html: `
        <v-drawer open>This is a drawer.</v-drawer>
      `,
    });
    const drawer = await page.find('v-drawer');
    const vOverlayDismiss = await drawer.spyOnEvent('v-overlay-dismiss');

    // We can't use the click method on the overlay since the click is in the middle, which will be behind the panel
    await page.mouse.click(0, 0);
    await page.waitForChanges();

    expect(vOverlayDismiss).toHaveReceivedEventTimes(1);
  });
});
