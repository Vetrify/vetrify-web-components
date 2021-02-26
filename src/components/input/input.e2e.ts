import { newE2EPage } from '@stencil/core/testing';

describe('<v-input>', () => {
  it('should emit v-focus when gaining focus', async () => {
    const page = await newE2EPage({
      html: `
        <v-input></v-input>
      `,
    });
    const input = await page.find('v-input');
    const slFocus = await input.spyOnEvent('v-focus');

    await input.click();

    expect(slFocus).toHaveReceivedEventTimes(1);
  });

  it('should emit v-blur when losing focus', async () => {
    const page = await newE2EPage({
      html: `
        <v-input></v-input>
        <button>Other Element</button>
      `,
    });
    const input = await page.find('v-input');
    const button = await page.find('button');
    const slBlur = await input.spyOnEvent('v-blur');

    await input.click();
    await button.click();

    expect(slBlur).toHaveReceivedEventTimes(1);
  });

  it('should emit v-focus when setFocus() is called', async () => {
    const page = await newE2EPage({
      html: `
        <v-input></v-input>
      `,
    });
    const input = await page.find('v-input');
    const slFocus = await input.spyOnEvent('v-focus');

    await input.callMethod('setFocus');

    expect(slFocus).toHaveReceivedEventTimes(1);
  });

  it('should emit v-blur when removeFocus() is called', async () => {
    const page = await newE2EPage({
      html: `
        <v-input></v-input>
      `,
    });
    const input = await page.find('v-input');
    const slBlur = await input.spyOnEvent('v-blur');

    await input.callMethod('setFocus');
    await input.callMethod('removeFocus');

    expect(slBlur).toHaveReceivedEventTimes(1);
  });

  it('should emit v-change when text is entered and focus is removed', async () => {
    const page = await newE2EPage({
      html: `
        <v-input></v-input>
      `,
    });
    const input = await page.find('v-input');
    const inputControl = await page.find('v-input >>> .input__control');
    const slChange = await input.spyOnEvent('v-change');

    await inputControl.press('A');
    await input.callMethod('removeFocus');

    expect(slChange).toHaveReceivedEventTimes(1);
  });

  it('should emit v-input when text entered', async () => {
    const page = await newE2EPage({
      html: `
        <v-input></v-input>
      `,
    });
    const input = await page.find('v-input');
    const inputControl = await page.find('v-input >>> .input__control');
    const slInput = await input.spyOnEvent('v-input');

    await inputControl.press('A');

    expect(slInput).toHaveReceivedEventTimes(1);
  });

  it('should sync value when text is entered', async () => {
    const page = await newE2EPage({
      html: `
        <v-input></v-input>
        <button>Other Element</button>
      `,
    });
    const input = await page.find('v-input');
    const inputControl = await page.find('v-input >>> .input__control');

    await inputControl.press('A');

    expect(await input.getProperty('value')).toBe('A');
  });

  it('should emit v-clear when cleared', async () => {
    const page = await newE2EPage({
      html: `
        <v-input clearable></v-input>
      `,
    });
    const input = await page.find('v-input');
    const inputControl = await page.find('v-input >>> .input__control');
    const inputClear = await page.find('v-input >>> .input__clear');
    const slClear = await input.spyOnEvent('v-clear');

    await inputControl.press('A');
    await inputClear.click();

    expect(slClear).toHaveReceivedEventTimes(1);
  });

  it('should select all text when select() method is called', async () => {
    const page = await newE2EPage({
      html: `
        <v-input></v-input>
      `,
    });
    const input = await page.find('v-input');
    const inputControl = await page.find('v-input >>> .input__control');

    await inputControl.press('S');
    await inputControl.press('h');
    await inputControl.press('o');
    await inputControl.press('e');
    await input.callMethod('select');

    const selectedText = await page.evaluate(() => window.getSelection().toString());
    expect(selectedText).toBe('Shoe');
  });

  it('should select a range of text when setSelectionRange() is called', async () => {
    const page = await newE2EPage({
      html: `
        <v-input></v-input>
      `,
    });
    const input = await page.find('v-input');
    const inputControl = await page.find('v-input >>> .input__control');

    await inputControl.press('S');
    await inputControl.press('h');
    await inputControl.press('o');
    await inputControl.press('e');
    await input.callMethod('setSelectionRange', 1, 3);

    const selectedText = await page.evaluate(() => window.getSelection().toString());
    expect(selectedText).toBe('ho');
  });

  it('should replace text when setRangeText() is called', async () => {
    const page = await newE2EPage({
      html: `
        <v-input></v-input>
      `,
    });
    const input = await page.find('v-input');
    const inputControl = await page.find('v-input >>> .input__control');

    await inputControl.press('S');
    await inputControl.press('h');
    await inputControl.press('o');
    await inputControl.press('e');
    await input.callMethod('setRangeText', 'ur', 1, 3);

    const value = await input.getProperty('value');
    expect(value).toBe('Sure');
  });
});
