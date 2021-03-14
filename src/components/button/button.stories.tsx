export default {
  title: 'Elements/Buttons/Button',
};

export const Basic = () => `<v-button>ok</v-button>`;

export const Types = () => `<v-button type="default">Default</v-button>
<v-button type="primary">Primary</v-button>
<v-button type="success">Success</v-button>
<v-button type="info">Info</v-button>
<v-button type="warning">Warning</v-button>
<v-button type="danger">Danger</v-button>
`;

export const Sized = () => `<v-button size="small">Small</v-button>
<v-button size="medium">Medium</v-button>
<v-button size="large">Large</v-button>
`;

export const Pills = () => `<v-button size="small" pill>Small</v-button>
<v-button size="medium" pill>Medium</v-button>
<v-button size="large" pill>Large</v-button>
`;

export const Circles = () => `<v-button type="default" size="small" circle><v-icon name="gear"></v-icon></v-button>
<v-button type="default" size="medium" circle><v-icon name="gear"></v-icon></v-button>
<v-button type="default" size="large" circle><v-icon name="gear"></v-icon></v-button>
`;

export const Text = () => `<v-button type="text" size="small">Text</v-button>
<v-button type="text" size="medium">Text</v-button>
<v-button type="text" size="large">Text</v-button>
`;

export const Links = () => `<v-button href="https://example.com/">Link</v-button>
<v-button href="https://example.com/" target="_blank">New Window</v-button>
<v-button href="/assets/images/wordmark.svg" download="shoelace.svg">Download</v-button>
<v-button href="https://example.com/" disabled>Disabled</v-button>
`;

export const CustomWidth = () => `<v-button type="default" size="small" style="width: 100%; margin-bottom: 1rem;">Small</v-button>
<v-button type="default" size="medium" style="width: 100%; margin-bottom: 1rem;">Medium</v-button>
<v-button type="default" size="large" style="width: 100%;">Large</v-button>
`;

export const PrefixAndSuffix = () => `<v-button type="default" size="small">
<v-icon slot="prefix" name="gear"></v-icon>
Settings
</v-button>

<v-button type="default" size="small">
<v-icon slot="suffix" name="arrow-counterclockwise"></v-icon>
Refresh
</v-button>

<v-button type="default" size="small">
<v-icon slot="prefix" name="link-45deg"></v-icon>
<v-icon slot="suffix" name="box-arrow-up-right"></v-icon>
Open
</v-button>

<br><br>

<v-button type="default">
<v-icon slot="prefix" name="gear"></v-icon>
Settings
</v-button>

<v-button type="default">
<v-icon slot="suffix" name="arrow-counterclockwise"></v-icon>
Refresh
</v-button>

<v-button type="default">
<v-icon slot="prefix" name="link-45deg"></v-icon>
<v-icon slot="suffix" name="box-arrow-up-right"></v-icon>
Open
</v-button>

<br><br>

<v-button type="default" size="large">
<v-icon slot="prefix" name="gear"></v-icon>
Settings
</v-button>

<v-button type="default" size="large">
<v-icon slot="suffix" name="arrow-counterclockwise"></v-icon>
Refresh
</v-button>

<v-button type="default" size="large">
<v-icon slot="prefix" name="link-45deg"></v-icon>
<v-icon slot="suffix" name="box-arrow-up-right"></v-icon>
Open
</v-button>
`;

export const Caret = () => `<v-button size="small" caret>Small</v-button>
<v-button size="medium" caret>Medium</v-button>
<v-button size="large" caret>Large</v-button>
`;

export const Loading = () => `<v-button type="default" loading>Default</v-button>
<v-button type="primary" loading>Primary</v-button>
<v-button type="success" loading>Success</v-button>
<v-button type="info" loading>Info</v-button>
<v-button type="warning" loading>Warning</v-button>
<v-button type="danger" loading>Danger</v-button>
`;

export const Disabled = () => `<v-button type="default" disabled>Default</v-button>
<v-button type="primary" disabled>Primary</v-button>
<v-button type="success" disabled>Success</v-button>
<v-button type="info" disabled>Info</v-button>
<v-button type="warning" disabled>Warning</v-button>
<v-button type="danger" disabled>Danger</v-button>
`;