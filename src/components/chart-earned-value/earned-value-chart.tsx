

import { Component, Element, /*State,*/ h, Prop } from '@stencil/core';
import { Chart} from 'chart.js';
//import moment = require('moment');

/**
 * @since 0.0
 * @status stable
 *
 * @part base - The component's base wrapper.
 */

@Component({
  tag: 'v-earned-value-chart',
  shadow: true,
})
export class EarnedValueChart {
  myCanvas: HTMLCanvasElement

  @Element() host: HTMLVEarnedValueChartElement;

  /** Placeholder... remove this. */
  @Prop() words: string[] = [''];

  drawChart()
  {

    var plugin = {
      afterDraw: (chartInstance: Chart, easing: Chart.Easing, options?: any) => { },
    };

    //var doc = document.getElementById('myChart');

    //alert(doc.innerHTML);
    
    //var canvas = document.getElementById('myChart') as HTMLCanvasElement;
    var ctx = this.myCanvas.getContext('2d');
    
    var chart: Chart = new Chart(ctx, {
      type: 'line',
      plugins: [plugin, plugin],
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: '#000',
            borderColor: '#333',
            data: [
                1,4,6,3,8,9,4
            ],
            fill: false,
        }, {
            label: 'My Second dataset',
            fill: false,
            backgroundColor: '#000',
            borderColor: '#666',
            data: [
                6,4,7,5,9,1,2
            ],
        }]
    },
      options: {
        responsive: true,
        title: {
            display: true,
            text: 'Chart.js Line Chart'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                }
            }]
        }
    }
  }
    );

    chart.update({ duration: 500, lazy: false, easing: 'linear' });
  }

  componentDidRender() {
    this.drawChart();
  }

  render(words) {
    return (
      <div >{words}
      <canvas
        ref={el => (this.myCanvas = el)}
        height="200" 
        width="200" id="myChart">


        </canvas>
      </div>
      
    );
  }
}
