export default {
  title: 'Elements/Skeleton',
};

export const Basic = () => `<div class="skeleton-overview">
<header>
  <v-skeleton></v-skeleton>
  <v-skeleton></v-skeleton>
</header>

<v-skeleton></v-skeleton>
<v-skeleton></v-skeleton>
<v-skeleton></v-skeleton>
</div>

<style>
.skeleton-overview header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.skeleton-overview header v-skeleton:last-child {
  flex: 0 0 auto;
  width: 30%;
}

.skeleton-overview v-skeleton {
  margin-bottom: 1rem;
}

.skeleton-overview v-skeleton:nth-child(1) {
  float: left;
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
  vertical-align: middle;
}

.skeleton-overview v-skeleton:nth-child(3) {
  width: 95%;
}

.skeleton-overview v-skeleton:nth-child(4) {
  width: 80%;
}
</style>
`;

export const Effects = () => `<div class="skeleton-effects">
<v-skeleton effect="sheen"></v-skeleton>
Sheen

<v-skeleton effect="pulse"></v-skeleton>
Pulse

<v-skeleton effect="none"></v-skeleton>
None
</div>

<style>
.skeleton-effects {
  font-size: var(--v-font-size-small);
}

.skeleton-effects v-skeleton:not(:first-child) {
  margin-top: 1rem;
}
</style>
`;


export const Paragraphs = () => `<div class="skeleton-paragraphs">
<v-skeleton></v-skeleton>
<v-skeleton></v-skeleton>
<v-skeleton></v-skeleton>
<v-skeleton></v-skeleton>
<v-skeleton></v-skeleton>
</div>

<style>
.skeleton-paragraphs v-skeleton {
  margin-bottom: 1rem;
}

.skeleton-paragraphs v-skeleton:nth-child(2) {
  width: 95%;
}

.skeleton-paragraphs v-skeleton:nth-child(4) {
  width: 90%;
}

.skeleton-paragraphs v-skeleton:last-child {
  width: 50%;
}
</style>
`;

export const Avatars = () => `<div class="skeleton-avatars">
<v-skeleton></v-skeleton>
<v-skeleton></v-skeleton>
<v-skeleton></v-skeleton>
</div>

<style>
.skeleton-avatars v-skeleton {
  display: inline-block;
  width: 3rem;
  height: 3rem;
  margin-right: .5rem;
}

.skeleton-avatars v-skeleton:nth-child(1) {
  --border-radius: 0;
}

.skeleton-avatars v-skeleton:nth-child(2) {
  --border-radius: var(--v-border-radius-medium);
}
</style>
`;

export const CustomShapes = () => `<div class="skeleton-shapes">
<v-skeleton class="square"></v-skeleton>
<v-skeleton class="circle"></v-skeleton>
<v-skeleton class="triangle"></v-skeleton>
<v-skeleton class="cross"></v-skeleton>
<v-skeleton class="comment"></v-skeleton>
</div>

<style>
.skeleton-shapes v-skeleton {
  display: inline-flex;
  width: 50px;
  height: 50px;
}

.skeleton-shapes .square::part(indicator) {
  --border-radius: var(--v-border-radius-medium);
}

.skeleton-shapes .circle::part(indicator) {
  --border-radius: var(--v-border-radius-circle);
}

.skeleton-shapes .triangle::part(indicator) {
  --border-radius: 0;
  clip-path: polygon(50% 0, 0 100%, 100% 100%);
}

.skeleton-shapes .cross::part(indicator) {
  --border-radius: 0;
  clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
}

.skeleton-shapes .comment::part(indicator) {
  --border-radius: 0;
  clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
}

.skeleton-shapes v-skeleton:not(:last-child) {
  margin-right: .5rem;
}
</style>
`;

export const CustomColors = () => `<v-skeleton style="--color: tomato; --sheen-color: #ffb094;"></v-skeleton>`;
