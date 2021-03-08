import { Component, Prop, h } from '@stencil/core';

/**
 * @since 2.0
 * @status stable
 *
 * @slot icon - The default icon to use when no image or initials are present.
 *
 * @part base - The component's base wrapper.
 * @part icon - The container that wraps the avatar icon.
 * @part initials - The container that wraps the avatar initials.
 * @part image - The avatar image.
 */
@Component({
  tag: 'v-widget',
  styleUrl:'widget.scss',
  shadow: true

})
export class PersonaBrief {
  @Prop() subtitle:string;
  @Prop() title: string;

  render() {
    return (
      <div>
        <h3>{this.title}</h3>
        <p class="gray">{this.subtitle}</p>
        <slot/>
      </div>
    );
  }
}
