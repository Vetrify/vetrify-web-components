import { newE2EPage } from '@stencil/core/testing';

describe('<v-details>', () => {
  it('should open and close when summary is clicked', async () => {
    const page = await newE2EPage({
      html: `
        <v-details summary="Toggle Me">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-details>
      `,
    });
    const details = await page.find('v-details');
    const header = await page.find('v-details >>> header');
    const base = await page.find('v-details >>> .details__body');

    let style = await base.getComputedStyle();
    expect(style.height).toBe('0px');

    const showEventHappened = details.waitForEvent('v-after-show');
    await header.click();
    await showEventHappened;
    style = await base.getComputedStyle();
    expect(style.height).not.toBe('0px');

    const hideEventHappened = details.waitForEvent('v-after-hide');
    await header.click();
    await hideEventHappened;
    style = await base.getComputedStyle();
    expect(style.height).toBe('0px');
  });

  it('should open and close with the show() and hide() methods', async () => {
    const page = await newE2EPage({
      html: `
        <v-details summary="Toggle Me">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-details>
      `,
    });
    const details = await page.find('v-details');
    const base = await page.find('v-details >>> .details__body');

    let style = await base.getComputedStyle();
    expect(style.height).toBe('0px');

    const showEventHappened = details.waitForEvent('v-after-show');
    await details.callMethod('show');
    await showEventHappened;
    style = await base.getComputedStyle();
    expect(style.height).not.toBe('0px');

    const hideEventHappened = details.waitForEvent('v-after-hide');
    await details.callMethod('hide');
    await hideEventHappened;
    style = await base.getComputedStyle();
    expect(style.height).toBe('0px');
  });

  it('should open and close when the open attribute is added and removed', async () => {
    const page = await newE2EPage({
      html: `
        <v-details summary="Toggle Me">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-details>
      `,
    });
    const details = await page.find('v-details');
    const base = await page.find('v-details >>> .details__body');

    let style = await base.getComputedStyle();
    expect(style.height).toBe('0px');

    const showEventHappened = details.waitForEvent('v-after-show');
    details.setAttribute('open', '');
    await page.waitForChanges();
    await showEventHappened;
    style = await base.getComputedStyle();
    expect(style.height).not.toBe('0px');

    const hideEventHappened = details.waitForEvent('v-after-hide');
    details.removeAttribute('open');
    await page.waitForChanges();
    await hideEventHappened;
    style = await base.getComputedStyle();
    expect(style.height).toBe('0px');
  });

  it('should emit v-show and v-after-show events when opened', async () => {
    const page = await newE2EPage({
      html: `
        <v-details summary="Toggle Me">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-details>
      `,
    });
    const details = await page.find('v-details');
    const slShow = await details.spyOnEvent('v-show');
    const slAfterShow = await details.spyOnEvent('v-after-show');
    const showEventHappened = details.waitForEvent('v-after-show');

    await details.callMethod('show');
    await showEventHappened;

    expect(slShow).toHaveReceivedEventTimes(1);
    expect(slAfterShow).toHaveReceivedEventTimes(1);
  });

  it('should emit v-hide and v-after-hide events when closed', async () => {
    const page = await newE2EPage({
      html: `
        <v-details summary="Toggle Me" open>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-details>
      `,
    });
    const details = await page.find('v-details');
    const slHide = await details.spyOnEvent('v-hide');
    const slAfterHide = await details.spyOnEvent('v-after-hide');
    const hideEventHappened = details.waitForEvent('v-after-hide');

    await details.callMethod('hide');
    await hideEventHappened;

    expect(slHide).toHaveReceivedEventTimes(1);
    expect(slAfterHide).toHaveReceivedEventTimes(1);
  });
});
