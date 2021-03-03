import { newE2EPage } from '@stencil/core/testing';

describe('<v-rating>', () => {
  it('should emit v-change when value changes with click', async () => {
    const page = await newE2EPage({
      html: `
        <v-rating></v-rating>>
      `,
    });
    const rating = await page.find('v-rating');
    const vChange = await rating.spyOnEvent('v-change');

    await rating.click();

    expect(vChange).toHaveReceivedEventTimes(1);
  });

  it('should sync value when clicked', async () => {
    const page = await newE2EPage({
      html: `
        <v-rating></v-rating>>
      `,
    });
    const rating = await page.find('v-rating');

    await rating.click(); // click in center = 3

    expect(await rating.getProperty('value')).toBe(3);
  });

  it('should reset value when the current rating is clicked', async () => {
    const page = await newE2EPage({
      html: `
        <v-rating value="3"></v-rating>>
      `,
    });
    const rating = await page.find('v-rating');

    await rating.click();

    expect(await rating.getProperty('value')).toBe(0);
  });
});
