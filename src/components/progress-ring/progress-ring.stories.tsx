export default {
  title: 'Elements/Forms/ProgressRing',
};

export const Basic = () => `<v-progress-ring percentage="50"></v-progress-ring>`;

export const Size = () => `<v-progress-ring percentage="50" size="200"></v-progress-ring>`;

export const StrokeWidth = () => `<v-progress-ring percentage="50" stroke-width="10"></v-progress-ring>`;

export const Colors = () => `<v-progress-ring 
percentage="50" 
style="--track-color: #ffe2c6; --indicator-color: tomato;"
></v-progress-ring>
`;

// export const Labels = ( ) => `<v-progress-ring percentage="50" size="200" class="progress-ring-labels" style="margin-bottom: .5rem;">50%</v-progress-ring>

// <br>

// <v-button circle><v-icon name="dash"></v-icon></v-button>
// <v-button circle><v-icon name="plus"></v-icon></v-button>

// <script>
//   const progressRing = document.querySelector('.progress-ring-labels');
//   const subtractButton = progressRing.nextElementSibling.nextElementSibling;
//   const addButton = subtractButton.nextElementSibling;

//   addButton.addEventListener('click', () => {
//     const percentage = Math.min(100, progressRing.percentage + 10);
//     progressRing.percentage = percentage;
//     progressRing.textContent = `${percentage}%`;
//   });

//   subtractButton.addEventListener('click', () => {
//     const percentage = Math.max(0, progressRing.percentage - 10)
//     progressRing.percentage = percentage;
//     progressRing.textContent = `${percentage}%`;
//   });
// </script>
// `;


