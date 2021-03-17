# 0000. Charting Library
 
Date: 2021-03-16
	
 
## Status
 
Completed
 
## Context

Charting library to be used for web components 
 
## Decision
 
[Google Charts](https://developers.google.com/chart) will be used for basic charting.

* [Google Charts NPM](https://www.npmjs.com/package/google-charts)
* [Google Charts Types NPM] 

> `npm i  --save-dev @google-web-components/google-chart`

> `npm install --save-dev @types/google.visualization`  

### Other options reviewed

* [ApexCharts](https://apexcharts.com/) heavy and commercial license is expensive
* [AmCharts](https://preview.keenthemes.com/metronic/demo13/features/charts/amcharts/charts.html) is heavy and won't polyfill for some xslx functionality... this was already tried and I had problems getting it to build in CI/CD
* [Flot Charts](https://www.flotcharts.org/) didn't seem feature-rich enough for the app's needs
* [Vis.js 2d](https://visjs.org/) looked interesting, but didn't seem to have quite enough features `this can be revisited`
* [D3](https://d3js.org/) is powerful but for standard visualizations, it would take too much work - this may be something to revisit for other interactions than charts
* [Vega](https://vega.github.io/vega/examples/) and [Vega Lite](https://vega.github.io/vega-lite-v2/) both looked interesting, but the packages were very large... this may be something we want to revisit
  
## Consequences
 
Keeping the package size small for the functionaliy provided is important
