import { Component, Prop, Method, State, h } from '@stencil/core';
// import { format } from '../../utils/utils';

@Component({
  tag: 'v-matrix-view',
  styleUrl: 'matrix-view.scss',
  shadow: true
})

export class Matrix {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private count = 1;

  @State() elements: JSX.Element[] = [
    (<rect transform="rotate(0)" x="100" y="100" width="1" height="198" stroke="none" stroke-width="0" fill-opacity="1" stroke-opacity="1" stroke-dasharray="0" fill="#333"></rect>),
    (<circle cx="100px" cy="100px" r="10px" class="cell"></circle>),
    (<text x="10px" y="10px">something</text>),
    (<g x="100" y="100" height="10" width="10"
    id="dial1">
   <circle
      r="25.702381"
      cy="142.11905"
      cx="88.446426"
      class="dial-body"/>
   <rect 
      transform="scale(-1,1)"
      y="122.46428"
      x="-88.674553"
      height="14.552078"
      width="0.45625877"
      class="dial-knob" />
 </g>)
    
  ];

  // private getText(): string {
  //   return format(this.first, this.middle, this.last);
  // }

  @Method()
  async addPath() {
    this.elements = [ ...this.elements, (<rect x={this.count*20} y={this.count*20} height="10px" width="10px"></rect>)]
    this.count++;
  }

  @Method()
  async addText() {
    this.elements = [ ...this.elements, (<text x="10" y="10">I'm going to break things</text>)]
  }

  render() {
    return (
      <svg width="500px" height="500px" viewBox="0 0 1000px 1000px">
        {this.elements.map(el => 
          el
        )}
      </svg>
    );
  }
}