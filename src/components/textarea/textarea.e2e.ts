import { newE2EPage } from '@stencil/core/testing';

describe('<v-textarea>', () => {
  it('should emit v-focus when gaining focus', async () => {
    const page = await newE2EPage({
      html: `
        <v-textarea></v-textarea>
      `,
    });
    const textarea = await page.find('v-textarea');
    const vFocus = await textarea.spyOnEvent('v-focus');

    await textarea.click();

    expect(vFocus).toHaveReceivedEventTimes(1);
  });

  it('should emit v-blur when losing focus', async () => {
    const page = await newE2EPage({
      html: `
        <v-textarea></v-textarea>
        <button>Other Element</button>
      `,
    });
    const textarea = await page.find('v-textarea');
    const button = await page.find('button');
    const vBlur = await textarea.spyOnEvent('v-blur');

    await textarea.click();
    await button.click();

    expect(vBlur).toHaveReceivedEventTimes(1);
  });

  it('should emit v-focus when setFocus() is called', async () => {
    const page = await newE2EPage({
      html: `
        <v-textarea></v-textarea>
      `,
    });
    const textarea = await page.find('v-textarea');
    const vFocus = await textarea.spyOnEvent('v-focus');

    await textarea.callMethod('setFocus');

    expect(vFocus).toHaveReceivedEventTimes(1);
  });

  it('should emit sk-blur when removeFocus() is called', async () => {
    const page = await newE2EPage({
      html: `
        <v-textarea></v-textarea>
      `,
    });
    const textarea = await page.find('v-textarea');
    const vBlur = await textarea.spyOnEvent('v-blur');

    await textarea.callMethod('setFocus');
    await textarea.callMethod('removeFocus');

    expect(vBlur).toHaveReceivedEventTimes(1);
  });

  it('should emit v-change when text is entered and focus is removed', async () => {
    const page = await newE2EPage({
      html: `
        <v-textarea></v-textarea>
      `,
    });
    const textarea = await page.find('v-textarea');
    const textareaControl = await page.find('v-textarea >>> .textarea__control');
    const vChange = await textarea.spyOnEvent('v-change');

    await textareaControl.press('A');
    await textarea.callMethod('removeFocus');

    expect(vChange).toHaveReceivedEventTimes(1);
  });

  it('should emit v-textarea when text entered', async () => {
    const page = await newE2EPage({
      html: `
        <v-textarea></v-textarea>
      `,
    });
    const textarea = await page.find('v-textarea');
    const textareaControl = await page.find('v-textarea >>> .textarea__control');
    const vInput = await textarea.spyOnEvent('v-input');

    await textareaControl.press('A');

    expect(vInput).toHaveReceivedEventTimes(1);
  });

  it('should sync value when text is entered', async () => {
    const page = await newE2EPage({
      html: `
        <v-textarea></v-textarea>
        <button>Other Element</button>
      `,
    });
    const textarea = await page.find('v-textarea');
    const textareaControl = await page.find('v-textarea >>> .textarea__control');

    await textareaControl.press('A');

    expect(await textarea.getProperty('value')).toBe('A');
  });

  it('should select all text when select() method is called', async () => {
    const page = await newE2EPage({
      html: `
        <v-textarea></v-textarea>
      `,
    });
    const textarea = await page.find('v-textarea');
    const textareaControl = await page.find('v-textarea >>> .textarea__control');

    await textareaControl.press('S');
    await textareaControl.press('h');
    await textareaControl.press('o');
    await textareaControl.press('e');
    await textarea.callMethod('select');

    const selectedText = await page.evaluate(() => window.getSelection().toString());

    expect(selectedText).toBe('Shoe');
  });

  it('should select a range of text when setSelectionRange() is called', async () => {
    const page = await newE2EPage({
      html: `
        <v-textarea></v-textarea>
      `,
    });
    const textarea = await page.find('v-textarea');
    const textareaControl = await page.find('v-textarea >>> .textarea__control');

    await textareaControl.press('S');
    await textareaControl.press('h');
    await textareaControl.press('o');
    await textareaControl.press('e');
    await textarea.callMethod('setSelectionRange', 1, 3);

    const selectedText = await page.evaluate(() => window.getSelection().toString());

    expect(selectedText).toBe('ho');
  });

  it('should replace text when setRangeText() is called', async () => {
    const page = await newE2EPage({
      html: `
        <v-textarea></v-textarea>
      `,
    });
    const textarea = await page.find('v-textarea');
    const textareaControl = await page.find('v-textarea >>> .textarea__control');

    await textareaControl.press('S');
    await textareaControl.press('h');
    await textareaControl.press('o');
    await textareaControl.press('e');
    await textarea.callMethod('setRangeText', 'ur', 1, 3);

    const value = await textarea.getProperty('value');

    expect(value).toBe('Sure');
  });
});
