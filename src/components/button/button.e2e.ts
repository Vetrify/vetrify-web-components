import { newE2EPage } from '@stencil/core/testing';

describe('<v-button>', () => {
  it('should emit v-focus when gaining focus', async () => {
    const page = await newE2EPage({
      html: `
        <v-button>Button</v-button>
      `,
    });
    const button = await page.find('v-button');
    const vFocus = await button.spyOnEvent('v-focus');

    await button.click();

    expect(vFocus).toHaveReceivedEventTimes(1);
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
    const vBlur = await button.spyOnEvent('v-blur');

    await button.click();
    await nativeButton.click();

    expect(vBlur).toHaveReceivedEventTimes(1);
  });

  it('should emit v-focus when calling setFocus()', async () => {
    const page = await newE2EPage({
      html: `
        <v-button>Button</v-button>
      `,
    });
    const button = await page.find('v-button');
    const vFocus = await button.spyOnEvent('v-focus');

    await button.callMethod('setFocus');

    expect(vFocus).toHaveReceivedEventTimes(1);
  });

  it('should emit v-blur when calling removeFocus()', async () => {
    const page = await newE2EPage({
      html: `
        <v-button>Button</v-button>
      `,
    });
    const button = await page.find('v-button');
    const vBlur = await button.spyOnEvent('v-blur');

    await button.callMethod('setFocus');
    await button.callMethod('removeFocus');

    expect(vBlur).toHaveReceivedEventTimes(1);
  });
});
