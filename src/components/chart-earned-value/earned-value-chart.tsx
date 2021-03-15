import { Component, Element, /*State,*/ h, Prop } from '@stencil/core';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);



//import { runInThisContext } from 'node:vm';
//import { hasSlot } from '../../utils/slot';

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
export class Card {
  @Element() host: HTMLVEarnedValueChartElement;

  /** The words in the word cloud. */
  @Prop() words: string[] = [''];

  // /** The name of a registered custom icon library. */
  // @Prop() iconLibrary = 'default';

  // @Prop({ mutable: true }) heading: string = '';
  // @Prop({ mutable: true }) subheading: string = '';

  componentDidRender() {
    let chart = am4core.create("evchartdiv", am4charts.XYChart);
    chart.paddingRight = 20;

    let data = [];
    let visits = 10;
    for (let i = 1; i < 366; i++) {
        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
    }

    chart.data = data;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";

    series.tooltipText = "{valueY.value}";
    chart.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;
  }

  // componentWillLoad() {
  //   this.handleSlotChange();
  // }

  // handleSlotChange() {
  //   this.hasFooter = hasSlot(this.host, 'footer');
  //   this.hasHeader = hasSlot(this.host, 'header');
  // }

  render(words) {
    return (
      <div class="earned-value-chart" id="evchartdiv" >{words}</div>
      
    );
  }
}
