import { Component, Prop, h } from '@stencil/core';

/**
 * @since 2.0
 * @status stable
 *
 * @slot - A label to show inside the indicator.
 *
 * @part base - The component's base wrapper.
 * @part indicator - The progress bar indicator.
 * @part label - The progress bar label.
 */

@Component({
  tag: 'v-progress-info',
  styleUrl: 'progress-info.scss',
  shadow: true,
})
export class ProgressInfo {
  /** The progress bar's percentage, 0 to 100. */
  @Prop() percentage = 0;

  /** When true, percentage is ignored, the label is hidden, and the progress bar is drawn in an indeterminate state. */
  @Prop() label = "";
  @Prop() color = "#4ea24e";
  render() {
    return (
      <div>
        <div class="progress-info">
          <p>{this.percentage} %</p>
          <p>{this.label} </p>
        </div>
        <v-progress-bar percentage={this.percentage}   style={{"--height": "5px"}} color={this.color}></v-progress-bar>
      </div>
    );
  }
}
