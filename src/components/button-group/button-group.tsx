import { Component, Prop, h } from '@stencil/core';

/**
 * @since 2.0
 * @status stable
 *
 * @slot - One or more `<v-button>` elements to display in the button group.
 *
 * @part base - The component's base wrapper.
 */

@Component({
  tag: 'v-button-group',
  styleUrl: 'button-group.scss',
  shadow: true,
})
export class ButtonGroup {
  buttonGroup: HTMLElement;

  /** A label to use for the button group's `aria-label` attribute. */
  @Prop() label = '';

  connectedCallback() {
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  componentDidLoad() {
    this.buttonGroup.addEventListener('v-focus', this.handleFocus);
    this.buttonGroup.addEventListener('v-blur', this.handleBlur);
  }

  disconnectedCallback() {
    this.buttonGroup.removeEventListener('v-focus', this.handleFocus);
    this.buttonGroup.removeEventListener('v-blur', this.handleBlur);
  }

  handleFocus(event: CustomEvent) {
    const button = event.target as HTMLElement;
    button.classList.add('v-focus');
  }

  handleBlur(event: CustomEvent) {
    const button = event.target as HTMLElement;
    button.classList.remove('v-focus');
  }

  render() {
    return (
      <div ref={el => (this.buttonGroup = el)} part="base" class="button-group" aria-label={this.label}>
        <slot />
      </div>
    );
  }
}
