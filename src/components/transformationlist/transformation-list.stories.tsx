export default {
  title: 'Components/Transformation List',

};

export const Basic= () => {
  let transformationList = [
    {title:"25 activities", subtitle:"???", status:"In Progress",checked: false, verb:"Double", subject:"Engineering throughput"},
    {title:"4 activities", subtitle:"???", status:"Approved",checked: true, verb:"Transformation 1", subject:""},
    {title:"21 activities", subtitle:"???", status:"Rejected",checked: false, verb:"Transformation 2", subject:""},
  ]

  let transformations = '';
  transformationList.map(transformation => transformations += (`<v-transformation title="${transformation.title}" subtitle="${transformation.subtitle}" status="${transformation.status}" checked="${transformation.checked}" verb="${transformation.verb}" subject="${transformation.subject}">
    </v-transformation>`))

  let start = `
  <div style="width:700px">
    <v-widget title="Tranformations" subtitle="More than 400+ new menmbers">
      ${transformations}
    </v-widget>
  </div>


  `
  console.log(start);
  return start;
};
