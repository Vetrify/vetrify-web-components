import { Component, Prop, h } from '@stencil/core';
import Checked  from '../../images/check.svg'
import Unchecked  from '../../images/uncheck.svg'
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
  tag: 'v-foundation',
  styleUrl:'foundation.scss',
  shadow: true

})
export class Foundation { // TODO: BUILD 
  @Prop() status:'In Progress' | 'Approved' | 'Verified' | 'Rejected';
  @Prop() heading: string;
  @Prop() checked: boolean;
  @Prop() verb: string;
  @Prop() subject: string;
  @Prop() subheading: string;

  render() {
    return (
      <div class="transformation">
          <div class="transformation">
          <v-avatar
            image={this.checked ? Checked: Unchecked}
            alt="Gray tabby kitten looking down"
            shape="rounded"
          ></v-avatar>
          <div class="detail">
          <v-recipe-step verb={this.verb} subject={this.subject} />
          <v-link-list heading="Personas">
              <a href="#">Suleman</a>
          </v-link-list>
          </div>

        </div>
        <div class="transformation">
          <v-info-brief heading={this.heading} subheading={this.subheading}></v-info-brief>
          <v-badge type={this.status}>{this.status}</v-badge>
        </div>
      </div>
    );
  }
}
