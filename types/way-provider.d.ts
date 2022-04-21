import { LitElement } from 'lit';
/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class WayProvider extends LitElement {
    all: boolean;
    context: object;
    private observer;
    isCustomElement(elTagName: string): boolean;
    getAllWebcomponents(wcList: Element[]): Element[];
    applyProps(elements: Element[], context: object): void;
    connectedCallback(): void;
    mutationCallback(list: any, observer: MutationObserver): void;
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'way-provider': WayProvider;
    }
}
