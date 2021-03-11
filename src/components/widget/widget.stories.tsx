export default {
  title: 'Components/Widget',
  argTypes: {
    subtitle: { control: 'text' },
    title: { control: 'text' },


  },
};

export const Basic= ({ title, subtitle }) => {
  let myTitle = `title="Transformations"`;
  let mySubtitle = ` subtitle="More than 400+ new transformations"`;


  if (title) {
    myTitle = `title="${title}"`;
  }

  if (subtitle) {
    mySubtitle = ` subtitle="${name}"`;
  }



  let start = `
  <div style="width:500px">
    <v-widget ${myTitle}${mySubtitle}></v-widget>
  </div>`
  console.log(start);

  return start;
};
