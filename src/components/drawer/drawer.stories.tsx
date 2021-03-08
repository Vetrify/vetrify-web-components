import { html } from 'lit-html';

export default {
  title: 'Vetrify/Drawer',
};

export const Basic = () => html`
<v-drawer label="Drawer" class="drawer-overview">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <v-button slot="footer" type="primary">Close</v-button>
</v-drawer>

<v-button>Open Drawer</v-button>

<script>
  (() => {
    var drawer = document.querySelector('.drawer-overview');
    var openButton = drawer.nextElementSibling;
    var closeButton = drawer.querySelector('v-button[type="primary"]');

    openButton.addEventListener('click', () => drawer.show());
    closeButton.addEventListener('click', () => drawer.hide());
  })();
</script>
`;
