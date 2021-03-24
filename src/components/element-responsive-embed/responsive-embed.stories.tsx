export default {
  title: 'Elements/ResponsiveEmbed',
};

export const Basic = () => `<sl-responsive-embed>
<iframe src="https://player.vimeo.com/video/1053647?title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
</sl-responsive-embed>
`;

export const AspectRatio = () => `<sl-responsive-embed aspect-ratio="4:3">
<iframe src="https://www.youtube.com/embed/mM5_T-F1Yn4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</sl-responsive-embed>
`;
