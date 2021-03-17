import { Component, Element, /*State,*/ h, Prop } from '@stencil/core';
import {GoogleCharts } from 'google-charts';

// TODO: get this working: https://developers.google.com/chart/interactive/docs/gallery/barchart

GoogleCharts.load('current', {'packages':['corechart']});

/**
 * @since 0.0
 * @status stable
 *
 * @part base - The component's base wrapper.
 */

@Component({
  tag: 'v-pie-chart',
  styleUrl: 'pie-chart.scss',
  shadow: true,
})
export class PieChart {
  @Element() host: HTMLVPieChartElement;

  /** Placeholder... remove this. */
  @Prop() words: string[] = ['a', 'b'];

  drawChart()
  {
    var data = new GoogleCharts.api.visualization.arrayToDataTable(
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    );

    var options = {
      title: 'My Daily Activities'
    };


    var chart = new GoogleCharts.api.visualization.PieChart(document.getElementById('piechartdiv'));

    chart.draw(data, options);
  }

  componentWillLoad() {
    GoogleCharts.setOnLoadCallback(this.drawChart);
  }

  componentDidRender() {
    this.drawChart();
  }

  render(words) {
    return (
      <div>{words} 
        <div class="pie-chart" id="piechartdiv"> </div>
      </div>
    );
  }
}
