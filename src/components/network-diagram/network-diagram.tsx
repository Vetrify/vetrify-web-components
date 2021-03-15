import { Component, Prop, h  } from '@stencil/core';
//import { Network, DataSet } from 'vis-network';

// TODO:
// * layouts
//   * hierarchical https://visjs.github.io/vis-network/examples/network/layout/hierarchicalLayoutUserdefined.html
// * interactions/events https://visjs.github.io/vis-network/examples/network/events/interactionEvents.html
//   * node selection
//   * node click
//   * add edge & add node & delete/update edge & node functionality
//   * etc
// * load data via json (nodes/edges)


/**
 * @since 0.0
 * @status development
 *
 * @part base - The component's base wrapper.
 */

@Component({
  tag: 'v-network-diagram',
  styleUrl: 'network-diagram.scss',
  shadow: true,
})

// const nodes = new DataSet<any>([
//   { id: 1, label: 'Node 1' },
//   { id: 2, label: 'Node 2' },
//   { id: 3, label: 'Node 3' },
//   { id: 4, label: 'Node 4' },
//   { id: 5, label: 'Node 5' },
// ]);

// // create an array with edges
// const edges = new DataSet<any>([
//   { from: '1', to: '3' },
//   { from: '1', to: '2' },
//   { from: '2', to: '4' },
//   { from: '2', to: '5' },
// ]);

// const n = new Network(null, { nodes, edges}, );

/*
<script type="text/javascript">
      // create an array with nodes
      var nodes = new vis.DataSet([
        { id: 1, label: "Node 1" },
        { id: 2, label: "Node 2" },
        { id: 3, label: "Node 3" },
        { id: 4, label: "Node 4" },
        { id: 5, label: "Node 5" },
      ]);

      // create an array with edges
      var edges = new vis.DataSet([
        { from: 1, to: 3 },
        { from: 1, to: 2 },
        { from: 2, to: 4 },
        { from: 2, to: 5 },
        { from: 3, to: 3 },
      ]);

      // create a network
      var container = document.getElementById("mynetwork");
      var data = {
        nodes: nodes,
        edges: edges,
      };
      var options = {};
      var network = new vis.Network(container, data, options);
    </script>

    */


export class NetworkDiagram {
  /** The network diagram's data */
  @Prop() data = null;

  render() {
    return (<div id="my-network"></div>
    );
  }
}
