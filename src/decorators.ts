export const customElement = (tagName: string) => (
  constructor: any
) => {
  if (!customElements.get(tagName)) {
    customElements.define(tagName, constructor);
  }
};
