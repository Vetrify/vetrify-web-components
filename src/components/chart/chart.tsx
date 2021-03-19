import { Component, Element, /*State,*/ h, Prop } from '@stencil/core';
import { Chart } from 'chart.js';
//import moment = require('moment');

/**
 * @since 0.0
 * @status stable
 *
 * @part base - The component's base wrapper.
 */

@Component({
  tag: 'v-chart',
  shadow: true,
})
export class VChart {
  myCanvas: HTMLCanvasElement

  @Element() host: HTMLVChartElement;

  @Prop() chartType: Chart.ChartType = 'line';
  @Prop({ reflect: false }) data: Chart.ChartData ;
  @Prop({ reflect: false }) options: Chart.ChartOptions;
  @Prop() duration?: number = 100;
  @Prop() lazy?: boolean;
  @Prop() easing?: Chart.Easing = 'linear';
  @Prop() height: number = 200;
  @Prop() width: number = 200;

  drawChart()
  {
    // var plugin = {
    //   afterDraw: (chartInstance: Chart, easing: Chart.Easing, options?: any) => { },
    // };

    var ctx = this.myCanvas.getContext('2d');

    var config: Chart.ChartConfiguration = {
       options: this.options,
       data: this.data,
       //plugins: [plugin, plugin] // TODO: add plugin functionality
    };

    alert(JSON.stringify(this.data));
    
    var chart: Chart = new Chart(ctx, config);

    var rProps : Chart.ChartUpdateProps = 
    {
      duration: this.duration,
      lazy: this.lazy,
      easing: this.easing
    };

    //alert(chart);

    chart.update(rProps);
  }

  componentDidRender() {
    this.drawChart();
  }

  render() {
    return (
      <div >
      <canvas
        ref={el => (this.myCanvas = el)}
        height={this.height} 
        width={this.width}>
        </canvas>
      </div>
    );
  }
}
