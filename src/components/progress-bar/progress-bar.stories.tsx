export default {
  title: 'Elements/ProgressBar',
};

export const Basic = () => `<v-progress-bar percentage="50"></v-progress-bar>
`;

export const CustomHeight = () => `<v-progress-bar percentage="50" style="--height: 6px;"></v-progress-bar>
`;


// export const Labels = () => `<v-progress-bar percentage="50" class="progress-bar-labels">50%</v-progress-bar>

// <br>

// <v-button circle><v-icon name="dash"></v-icon></v-button>
// <v-button circle><v-icon name="plus"></v-icon></v-button>

// <script>
//   const progressBar = document.querySelector('.progress-bar-labels');
//   const subtractButton = progressBar.nextElementSibling.nextElementSibling;
//   const addButton = subtractButton.nextElementSibling;

//   addButton.addEventListener('click', () => {
//     const percentage = Math.min(100, progressBar.percentage + 10);
//     progressBar.percentage = percentage;
//     progressBar.textContent = `${percentage}%`;
//   });

//   subtractButton.addEventListener('click', () => {
//     const percentage = Math.max(0, progressBar.percentage - 10)
//     progressBar.percentage = percentage;
//     progressBar.textContent = `${percentage}%`;
//   });
// </script>
// `;

export const Indeterminate = () => `<v-progress-bar indeterminate></v-progress-bar>
`;