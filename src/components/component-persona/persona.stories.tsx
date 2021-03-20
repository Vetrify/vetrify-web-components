export default {
  title: 'Components/Personas/Persona',
  argTypes: {
    name: { control: 'text' },
    heading: { control: 'text' },
    gender: {
      control: { type: 'select', options: [ 'male', 'female'] },
    },
    transformation: { control: 'text' },

  },
};

export const Basic= ({ heading, name, gender, transformation }) => {
  let myHeading = `heading="CEO"`;
  let myName = ` name="Suleman"`;
  let myGender = ` gender="male"`;
  let myTransformation =` transformation="xyz"`;

  if (heading) {
    myHeading = `personaHeading="${heading}"`;
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
  <v-persona ${myHeading}${myName}${myGender}${myTransformation}></v-persona>
  </div>`
  return start;
};
