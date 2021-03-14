export default {
  title: 'Elements/Animation',
};

export const Basic = () => `<div class="animation-overview">
<v-animation name="bounce" duration="2000"><div class="box"></div></v-animation>
<v-animation name="jello" duration="2000"><div class="box"></div></v-animation>
<v-animation name="heartBeat" duration="2000"><div class="box"></div></v-animation>
<v-animation name="flip" duration="2000"><div class="box"></div></v-animation>
</div>

<style>
.animation-overview .box {
  display: inline-block;
  width: 100px;
  height: 100px;
  background-color: var(--v-color-primary-500);
  margin: 1.5rem;
}
</style>
`;

// export const AnimationsAndEasing = () => `<div class="animation-sandbox">
// <v-animation name="bounce" easing="ease-in-out" duration="2000">
//   <div class="box"></div>
// </v-animation>

// <div class="controls">
//   <v-select label="Animation" value="bounce"></v-select>
//   <v-select label="Easing" value="linear"></v-select>
//   <v-range min="0" max="2" step=".5" value="1"></v-range>
// </div>
// </div>

// <script type="module">
// import { getAnimationNames, getEasingNames } from '/dist/shoelace.js';

// const container = document.querySelector('.animation-sandbox');
// const animation = container.querySelector('v-animation');
// const animationName = container.querySelector('.controls v-select:nth-child(1)');
// const easingName = container.querySelector('.controls v-select:nth-child(2)');
// const playbackRate = container.querySelector('v-range');
// const animations = getAnimationNames();
// const easings = getEasingNames();

// animations.map(name => {
//   const menuItem = Object.assign(document.createElement('v-menu-item'), {
//     textContent: name,
//     value: name
//   });
//   animationName.appendChild(menuItem);
// });

// easings.map(name => {
//   const menuItem = Object.assign(document.createElement('v-menu-item'), {
//     textContent: name,
//     value: name
//   });
//   easingName.appendChild(menuItem);
// });

// animationName.addEventListener('v-change', () => animation.name = animationName.value);
// easingName.addEventListener('v-change', () => animation.easing = easingName.value);
// playbackRate.addEventListener('v-change', () => animation.playbackRate = playbackRate.value);
// playbackRate.tooltipFormatter = val => `Playback Rate = ${val}`;
// </script>

// <style>
// .animation-sandbox .box {
//   width: 100px;
//   height: 100px;
//   background-color: var(--v-color-primary-500);
// }

// .animation-sandbox .controls {
//   max-width: 300px;
//   margin-top: 2rem;
// }

// .animation-sandbox .controls v-select {
//   margin-bottom: 1rem;
// }
// </style>
// `;


export const IntersectionObserver = () => `<div class="animation-scroll">
<v-animation name="jackInTheBox" duration="2000" iterations="1"><div class="box"></div></v-animation>
</div>

<script>
const container = document.querySelector('.animation-scroll');
const animation = container.querySelector('v-animation');
const box = animation.querySelector('.box');

// Watch for the box to enter and exit the viewport. Note that we're observing the box, not the animation element!
const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    // Start the animation when the box enters the viewport
    animation.pause = null;
  } else {
    // Reset the animation when the box leaves the viewport
    animation.pause = true;
    animation.setCurrentTime(0);
  }
});
observer.observe(box);
</script>

<style>
.animation-scroll .box {
  display: inline-block;
  width: 100px;
  height: 100px;
  background-color: var(--v-color-primary-500);
}  
</style>
`;

export const CustomKeyframeFormats = () => `<div class="animation-keyframes">
<v-animation easing="ease-in-out" duration="2000">
  <div class="box"></div>
</v-animation>
</div>

<script>
const animation = document.querySelector('.animation-keyframes v-animation');
animation.keyframes = [
  {
    offset: 0,
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    fillMode: 'both',
    transformOrigin: 'center center',
    transform: 'rotate(0)'
  },
  {
    offset: 1,
    easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
    fillMode: 'both',
    transformOrigin: 'center center',
    transform: 'rotate(90deg)'
  }
];
</script>

<style>
.animation-keyframes .box {
  width: 100px;
  height: 100px;
  background-color: var(--v-color-primary-500);
}
</style>
`;