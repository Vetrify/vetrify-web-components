export default {
  title: 'Vetrify/Alert',
};

export const Basic = () => `<v-alert message="ok"></v-alert>`;

export const Types = () => `
<v-alert type="primary" open>
  <v-icon slot="icon" name="info-circle"></v-icon>
  <strong>This is super informative</strong><br>
  You can tell by how pretty the alert is.
</v-alert>

<br>

<v-alert type="success" open>
  <v-icon slot="icon" name="check2-circle"></v-icon>
  <strong>Your changes have been saved</strong><br>
  You can safely exit the app now.
</v-alert>

<br>

<v-alert type="info" open>
  <v-icon slot="icon" name="gear"></v-icon>
  <strong>Your settings have been updated</strong><br>
  Settings will take affect on next login.
</v-alert>

<br>

<v-alert type="warning" open>
  <v-icon slot="icon" name="exclamation-triangle"></v-icon>
  <strong>Your session has ended</strong><br>
  Please login again to continue.
</v-alert>

<br>

<v-alert type="danger" open>
  <v-icon slot="icon" name="exclamation-octagon"></v-icon>
    <strong>Your account has been deleted</strong><br>
    We're very sorry to see you go!
</v-alert>
`;

export const Closable = () => `
<v-alert type="primary" open closable class="alert-closable">
  <v-icon slot="icon" name="info-circle"></v-icon>
  You can close this alert any time!
</v-alert>

<script>
  const alert = document.querySelector('.alert-closable');
  alert.addEventListener('v-after-hide', () => {
    setTimeout(() => alert.open = true, 2000);
  });
</script>
`;

export const WithoutIcons = () => `
<v-alert type="primary" open>
  Nothing fancy here, just a simple alert.
</v-alert>
`;

export const Duration = () => `
<div class="alert-duration">
  <v-button type="primary">Show Alert</v-button>

  <v-alert type="primary" duration="3000" closable>
    <v-icon slot="icon" name="info-circle"></v-icon>
    This alert will automatically hide itself after three seconds, unless you interact with it.
  </v-alert>
</div>

<script>
  const container = document.querySelector('.alert-duration');
  const button = container.querySelector('v-button');
  const alert = container.querySelector('v-alert');

  button.addEventListener('click', () => alert.show());
</script>

<style>
  .alert-duration v-alert {
    margin-top: var(--v-spacing-medium);
  }
</style>
`;

export const ToastNotifications = () => `
<div class="alert-toast">
  <v-button type="primary">Primary</v-button>
  <v-button type="success">Success</v-button>
  <v-button type="info">Info</v-button>
  <v-button type="warning">Warning</v-button>
  <v-button type="danger">Danger</v-button>
  
  <v-alert type="primary" duration="3000" closable>
    <v-icon slot="icon" name="info-circle"></v-icon>
    <strong>This is super informative</strong><br>
    You can tell by how pretty the alert is.
  </v-alert>

  <v-alert type="success" duration="3000" closable>
    <v-icon slot="icon" name="check2-circle"></v-icon>
    <strong>Your changes have been saved</strong><br>
    You can safely exit the app now.
  </v-alert>

  <v-alert type="info" duration="3000" closable>
    <v-icon slot="icon" name="gear"></v-icon>
    <strong>Your settings have been updated</strong><br>
    Settings will take affect on next login.
  </v-alert>

  <v-alert type="warning" duration="3000" closable>
    <v-icon slot="icon" name="exclamation-triangle"></v-icon>
    <strong>Your session has ended</strong><br>
    Please login again to continue.
  </v-alert>

  <v-alert type="danger" duration="3000" closable>
    <v-icon slot="icon" name="exclamation-octagon"></v-icon>
    <strong>Your account has been deleted</strong><br>
    We're very sorry to see you go!
  </v-alert>
</div>

<script>
  const container = document.querySelector('.alert-toast');

  ['primary', 'success', 'info', 'warning', 'danger'].map(type => {
    const button = container.querySelector("v-button[type=\${type}]
    );
    const alert = container.querySelector(\`v-alert[type="\${type}"]\`);

    button.addEventListener('click', () => alert.toast());
  });
</script>`;

export const ImperativeToast = () => `
<div class="alert-toast-wrapper">
  <v-button type="primary">Create Toast</v-button>
</div>

<script>
  const container = document.querySelector('.alert-toast-wrapper');
  const button = container.querySelector('v-button');
  let count = 0;

  // Always escape HTML for text arguments!
  function escapeHtml(html) {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
  }  

  // Custom function to emit toast notifications
  function notify(message, type = 'primary', icon = 'info-circle', duration = 3000) {
    const alert = Object.assign(document.createElement('v-alert'), {
      type: type,
      closable: true,
      duration: duration,
      innerHTML: \`
        <v-icon name="\${icon}" slot="icon"></v-icon>
        \${escapeHtml(message)}
      \`
    });

    document.body.append(alert);
    return alert.toast();
  }

  button.addEventListener('click', () => {
    notify(\`This is custom toast #\${++count}\`);
  });
</script>
`;

Basic.args = {
  first: 'a',
  middle: 'b',
  last: 'c',
};
