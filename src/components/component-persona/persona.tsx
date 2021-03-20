import { Component, Prop, h } from '@stencil/core';
import Boy from '../../images/boy.svg'
import Girl from '../../images/girl.svg'
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
console.log(Boy);
@Component({
  tag: 'v-persona',
  styleUrl:'persona.scss',
  shadow: true

})
export class Persona {
  @Prop() name:string;
  @Prop() gender:'female' | 'male';
  @Prop() heading: string;
  @Prop() transformation: string;

  render() {
    return (
      <div class="persona">
        <div class="persona">
          <v-avatar
            image={this.gender === "male" ? Boy: Girl}
            alt="Gray tabby kitten looking down"
            shape="rounded"
          ></v-avatar>
          <v-persona-brief name={this.name} heading={this.heading}/>

        </div>
        <v-info-brief heading={"Transformation"} subheading={this.transformation}></v-info-brief>
      </div>
    );
  }
}
