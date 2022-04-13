import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('test-component')
export class TestComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = 'World'

  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <slot></slot>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'test-consumer': TestComponent
  }
}
