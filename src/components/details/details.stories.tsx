export default {
  title: 'Vetrify/Details',
};

export const Basic = () => `<v-details summary="Toggle Me">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</v-details>
`;

export const Group= () => `<div class="details-group-example">
<v-details summary="First" open>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</v-details>

<v-details summary="Second">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</v-details>

<v-details summary="Third">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</v-details>
</div>

<script>
var container = document.querySelector('.details-group-example');

// Close all other details when one is shown
container.addEventListener('v-show', event => {
  [...container.querySelectorAll('v-details')].map(details => (details.open = event.target === details));
});
</script>

<style>
.details-group-example v-details:not(:last-of-type) {
  margin-bottom: var(--v-spacing-xx-small);
}
</style>`;
