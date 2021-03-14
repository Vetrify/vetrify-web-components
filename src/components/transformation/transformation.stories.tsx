export default {
  title: 'Components/Transformation',

};

export const Basic= () => {

  let start = `
  <div style="width:500px">
    <v-transformation heading="25 actvities" subheading="???" status="In Progress" checked="true" verb="Hello" subject="None">
    </v-transformation>
  </div>


  `
  return start;
};

export const Unchecked= () => {

  let start = `
  <div style="width:500px">
    <v-transformation heading="25 actvities" subheading="???" status="In Progress" checked="false" verb="Hello" subject="None">
    </v-transformation>
  </div>
  `
  return start;
};


export const Rejected= () => {

  let start = `
  <div style="width:500px">
    <v-transformation heading="25 actvities" subheading="???" status="Rejected" checked="false" verb="Hello" subject="None">
    </v-transformation>
  </div>
  `
  return start;
};



export const Approved= () => {

  let start = `
  <div style="width:500px">
    <v-transformation heading="25 actvities" subheading="???" status="Approved" checked="true" verb="Hello" subject="None">
    </v-transformation>
  </div>
  `
  return start;
};


export const Verified= () => {

  let start = `
  <div style="width:500px">
    <v-transformation heading="25 actvities" subheading="???" status="Verified" checked="false" verb="Hello" subject="None">
    </v-transformation>
  </div>
  `
  return start;
};
