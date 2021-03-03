import { newE2EPage } from '@stencil/core/testing';

describe('<v-dialog>', () => {
  it('should open when the open attribute added', async () => {
    const page = await newE2EPage({
      html: `
        <v-dialog>This is a dialog.</v-dialog>
      `,
    });
    const dialog = await page.find('v-dialog');
    const base = await page.find('v-dialog >>> .dialog');
    const vShow = await dialog.spyOnEvent('v-show');
    const vAfterShow = await dialog.spyOnEvent('v-after-show');

    expect(await base.isVisible()).toBe(false);

    const showEventHappened = dialog.waitForEvent('v-after-show');
    dialog.setAttribute('open', '');
    await page.waitForChanges();
    await showEventHappened;

    expect(await base.isVisible()).toBe(true);
    expect(vShow).toHaveReceivedEventTimes(1);
    expect(vAfterShow).toHaveReceivedEventTimes(1);
  });

  it('should close when the open attribute is removed', async () => {
    const page = await newE2EPage({
      html: `
        <v-dialog open>This is a dialog.</v-dialog>
      `,
    });
    const dialog = await page.find('v-dialog');
    const base = await page.find('v-dialog >>> .dialog');
    const vHide = await dialog.spyOnEvent('v-hide');
    const vAfterHide = await dialog.spyOnEvent('v-after-hide');

    expect(await base.isVisible()).toBe(true);

    const hideEventHappened = dialog.waitForEvent('v-after-hide');
    dialog.removeAttribute('open');
    await page.waitForChanges();
    await hideEventHappened;

    expect(await base.isVisible()).toBe(false);
    expect(vHide).toHaveReceivedEventTimes(1);
    expect(vAfterHide).toHaveReceivedEventTimes(1);
  });

  it('should open when the show() method is called', async () => {
    const page = await newE2EPage({
      html: `
        <v-dialog>This is a dialog.</v-dialog>
      `,
    });
    const dialog = await page.find('v-dialog');
    const base = await page.find('v-dialog >>> .dialog');
    const vShow = await dialog.spyOnEvent('v-show');
    const vAfterShow = await dialog.spyOnEvent('v-after-show');

    expect(await base.isVisible()).toBe(false);

    const showEventHappened = dialog.waitForEvent('v-after-show');
    await dialog.callMethod('show');
    await showEventHappened;

    expect(await base.isVisible()).toBe(true);
    expect(vShow).toHaveReceivedEventTimes(1);
    expect(vAfterShow).toHaveReceivedEventTimes(1);
  });

  it('should close when the hide() method is called', async () => {
    const page = await newE2EPage({
      html: `
        <v-dialog open>This is a dialog.</v-dialog>
      `,
    });
    const dialog = await page.find('v-dialog');
    const base = await page.find('v-dialog >>> .dialog');
    const vHide = await dialog.spyOnEvent('v-hide');
    const vAfterHide = await dialog.spyOnEvent('v-after-hide');

    expect(await base.isVisible()).toBe(true);

    const hideEventHappened = dialog.waitForEvent('v-after-hide');
    await dialog.callMethod('hide');
    await hideEventHappened;

    expect(await base.isVisible()).toBe(false);
    expect(vHide).toHaveReceivedEventTimes(1);
    expect(vAfterHide).toHaveReceivedEventTimes(1);
  });

  it('should emit v-overlay-dismiss when the overlay is clicked', async () => {
    const page = await newE2EPage({
      html: `
        <v-dialog open>This is a dialog.</v-dialog>
      `,
    });
    const dialog = await page.find('v-dialog');
    const vOverlayDismiss = await dialog.spyOnEvent('v-overlay-dismiss');

    // We can't use the click method on the overlay since the click is in the middle, which will be behind the panel
    await page.mouse.click(0, 0);
    await page.waitForChanges();

    expect(vOverlayDismiss).toHaveReceivedEventTimes(1);
  });
});
