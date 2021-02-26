import { newE2EPage } from '@stencil/core/testing';

describe('<v-button>', () => {
  it('should emit v-focus when gaining focus', async () => {
    const page = await newE2EPage({
      html: `
        <v-button>Button</v-button>
      `,
    });
    const button = await page.find('v-button');
    const slFocus = await button.spyOnEvent('v-focus');

    await button.click();

    expect(slFocus).toHaveReceivedEventTimes(1);
  });

  it('should emit v-blur when losing focus', async () => {
    const page = await newE2EPage({
      html: `
        <v-button>Button</v-button>
        <button>Native Button</button>
      `,
    });
    const button = await page.find('v-button');
    const nativeButton = await page.find('button');
    const slBlur = await button.spyOnEvent('v-blur');

    await button.click();
    await nativeButton.click();

    expect(slBlur).toHaveReceivedEventTimes(1);
  });

  it('should emit v-focus when calling setFocus()', async () => {
    const page = await newE2EPage({
      html: `
        <v-button>Button</v-button>
      `,
    });
    const button = await page.find('v-button');
    const slFocus = await button.spyOnEvent('v-focus');

    await button.callMethod('setFocus');

    expect(slFocus).toHaveReceivedEventTimes(1);
  });

  it('should emit v-blur when calling removeFocus()', async () => {
    const page = await newE2EPage({
      html: `
        <v-button>Button</v-button>
      `,
    });
    const button = await page.find('v-button');
    const slBlur = await button.spyOnEvent('v-blur');

    await button.callMethod('setFocus');
    await button.callMethod('removeFocus');

    expect(slBlur).toHaveReceivedEventTimes(1);
  });
});
