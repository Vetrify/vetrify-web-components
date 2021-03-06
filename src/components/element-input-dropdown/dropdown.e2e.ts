import { newE2EPage } from '@stencil/core/testing';

describe('<v-dropdown>', () => {
  it('should open when the open attribute is added', async () => {
    const page = await newE2EPage({
      html: `
        <v-dropdown>
          <v-button slot="trigger" caret>Dropdown</v-button>
          <v-menu>
            <v-menu-item>Dropdown Item</v-menu-item>
          </v-menu>
        </v-dropdown>
      `,
    });
    const dropdown = await page.find('v-dropdown');
    const panel = await page.find('v-dropdown >>> .dropdown__panel');
    const vShow = await dropdown.spyOnEvent('v-show');
    const vAfterShow = await dropdown.spyOnEvent('v-after-show');

    expect(await panel.isVisible()).toBe(false);

    const showEventHappened = dropdown.waitForEvent('v-after-show');
    dropdown.setAttribute('open', '');
    await page.waitForChanges();
    await showEventHappened;

    expect(await panel.isVisible()).toBe(true);
    expect(vShow).toHaveReceivedEventTimes(1);
    expect(vAfterShow).toHaveReceivedEventTimes(1);
  });

  it('should close when the open attribute is removed', async () => {
    const page = await newE2EPage({
      html: `
        <v-dropdown open>
          <v-button slot="trigger" caret>Dropdown</v-button>
          <v-menu>
            <v-menu-item>Dropdown Item</v-menu-item>
          </v-menu>
        </v-dropdown>
      `,
    });
    const dropdown = await page.find('v-dropdown');
    const panel = await page.find('v-dropdown >>> .dropdown__panel');
    const vHide = await dropdown.spyOnEvent('v-hide');
    const vAfterHide = await dropdown.spyOnEvent('v-after-hide');

    expect(await panel.isVisible()).toBe(true);

    const hideEventHappened = dropdown.waitForEvent('v-after-hide');
    dropdown.removeAttribute('open');
    await page.waitForChanges();
    await hideEventHappened;

    expect(await panel.isVisible()).toBe(false);
    expect(vHide).toHaveReceivedEventTimes(1);
    expect(vAfterHide).toHaveReceivedEventTimes(1);
  });

  it('should open when the show() method is called', async () => {
    const page = await newE2EPage({
      html: `
        <v-dropdown>
          <v-button slot="trigger" caret>Dropdown</v-button>
          <v-menu>
            <v-menu-item>Dropdown Item</v-menu-item>
          </v-menu>
        </v-dropdown>
      `,
    });
    const dropdown = await page.find('v-dropdown');
    const panel = await page.find('v-dropdown >>> .dropdown__panel');
    const vShow = await dropdown.spyOnEvent('v-show');
    const vAfterShow = await dropdown.spyOnEvent('v-after-show');

    expect(await panel.isVisible()).toBe(false);

    const showEventHappened = dropdown.waitForEvent('v-after-show');
    await dropdown.callMethod('show');
    await showEventHappened;

    expect(await panel.isVisible()).toBe(true);
    expect(vShow).toHaveReceivedEventTimes(1);
    expect(vAfterShow).toHaveReceivedEventTimes(1);
  });

  it('should close when the hide() method is called', async () => {
    const page = await newE2EPage({
      html: `
        <v-dropdown open>
          <v-button slot="trigger" caret>Dropdown</v-button>
          <v-menu>
            <v-menu-item>Dropdown Item</v-menu-item>
          </v-menu>
        </v-dropdown>
      `,
    });

    const dropdown = await page.find('v-dropdown');
    const panel = await page.find('v-dropdown >>> .dropdown__panel');
    const vHide = await dropdown.spyOnEvent('v-hide');
    const vAfterHide = await dropdown.spyOnEvent('v-after-hide');

    expect(await panel.isVisible()).toBe(true);

    const hideEventHappened = dropdown.waitForEvent('v-after-hide');
    await dropdown.callMethod('hide');
    await hideEventHappened;

    expect(await panel.isVisible()).toBe(false);
    expect(vHide).toHaveReceivedEventTimes(1);
    expect(vAfterHide).toHaveReceivedEventTimes(1);
  });

  it('should open when clicked and hidden', async () => {
    const page = await newE2EPage({
      html: `
        <v-dropdown>
          <v-button slot="trigger" caret>Dropdown</v-button>
          <v-menu>
            <v-menu-item>Dropdown Item</v-menu-item>
          </v-menu>
        </v-dropdown>
      `,
    });
    const dropdown = await page.find('v-dropdown');
    const panel = await page.find('v-dropdown >>> .dropdown__panel');
    const vShow = await dropdown.spyOnEvent('v-show');
    const vAfterShow = await dropdown.spyOnEvent('v-after-show');

    expect(await panel.isVisible()).toBe(false);

    const showEventHappened = dropdown.waitForEvent('v-after-show');
    await dropdown.click();
    await showEventHappened;

    expect(await panel.isVisible()).toBe(true);
    expect(vShow).toHaveReceivedEventTimes(1);
    expect(vAfterShow).toHaveReceivedEventTimes(1);
  });

  it('should close when clicked while showing', async () => {
    const page = await newE2EPage({
      html: `
        <v-dropdown open>
          <v-button slot="trigger" caret>Dropdown</v-button>
          <v-menu>
            <v-menu-item>Dropdown Item</v-menu-item>
          </v-menu>
        </v-dropdown>
      `,
    });
    const dropdown = await page.find('v-dropdown');
    const panel = await page.find('v-dropdown >>> .dropdown__panel');
    const vHide = await dropdown.spyOnEvent('v-hide');
    const vAfterHide = await dropdown.spyOnEvent('v-after-hide');

    expect(await panel.isVisible()).toBe(true);

    const afterEventHappened = dropdown.waitForEvent('v-after-hide');
    await dropdown.click();
    await afterEventHappened;

    expect(await panel.isVisible()).toBe(false);
    expect(vHide).toHaveReceivedEventTimes(1);
    expect(vAfterHide).toHaveReceivedEventTimes(1);
  });

  it('should close when an item is selected', async () => {
    const page = await newE2EPage({
      html: `
        <v-dropdown open>
          <v-button slot="trigger" caret>Dropdown</v-button>
          <v-menu>
            <v-menu-item>Dropdown Item</v-menu-item>
          </v-menu>
        </v-dropdown>
      `,
    });
    const dropdown = await page.find('v-dropdown');
    const panel = await page.find('v-dropdown >>> .dropdown__panel');

    expect(await panel.isVisible()).toBe(true);

    const eventHappened = dropdown.waitForEvent('v-after-hide');
    await panel.click();
    await eventHappened;

    expect(await panel.isVisible()).toBe(false);
  });

  it('should not close when an item is selected and closeOnSelect is true', async () => {
    const page = await newE2EPage({
      html: `
          <v-dropdown open>
            <v-button slot="trigger" caret>Dropdown</v-button>
            <v-menu>
              <v-menu-item>Dropdown Item</v-menu-item>
            </v-menu>
          </v-dropdown>
        `,
    });
    const dropdown = await page.find('v-dropdown');
    const panel = await page.find('v-dropdown >>> .dropdown__panel');

    dropdown.setProperty('closeOnSelect', false);
    await page.waitForChanges();
    expect(await panel.isVisible()).toBe(true);

    await panel.click();
    expect(await panel.isVisible()).toBe(true);
  });
});
