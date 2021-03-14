export default {
  title: 'Components/Personas/Persona List',

};

export const Basic= () => {
  let personaList = [
    {name:"Suleman", gender:"male", heading:"CEO", transformation:"xyz"},
    {name:"Jeniffer", gender:"female", heading:"CFO", transformation:"xyz"},
  ]

  let personas = '';
  personaList.map(persona => personas += (`<v-persona heading="${persona.heading}" name="${persona.name}" gender="${persona.gender}" transformation="${persona.transformation}"></v-persona>`))

  let start = `
  <div style="width:500px">
    <v-widget heading="Personas" subheading="User Composites">
      ${personas}
    </v-widget>
  </div>


  `
  console.log(start);
  return start;
};
