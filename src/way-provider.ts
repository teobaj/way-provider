import { html, LitElement } from 'lit'
import {  property } from 'lit/decorators.js'
import { customElement } from './decorators';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('way-provider')
export class WayProvider extends LitElement {
  @property({type: Boolean})
  all:boolean = false;

  @property({type: Object})
  context: object = {}

  isCustomElement(elTagName: string){
    return !!customElements.get(elTagName);
  }

  getAllWebcomponents(wcList: Element[]): Element[]{
    let wcs: Element[] = []
    wcList.forEach(wc => {
      wcs = [...wcs, ...Array.from(wc.children).filter(el => {
        return this.isCustomElement(el.tagName.toLowerCase())
      })]
    })
    if(wcs.length === 0) return [] ;
    return [...wcs, ...this.getAllWebcomponents(wcs)];
  }

  applyProps(elements: Element[], context: object){
    elements.forEach((el) => {
      Object.entries(context).forEach(([key, value]) => el.setAttribute(key, value as any))
    })
  }

  connectedCallback(): void { 
    super.connectedCallback();
    window["__wayProvider"] = window["__wayProvider"] || {};
    window["__wayProvider"].context = this.context;

    if(this.all){
      let webcomponents = [...Array.from(this.children).filter(el => this.isCustomElement(el.tagName.toLowerCase())), ...this.getAllWebcomponents(Array.from(this.children))]
      this.applyProps(webcomponents, this.context);
    }
  }
  
    
  render() {
    return html`
      <slot></slot>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'way-provider': WayProvider
  }
}


// let widgets = Array.from(document.getElementsByTagName('*')).filter(el => el.shadowRoot)
//      subscribeKeyboard([...topLevelInputs, ...getAllInputs(widgets)]); 
// function getAllInputs(widgetNodeList) {
//       let inputs = [];
//       let widgets = [];
//       widgetNodeList.forEach((widget) => {
//         inputs = [...inputs, ...Array.from(widget.shadowRoot.querySelectorAll("input"))]
//         widgets = [...widgets, ...Array.from(widget.shadowRoot.querySelectorAll("*")).filter(el => el.shadowRoot)]
//       })
//       if(widgets.length === 0) return inputs;
//       return [...inputs, ...getAllInputs(widgets)];
//     }