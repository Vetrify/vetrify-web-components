import { Component, Host, Prop, h } from '@stencil/core';

/**
 * @since 2.0
 * @status experimental
 */

@Component({
  tag: 'v-theme',
  styleUrl: 'theme.scss',
  shadow: true,
})
export class Theme {
  /**
   * The name of the theme to use. The user is responsible for including the associated stylesheet(s). Supportive themes
   * must adhere to theme guidelines by exposing a class that follows the `v-theme-{name}` convention.
   */
  @Prop() name = '';

  render() {
    return (
      <Host class={`v-theme-${this.name}`}>
        <slot />
      </Host>
    );
  }
}
