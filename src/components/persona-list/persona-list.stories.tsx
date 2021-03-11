export default {
  title: 'Components/Personas/Persona List',

};

export const Basic= () => {
  let personaList = [
    {name:"Suleman", gender:"male", title:"CEO", transformation:"xyz"},
    {name:"Jeniffer", gender:"female", title:"CFO", transformation:"xyz"},
  ]

  let personas = '';
  personaList.map(persona => personas += (`<v-persona title="${persona.title}" name="${persona.name}" gender="${persona.gender}" transformation="${persona.transformation}"></v-persona>`))

  let start = `
  <div style="width:500px">
    <v-widget title="Personas" subtitle="User Composites">
      ${personas}
    </v-widget>
  </div>


  `
  console.log(start);
  return start;
};
