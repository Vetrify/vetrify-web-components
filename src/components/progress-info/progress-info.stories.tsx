
export default {
  title: 'Elements/ProgressInfo',
  component: 'v-progress-info',
};

export const ProgressInfo = () => {
  return `
  <div style="width:200px">
    <v-progress-info label="Progress" percentage="90" color="red"/>
  </div>
  `
}

