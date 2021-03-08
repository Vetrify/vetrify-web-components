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
  tag: 'v-info-brief',
  styleUrl:'info-brief.scss',
  shadow: true

})
export class InfoBrief {
  @Prop() subtitle:string;
  @Prop() title: string;

  render() {
    return (
      <div>
        <p>{this.title}</p>
        <p class="gray">{this.subtitle}</p>
      </div>
    );
  }
}
