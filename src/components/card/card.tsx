import { Component, Element, State, h, Prop } from '@stencil/core';
//import { runInThisContext } from 'node:vm';
import { hasSlot } from '../../utils/slot';

/**
 * @since 2.0
 * @status stable
 *
 * @slot - The card's body.
 * @slot header - The card's header.
 * @slot footer - The card's footer.
 *
 * @part base - The component's base wrapper.
 * @part header - The card's header, if present.
 * @part body - The card's body.
 * @part footer - The card's footer, if present.
 */

@Component({
  tag: 'v-card',
  styleUrl: 'card.scss',
  shadow: false,
})
export class Card {
  @Element() host: HTMLVCardElement;

  @State() hasFooter = false;
  @State() hasHeader = false;

  @Prop({ mutable: true }) showHeader:boolean = true;
  @Prop({ mutable: true }) showFooter:boolean = true;
  @Prop() bordered:boolean = true;
  @Prop() semiBordered:boolean = false;
  @Prop({ mutable: true }) title: string = '';
  @Prop({ mutable: true }) subtitle: string = '';

  connectedCallback() {
    this.handleSlotChange = this.handleSlotChange.bind(this);
  }

  componentWillLoad() {
    this.handleSlotChange();
  }

  handleSlotChange() {
    this.hasFooter = hasSlot(this.host, 'footer');
    this.hasHeader = hasSlot(this.host, 'header');
  }

  render() {
    return (
      
      <div class={{
        'card': true, 
        'card-custom': true, 
        'card-border': this.bordered, 
        'card-fit': this.semiBordered,
        'card--show-header': this.showHeader,
        'card--show-footer': this.showFooter}}>
        <div class="card-header">
          <slot name="header" onSlotchange={this.handleSlotChange} />
          {this.hasHeader || (           
              <div class="card-title">
                <h3 class="card-label">${this.title} 
                <small>${this.subtitle}</small></h3>
              </div>         
          )}
        </div>
        <div class="card-body">
          <slot />
        </div>
        <div class="card-footer">
          <slot name="footer" onSlotchange={this.handleSlotChange} />
        </div>
      </div>
    );
  }
}
