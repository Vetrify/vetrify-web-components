import { newE2EPage } from '@stencil/core/testing';

describe('<v-tag>', () => {
  it('should emit v-clear when cleared', async () => {
    const page = await newE2EPage({
      html: `
        <v-tag clearable>Tag</v-input>
      `
    });
    const tag = await page.find('v-tag');
    const tagClear = await page.find('v-tag >>> .tag__clear');
    const slClear = await tag.spyOnEvent('v-clear');

    await tagClear.click();

    expect(slClear).toHaveReceivedEventTimes(1);
  });
});
