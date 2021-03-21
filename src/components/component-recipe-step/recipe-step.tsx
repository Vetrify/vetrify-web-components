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
  tag: 'v-recipe-step',
  styleUrl:'recipe-step.scss',
  shadow: true

})
export class RecipeStep {
  @Prop() verb:string;
  @Prop() subject: string;

  render() {
    return (
      <p>
        {this.verb} {this.subject ? <span>the</span> :  null} {this.subject}
      </p>
    );
  }
}
