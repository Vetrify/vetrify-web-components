import { Component, Prop, h } from '@stencil/core';

/**
 * @since 2.0
 * @status development
 *
 * @part base - The component's base wrapper.
 */

@Component({
  tag: 'v-network-diagram',
  styleUrl: 'network-diagram.scss',
  shadow: true,
})
export class NetworkDiagram {
  /** The network diagram's data */
  @Prop() data = null;

  render() {
    return <div> Cytoscape graph here</div>;
  }
}
