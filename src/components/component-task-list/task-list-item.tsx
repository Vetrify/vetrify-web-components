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
  tag: 'v-task-list-item',
  styleUrl: 'task-list-item.scss',
  shadow: false,
})
export class Card {
  @Element() host: HTMLVTaskListItemElement;

  @State() hasFooter = false;
  @State() hasHeader = false;

  @Prop({ mutable: true }) showHeader:boolean = true;
  @Prop({ mutable: true }) showFooter:boolean = true;
  @Prop() bordered:boolean = true;
  @Prop() semiBordered:boolean = false;

  /** The name of the icon to draw. */
  @Prop() iconName: string = '';

  /** The name of a registered custom icon library. */
  @Prop() iconLibrary = 'default';

  @Prop({ mutable: true }) heading: string = '';
  @Prop({ mutable: true }) subheading: string = '';

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
      <div class="d-flex align-items-start list-item card-spacer-x py-3" data-inbox="message">
        {/* <!--begin::Toolbar--> */}
        <div class="d-flex align-items-center">
          {/* <!--begin::Actions--> */}
          <div class="d-flex align-items-center mr-3" data-inbox="actions">
            <label class="checkbox checkbox-inline checkbox-primary flex-shrink-0 mr-3">
              <input type="checkbox"></input>
              <span></span>
            </label>
            <a href="#" class="btn btn-icon btn-xs btn-hover-text-warning active" data-toggle="tooltip" data-placement="right" title="" data-original-title="Star">
              <i class="flaticon-star text-muted"></i>
            </a>
            <a href="#" class="btn btn-icon btn-xs text-hover-warning" data-toggle="tooltip" data-placement="right" title="" data-original-title="Mark as important">
              <i class="flaticon-add-label-button text-muted"></i>
            </a>
          </div>
          {/* <!--end::Actions-->
          <!--begin::Author--> */}
          <div class="d-flex align-items-center flex-wrap w-xxl-200px mr-3" data-toggle="view">
            <span class="symbol symbol-35 mr-3">
              <span class="symbol-label" ><style>background-image: url('/metronic/theme/html/demo12/dist/assets/media/users/100_13.jpg')</style></span>
            </span>
            <a href="#" class="font-weight-bold text-dark-75 text-hover-primary">Sean Paul</a>
          </div>
          {/* <!--end::Author--> */}
        </div>
        {/* <!--end::Toolbar-->
        <!--begin::Info--> */}
        <div class="flex-grow-1 mt-2 mr-2" data-toggle="view">
          <div>
            <span class="font-weight-bolder font-size-lg mr-2">Digital PPV Customer Confirmation -</span>
            <span class="text-muted">Thank you for ordering UFC 240 Holloway vs Edgar Alternate camera angles...</span>
          </div>
          <div class="mt-2">
            <span class="label label-light-primary font-weight-bold label-inline mr-1">inbox</span>
            <span class="label label-light-danger font-weight-bold label-inline">task</span>
          </div>
        </div>
        {/* <!--end::Info-->
        <!--begin::Datetime--> */}
        <div class="mt-2 mr-3 font-weight-bolder w-50px text-right" data-toggle="view">8:30 PM</div>
        {/* <!--end::Datetime--> */}
      </div>



      // <div class={{
      //   'card-border':this.bordered
      // }}>
      // <div class={{
      //   'card': true,
      //   'card-custom': true,
      //   'card-bordered': this.bordered ,
      //   'card-fit': this.semiBordered,
      //   'card--show-header': this.showHeader,
      //   'card--show-footer': this.showFooter}}>
      //   <div class="card-header">
      //     <slot name="header" onSlotchange={this.handleSlotChange} />
      //     {!this.hasHeader && this.heading && (
      //         <div class="card-heading">
      //           {this.iconName && (
      //             <div class="card-icon">
      //               <v-icon name={this.iconName} library={this.iconLibrary} ></v-icon>
      //             </div>
      //           )}
      //           <h3 class="card-label">{this.heading}&nbsp;
      //           <small>{this.subheading}</small></h3>
      //         </div>
      //     )}
      //     <slot name="card-toolbar"/>
      //   </div>
      //   <div class="card-body">
      //     <slot />
      //   </div>
      //   <div class="card-footer">
      //     <slot name="footer" onSlotchange={this.handleSlotChange} />
      //   </div>
      // </div>
      // </div>
    );
  }
}
