export default {
  title: 'Components/Rating',
};

export const Basic = () => `<v-rating></v-rating>`;

export const MaximumValue = () => `<v-rating max="3"></v-rating>`;

export const Precision = () => `<v-rating precision=".5" value="2.5"></v-rating>`;

export const SymbolSize = () => `<v-rating style="--symbol-size: 2rem;"></v-rating>`;

export const Readonly = () => `<v-rating readonly value="3"></v-rating>`;

export const Disabled = () => `<v-rating disabled value="3"></v-rating>`;

export const CustomIcons = () => `<v-rating class="rating-hearts" style="--symbol-color-active: #ff4136;"></v-rating>

<script>
  const rating = document.querySelector('.rating-hearts');
  rating.getSymbol = () => '<v-icon name="heart-fill"></v-icon>'; 
</script>
`;

export const ValueBasedIcons = () => `<v-rating class="rating-emojis"></v-rating>

<script>
  const rating = document.querySelector('.rating-emojis');

  rating.symbol = (value) => {
    const icons = ['emoji-angry', 'emoji-frown', 'emoji-expressionless', 'emoji-smile', 'emoji-laughing'];
    return icons[value - 1];
  };
</script>
`;
