export default {
  title: 'Elements/Tag',
};

export const Types = () => `<v-tag type="primary">Primary</v-tag>
<v-tag type="success">Success</v-tag>
<v-tag type="info">Info</v-tag>
<v-tag type="warning">Warning</v-tag>
<v-tag type="danger">Danger</v-tag>
`;

export const Sizes = () => `<v-tag size="small">Small</v-tag>
<v-tag size="medium">Medium</v-tag>
<v-tag size="large">Large</v-tag>
`;

export const Pills = () => `<v-tag size="small" pill>Small</v-tag>
<v-tag size="medium" pill>Medium</v-tag>
<v-tag size="large" pill>Large</v-tag>
`;

export const Clearable = () => `<div class="tags-clearable">
<v-tag size="small" clearable>Small</v-tag>
<v-tag size="medium" clearable>Medium</v-tag>
<v-tag size="large" clearable>Large</v-tag>
</div>

<script>
const div = document.querySelector('.tags-clearable');

div.addEventListener('v-clear', event => {
  const tag = event.target;
  tag.style.opacity = '0';
  setTimeout(() => tag.style.opacity = '1', 2000);
});
</script>

<style>
.tags-clearable v-tag {
  transition: var(--v-transition-medium) opacity;
}
</style>
`;
