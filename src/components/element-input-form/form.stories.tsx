export default {
  title: 'Components/Input/Form',
};

export const Basic = () => `<v-form class="form-overview">
<v-input name="name" type="text" label="Name"></v-input>
<br>
<v-select name="favorite" label="Select your favorite">
  <v-menu-item value="birds">Birds</v-menu-item>
  <v-menu-item value="cats">Cats</v-menu-item>
  <v-menu-item value="dogs">Dogs</v-menu-item>
</v-select>
<br>
<v-checkbox name="agree" value="yes">
  I totally agree
</v-checkbox>
<br><br>
<v-button submit>Submit</v-button>
</v-form>

<script>
const form = document.querySelector('.form-overview');

// Watch for the slSubmit event
form.addEventListener('v-submit', event => {
  const formData = event.detail.formData;
  let output = '';

  //
  // Example 1: Post data to a server and wait for a JSON response
  //
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(result => {
    console.log('Success:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  //
  // Example 2: Output all form control names + values
  //
  for (const entry of formData.entries()) {
    output += \`\${entry[0]}: \${entry[1]}\n\`;
  }
  alert(output);

  //
  // Example 3: Get all form controls that were serialized as 
  // an array of HTML elements
  //
  console.log(event.detail.formControls);
});
</script>
`;

export const RequiredFields = () => `<v-form class="input-validation-required">
<v-input name="name" label="Name" required></v-input>
<br>
<v-select label="Favorite Animal" clearable required>
  <v-menu-item value="birds">Birds</v-menu-item>
  <v-menu-item value="cats">Cats</v-menu-item>
  <v-menu-item value="dogs">Dogs</v-menu-item>
  <v-menu-item value="other">Other</v-menu-item>
</v-select>
<br>
<v-textarea name="comment" label="Comment" required></v-textarea>
<br>
<v-checkbox required>Check me before submitting</v-checkbox>
<br><br>
<v-button type="primary" submit>Submit</v-button>
</v-form>

<script>
const form = document.querySelector('.input-validation-required');
form.addEventListener('v-submit', () => alert('All fields are valid!'));
</script>
`;

export const InputPatterns= () =>`<v-form class="input-validation-pattern">
<v-input name="letters" required label="Letters" pattern="[A-Za-z]+"></v-input>
<br>
<v-button type="primary" submit>Submit</v-button>
</v-form>

<script>
const form = document.querySelector('.input-validation-pattern');
form.addEventListener('v-submit', () => alert('All fields are valid!'));
</script>

`;

export const InputTypes= () =>`<v-form class="input-validation-type">
<v-input type="email" label="Email" placeholder="you@example.com" required></v-input>
<br>
<v-input type="url" label="URL" placeholder="https://example.com/" required></v-input>
<br>
<v-button type="primary" submit>Submit</v-button>
</v-form>

<script>
const form = document.querySelector('.input-validation-type');
form.addEventListener('v-submit', () => alert('All fields are valid!'));
</script>
`;

export const CustomValidation= () =>`<v-form class="input-validation-custom">
<v-input label="Type 'shoelace'" required></v-input>
<br>
<v-button type="primary" submit>Submit</v-button>
</v-form>

<script>
const form = document.querySelector('.input-validation-custom');
const input = form.querySelector('v-input');

form.addEventListener('v-submit', () => alert('All fields are valid!'));
input.addEventListener('v-input', () => {
  if (input.value === 'shoelace') {
    input.setCustomValidity('');
  } else {
    input.setCustomValidity('Hey, you\'re supposed to type \'shoelace\' before submitting this!');
  }
});
</script>
`;

export const CustomValidationStyles = () => `<v-input class="custom-input" required pattern="shoelace">
<small slot="help-text">Please enter "shoelace" to continue</small>
</v-input>

<style>
.custom-input[invalid]:not([disabled])::part(label),
.custom-input[invalid]:not([disabled])::part(help-text) {
  color: var(--v-color-danger-600);
}

.custom-input[invalid]:not([disabled])::part(base) {      
  border-color: var(--v-color-danger-500);
} 

.custom-input[invalid] {
  --focus-ring: 0 0 0 var(--v-focus-ring-width) var(--v-focus-ring-color-danger);
}
</style>
`;

