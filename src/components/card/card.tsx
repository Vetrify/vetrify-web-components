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

  @State() hasFooter = true;
  @State() hasHeader = true;

  @Prop() showHeader = true;
  @Prop() showFooter = true;
  @Prop() bordered = true;
  @Prop() semiBordered = false;
  @Prop() title = '';
  @Prop() subtitle = '';

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
      <div class={{'card': true, 'card-custom': true, 'card-border': this.bordered, 'card-fit': this.semiBordered}}>      
        {this.showHeader && (<div class="card-header"><slot name="header" onSlotchange={this.handleSlotChange} /></div>)}
        <div class="card-body"><slot /></div>
        {this.showFooter && (<div class="card-footer"><slot name="footer" onSlotchange={this.handleSlotChange} /></div>)}
      </div>
    );
  }
}
