import { h, Component, Prop, Element, Watch, Event } from '@stencil/core';
import EventEmitter from 'eventemitter3';
import manager from '../../utils/editor-manager';
//import InlineEditor from '@ckeditor/ckeditor5-build-inline';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

//manager.register('inline', InlineEditor); // NOTE: registering multiple editors breaks the component here
manager.register('classic', ClassicEditor);

@Component({
  tag: 'v-editor',
  shadow: false
})
export class VCkeditor {
  editorBuild: any = null;
  realConfig: any = {};
  realEditor: any = null;
  currentContent: string = '';

  @Element() el: HTMLElement;

  @Prop({ mutable: true }) config: string = '';
  @Prop({ mutable: true }) content: string = '';
  @Prop({ mutable: true }) editor: string = '';
  @Prop({ mutable: true }) targetId: string = '';

  @Event({
    eventName: 'ckeditorchange',
    composed: true,
    cancelable: true,
    bubbles: true
  }) ckeditorchange: EventEmitter;

  @Watch('content')
  contentHandler(newValue: string, _oldValue: string): void {
    this.content = newValue;
    if (this.content != this.currentContent) {
      if (this.realEditor !== null) {
        this.realEditor.setData(this.content);
      }
    }
  }

  @Watch('config')
  configHandler(newValue: string, _oldValue: string): void {
    this.config = newValue;
    this.unloadComponent();
    this.loadComponent();
  }

  @Watch('editor')
  editorHandler(newValue: string, _oldValue: string): void {
    this.editor = newValue;
    this.unloadComponent();
    this.loadComponent();
  }

  @Watch('targetId')
  targetIdHandler(newValue: string, _oldValue: string): void {
    this.targetId = newValue;
    this.unloadComponent();
    this.loadComponent();
  }

  componentDidLoad() {
    this.loadComponent();
  }

  disconnectedCallback() {
    this.unloadComponent();
  }

  loadComponent(): void {
    if (this.config && this.config != '') {
      this.realConfig = JSON.parse(this.config);
    } else {
      this.realConfig = {};
    }

    this.editorBuild = manager.editor(this.editor);

    if (!this.editorBuild) {
      console.error(`Editor named ${this.editor} not found. Registered editors are: ${manager.registeredEditors().join(", ")}`);
      return;
    }

    var target = this.el;
    if (this.targetId && this.targetId != '') {
      target = document.getElementById(this.targetId);
    }

    var base = this;
    this.editorBuild
      .create(target, this.realConfig)
      .then(editor => {
        base.realEditor = editor;
        base.realEditor.model.document.on('change:data', function (_e: any) {
          var content = base.realEditor.getData();
          base.currentContent = content;
          base.ckeditorchange.emit(content);
        });
      })
      .catch(error => {
        console.error(error.stack);
      });
  }

  unloadComponent(): void {
    var base = this;
    base.realEditor.destroy()
      .then(function () {
        base.realEditor = null;
      });
  }

  render() {
    return <div></div>;
  }
}
