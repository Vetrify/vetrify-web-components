import { Component, Element, Event, EventEmitter, Method, State, h } from '@stencil/core';
import { requestLogo } from './request';

const parser = new DOMParser();

/**
 * @since n/a
 * @status wip
 *
 * @part base - The component's base wrapper.
 */

@Component({
  tag: 'v-logo',
  styleUrl: 'logo.scss',
  shadow: true
})
export class Logo {
  @Element() host: HTMLVLogoElement;

  @State() svg: string;

  /** Emitted when the icon has loaded. */
  @Event({ eventName: 'v-load' }) vLoad: EventEmitter;

  /** Emitted when the icon failed to load. */
  @Event({ eventName: 'v-error' }) vError: EventEmitter<{ status?: number }>;

  handleChange() {
    this.setLogo();
  }

  componentDidLoad() {
    this.setLogo();
  }

  /** @internal Fetches the logo and redraws it.  */
  @Method()
  async redraw() {
    this.setLogo();
  }

  async setLogo() {
    
    let url = "./vetrify-web-components/logos/vetrify.svg"; // this.src;

    if (url) {
      try {
        const file = await requestLogo(url);
        if (file.ok) {

          const doc = parser.parseFromString(file.svg, 'text/html');
          const svg = doc.body.querySelector('svg');

          if (svg) {
            this.svg = svg.outerHTML;
            this.vLoad.emit();
          } else {
            this.svg = '';
            this.vError.emit({ status: file.status });
          }
        } else {
          this.vError.emit({ status: file.status });
        }
      } catch {
        this.vError.emit();
      }
    } else if (this.svg) {
      // If we can't resolve a URL and an logo was previously set, remove it
      this.svg = null;
    }
  }

  render() {
    return <div part="base"  role="img" innerHTML={this.svg} />;
  }
}
