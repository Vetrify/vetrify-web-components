# 0000. Charting Library
 
Date: 2021-03-16
	
 
## Status
 
Completed
 
## Context

Charting library to be used for web components 
 
## Decision
 
[ChartJs](https://www.chartjs.org/) will be used for basic charting.

* Very lightweight compared to the others
* Typescript is used in the core lib (for tests) and was easy to figure out  
* [Extensions available](https://github.com/chartjs/awesome)
  * [Regression](https://github.com/pomgui/chartjs-plugin-regression)
  * [Word Cloud](https://github.com/sgratzl/chartjs-chart-wordcloud)
  * [Crosshair](https://github.com/abelheinsbroek/chartjs-plugin-crosshair)
  * [Data Labels](https://github.com/chartjs/chartjs-plugin-datalabels)
  * [Matrix](https://github.com/kurkle/chartjs-chart-matrix)


### Other options reviewed

* [ApexCharts](https://apexcharts.com/) heavy and commercial license is expensive
* [AmCharts](https://preview.keenthemes.com/metronic/demo13/features/charts/amcharts/charts.html) is heavy and won't polyfill for some xslx functionality... this was already tried, and I had problems getting it to build in CI/CD
* [Flot Charts](https://www.flotcharts.org/) didn't seem feature-rich enough for the app's needs
* [Vis.js 2d](https://visjs.org/) looked interesting, but didn't seem to have quite enough features `this can be revisited`
* [D3](https://d3js.org/) is powerful, but for standard visualizations, it would take too much work - this may be something to revisit for other interactions than charts
* [Vega](https://vega.github.io/vega/examples/) and [Vega Lite](https://vega.github.io/vega-lite-v2/) both looked interesting, but the packages were very large... this may be something we want to revisit
* [Google Charts](https://developers.google.com/chart) seemed like it could have potential, but the Typescript reference was hard to figure out... there is a formal web component library available that could be consumed
* [Echarts](https://echarts.apache.org/examples/en/index.html) seemed like a good possibility but was heavier
  
## Consequences
 
Keeping the package size small for the functionality provided is important
