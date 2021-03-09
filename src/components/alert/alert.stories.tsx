import markdown from './readme.md';
import { eventHandles } from '../../../.storybook/helpers/custom-action';

const customEvents = ['clicked'];
const events = ['mouseover', 'click', ...eventHandles(customEvents)];

const args = {
  alertType: '',
  iconName: 'info-circle',
  title: 'Title',
  message: 'Message',
  isOpen: true,
  isClosable: false,
  duration: 0
};

// https://storybook.js.org/docs/react/essentials/controls#annotation
const argTypes = {
  alertType: {
    control: {
      type: 'select',
      options: ['', 'primary', 'success', 'info', 'warn', 'danger'],
    },
  },
  iconName: {
    description: 'The icon name',
    control:{
      type: "text"
    }
  },
  title: {
    description: 'The alert title',
    control:{
      type: "text"
    }
  },
  message: {
    description: 'The alert message',
    control:{
      type: "text"
    }
  },
  isOpen:{
    description: 'the alert is open',
    control:{
      type: "boolean"
    }
  },
  isClosable:{
    description: 'the alert can be closed',
    control:{
      type: "boolean"
    }
  },
  duration:{
    description: 'amount of time the alert will be visible',
    control:{
      type: "number"
    }
  }
};

// https://storybook.js.org/docs/react/writing-stories/parameters
export default {
  title: 'Vetrify/Alert',
  component: 'v-alert',
  parameters: {
    notes: {markdown},
    actions: {
      handles: events,
    },
  },
};

const Template = (
  {
    alertType,
    iconName,
    title,
    message,
    isOpen,
    isClosable,
    duration
  }) =>
     `
  <div class="story-alert">
  <v-button type="primary" class="show-button">Show</v-button>
  <v-button type="primary" class="toast-button">Toast</v-button>
  <v-button type="primary" class="hide-button">Hide</v-button>
    <v-alert ${isOpen ? 'open ' : ''}${isClosable ? 'closable ' : ''}${duration ? 'duration=\"' + duration  + '\"' : '' }type="${alertType}">
      <v-icon slot="icon" name="${iconName}" > </v-icon>
      <strong>${title}</strong><br>
      ${message}
    </v-alert>

  </div>

  <script>
    var a = document.querySelector('.story-alert');
    var showButton = a.querySelector('.show-button');
    var toastButton = a.querySelector('.toast-button');
    var hideButton = a.querySelector('.hide-button');

    var myAlert = a.querySelector('v-alert');

    showButton.addEventListener('click', () => myAlert.show());
    hideButton.addEventListener('click', () => myAlert.hide());
    toastButton.addEventListener('click', () => myAlert.toast());
  </script>
  
  <style>
    .story-alert v-alert {
      margin-top: var(--v-spacing-medium);
    }
  </style>
`;
//  ${action('v-alert', customEvents)}

export const Default = Template.bind({});

Default.args = {...args};
Default.argTypes = {...argTypes};

  export const Types2 = () => `
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
  
  export const Closable2 = () => `
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
  
  export const WithoutIcons2 = () => `
  <v-alert type="primary" open>
    Nothing fancy here, just a simple alert.
  </v-alert>
  `;
  
  export const Duration2 = () => `
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
  
  export const ToastNotifications2 = () => `
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
      const button = container.querySelector(v-button[type=\${type}]);
      const alert = container.querySelector(v-alert[type=\${type}]);
  
      button.addEventListener('click', () => alert.toast());
    });
  </script>`;
  
  export const ImperativeToast2 = () => `
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
  