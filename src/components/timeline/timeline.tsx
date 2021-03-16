import { Component, /* Element,*/ Prop, h  } from '@stencil/core';
import { DataSet, } from 'vis-data'
import { Timeline, TimelineItem } from 'vis-timeline'

// TODO:
// * basic rendering: https://visjs.github.io/vis-timeline/examples/timeline/editing/editingItems.html
// * samples in storybook https://visjs.github.io/vis-timeline/examples/timeline/

/**
 * @since 0.1
 * @status development -- WIP (work-in-progress): builds but does nt render
 *
 * @part base - The component's base wrapper.
 */

@Component({
  tag: 'v-timeline',
  styleUrl: 'timeline.scss',
  shadow: false,
})
export class VTimeline{
  //@Element() host: HTMLVTimelineElement;

  @Prop({ mutable: true }) heading: string = '';

  componentDidRender(){
    //var options = {};
    var items = new DataSet<TimelineItem>();

    items.add([
      {id: 1, content: 'item 1<br>start', start: '2014-01-23'},
      {id: 2, content: 'item 2', start: '2014-01-18'},
      {id: 3, content: 'item 3', start: '2014-01-21'},
      {id: 4, content: 'item 4', start: '2014-01-19', end: '2014-01-24'},
      {id: 5, content: 'item 5', start: '2014-01-28', type:'point'},
      {id: 6, content: 'item 6', start: '2014-01-26'}
    ]);

    // items.on('*', function (event, properties) {
    //   console.log(event, properties.items);
    // });

    var container = document.getElementById("my-timeline");

    var options = {
      start: '2014-01-10',
      end: '2014-02-10',
      height: '300px',
  
      // allow selecting multiple items using ctrl+click, shift+click, or hold.
      multiselect: true,
  
      // allow manipulation of items
      editable: true,
  
      /* alternatively, enable/disable individual actions:
  
      editable: {
        add: true,
        updateTime: true,
        updateGroup: true,
        remove: true
      },
  
      */
  
      showCurrentTime: true
    };

    new Timeline(container, items, options);

    // var timeline = new Timeline(container, items, options);

    // timeline.on('*', function (properties) {
    //   console.log(properties.items);
    // });
  }

  render() {
    return (<div>

      <div id="my-timeline"></div> 

    </div>);
  }
}
