export default {
  title: 'Components/Dialog',
};

export const Basic = () => `<v-dialog label="Dialog" class="dialog-overview">
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
<v-button slot="footer" type="primary">Close</v-button>
</v-dialog>

<v-button>Open Dialog</v-button>

<script>
(() => {
  const dialog = document.querySelector('.dialog-overview');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('v-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());
})();
</script>
`;

export const Width = () => `<v-dialog label="Dialog" class="dialog-width" style="--width: 50vw;">
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
<v-button slot="footer" type="primary">Close</v-button>
</v-dialog>

<v-button>Open Dialog</v-button>

<script>
(() => {
  const dialog = document.querySelector('.dialog-width');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('v-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());
})();
</script>
`;

export const Scrolling = () => `<v-dialog label="Dialog" class="dialog-scrolling">
<div style="height: 150vh; border: dashed 2px var(--v-color-gray-200); padding: 0 1rem;">
  <p>Scroll down and give it a try! 👇</p>
</div>
<v-button slot="footer" type="primary">Close</v-button>
</v-dialog>

<v-button>Open Dialog</v-button>

<script>
(() => {
  const dialog = document.querySelector('.dialog-scrolling');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('v-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());
})();
</script>
`;

export const IgnoreOverlayClicks = () => `<v-dialog label="Dialog" class="dialog-no-overlay-dismiss">
This dialog will not be closed when you click outside of it.
<v-button slot="footer" type="primary">Close</v-button>
</v-dialog>

<v-button>Open Dialog</v-button>

<script>
(() => {
  const dialog = document.querySelector('.dialog-no-overlay-dismiss');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('v-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());

  dialog.addEventListener('v-overlay-dismiss', event => event.preventDefault());
})();
</script>
`;

export const CustomContext = () => `<v-dialog label="Dialog" class="dialog-focus">
<v-input placeholder="I will have focus when the dialog is opened"></v-input>
<v-button slot="footer" type="primary">Close</v-button>
</v-dialog>

<v-button>Open Dialog</v-button>

<script>
(() => {
  const dialog = document.querySelector('.dialog-focus');
  const input = dialog.querySelector('v-input');
  const openButton = dialog.nextElementSibling;
  const closeButton = dialog.querySelector('v-button[slot="footer"]');

  openButton.addEventListener('click', () => dialog.show());
  closeButton.addEventListener('click', () => dialog.hide());

  dialog.addEventListener('v-initial-focus', event => {
    event.preventDefault();
    input.setFocus({ preventScroll: true });
  });
})();
</script>
`;
