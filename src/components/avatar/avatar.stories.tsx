export default {
  title: 'Vetrify/Avatar',
};

export const Empty = () => `<v-avatar></v-avatar>`;
export const Images = () => `<v-avatar
image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
alt="Gray tabby kitten looking down"
></v-avatar>`;

export const Initials = () => `<v-avatar initials="VE"></v-avatar>`;

export const CustomIcons = () => `<v-avatar>
<v-icon slot="icon" name="image"></v-icon>
</v-avatar>

<v-avatar>
<v-icon slot="icon" name="archive"></v-icon>
</v-avatar>

<v-avatar>
<v-icon slot="icon" name="briefcase"></v-icon>
</v-avatar>
`;

export const Shapes = () => `<v-avatar shape="square"></v-avatar>

<v-avatar shape="rounded"></v-avatar>

<v-avatar shape="circle"></v-avatar>
`;

export const Groups = () => `<div class="avatar-group">
<v-avatar image="https://images.unsplash.com/photo-1490150028299-bf57d78394e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80&crop=right"></v-avatar>
<v-avatar image="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"></v-avatar>
<v-avatar image="https://images.unsplash.com/photo-1456439663599-95b042d50252?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=left&q=80"></v-avatar>
<v-avatar image="https://images.unsplash.com/flagged/photo-1554078875-e37cb8b0e27d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&crop=top&q=80"></v-avatar>
</div>

<style>
.avatar-group v-avatar:not(:first-of-type) {
  margin-left: -1rem;
}

.avatar-group v-avatar::part(base) {
  border: solid 2px white;
}
</style>
`;

// Basic.args = {
//     first: 'stencil',
//     middle:'storybook',
//     last: 'typescript'}
