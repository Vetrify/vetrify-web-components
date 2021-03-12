export default {
  title: 'Components/Widget',
  argTypes: {
    subheading: { control: 'text' },
    heading: { control: 'text' },
  },
};

export const Basic= ({ heading, subheading }) => {
  let myHeading = `heading="Transformations"`;
  let mySubheading = ` subheading="More than 400+ new transformations"`;


  if (heading) {
    myHeading = `heading="${heading}"`;
  }

  if (subheading) {
    mySubheading = ` subheading="${name}"`;
  }



  let start = `
  <div style="width:500px">
    <v-widget ${myHeading}${mySubheading}></v-widget>
  </div>`
  console.log(start);

  return start;
};
