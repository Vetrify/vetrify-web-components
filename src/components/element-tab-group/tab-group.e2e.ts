import { newE2EPage } from '@stencil/core/testing';

const testTabGroup = `
  <v-tab-group>
    <v-tab slot="nav" panel="general">General</v-tab>
    <v-tab slot="nav" panel="custom">Custom</v-tab>
    <v-tab slot="nav" panel="advanced">Advanced</v-tab>

    <v-tab-panel name="general">This is the general tab panel.</v-tab-panel>
    <v-tab-panel name="custom">This is the custom tab panel.</v-tab-panel>
    <v-tab-panel name="advanced">This is the advanced tab panel.</v-tab-panel>
  </v-tab-group>
`;

describe('<v-tab group>', () => {
  it('should only show first panel by default', async () => {
    const page = await newE2EPage({
      html: testTabGroup,
    });
    const firstPanelName = 'general';
    const firstPanel = await page.find(`v-tab-panel[name=${firstPanelName}]`);

    expect(await firstPanel.isVisible()).toBe(true);

    const otherPanels = await page.findAll(`v-tab-panel:not([name=${firstPanelName}]`);
    for (let panel of otherPanels) {
      expect(await panel.isVisible()).not.toBe(true);
    }
  });

  it('should have first tab activated by default', async () => {
    const page = await newE2EPage({
      html: testTabGroup,
    });
    const firstPanelName = 'general';
    const tab = await page.find(`v-tab[panel=${firstPanelName}] >>> .tab`);

    expect(tab).toHaveClass('tab--active');
  });

  it('should show appropriate panel when tab is selected by clicking', async () => {
    const page = await newE2EPage({
      html: testTabGroup,
    });
    const selectedPanelName = 'custom';
    const selectedTab = await page.find(`v-tab[panel=${selectedPanelName}]`);

    await selectedTab.click();

    const selectedPanel = await page.find(`v-tab-panel[name=${selectedPanelName}]`);
    expect(await selectedPanel.isVisible()).toBe(true);

    const otherPanels = await page.findAll(`v-tab-panel:not([name=${selectedPanelName}]`);
    for (let panel of otherPanels) {
      expect(await panel.isVisible()).not.toBe(true);
    }
  });

  it('should have appropriate tab activated when selected by clicking', async () => {
    const page = await newE2EPage({
      html: testTabGroup,
    });
    const selectedPanelName = 'advanced';
    const selectedTab = await page.find(`v-tab[panel=${selectedPanelName}]`);

    await selectedTab.click();

    const tab = await page.find(`v-tab[panel=${selectedPanelName}] >>> .tab`);
    expect(tab).toHaveClass('tab--active');
  });

  it('should show appropriate panel when show() is called', async () => {
    const page = await newE2EPage({
      html: testTabGroup,
    });
    const selectedPanelName = 'custom';
    const tabGroup = await page.find('v-tab-group');

    await tabGroup.callMethod('show', selectedPanelName);

    const selectedPanel = await page.find(`v-tab-panel[name=${selectedPanelName}]`);
    expect(await selectedPanel.isVisible()).toBe(true);

    const tab = await page.find(`v-tab[panel=${selectedPanelName}] >>> .tab`);
    expect(tab).toHaveClass('tab--active');
  });

  it('should emit v-tab-hide and v-tab-show events when tab is changed', async () => {
    const page = await newE2EPage({
      html: testTabGroup,
    });
    const tabGroup = await page.find('v-tab-group');
    const vTabHide = await tabGroup.spyOnEvent('v-tab-hide');
    const vTabShow = await tabGroup.spyOnEvent('v-tab-show');
    const selectedPanelName = 'advanced';
    const selectedTab = await page.find(`v-tab[panel=${selectedPanelName}]`);

    await selectedTab.click();

    expect(vTabHide).toHaveReceivedEventTimes(1);
    expect(vTabHide).toHaveReceivedEventDetail({ name: 'general' });
    expect(vTabShow).toHaveReceivedEventTimes(1);
    expect(vTabShow).toHaveReceivedEventDetail({ name: 'advanced' });
  });

  it('should change tabs when show() is called', async () => {
    const page = await newE2EPage({
      html: testTabGroup,
    });
    const tabGroup = await page.find('v-tab-group');
    const vTabHide = await tabGroup.spyOnEvent('v-tab-hide');
    const vTabShow = await tabGroup.spyOnEvent('v-tab-show');
    const selectedPanelName = 'advanced';
    const selectedTab = await page.find(`v-tab[panel=${selectedPanelName}]`);

    await selectedTab.click();

    expect(vTabHide).toHaveReceivedEventTimes(1);
    expect(vTabHide).toHaveReceivedEventDetail({ name: 'general' });
    expect(vTabShow).toHaveReceivedEventTimes(1);
    expect(vTabShow).toHaveReceivedEventDetail({ name: 'advanced' });
  });

  it('should not hide the active panel when selecting a nested tab', async () => {
    const page = await newE2EPage({
      html: `
        <v-tab-group>
          <v-tab slot="nav" panel="a">Tab A</v-tab>
          <v-tab slot="nav" panel="b">Tab B</v-tab>

          <v-tab-panel name="a">
            <v-tab-group>
              <v-tab slot="nav" panel="c">Tab C</v-tab>
              <v-tab slot="nav" panel="d">Tab D</v-tab>
              <v-tab-panel name="c">Panel C</v-tab-panel>
              <v-tab-panel name="d">Panel D</v-tab-panel>
            </v-tab-group>
          </v-tab-panel>
          <v-tab-panel name="b">Panel B</v-tab-panel>
        </v-tab-group>
      `,
    });
    const nestedTabGroup = await page.find('v-tab-group v-tab-group');
    const tab = await page.find(`v-tab[panel="d"]`);

    await tab.click();

    expect(await nestedTabGroup.isVisible()).toBe(true);
  });
});
