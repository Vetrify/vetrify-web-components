import { Component, Element, /*State,*/ h, Prop } from '@stencil/core';
import {GoogleCharts } from 'google-charts';

GoogleCharts.load('current', {'packages':['line']});

/**
 * @since 0.0
 * @status stable
 *
 * @part base - The component's base wrapper.
 */

@Component({
  tag: 'v-earned-value-chart',
  styleUrl: 'earned-value-chart.scss',
  shadow: false,
})
export class EarnedValueChart {
  @Element() host: HTMLVEarnedValueChartElement;

  /** Placeholder... remove this. */
  @Prop() words: string[] = [''];

  drawChart()
  {
    var data = new GoogleCharts.api.visualization.DataTable();
    data.addColumn('number', 'Day');
    data.addColumn('number', 'Actual');
    data.addColumn('number', 'Expected');
    data.addColumn('number', 'Invested');

    data.addRows([
      [1,  37.8, 80.8, 41.8],
      [2,  30.9, 69.5, 32.4],
      [3,  25.4,   57, 25.7],
      [4,  11.7, 18.8, 10.5],
      [5,  11.9, 17.6, 10.4],
      [6,   8.8, 13.6,  7.7],
      [7,   7.6, 12.3,  9.6],
      [8,  12.3, 29.2, 10.6],
      [9,  16.9, 42.9, 14.8],
      [10, 12.8, 30.9, 11.6],
      [11,  5.3,  7.9,  4.7],
      [12,  6.6,  8.4,  5.2],
      [13,  4.8,  6.3,  3.6],
      [14,  4.2,  6.2,  3.4]
    ]);

    var options = {
      chart: {
        title: 'EarnedValue',
        subtitle: 'Percentage'
      },
      width: 900,
      height: 500,
      axes: {
        x: {
          0: {side: 'top'}
        }
      },
      trendlines: { 0: {}, 1: {}, 2: {} } 
    };

    var chart = new GoogleCharts.api.visualization.LineChart(document.getElementById('evchartdiv'));

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
      <div class="earned-value-chart" id="evchartdiv">{words}</div>
      
    );
  }
}
