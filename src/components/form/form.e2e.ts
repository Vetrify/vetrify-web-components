import { newE2EPage } from '@stencil/core/testing';

const testForm = `
  <v-form class="form-overview">
    <v-input name="name" type="text" label="Name" value="Mr. Meow"></v-input>
    <br>
    <v-select name="favorite" label="Select your favorite" value="cats">
      <v-menu-item value="birds">Birds</v-menu-item>
      <v-menu-item value="cats">Cats</v-menu-item>
      <v-menu-item value="dogs">Dogs</v-menu-item>
    </v-select>
    <br>
    <v-checkbox name="agree" value="yes" checked>
      I agree
    </v-checkbox>
    <br><br>
    <v-button submit>Submit</v-button>
  </v-form>
`;

describe('<v-form>', () => {
  it('should emit v-submit when submit button clicked', async () => {
    const page = await newE2EPage({
      html: testForm,
    });
    const form = await page.find('v-form');
    const button = await page.find('v-button');
    const slSubmit = await form.spyOnEvent('v-submit');

    await button.click();

    expect(slSubmit).toHaveReceivedEventTimes(1);
  });

  it('should emit v-submit when submit method called', async () => {
    const page = await newE2EPage({
      html: testForm,
    });
    const form = await page.find('v-form');
    const slSubmit = await form.spyOnEvent('v-submit');

    await form.callMethod('submit');

    expect(slSubmit).toHaveReceivedEventTimes(1);
  });

  it('should emit v-submit when enter pressed inside an input', async () => {
    const page = await newE2EPage({
      html: testForm,
    });
    const form = await page.find('v-form');
    const inputControl = await page.find('v-input >>> .input__control');
    const slSubmit = await form.spyOnEvent('v-submit');

    await inputControl.press('Enter');

    expect(slSubmit).toHaveReceivedEventTimes(1);
  });

  it('should return array of form elements when getFormControls() is called', async () => {
    const page = await newE2EPage({
      html: testForm,
    });
    const form = await page.find('v-form');
    const inputEl = await page.$eval('v-input', el => el);
    const selectEl = await page.$eval('v-select', el => el);
    const checkboxEl = await page.$eval('v-checkbox', el => el);
    const buttonEl = await page.$eval('v-button', el => el);
    const formControls = await form.callMethod('getFormControls');

    expect(formControls).toEqual([inputEl, selectEl, checkboxEl, buttonEl]);
  });

  it('should return FormData object when getFormData() is called', async () => {
    const page = await newE2EPage({
      html: testForm,
    });
    const formData = await page.$eval('v-form', async (el: HTMLVFormElement) => [...(await el.getFormData()).entries()]);

    expect(formData).toEqual([
      ['name', 'Mr. Meow'],
      ['favorite', 'cats'],
      ['agree', 'yes'],
    ]);
  });
});
