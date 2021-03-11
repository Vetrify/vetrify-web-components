export default {
  title: 'Components/Personas/Persona',
  argTypes: {
    name: { control: 'text' },
    title: { control: 'text' },
    gender: {
      control: { type: 'select', options: [ 'male', 'female'] },
    },
    transformation: { control: 'text' },

  },
};

export const Basic= ({ title, name, gender, transformation }) => {
  let myTitle = `title="CEO"`;
  let myName = ` name="Suleman"`;
  let myGender = ` gender="male"`;
  let myTransformation =` transformation="xyz"`;

  if (title) {
    myTitle = `personaTitle="${title}"`;
  }

  if (name) {
    myName = ` name="${name}"`;
  }

  if (gender && gender != 'undefined') {
    myGender = ` gender="${gender}"`;
  }

  if (transformation) {
    myTransformation = `transformation="${transformation}"`;
  }

  let start = `
  <div style="width:500px">
  <v-persona ${myTitle}${myName}${myGender}${myTransformation}></v-persona>
  </div>`
  return start;
};
